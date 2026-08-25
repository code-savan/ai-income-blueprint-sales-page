'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LeadMagnetForm({ compact=false, source='lead-magnet' }: { compact?:boolean; source?:string }) {
  const [email,setEmail]=useState('')
  const [firstName,setFirstName]=useState('')
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState('')
  const router=useRouter()
  async function submit(e:React.FormEvent){
    e.preventDefault()
    setError('')
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ setError('Please enter a valid email.'); return }
    setLoading(true)
    try{
      const res=await fetch('/api/subscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,firstName})})
      const j=await res.json()
      if(!res.ok && !j.success) throw new Error(j.error||'Failed')
      router.push('/thank-you?type=lead-magnet')
    }catch(err:any){ setError(err.message||'Something went wrong. Try again.'); setLoading(false)}
  }
  return (
    <form onSubmit={submit} noValidate style={{width:'100%'}}>
      {!compact && (
        <div style={{display:'flex',gap:8,marginBottom:10}}>
          <label htmlFor="lm-firstName" style={{position:'absolute',left:-9999}}>First name</label>
          <input id="lm-firstName" placeholder="First name (optional)" value={firstName} onChange={e=>setFirstName(e.target.value)} style={{flex:1,height:56,border:'1px solid var(--border)',borderRadius:8,padding:'0 14px',fontSize:15}}/>
        </div>
      )}
      <div className="lead-magnet-form">
        <label htmlFor="lm-email" style={{position:'absolute',left:-9999}}>Email</label>
        <input id="lm-email" type="email" required placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)} aria-label="Email address"/>
        <button type="submit" disabled={loading} className="btn btn--primary" style={{height:56}}>{loading?'Sending…':'Get Instant Access'}</button>
      </div>
      {error && <p className="lm-error" style={{color:'var(--error)',fontSize:13,textAlign:'center'}}>{error}</p>}
      <p style={{fontSize:12,color:'var(--muted)',textAlign:'center',marginTop:8}}>We will also send you the 7-day email series. Unsubscribe anytime.</p>
    </form>
  )
}
