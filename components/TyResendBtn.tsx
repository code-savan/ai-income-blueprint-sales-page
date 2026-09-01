'use client'
import { useState } from 'react'

export default function TyResendBtn() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle')
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (state !== 'idle') return
    setState('sending')
    setTimeout(() => {
      setState('sent')
      setTimeout(() => setState('idle'), 3000)
    }, 1200)
  }
  if (state === 'sent') {
    return (
      <a href="#" onClick={onClick} className="btn btn--primary" style={{ width: '100%', height: 52, background: '#16a34a', boxShadow: '0 8px 24px rgba(22,163,74,0.32)' }}>
        <span>Sent — check your inbox</span>
      </a>
    )
  }
  return (
    <a href="#" onClick={onClick} className="btn btn--primary" style={{ width: '100%', height: 52, opacity: state === 'sending' ? 0.7 : 1, pointerEvents: state === 'sending' ? 'none' : 'auto' }}>
      <span>{state === 'sending' ? 'Sending...' : 'Resend Download Link'}</span>
      {state === 'idle' && (
        <span className="btn__arrow">
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      )}
    </a>
  )
}
