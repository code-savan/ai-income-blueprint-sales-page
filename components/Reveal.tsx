'use client'
import { useEffect, useRef, useState, ReactNode } from 'react'
type RevealProps = { children: ReactNode; delay?: number; className?: string; y?: number; once?: boolean }
export default function Reveal({ children, delay = 0, className = '', y = 24, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); if (once) io.unobserve(el) } else if (!once) setVisible(false) },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [once])
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) blur(0)' : `translateY(${y}px)`,
        filter: visible ? 'blur(0)' : 'blur(6px)',
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, filter 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: visible ? 'auto' : 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  )
}
