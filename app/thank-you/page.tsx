import Link from 'next/link'

export default function ThankYouPage({ searchParams }: { searchParams: { type?: string } }){
  const type=searchParams?.type
  const isLead=type==='lead-magnet'
  const isPurchase=type==='purchase'
  return (
    <main className="thankyou">
      <div className="thankyou__card">
        {isLead ? (
          <>
            <h1>Check Your Email.</h1>
            <p>The 300+ UGC prompts are on their way. If you do not see the email within 5 minutes, check your spam folder.</p>
            <p style={{fontSize:13,color:'var(--muted)'}}>You are also enrolled in the 7-day email series. Day 1 arrives today.</p>
            <p style={{marginTop:16, fontWeight:600}}>While you wait — here is the system behind the prompts:</p>
            <Link href="/" className="btn btn--primary" style={{marginTop:16}}>See the Full Blueprint</Link>
          </>
        ) : isPurchase ? (
          <>
            <h1>You Are In. Welcome to the Blueprint.</h1>
            <p>Check your email for your access instructions. If you do not see anything within 10 minutes, check spam — then email support@zerotopaidwithai.com.</p>
            <Link href="/" className="btn btn--primary" style={{marginTop:16}}>Access the Blueprint</Link>
            <p style={{fontSize:13,color:'var(--muted)',marginTop:16}}>The 30-day roadmap starts now. Open Day 1 when you are ready.</p>
          </>
        ) : (
          <>
            <h1>Thank You!</h1>
            <p>Check your email for next steps.</p>
            <Link href="/" className="btn btn--primary" style={{marginTop:16}}>Go to Blueprint</Link>
          </>
        )}
      </div>
    </main>
  )
}
