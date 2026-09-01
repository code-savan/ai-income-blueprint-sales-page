import Link from 'next/link'

export default function ThankYouPage({ searchParams }: { searchParams: { type?: string } }){
  const type=searchParams?.type
  const isLead=type==='lead-magnet'
  const isPurchase=type==='purchase'
  if (isLead) {
    return (
      <main className="ty">
        <div className="ty__hero">
          <div className="ty__heroInner">
            <Link href="/" className="ty__logo">zerotopaidwithai</Link>
            <div className="ty__badge"><span/> Vault sent — check email</div>
            <h1>Don’t open the PDF until you watch this</h1>
            <p className="ty__sub">65 seconds — how to turn one prompt from the vault into your first AI video today.</p>
            <div className="ty__vsl">
              <video controls playsInline preload="metadata" poster="/thankyou-vsl-thumbnail.png" crossOrigin="anonymous">
                <source src="/thankyou-vsl-roughcut.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="ty__hint">Tap play · 1280×720 · Sound on</p>
          </div>
        </div>

        <div className="ty__body">
          <div className="ty__container">
            <div className="ty__grid">
              <div className="ty__card ty__card--download">
                <div className="ty__cover">
                  <img src="/ugc-pack-cover.webp" alt="300 prompts cover" width={220} height={328} />
                </div>
                <div>
                  <h3>300 AI Prompts Vault</h3>
                  <p>PDF • 77 pages • 1.0MB • 10 categories</p>
                  <ul>
                    <li>30 prompts per category with usage hints</li>
                    <li>Copy → Paste → Generate in seconds</li>
                    <li>Same library used inside the Blueprint</li>
                  </ul>
                  <a href="/api/download-pdf" className="btn btn--primary" style={{width:'100%',justifyContent:'center',marginTop:14}}>Download PDF Now ↧</a>
                  <span className="ty__small">Also emailed from support@zerotopaidwithai.com · 7-day series starts tomorrow</span>
                </div>
              </div>

              <div className="ty__card ty__card--steps">
                <h3>Do this in the next 10 minutes</h3>
                <div className="ty__steps">
                  <div><em>1</em><div><strong>Save the PDF to your phone</strong><span>So you can copy prompts to ChatGPT / Kling anywhere</span></div></div>
                  <div><em>2</em><div><strong>Generate 3 videos today</strong><span>Pick 1 category → copy 1 prompt → create in CapCut / Kling</span></div></div>
                  <div><em>3</em><div><strong>Open Day 1 email tomorrow</strong><span>It rewires how you think about making money with AI</span></div></div>
                </div>
                <div className="ty__ctaRow">
                  <Link href="/#pricing" className="btn btn--primary" style={{width:'100%',justifyContent:'center'}}>See the Full Blueprint — $97 →</Link>
                  <Link href="/" className="btn btn--ghost" style={{width:'100%',justifyContent:'center'}}>Back to Homepage</Link>
                </div>
              </div>
            </div>

            <p className="ty__footerNote">30-day guarantee · Lifetime access · 1,400+ students · support@zerotopaidwithai.com</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="thankyou thankyou--new">
      <div className="thankyou__shell">
        {isPurchase ? (
          <>
            <div className="thankyou__badge"><span className="thankyou__dot"/> Payment confirmed</div>
            <div className="thankyou__iconWrap thankyou__iconWrap--purchase"><span className="thankyou__check">✓</span></div>
            <h1>You Are In. Welcome.</h1>
            <p className="thankyou__sub">Check your email for access instructions. If nothing in 10 minutes, check spam — then email <a href="mailto:support@zerotopaidwithai.com" style={{color:'var(--purple)',fontWeight:600}}>support@zerotopaidwithai.com</a>.</p>
            <Link href="/" className="btn btn--primary" style={{marginTop:16, width:'100%',justifyContent:'center'}}>Access the Blueprint</Link>
            <p className="thankyou__note">The 30-day roadmap starts now. Open Day 1 when you’re ready.</p>
          </>
        ) : (
          <>
            <div className="thankyou__iconWrap"><span className="thankyou__check">✓</span></div>
            <h1>Thank You!</h1>
            <p className="thankyou__sub">Check your email for next steps.</p>
            <Link href="/" className="btn btn--primary" style={{marginTop:16, width:'100%',justifyContent:'center'}}>Go to Homepage</Link>
          </>
        )}
      </div>
    </main>
  )
}
