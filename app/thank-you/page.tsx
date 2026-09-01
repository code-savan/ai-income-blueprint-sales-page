import Link from 'next/link'

export default function ThankYouPage({ searchParams }: { searchParams: { type?: string } }){
  const type=searchParams?.type
  const isLead=type==='lead-magnet'
  const isPurchase=type==='purchase'
  if (isLead) {
    return (
      <main className="thankyou thankyou--new thankyou--lead">
        <div className="thankyou__shell thankyou__shell--lead">
          <div className="thankyou__badge"><span className="thankyou__dot"/> Email sent — check inbox</div>
          <h1>Your Vault Is Ready — Watch This First</h1>
          <p className="thankyou__sub">65 seconds that shows how to turn these 300 prompts into your first AI income. Watch before you download.</p>

          <div className="thankyou-vsl">
            <div className="thankyou-vsl__frame">
              <video controls playsInline preload="metadata" poster="/ugc-pack-cover.webp">
                <source src="/thankyou-vsl-roughcut.mp4" type="video/mp4" />
              </video>
            </div>
            <span className="thankyou-vsl__caption">↳ 1280×720 · 1:06 · Rough cut — final polish coming</span>
          </div>

          <div className="thankyou__downloadCard">
            <div className="thankyou__cover">
              <img src="/ugc-pack-cover.webp" alt="300 prompts cover" width="220" height="328" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:10}}/>
            </div>
            <div className="thankyou__dlContent">
              <p className="thankyou__dlTitle">300 AI Prompts Vault</p>
              <p className="thankyou__dlMeta">PDF • 77 pages • 1.0MB • Instant download</p>
              <a href="/api/download-pdf" className="btn btn--primary" style={{width:'100%',justifyContent:'center',marginTop:12}}>
                Download PDF Now <span style={{fontSize:14}}>↧</span>
              </a>
              <p style={{fontSize:11,color:'var(--muted)',marginTop:6,textAlign:'center'}}>Also emailed to you via Resend</p>
            </div>
          </div>

          <p className="thankyou__note">Also emailed from <strong>support@zerotopaidwithai.com</strong> + you’re enrolled in the 7-day series — Day 1 hits tomorrow.</p>

          <div className="thankyou-steps">
            <div className="thankyou-step"><span>1</span>Download PDF & save to phone</div>
            <div className="thankyou-step"><span>2</span>Pick 1 prompt category and generate 3 videos today</div>
            <div className="thankyou-step"><span>3</span>Open Day 1 email tomorrow — it rewires how you think about money</div>
          </div>

          <div className="thankyou__divider"/>
          <p style={{fontSize:13,fontWeight:600,marginBottom:12}}>While you wait — see the system behind the prompts:</p>
          <div className="thankyou__actions">
            <Link href="/#pricing" className="btn btn--primary" style={{width:'100%',justifyContent:'center'}}>See the Full Blueprint — $97 →</Link>
            <Link href="/" className="btn btn--ghost" style={{width:'100%',justifyContent:'center'}}>Back to Homepage</Link>
          </div>
          <p style={{fontSize:11,color:'var(--muted)',marginTop:12}}>30-day guarantee · Lifetime access · 1,400+ students</p>
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
