'use client'
import { useEffect, useRef, useState } from 'react'

/** Background demo: no video request until visible, no playback off screen. */
export default function LoopPreview({ src, label, poster }: { src: string; label: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const video = ref.current
    if (!video) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => { if (motion.matches) video.pause() }
    motion.addEventListener('change', update)
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !motion.matches) {
        setLoaded(true)
        // Assign the URL only at the moment it is needed.
        if (!video.getAttribute('src')) video.src = src
        video.play().catch(() => {})
      } else video.pause()
    }, { threshold: 0.15 })
    observer.observe(video)
    return () => { observer.disconnect(); motion.removeEventListener('change', update); video.pause() }
  }, [src])
  return <video ref={ref} src={loaded ? src : undefined} aria-label={`Illustrative AI video: ${label}`} muted loop playsInline preload="none" poster={poster}/>
}
