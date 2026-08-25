import Link from 'next/link'

export default function ThankYouPage({ searchParams }: { searchParams: { type?: string } }){
  const type=searchParams?.type
  const isLead=type==='lead-magnet'
  const isPurchase=type==='purchase'
  return (
    <main className="thankyou thankyou--new">
      <div className="thankyou__shell">
        {isLead ? (
          <>
            <div className="thankyou__badge"><span className="thankyou__dot"/> Email sent — check inbox</div>
            <div className="thankyou__iconWrap"><span className="thankyou__check">✓</span></div>
            <h1>Check Your Email.</h1>
            <p className="thankyou__sub">The <strong>300+ UGC prompts</strong> are on their way. If you don’t see it in 5 minutes, check spam / promotions.</p>

            <div className="thankyou__downloadCard">
              <div className="thankyou__cover">
                <img src="/ugc-pack-cover.webp" alt="300 prompts cover" width="120" height="180" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:10}}/>
              </div>
              <div className="thankyou__dlContent">
                <p className="thankyou__dlTitle">300 AI Prompts Vault</p>
                <p className="thankyou__dlMeta">PDF • 77 pages • 1.0MB • Instant download</p>
                <a href="/300-ai-prompts-vault.pdf" download="300-ai-prompts-vault.pdf" className="btn btn--primary" style={{width:'100%',justifyContent:'center',marginTop:10}}>
                  Download PDF Now
                  <span style={{fontSize:14}}>↧</span>
                </a>
              </div>
            </div>

            <p className="thankyou__note">Also emailed to you from <strong>support@zerotopaidwithai.com</strong> + you’re enrolled in the 7-day email series — Day 1 arrives today.</p>

            <div className="thankyou__divider"/>

            <p style={{fontSize:14, fontWeight:600, marginBottom:12}}>While you wait — see the system behind the prompts:</p>
            <div className="thankyou__actions">
              <Link href="/" className="btn btn--ghost" style={{width:'100%',justifyContent:'center'}}>See the Full Blueprint</Link>
              <Link href="/" className="btn btn--primary" style={{width:'100%',justifyContent:'center'}}>Go to Homepage →</Link>
            </div>
          </>
        ) : isPurchase ? (
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
