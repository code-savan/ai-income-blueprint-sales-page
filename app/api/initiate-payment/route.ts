import { NextRequest, NextResponse } from 'next/server'

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || ''
const PRICE_AMOUNT = Number(process.env.NEXT_PUBLIC_PRICE_AMOUNT || 97)
const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY || 'USD'
const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || ''

export async function POST(req: NextRequest) {
  try {
    const { name, email, source } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email required' }, { status: 400 })
    }

    if (!PAYSTACK_SECRET_KEY) {
      return NextResponse.json({ error: 'Payment not configured' }, { status: 500 })
    }

    const ref = 'AIB-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8).toUpperCase()

    // Initialize Paystack transaction
    const paystackRes = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount: Math.round(PRICE_AMOUNT * 100),
        currency: CURRENCY,
        reference: ref,
        metadata: {
          name,
          source,
          custom_fields: [
            { display_name: 'Name', variable_name: 'name', value: name },
          ],
        },
      }),
    })

    const paystackData = await paystackRes.json()

    if (!paystackData.status) {
      return NextResponse.json({ error: paystackData.message || 'Paystack error' }, { status: 500 })
    }

    // Save to Google Sheet via Apps Script (fire & forget - don't block checkout)
    if (APPS_SCRIPT_URL) {
      fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source, reference: ref }),
      }).catch(() => {})
    }

    return NextResponse.json({
      authorization_url: paystackData.data.authorization_url,
      reference: ref,
    })
  } catch (err) {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}