import { NextRequest, NextResponse } from 'next/server'

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || ''
const PRICE_AMOUNT = Number(process.env.NEXT_PUBLIC_PRICE_AMOUNT || 97)
const CURRENCY = (process.env.NEXT_PUBLIC_CURRENCY || 'USD').toUpperCase()
const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || ''
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || `https://${process.env.NEXT_PUBLIC_DOMAIN || 'zerotopaidwithai.com'}`

const VALID_CHANNELS = ['card', 'bank', 'bank_transfer', 'ussd', 'qr', 'mobile_money', 'apple_pay', 'eft', 'google_pay'] as const

function getChannels(): string[] {
  const raw = process.env.PAYSTACK_CHANNELS
  const list = raw ? raw.split(',').map(c => c.trim().toLowerCase()).filter(Boolean) : ['card', 'bank_transfer']
  const valid = list.filter(c => (VALID_CHANNELS as readonly string[]).includes(c))
  return valid.length ? valid : ['card']
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, source } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email required' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }
    const isMock = !PAYSTACK_SECRET_KEY || PAYSTACK_SECRET_KEY.includes('xxxxx')
    const ref = 'ZTPW-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8).toUpperCase()

    if (isMock) {
      if (APPS_SCRIPT_URL) {
        fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: name.trim(), email: email.trim().toLowerCase(), source, reference: ref }),
        }).catch(() => {})
      }
      return NextResponse.json({
        authorization_url: `${SITE_URL.replace(/\/$/, '')}/thank-you?type=purchase&reference=${ref}&mock=1`,
        reference: ref,
        mock: true,
      })
    }
    const amount = Math.round(PRICE_AMOUNT * 100)

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount configured' }, { status: 500 })
    }

    const body: Record<string, unknown> = {
      email: email.trim().toLowerCase(),
      amount,
      currency: CURRENCY,
      reference: ref,
      callback_url: `${SITE_URL.replace(/\/$/, '')}/thank-you?type=purchase&reference=${ref}`,
      metadata: {
        name: name.trim(),
        source: source || 'checkout',
        custom_fields: [{ display_name: 'Name', variable_name: 'name', value: name.trim() }],
      },
      channels: getChannels(),
    }

    const paystackRes = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const paystackData = await paystackRes.json()

    if (!paystackRes.ok || !paystackData.status) {
      const msg = paystackData.message || `Paystack error (${paystackRes.status})`
      console.error('[paystack] initialize failed:', msg, paystackData)
      return NextResponse.json({ error: msg }, { status: 500 })
    }

    if (APPS_SCRIPT_URL) {
      fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim().toLowerCase(), source, reference: ref }),
      }).catch(() => {})
    }

    return NextResponse.json({
      authorization_url: paystackData.data.authorization_url,
      access_code: paystackData.data.access_code,
      reference: ref,
    })
  } catch (err) {
    console.error('[initiate-payment] error', err)
    return NextResponse.json({ error: 'Internal error — please try again' }, { status: 500 })
  }
}
