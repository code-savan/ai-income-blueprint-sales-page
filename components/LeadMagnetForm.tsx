'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MailIcon, CheckIcon } from '@/components/Icons'

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
    <form onSubmit={submit} noValidate className="lmf">
      <div className="lmf-grid">
        <div className="lmf-field">
          <label htmlFor="lm-firstName">First name <span>optional</span></label>
          <input id="lm-firstName" placeholder="John" value={firstName} onChange={e=>setFirstName(e.target.value)} autoComplete="given-name" />
        </div>
        <div className="lmf-field lmf-field--email">
          <label htmlFor="lm-email">Email address <span className="lmf-req">*</span></label>
          <div className="lmf-inputWrap">
            <span className="lmf-icon"><MailIcon size={16} /></span>
            <input id="lm-email" type="email" required placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} autoComplete="email" aria-label="Email address" />
          </div>
        </div>
      </div>
      <button type="submit" disabled={loading} className="btn btn--primary lmf-submit">
        {loading ? 'Sending…' : 'Get Instant Access — Free'}
        {!loading && <span className="btn__arrow" style={{ background:'rgba(255,255,255,0.22)' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>}
      </button>
      {error && <p className="lmf-error">{error}</p>}
      <div className="lmf-trust">
        <span><CheckIcon size={12} color="#16a34a" /> Free forever</span>
        <span><CheckIcon size={12} color="#16a34a" /> No spam</span>
        <span><CheckIcon size={12} color="#16a34a" /> Unsubscribe anytime</span>
      </div>
      <p className="lmf-footnote">We’ll also send the 7-day email series. PDF • 77 pages • Instant download.</p>
    </form>
  )
}
