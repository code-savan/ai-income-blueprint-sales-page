'use client'

import { useEffect, useState } from 'react'

export default function StickyBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setShow(true)
        else setShow(false)
      },
      { threshold: 0 }
    )
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  return (
    <div className={`sticky${show ? ' show' : ''}`}>
      <div className="sticky-info">
        <span className="sticky-name">AI Income Blueprint</span>
        <span className="sticky-meta">Lifetime access · 14-day guarantee</span>
      </div>
      <span className="sticky-price">$97</span>
      <a href="#pricing" className="btn btn-gold">
        Get Access Now
      </a>
    </div>
  )
}
