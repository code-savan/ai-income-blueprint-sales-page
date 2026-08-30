'use client'
import { useState, useEffect, useRef, FormEvent } from 'react'
import dynamic from 'next/dynamic'
import { ShieldIcon, LockIcon, CheckIcon } from '@/components/Icons'

const WhopCheckout = dynamic(() => import('./WhopCheckout'), { ssr: false })

type LeadModalProps = { isOpen: boolean; onClose: () => void; source?: string }

export default function LeadModal({ isOpen, onClose, source = 'cta' }: LeadModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [checkout, setCheckout] = useState<{ sessionId: string | null; planId: string } | null>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const nameInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
      setTimeout(() => nameInput.current?.focus(), 300)
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    } else {
      setVisible(false)
      document.body.style.overflow = ''
      const t = setTimeout(() => { setMounted(false); setCheckout(null); setError(''); setSubmitting(false) }, 350)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    if (!name.trim() || !email.trim()) { setError('Please enter your name and email.'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Please enter a valid email address.'); return }
    setSubmitting(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), source }),
      })
      const data = await res.json()
      if (!res.ok || (!data.sessionId && !data.planId)) throw new Error(data.error || 'Checkout failed')
      setCheckout({ sessionId: data.sessionId, planId: data.planId })
      setSubmitting(false)
    } catch (err: any) {
      setSubmitting(false)
      setError(err?.message || 'Something went wrong starting checkout. Please try again.')
    }
  }

  if (!mounted) return null

  return (
    <>
      <div ref={overlayRef} className={`lead-overlay ${visible ? 'show' : ''}`} onClick={(e) => { if (e.target === overlayRef.current) onClose() }} />
      <div className={`lead-modal ${visible ? 'show' : ''} ${checkout ? 'lead-modal--checkout' : 'lead-modal--form'}`} style={checkout ? { maxWidth: 560, width: '95vw' } : undefined}>
        <div className="lead-modal__inner" style={checkout ? { maxWidth: 560 } : undefined}>
          <button className="lead-modal__close" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
          {!checkout ? (
            <>
              <div className="lm-badge"><span className="lm-badge__dot" /> Secure checkout via Whop · 30-day guarantee</div>
              <div className="lead-modal__header" style={{ marginBottom: 16 }}>
                <h2>Unlock Full Access</h2>
                <p>Join 1,400+ students — enter your details to open Apple Pay, Card, GPay & 100+ methods.</p>
              </div>
              <div className="lm-summary">
                <div className="lm-summary__left">
                  <span className="lm-summary__name">zerotopaidwithai — Full Access</span>
                  <span className="lm-summary__meta">5 modules · 4 playbooks · Prompt Vault · Lifetime updates</span>
                </div>
                <div className="lm-summary__right">
                  <span className="lm-summary__was">$197</span>
                  <span className="lm-summary__price">$97</span>
                  <span className="lm-summary__once">one-time</span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="lead-modal__form">
                <div className="lead-modal__field">
                  <label htmlFor="lead-name">Your Name</label>
                  <input ref={nameInput} id="lead-name" type="text" placeholder="e.g. John Doe" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
                </div>
                <div className="lead-modal__field">
                  <label htmlFor="lead-email">Email Address <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(receipt + access)</span></label>
                  <input id="lead-email" type="email" placeholder="e.g. john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
                </div>
                {error && <p className="lead-modal__error">{error}</p>}
                <button type="submit" className="btn btn--primary lm-submit" disabled={submitting}>
                  {submitting ? 'Opening Secure Checkout…' : 'Continue to Secure Checkout →'}
                </button>
                <div className="lm-benefits">
                  <span><CheckIcon size={12} color="#16a34a" /> Instant access</span>
                  <span><CheckIcon size={12} color="#16a34a" /> Lifetime updates</span>
                  <span><CheckIcon size={12} color="#16a34a" /> 30-day refund</span>
                </div>
              </form>
              <div className="lm-trust">
                <span className="lm-trust__item"><LockIcon size={12} /> SSL encrypted</span>
                <span className="lm-trust__item"><ShieldIcon size={12} color="#16a34a" /> Whop protected</span>
                <span className="lm-trust__item">✓ 1,400+ students</span>
              </div>
            </>
          ) : (
            <>
              <div className="lead-modal__header" style={{ marginBottom: 10 }}>
                <h2 style={{ fontSize: 20 }}>Complete Your Payment</h2>
                <p>Secure checkout powered by Whop — you’re almost done, {name.split(' ')[0]}.</p>
              </div>
              <WhopCheckout sessionId={checkout.sessionId} planId={checkout.planId} email={email} onComplete={() => { window.location.href = '/thank-you?type=purchase' }} />
              <p className="lead-modal__footnote" style={{ marginTop: 10 }}>After payment you’ll be redirected automatically. Need help? <a href="mailto:support@zerotopaidwithai.com">support@zerotopaidwithai.com</a></p>
            </>
          )}
        </div>
      </div>
    </>
  )
}
