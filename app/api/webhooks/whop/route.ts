import { NextRequest, NextResponse } from 'next/server'
import { addBrevoContact, tagBrevoBuyer, removeBrevoBuyer } from '@/lib/brevo'
import { sendPurchaseEmail, sendOwnerAlert } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const raw = await req.text()
    const headers = Object.fromEntries(req.headers.entries())

    const webhookSecret = (process.env.WHOP_WEBHOOK_SECRET || '').trim()
    if (webhookSecret) {
      const wid = headers['webhook-id'] || ''
      const ts = headers['webhook-timestamp'] || ''
      const sigHeader = headers['webhook-signature'] || ''
      const svId = headers['svix-id'] || ''
      const svTs = headers['svix-timestamp'] || ''
      const svSig = headers['svix-signature'] || ''
      const { createHmac, timingSafeEqual } = await import('crypto')
      const strip = (s: string) => s.replace(/^v1,/, '')
      const sigs = [...sigHeader.split(' '), ...svSig.split(' ')].map(strip).filter(Boolean)
      const key = Buffer.from(webhookSecret, 'utf8')
      const content = `${wid || svId}.${ts || svTs}.${raw}`
      const expected = {
        hex: createHmac('sha256', key).update(content, 'utf8').digest('hex'),
        b64: createHmac('sha256', key).update(content, 'utf8').digest('base64'),
      }
      const eq = (x: string, y: string) => {
        const a = Buffer.from(x, 'utf8')
        const b = Buffer.from(y, 'utf8')
        return a.length === b.length && timingSafeEqual(a, b)
      }
      const ok = sigs.some((s: string) => eq(s, expected.hex) || eq(s, expected.b64))
      if (!ok) {
        console.warn('[whop webhook] invalid signature')
        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
      }
    } else {
      console.warn('[whop webhook] WHOP_WEBHOOK_SECRET not set, skipping signature check')
    }

    let payload: any
    try { payload = JSON.parse(raw) } catch { payload = {} }

    const eventType = payload.type || payload.event || headers['x-whop-event'] || ''
    const data = payload.data || payload

    const metadata = data.metadata || {}
    const member = data.member || data.user || {}
    let email: string | null = metadata.customer_email || member.email || data.email || payload.email || null
    let name: string | null = metadata.customer_name || member.name || data.name || null

    if (!email && member.id) {
      try {
        const { getWhopClient } = await import('@/lib/whop')
        const whop = getWhopClient()
        if (whop && member.id) {
          const m = await (whop as any).memberships?.retrieve?.({ membership_id: member.id })
          email = (m as any)?.data?.user?.email || (m as any)?.email || email
        }
      } catch {}
    }

    if (eventType === 'payment.succeeded' || eventType === 'membership.activated' || eventType === 'membership.created') {
      if (email) {
        const cleanEmail = String(email).trim().toLowerCase()
        const cleanName = name ? String(name).trim() : undefined
        try {
          const buyersListId = process.env.BREVO_BUYERS_LIST_ID
          if (buyersListId) {
            await addBrevoContact({ email: cleanEmail, firstName: cleanName, listIds: [parseInt(buyersListId, 10)] }).catch(()=>{})
          }
          await tagBrevoBuyer({ email: cleanEmail, amount: 97, productName: 'zerotopaidwithai Full Access' }).catch(()=>{})
        } catch (e: any) { console.error('[whop webhook] brevo error', e.message) }
        try { await sendPurchaseEmail(cleanEmail, cleanName) } catch {}
        try {
          const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL
          if (webhookUrl) {
            await fetch(webhookUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: cleanEmail, firstName: cleanName || '', timestamp: new Date().toISOString(), source: 'whop-purchase', order_id: metadata.order_id || data.id }),
            })
          }
        } catch {}
        try {
          console.warn('[whop webhook] forward debug', JSON.stringify({ hasForwardSecret: !!process.env.FORWARD_SECRET }))
          const syncRes = await fetch('https://app.zerotopaidwithai.com/api/sync-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-Forward-Secret': process.env.FORWARD_SECRET || '' },
            body: JSON.stringify({ email: cleanEmail, whop_receipt_id: data.id || metadata.order_id || null }),
          }).catch(() => null)
          console.warn('[whop webhook] blueprint sync status', syncRes ? syncRes.status : 'fetch-failed')
        } catch {}
      }
    }

    const REFUND_EVENTS = ['refund.created', 'refund.updated', 'membership.deactivated']
    if (REFUND_EVENTS.includes(eventType)) {
      let rEmail: string | null = email
      if (!rEmail) {
        const pay = (data as any).payment || {}
        rEmail = pay.email || pay?.user?.email || (data as any).user?.email || (data as any).member?.email || null
      }
      if (!rEmail) {
        const pid = (data as any).payment_id || (data as any).payment?.id
        if (pid) {
          try {
            const { getWhopClient } = await import('@/lib/whop')
            const whop = getWhopClient()
            const p = await (whop as any).payments?.retrieve?.({ payment_id: pid })
            rEmail = (p as any)?.data?.user?.email || (p as any)?.user?.email || (p as any)?.data?.email || rEmail
          } catch {}
        }
      }
      const receipt = (data as any).payment_id || (data as any).payment?.id || (data as any).id || metadata.order_id || null
      if (rEmail) {
        const clean = String(rEmail).trim().toLowerCase()
        try { await removeBrevoBuyer({ email: clean }).catch(() => {}) } catch {}
        let revokeStatus = 'skipped'
        try {
          const r = await fetch('https://app.zerotopaidwithai.com/api/revoke-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-Forward-Secret': process.env.FORWARD_SECRET || '' },
            body: JSON.stringify({ email: clean, whop_receipt_id: receipt }),
          }).catch(() => null)
          revokeStatus = r ? String(r.status) : 'fetch-failed'
        } catch {}
        console.warn('[whop webhook] refund revoked', JSON.stringify({ email: clean, receipt, revokeStatus }))
        try {
          await sendOwnerAlert(
            `Refund processed: access revoked for ${clean}`,
            `<p>Refund event <strong>${eventType}</strong> for ${clean} (${receipt || 'no receipt id'}).</p><p>Removed from Brevo Buyers. Blueprint revoke status: ${revokeStatus}.</p><p>Check Whop dashboard for details.</p>`
          )
        } catch {}
        try {
          const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL
          if (webhookUrl) {
            await fetch(webhookUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: clean, firstName: '', timestamp: new Date().toISOString(), source: 'whop-refund', order_id: receipt }),
            })
          }
        } catch {}
      } else {
        console.warn('[whop webhook] refund event without resolvable email', eventType)
      }
    }

    if (['dispute.created', 'dispute.updated'].includes(eventType)) {
      try {
        await sendOwnerAlert(
          `Dispute ${eventType === 'dispute.created' ? 'opened' : 'updated'}: ${email || 'unknown buyer'}`,
          `<p>Event <strong>${eventType}</strong> for ${email || 'unknown email'}. Access NOT auto-revoked. Respond in Whop Dispute Fighter before the deadline.</p>`
        )
      } catch {}
    }

    return NextResponse.json({ received: true, type: eventType })
  } catch (e: any) {
    console.error('[whop webhook] error', e.message)
    return NextResponse.json({ error: 'Webhook error' }, { status: 500 })
  }
}
