import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Privacy Policy — zerotopaidwithai',
  description: 'How zerotopaidwithai collects, uses, and protects your data.',
}

export default function PrivacyPage() {
  return (
    <main className="legal">
      <div className="legal__container">
        <Link href="/" className="legal__back">
          <ArrowRight size={14} color="currentColor" style={{ transform: 'rotate(180deg)' }} />
          Back to zerotopaidwithai
        </Link>
        
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: August 5, 2026</p>

        <p>
          This Privacy Policy explains how <strong>zerotopaidwithai</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
          collects, uses, and protects your personal information when you visit our website or
          purchase our products.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li><strong>Contact information:</strong> Name and email address when you sign up for our newsletter or contact us.</li>
          <li><strong>Payment information:</strong> Processed securely through Paystack. We do not store your credit card details.</li>
          <li><strong>Usage data:</strong> IP address, browser type, pages visited, and time spent on our site via cookies and analytics tools.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To deliver and process your purchases and provide access to the Blueprint.</li>
          <li>To send you important updates about the product, including new modules and prompt additions.</li>
          <li>To respond to your inquiries and provide customer support.</li>
          <li>To analyze and improve our website and marketing efforts.</li>
          <li>To enforce our Terms of Use.</li>
        </ul>

        <h2>3. Cookies & Tracking</h2>
        <p>
          We use cookies and similar tracking technologies (Google Analytics, Meta Pixel) to
          understand how visitors use our site. You can disable cookies in your browser settings,
          but some features may not work properly.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>We use the following third-party services that may collect your data:</p>
        <ul>
          <li><strong>Paystack</strong> — payment processing</li>
          <li><strong>Google Analytics</strong> — website analytics</li>
          <li><strong>Meta (Facebook) Pixel</strong> — conversion tracking for advertising</li>
          <li><strong>Email provider</strong> — transactional and marketing emails</li>
        </ul>
        <p>
          Each of these services has its own privacy policy. We encourage you to review them.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain your personal information for as long as your account is active or as needed
          to provide our services. If you request deletion, we will remove your data within 30
          days, except where we have a legal obligation to retain it.
        </p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your data.</li>
          <li>Opt out of marketing emails at any time (unsubscribe link in every email).</li>
          <li>Object to or restrict our processing of your data.</li>
        </ul>
        <p>
          To exercise any of these rights, email us at <a href="mailto:support@zerotopaidwithai.com">support@zerotopaidwithai.com</a>.
        </p>

        <h2>7. Data Security</h2>
        <p>
          We take reasonable technical and organizational measures to protect your data from
          unauthorized access, alteration, or disclosure. However, no method of internet
          transmission is 100% secure.
        </p>

        <h2>8. Children&rsquo;s Privacy</h2>
        <p>
          Our services are not directed to individuals under 18. We do not knowingly collect data
          from minors. If you believe we have collected data from a minor, please contact us.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated revision date. We encourage you to review it periodically.
        </p>

        <h2>10. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:support@zerotopaidwithai.com">support@zerotopaidwithai.com</a>.
        </p>
      </div>
    </main>
  )
}
