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
          <p><strong>What's inside:</strong> 5-module system, 4 playbooks, 50-prompt vault, 30-day roadmap.</p>
          <a href="https://www.zerotopaidwithai.com/thank-you?type=purchase" style="display:inline-block;background:#7C3AED;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600;margin:16px 0">Access the Blueprint</a>
          <p style="font-size:13px;color:#8F8A86">Need help? Reply to <a href="mailto:${support}">${support}</a>.</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <p style="font-size:12px;color:#8F8A86">30-Day Money-Back Guarantee — email us once and get every cent back.</p>
        </div>
      `,
    })
    await resend.emails.send({
      from,
      to: 'eric.marvelboy@gmail.com',
      subject: `New purchase: ${to}`,
      html: `<p>New purchase from ${name || to} <${to}> — zerotopaidwithai $97.</p><p>Check Brevo Buyers list and Whop dashboard.</p>`,
    })
  } catch (e) { console.error('[resend] purchase email failed', e) }
}

export async function sendLeadMagnetEmail(to: string, firstName?: string) {
  const resend = getResend()
  if (!resend) return
  const from = process.env.RESEND_FROM_EMAIL || 'zerotopaidwithai <support@zerotopaidwithai.com>'
  const downloadUrl = 'https://www.zerotopaidwithai.com/api/download-pdf'
  try {
    await resend.emails.send({
      from,
      to,
      subject: 'The 300 AI Income Prompts vault is ready for you',
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1F1E1C;line-height:1.7;font-size:15px">
          <p style="margin:0 0 16px">Hey,</p>
          <p style="margin:0 0 16px">The 300 AI Income Prompts vault is ready for you.</p>
          <p style="margin:0 0 20px"><a href="${downloadUrl}" style="display:inline-block;background:#7C3AED;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px">Download the PDF here</a></p>
          <p style="margin:0 0 8px">Here's what you're getting:</p>
          <ul style="margin:0 0 16px;padding-left:20px;color:#1F1E1C">
            <li style="margin-bottom:6px">10 prompt categories (content creation, freelancing, product ideas, sales copy, email marketing, social media, business strategy, automation, research, and personal finance)</li>
            <li style="margin-bottom:6px">30 battle-tested prompts per category</li>
            <li style="margin-bottom:6px">Each prompt includes a usage hint so you know exactly when and how to deploy it</li>
          </ul>
          <p style="margin:0 0 16px">This is the same prompt library I use to generate income with AI — pulled from the full AI Income Blueprint system.</p>
          <p style="margin:0 0 16px">Over the next few days, I'm going to send you a few things that will rewire how you think about making money. They're short. They're free. And the first one hits your inbox tomorrow.</p>
          <p style="margin:0 0 16px">Watch for it.</p>
          <p style="margin:24px 0 0;line-height:1.6">— Partick Jane<br/>Zero to Paid with AI<br/><a href="https://www.zerotopaidwithai.com" style="color:#7C3AED;text-decoration:none">https://www.zerotopaidwithai.com</a></p>
          <p style="font-size:11px;color:#8F8A86;margin-top:24px;border-top:1px solid #eee;padding-top:16px">No longer want these? <a href="https://www.zerotopaidwithai.com/unsubscribe?email=${encodeURIComponent(to)}" style="color:#8F8A86;text-decoration:underline">Unsubscribe</a></p>
        </div>
      `,
      text: `Hey,\n\nThe 300 AI Income Prompts vault is ready for you.\n\nDownload the PDF here: ${downloadUrl}\n\nHere's what you're getting:\n\n• 10 prompt categories (content creation, freelancing, product ideas, sales copy, email marketing, social media, business strategy, automation, research, and personal finance)\n• 30 battle-tested prompts per category\n• Each prompt includes a usage hint so you know exactly when and how to deploy it\n\nThis is the same prompt library I use to generate income with AI — pulled from the full AI Income Blueprint system.\n\nOver the next few days, I'm going to send you a few things that will rewire how you think about making money. They're short. They're free. And the first one hits your inbox tomorrow.\n\nWatch for it.\n\n— Partick Jane\nZero to Paid with AI\nhttps://www.zerotopaidwithai.com`,
      headers: {
        'List-Unsubscribe': `<mailto:unsubscribe@zerotopaidwithai.com?subject=unsubscribe>, <https://www.zerotopaidwithai.com/unsubscribe?email=${encodeURIComponent(to)}>`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
    })
  } catch (e) { console.error('[resend] lead magnet email failed', e) }
}
