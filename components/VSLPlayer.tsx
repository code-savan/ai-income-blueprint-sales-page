'use client'
import { useState, useRef, useEffect } from 'react'

export default function HeroVSL() {
  const [started, setStarted] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [timeLabel, setTimeLabel] = useState('0:00')
  const videoRef = useRef<HTMLVideoElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const VSL_URL = 'https://pub-855fb210496f45fa86233cee4863af77.r2.dev/1788442753811017.mp4'
  const POSTER_URL = 'https://pub-855fb210496f45fa86233cee4863af77.r2.dev/1.jpeg'

  useEffect(() => {
    const v = videoRef.current
    if (!v || !started) return
    const onTime = () => {
      const p = v.duration ? (v.currentTime / v.duration) * 100 : 0
      setProgress(p)
      const m = Math.floor(v.currentTime / 60)
      const s = Math.floor(v.currentTime % 60).toString().padStart(2, '0')
      setTimeLabel(`${m}:${s}`)
    }
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    v.addEventListener('timeupdate', onTime)
    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)
    return () => {
      v.removeEventListener('timeupdate', onTime)
      v.removeEventListener('play', onPlay)
      v.removeEventListener('pause', onPause)
    }
  }, [started])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }
  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }
  const toggleFs = () => {
    const el = boxRef.current
    if (!el) return
    if (!document.fullscreenElement) el.requestFullscreen().catch(() => {})
    else document.exitFullscreen().catch(() => {})
  }
  const onSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current
    if (!v || !v.duration) return
    const r = e.currentTarget.getBoundingClientRect()
    const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width))
    v.currentTime = p * v.duration
  }

  return (
    <div style={{ width: '100%', maxWidth: 900, margin: '0 auto 10px' }}>
      <div ref={boxRef} style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(124,58,237,0.18)', boxShadow: '0 20px 60px rgba(18,24,38,0.18), 0 2px 12px rgba(0,0,0,0.08)', background: '#0b1020', position: 'relative', aspectRatio: '16/9', width: '100%' }}>
        {!started ? (
          <button type="button" aria-label="Play video" onClick={() => setStarted(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, padding: 0, cursor: 'pointer', background: '#0b1020', display: 'block' }}>
            <img src={POSTER_URL} alt="Hero thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <span style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 42%, rgba(124,58,237,0.22) 0%, transparent 62%), linear-gradient(180deg, rgba(11,16,32,0.06) 0%, rgba(11,16,32,0.55) 100%)' }} />
            <span style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
              <span style={{ width: 84, height: 84, borderRadius: 999, background: 'linear-gradient(180deg,#7C3AED 0%,#6D28D9 100%)', display: 'grid', placeItems: 'center', boxShadow: '0 12px 32px rgba(124,58,237,0.45), 0 0 0 1px rgba(255,255,255,0.12) inset', border: '1px solid rgba(255,255,255,0.14)', transition: 'transform .2s' }}>
                <svg width={28} height={28} viewBox="0 0 24 24" fill="#fff" style={{ marginLeft: 3 }}><path d="M8 5v14l11-7z" /></svg>
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>Watch This First</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>2:07 • Tap to play</span>
              </span>
            </span>
            <span style={{ position: 'absolute', bottom: 14, left: 14, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '6px 10px', borderRadius: 999 }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.6)' }} /> is this worth it $$$?
            </span>
          </button>
        ) : (
          <div style={{ position: 'absolute', inset: 0, background: '#000', display: 'flex', flexDirection: 'column' }}>
            <video ref={videoRef} autoPlay playsInline preload="metadata" poster={POSTER_URL} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', background: '#000', flex: 1 }} onClick={togglePlay}>
              <source src={VSL_URL} type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 14px 14px', background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.62) 100%)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <button onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'} style={{ width: 40, height: 40, borderRadius: 999, border: '1px solid rgba(255,255,255,0.9)', background: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer', flexShrink: 0, boxShadow: '0 4px 16px rgba(0,0,0,0.25)' }}>
                {playing ? <svg width={16} height={16} viewBox="0 0 24 24" fill="#7C3AED"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg> : <svg width={16} height={16} viewBox="0 0 24 24" fill="#7C3AED" style={{ marginLeft: 2 }}><path d="M8 5v14l11-7z" /></svg>}
              </button>
              <button onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'} style={{ width: 40, height: 40, borderRadius: 999, border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', display: 'grid', placeItems: 'center', cursor: 'pointer', color: '#fff' }}>
                {muted ? <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}><path d="M11 5L6 9H2v6h4l5 4z" /><path d="M23 9l-6 6M17 9l6 6" /></svg> : <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}><path d="M11 5L6 9H2v6h4l5 4z" /><path d="M15.54 8.46a5 5 0 010 7.07" /><path d="M19.07 4.93a10 10 0 010 14.14" /></svg>}
              </button>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.9)', fontVariantNumeric: 'tabular-nums', minWidth: 36 }}>{timeLabel}</span>
              <div style={{ flex: 1 }} />
              <button onClick={toggleFs} aria-label="Fullscreen" style={{ width: 40, height: 40, borderRadius: 999, border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', display: 'grid', placeItems: 'center', cursor: 'pointer', color: '#fff' }}>
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}><path d="M8 3H5a2 2 0 00-2 2v3M16 3h3a2 2 0 012 2v3M8 21H5a2 2 0 01-2-2v-3M16 21h3a2 2 0 002-2v-3" /></svg>
              </button>
            </div>
            <div onClick={onSeek} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'rgba(255,255,255,0.18)', cursor: 'pointer' }}>
              <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg,#7C3AED 0%,#A78BFA 100%)', boxShadow: '0 0 10px rgba(124,58,237,0.5)' }} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
