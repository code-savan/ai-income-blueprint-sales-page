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
    if (!listId) {
      console.error('BREVO_LEAD_MAGNET_LIST_ID missing')
      return NextResponse.json({ success: true })
    }
    try {
      await addBrevoContact({ email: cleanEmail, firstName: cleanName, listIds: [parseInt(listId, 10)] })
    } catch (e: any) {
      console.error('Brevo subscribe error:', e.message)
    }
    try { await sendLeadMagnetEmail(cleanEmail, cleanName) } catch {}
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
