'use client'
import { useEffect, useState } from 'react'
import { ArrowRight } from '@/components/Icons'

function getDeadline(){ return new Date(process.env.NEXT_PUBLIC_PRICE_DEADLINE || '2026-09-08T23:59:59Z') }

export default function StickyBar({ hidden = false }: { hidden?: boolean }) {
  const [show, setShow] = useState(false)
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const io = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting), { threshold: 0 })
    io.observe(hero)
    return () => io.disconnect()
  }, [])
  useEffect(() => { const id = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(id) }, [])
  const deadline = getDeadline()
  const diff = Math.max(0, deadline.getTime() - now)
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const mins = Math.floor((diff % 3600000) / 60000)
  const secs = Math.floor((diff % 60000) / 1000)

  return (
    <div className={`sticky${show ? ' show' : ''}${hidden ? ' hidden' : ''}`}>
      <div className="sticky-info">
        <span className="sticky-name">zerotopaidwithai</span>
        <span className="sticky-meta">Lifetime • 30-day guarantee • $97</span>
      </div>
      <div className="sticky-timer" aria-label={`${days}d ${hours}h ${mins}m ${secs}s left`}>
        <span className="sticky-timer__label">Ends in</span>
        <span className="sticky-timer__box">{String(days).padStart(2,'0')}<em>d</em></span>
        <span className="sticky-timer__sep">:</span>
        <span className="sticky-timer__box">{String(hours).padStart(2,'0')}<em>h</em></span>
        <span className="sticky-timer__sep">:</span>
        <span className="sticky-timer__box">{String(mins).padStart(2,'0')}<em>m</em></span>
        <span className="sticky-timer__sep">:</span>
        <span className="sticky-timer__box sticky-timer__box--sec">{String(secs).padStart(2,'0')}<em>s</em></span>
      </div>
      <div className="sticky-cta">
        <span className="sticky-price">$97</span>
        <a href="#lead" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-lead-modal')) }} className="btn btn--primary">
          Get Access Now <ArrowRight size={14} color="#fff" />
        </a>
      </div>
    </div>
  )
}
