import Link from 'next/link'
import ThankYouVSL from '@/components/ThankYouVSL'
import TyResendBtn from '@/components/TyResendBtn'

export default function ThankYouPage({ searchParams }: { searchParams: { type?: string } }) {
  const type = searchParams?.type
  const isLead = type === 'lead-magnet'
  const isPurchase = type === 'purchase'
  if (isLead) {
    return (
      <div className="ty-page">
        <nav className="ty-nav">
          <Link href="/" className="ty-nav__brand">zerotopaidwithai</Link>
        </nav>
        <main className="ty-main">
          <div className="ty-success">
            <span className="ty-success__icon">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            You&apos;re in — check your inbox
          </div>
          <div className="ty-heading">
            <h1>Your <span>300+ AI Prompts</span> Are on the Way</h1>
          </div>
          <p className="ty-sub">We just sent the download link to your email. While you wait, watch this short video — it shows you exactly how to use these prompts to start making money this week.</p>
          <div className="ty-vsl-wrap">
            <ThankYouVSL />
          </div>
          <div className="ty-cta-card">
            <h2>Didn&apos;t get the email?</h2>
            <p>Check your spam or promotions folder. If it&apos;s not there, click below and we&apos;ll resend it instantly.</p>
            <TyResendBtn />
            <div className="ty-cta-bullets">
              <span><svg width={12} height={12} viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" /></svg> PDF · 77 pages</span>
              <span><svg width={12} height={12} viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" /></svg> Instant download</span>
              <span><svg width={12} height={12} viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" /></svg> Free forever</span>
            </div>
          </div>
          <div className="ty-next">
            <p className="ty-next__label">While you wait — 3 things to do right now</p>
            <div className="ty-next__grid">
              <div className="ty-next__step"><div className="ty-next__num">1</div><div><h3>Open the PDF</h3><p>Find the email, download the 77-page vault, and skim the table of contents.</p></div></div>
              <div className="ty-next__step"><div className="ty-next__num">2</div><div><h3>Pick One Niche</h3><p>Choose a product type that fits you — fitness, beauty, tech, food, or lifestyle.</p></div></div>
              <div className="ty-next__step"><div className="ty-next__num">3</div><div><h3>Generate Your First Video</h3><p>Copy a prompt, paste it into ChatGPT or Claude, and create your first UGC video today.</p></div></div>
            </div>
          </div>
          <div className="ty-email-notice">
            <p>We&apos;ll also send you a <strong>7-day email series</strong> with daily action steps to go from zero to your first $500 online using AI. No spam. Unsubscribe anytime.</p>
          </div>
        </main>
      </div>
    )
  }
  return (
    <main className="thankyou thankyou--new">
      <div className="thankyou__shell">
        {isPurchase ? (
          <>
            <div className="thankyou__badge"><span className="thankyou__dot" /> Payment confirmed</div>
            <div className="thankyou__iconWrap thankyou__iconWrap--purchase"><span className="thankyou__check">✓</span></div>
            <h1>You Are In. Welcome.</h1>
            <p className="thankyou__sub">Check your email for access instructions. If nothing in 10 minutes, check spam — then email <a href="mailto:support@zerotopaidwithai.com" style={{ color: 'var(--purple)', fontWeight: 600 }}>support@zerotopaidwithai.com</a>.</p>
            <Link href="/" className="btn btn--primary" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>Access the Blueprint</Link>
            <p className="thankyou__note">The 30-day roadmap starts now. Open Day 1 when you&apos;re ready.</p>
          </>
        ) : (
          <>
            <div className="thankyou__iconWrap"><span className="thankyou__check">✓</span></div>
            <h1>Thank You!</h1>
            <p className="thankyou__sub">Check your email for next steps.</p>
            <Link href="/" className="btn btn--primary" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>Go to Homepage</Link>
          </>
        )}
      </div>
    </main>
  )
}
