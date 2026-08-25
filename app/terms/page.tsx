import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Terms of Use — zerotopaidwithai',
  description: 'The terms and conditions for using zerotopaidwithai.',
}

export default function TermsPage() {
  return (
    <main className="legal">
      <div className="legal__container">
        <Link href="/" className="legal__back">
          <ArrowRight size={14} color="currentColor" style={{ transform: 'rotate(180deg)' }} />
          Back to zerotopaidwithai
        </Link>
        
        <h1>Terms of Use</h1>
        <p className="last-updated">Last updated: August 5, 2026</p>

        <p>
          These Terms of Use (&ldquo;Terms&rdquo;) govern your use of the zerotopaidwithai website and
          digital products. By accessing or purchasing our products, you agree to be bound by
          these Terms.
        </p>

        <h2>1. License</h2>
        <p>
          When you purchase the zerotopaidwithai, you are granted a <strong>single-user,
          non-transferable license</strong> to access the content for your personal use. You may
          not share, resell, redistribute, or sublicense any part of the Blueprint.
        </p>

        <h2>2. Acceptable Use</h2>
        <p>You agree NOT to:</p>
        <ul>
          <li>Share your login credentials with others.</li>
          <li>Reproduce, duplicate, or resell any content from the Blueprint.</li>
          <li>Use the Blueprint for any illegal or unauthorized purpose.</li>
          <li>Attempt to reverse-engineer, hack, or disrupt the website.</li>
          <li>Scrape or download content in bulk via automated tools.</li>
        </ul>

        <h2>3. Intellectual Property</h2>
        <p>
          All content within the zerotopaidwithai — including text, graphics, prompts, videos,
          playbooks, and code — is the intellectual property of zerotopaidwithai and is
          protected by copyright laws. Unauthorized use is prohibited.
        </p>

        <h2>4. Refund Policy</h2>
        <p>
          We offer a <strong>30-day money-back guarantee</strong>. Go through the entire blueprint. If you do not see a clear, actionable path to your first sale, email us once and get every cent back. No questions. No hoops. No waiting. Contact us at <a href="mailto:support@zerotopaidwithai.com">support@zerotopaidwithai.com</a> within 30 days of purchase.
        </p>

        <h2>5. Earnings Disclaimer</h2>
        <p>
          Results shown on our website are real but not typical and are not a guarantee of future
          income. Individual results depend entirely on your effort, consistency, and market
          conditions. This is a business education product that requires real work. We make no
          guarantee of specific income results.
        </p>

        <h2>6. Not Financial Advice</h2>
        <p>
          The zerotopaidwithai is an educational product. Nothing in the Blueprint constitutes
          financial, legal, or professional advice. Always consult a qualified professional before
          making financial decisions.
        </p>

        <h2>7. Third-Party Tools</h2>
        <p>
          The Blueprint references and provides instructions for third-party tools (ChatGPT,
          Claude, Canva, CapCut, Gumroad, TikTok, Instagram, ElevenLabs, Kling AI, etc.). We are
          not affiliated with these companies and are not responsible for their services, pricing,
          or policies.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          zerotopaidwithai shall not be liable for any indirect, incidental, or consequential
          damages arising from your use of the product. Our total liability is limited to the
          amount you paid for the Blueprint.
        </p>

        <h2>9. Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms at any time. Continued use of the website
          or product after changes constitutes acceptance of the new Terms.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the United States. Any disputes will be
          resolved in the appropriate courts.
        </p>

        <h2>11. Contact</h2>
        <p>
          If you have any questions about these Terms, please contact us at{' '}
          <a href="mailto:support@zerotopaidwithai.com">support@zerotopaidwithai.com</a>.
        </p>
      </div>
    </main>
  )
}
