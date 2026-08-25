import { Resend } from 'resend'

export function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

export async function sendPurchaseEmail(to: string, name?: string) {
  const resend = getResend()
  if (!resend) { console.warn('[resend] no API key'); return }
  const from = process.env.RESEND_FROM_EMAIL || 'zerotopaidwithai <support@zerotopaidwithai.com>'
  const support = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@zerotopaidwithai.com'
  try {
    await resend.emails.send({
      from,
      to,
      subject: 'You Are In. Welcome to zerotopaidwithai.',
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1F1E1C;line-height:1.6">
          <h2 style="font-size:22px;margin:0 0 12px">You Are In. Welcome — ${name ? name : 'there'}!</h2>
          <p>Your payment is confirmed. Your access to <strong>zerotopaidwithai</strong> is ready.</p>
          <p><strong>What’s inside:</strong> 5-module system, 4 playbooks, 50-prompt vault, 30-day roadmap.</p>
          <a href="https://www.zerotopaidwithai.com/thank-you?type=purchase" style="display:inline-block;background:#7C3AED;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600;margin:16px 0">Access the Blueprint</a>
          <p style="font-size:13px;color:#8F8A86">If you don’t see this email, check spam. Need help? Reply to <a href="mailto:${support}">${support}</a>.</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <p style="font-size:12px;color:#8F8A86">30-Day Money-Back Guarantee — email us once and get every cent back.</p>
        </div>
      `,
    })
    await resend.emails.send({
      from,
      to: support,
      subject: `New purchase: ${to}`,
      html: `<p>New purchase from ${name || to} &lt;${to}&gt; — zerotopaidwithai $97.</p><p>Check Brevo Buyers list and Paystack dashboard.</p>`,
    })
  } catch (e) { console.error('[resend] purchase email failed', e) }
}

export async function sendLeadMagnetEmail(to: string, firstName?: string) {
  const resend = getResend()
  if (!resend) return
  const from = process.env.RESEND_FROM_EMAIL || 'zerotopaidwithai <support@zerotopaidwithai.com>'
  const pdfUrl = 'https://www.zerotopaidwithai.com/300-ai-prompts-vault.pdf'
  let attachments: any[] | undefined
  try {
    const fs = await import('fs')
    const path = await import('path')
    const pdfPath = path.join(process.cwd(), 'public', '300-ai-prompts-vault.pdf')
    if (fs.existsSync(pdfPath)) {
      const buf = fs.readFileSync(pdfPath)
      attachments = [{ filename: '300-ai-prompts-vault.pdf', content: buf }]
    }
  } catch {}
  try {
    await resend.emails.send({
      from,
      to,
      subject: 'Your 300+ UGC Prompts — Download Inside (PDF Attached)',
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1F1E1C;line-height:1.6">
          <h2>Your 300+ UGC Prompts are here${firstName ? ', ' + firstName : ''}!</h2>
          <p>Copy, paste, generate — for any product or niche. Your PDF is attached and also available via the button below.</p>
          <a href="${pdfUrl}" style="display:inline-block;background:#7C3AED;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600;margin:12px 0">Download PDF — 300 Prompts</a>
          <p style="font-size:13px;color:#8F8A86">Attached: <strong>300-ai-prompts-vault.pdf</strong> (77 pages). If you don’t see it, click the button or check spam. You’re also enrolled in the 7-day email series — Day 1 arrives today.</p>
        </div>
      `,
      attachments,
    })
  } catch (e) { console.error('[resend] lead magnet email failed', e) }
}
