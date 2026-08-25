import { NextRequest, NextResponse } from 'next/server'
import { verifyPaystackSignature } from '@/lib/paystack'
import { tagBrevoBuyer } from '@/lib/brevo'
import { sendPurchaseEmail } from '@/lib/resend'

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const signature = req.headers.get('x-paystack-signature')
  if (!verifyPaystackSignature(rawBody, signature)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }
  let payload: any
  try { payload = JSON.parse(rawBody) } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }
  if (payload.event !== 'charge.success') {
    return NextResponse.json({ received: true })
  }
  const data = payload.data
  const email = data?.customer?.email || data?.customer_email
  const name = data?.metadata?.name || data?.customer?.first_name || ''
  const amount = data?.amount ? data.amount / 100 : 97
  if (email) {
    try { await tagBrevoBuyer({ email, amount, productName: 'zerotopaidwithai' }) } catch (e) { console.error('Brevo buyer tag failed', e) }
    try { await sendPurchaseEmail(email, name) } catch (e) { console.error('Resend purchase email failed', e) }
  }
  return NextResponse.json({ received: true })
}
