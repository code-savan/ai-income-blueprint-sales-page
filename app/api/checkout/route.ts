import { NextRequest, NextResponse } from 'next/server'
import { getWhopClient, WHOP_COMPANY_ID, WHOP_PLAN_ID } from '@/lib/whop'

export async function POST(req: NextRequest) {
  try {
    const { name, email, source } = await req.json()
    if (!name || !email) return NextResponse.json({ error: 'Name and email required' }, { status: 400 })
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: 'Valid email required' }, { status: 400 })

    const whop = getWhopClient()
    if (!whop) return NextResponse.json({ error: 'Payment system not configured' }, { status: 500 })

    const orderId = 'ZTPW-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6).toUpperCase()
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zerotopaidwithai.com'
    const cleanEmail = email.trim().toLowerCase()
    const cleanName = name.trim()

    try {
      const result = await whop.checkoutConfigurations.create({
        account_id: WHOP_COMPANY_ID,
        plan_id: WHOP_PLAN_ID,
        metadata: {
          order_id: orderId,
          customer_name: cleanName,
          customer_email: cleanEmail,
          source: source || 'checkout',
        },
        redirect_url: `${siteUrl.replace(/\/$/, '')}/thank-you?type=purchase&order_id=${orderId}`,
      })
      const data = (result as any).data ?? result
      return NextResponse.json({
        sessionId: data.id,
        planId: data.plan?.id || WHOP_PLAN_ID,
        orderId,
        checkoutUrl: `https://whop.com/checkout/${data.plan?.id || WHOP_PLAN_ID}?session=${data.id}`,
      })
    } catch (e: any) {
      const msg = e?.message || JSON.stringify(e?.body || e)
      if (msg.includes('checkout_configuration') || msg.includes('forbidden') || e?.statusCode === 403) {
        console.warn('[whop checkout] missing scope, falling back to planId embed:', msg)
        return NextResponse.json({
          planId: WHOP_PLAN_ID,
          sessionId: null,
          orderId,
          checkoutUrl: `https://whop.com/checkout/${WHOP_PLAN_ID}`,
          fallback: true,
        })
      }
      throw e
    }
  } catch (e: any) {
    console.error('[whop checkout] error', e?.message || e, e?.body || '')
    return NextResponse.json({ error: e?.message || 'Checkout failed' }, { status: 500 })
  }
}
