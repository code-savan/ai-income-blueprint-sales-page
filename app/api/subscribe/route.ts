import { NextRequest, NextResponse } from 'next/server'
import { addBrevoContact } from '@/lib/brevo'
import { sendLeadMagnetEmail } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, list } = await req.json()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: 'Valid email required' }, { status: 400 })
    }
    const cleanEmail = email.trim().toLowerCase()
    const cleanName = (firstName || '').trim()
    const listId = process.env.BREVO_LEAD_MAGNET_LIST_ID
    if (!listId || Number.isNaN(parseInt(listId, 10))) {
      console.error('BREVO_LEAD_MAGNET_LIST_ID missing or invalid')
      return NextResponse.json({ success: false, error: 'Free vault delivery is temporarily unavailable. Please try again shortly.' }, { status: 503 })
    }

    const delivery = await Promise.allSettled([
      addBrevoContact({ email: cleanEmail, firstName: cleanName, listIds: [parseInt(listId, 10)] }),
      sendLeadMagnetEmail(cleanEmail, cleanName),
    ])
    const failures = delivery.filter((result) => result.status === 'rejected')
    if (failures.length) {
      failures.forEach((result) => {
        if (result.status === 'rejected') console.error('Lead delivery error:', result.reason)
      })
      return NextResponse.json({ success: false, error: 'We could not deliver the free vault. Please try again shortly.' }, { status: 502 })
    }
    try {
      const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: cleanEmail, firstName: cleanName, timestamp: new Date().toISOString(), source: 'lead-magnet' }),
        })
      }
    } catch (e: any) {
      console.error('Google Sheet webhook error:', e.message)
    }
    return NextResponse.json({ success: true })
  } catch (e: any) {
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 })
  }
}
