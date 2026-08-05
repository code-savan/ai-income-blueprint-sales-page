'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || ''
const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || ''
const PRICE_AMOUNT = Number(process.env.NEXT_PUBLIC_PRICE_AMOUNT || 97)
const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY || 'USD'

type LeadModalProps = {
  isOpen: boolean
  onClose: () => void
  source?: string
}

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: PaystackConfig) => { openIframe: () => void }
    }
  }
}

type PaystackConfig = {
  key: string
  email: string
  amount: number
  currency: string
  ref?: string
  metadata?: Record<string, unknown>
  callback?: (response: { reference: string }) => void
  onClose?: () => void
}

export default function LeadModal({ isOpen, onClose, source = 'cta' }: LeadModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const nameInput = useRef<HTMLInputElement>(null)

  // Load Paystack Inline.js once
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.PaystackPop) {
      const script = document.createElement('script')
      script.src = 'https://js.paystack.co/v1/inline.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true))
      })
      setTimeout(() => nameInput.current?.focus(), 300)
    } else {
      setVisible(false)
      const t = setTimeout(() => setMounted(false), 350)
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

    if (!name.trim() || !email.trim()) {
      setError('Please enter your name and email.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (!PAYSTACK_PUBLIC_KEY) {
      setError('Checkout is not configured yet. Please try again later.')
      return
    }

    setSubmitting(true)

    try {
      // 1. Save lead to Google Sheet via Apps Script (fire and forget)
      if (APPS_SCRIPT_URL) {
        fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: name.trim(), email: email.trim(), source }),
        }).catch(() => {})
      }

      // 2. Generate a unique reference
      const ref = 'AIB-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8).toUpperCase()

      // 3. Open Paystack Inline checkout
      const handler = window.PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email: email.trim(),
        amount: Math.round(PRICE_AMOUNT * 100), // Paystack expects minor units (kobo/cents)
        currency: CURRENCY,
        ref,
        metadata: { custom_fields: [{ display_name: 'Name', variable_name: 'name', value: name.trim() }] },
        callback: (response) => {
          // Payment successful — notify the sheet
          if (APPS_SCRIPT_URL) {
            fetch(APPS_SCRIPT_URL, {
              method: 'POST',
              mode: 'no-cors',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name: name.trim(), email: email.trim(), source, reference: response.reference, status: 'paid' }),
            }).catch(() => {})
          }
          setSubmitting(false)
          onClose()
        },
        onClose: () => {
          setSubmitting(false)
        },
      })
      handler.openIframe()
    } catch (err) {
      setSubmitting(false)
      setError('Something went wrong opening checkout. Please try again.')
    }
  }

  if (!mounted) return null

  return (
    <>
      <div
        ref={overlayRef}
        className={`lead-overlay ${visible ? 'show' : ''}`}
        onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      />
      <div className={`lead-modal ${visible ? 'show' : ''}`}>
        <div className="lead-modal__inner">
          <button className="lead-modal__close" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className="lead-modal__header">
            <h2>You&rsquo;re One Step Away</h2>
            <p>Enter your details and we&rsquo;ll send you straight to checkout.</p>
          </div>

          <form onSubmit={handleSubmit} className="lead-modal__form">
            <div className="lead-modal__field">
              <label htmlFor="lead-name">Your Name</label>
              <input
                ref={nameInput}
                id="lead-name"
                type="text"
                placeholder="e.g. John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>
            <div className="lead-modal__field">
              <label htmlFor="lead-email">Email Address</label>
              <input
                id="lead-email"
                type="email"
                placeholder="e.g. john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            {error && <p className="lead-modal__error">{error}</p>}

            <button type="submit" className="btn btn--primary" disabled={submitting} style={{ width: '100%', height: 52, fontSize: 16 }}>
              {submitting ? 'Opening Checkout…' : `Continue to Checkout — $${PRICE_AMOUNT}`}
            </button>

            <p className="lead-modal__footnote">
              Secure payment via <strong>Paystack</strong> · Cards, bank transfer &amp; USSD
            </p>
          </form>
        </div>
      </div>
    </>
  )
}