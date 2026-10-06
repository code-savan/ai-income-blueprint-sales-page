'use client'
import { useEffect, useState } from 'react'
import { ArrowRight } from '@/components/Icons'

export default function StickyBar({ hidden = false }: { hidden?: boolean }) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting), { threshold: 0 })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])
  return (
    <div className={`sticky${show ? ' show' : ''}${hidden ? ' hidden' : ''}`}>
      <div className="sticky-info">
        <span className="sticky-name">AI Income Blueprint</span>
        <span className="sticky-meta">Lifetime access · 30-day guarantee</span>
      </div>
      <div className="sticky-cta">
        <span className="sticky-price">$97 one-time</span>
        <a href="#lead" onClick={e => { e.preventDefault(); window.dispatchEvent(new Event('open-lead-modal')) }} className="btn btn--primary">Get Access Now <ArrowRight size={14} color="#fff"/></a>
      </div>
    </div>
  )
}
