'use client'
import { useState, useRef, useEffect } from 'react'

export default function HeroVSL() {
  const [started, setStarted] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [ratio, setRatio] = useState('16/9')
  const videoRef = useRef<HTMLVideoElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const VSL_URL = 'https://pub-855fb210496f45fa86233cee4863af77.r2.dev/1788442753811017.mp4'
  const POSTER_URL = 'https://pub-855fb210496f45fa86233cee4863af77.r2.dev/1.jpeg'

  useEffect(() => {
    const v = videoRef.current
    if (!v || !started) return
    const onTime = () => setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0)
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onEnded = () => setPlaying(false)
    v.addEventListener('timeupdate', onTime)
    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)
    v.addEventListener('ended', onEnded)
    return () => {
      v.removeEventListener('timeupdate', onTime)
      v.removeEventListener('play', onPlay)
      v.removeEventListener('pause', onPause)
      v.removeEventListener('ended', onEnded)
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
    setProgress(p * 100)
  }

  return (
    <div className="hero-media">
      <div ref={boxRef} className="hero-vsl-box" style={{ height: 'auto', aspectRatio: ratio, display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'relative', flex: 1, background: '#000', overflow: 'hidden', display: 'flex' }}>
          {!started ? (
            <button type="button" aria-label="Play video" onClick={() => setStarted(true)} style={{ position: 'relative', width: '100%', flex: 1, border: 0, padding: 0, cursor: 'pointer', background: '#000', display: 'block', overflow: 'hidden' }}>
              <img src={POSTER_URL} alt="Hero thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onLoad={e => { const im = e.currentTarget; if (im.naturalWidth && im.naturalHeight) setRatio(`${im.naturalWidth}/${im.naturalHeight}`) }} />
              <span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'linear-gradient(180deg,rgba(11,16,32,0.04) 0%,rgba(11,16,32,0.28) 100%)' }}>
                <span className="hero-vsl-center">
                  <span className="hero-vsl-play"><svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
                  <span className="hero-vsl-label">Watch This First</span>
                  <span className="hero-vsl-time">Tap to play</span>
                </span>
              </span>
            </button>
          ) : (
            <div style={{ position: 'relative', width: '100%', flex: 1, background: '#000', display: 'flex', flexDirection: 'column' }}>
              <video ref={videoRef} autoPlay playsInline preload="metadata" poster={POSTER_URL} style={{ width: '100%', flex: 1, display: 'block', objectFit: 'contain', background: '#000' }} onLoadedMetadata={e => { const v = e.currentTarget; if (v.videoWidth && v.videoHeight) setRatio(`${v.videoWidth}/${v.videoHeight}`) }}>
                <source src={VSL_URL} type="video/mp4" />
              </video>
              <div style={{ position: 'absolute', bottom: 28, left: 0, right: 0, display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'linear-gradient(180deg,transparent 0%,rgba(0,0,0,0.55) 100%)' }} onClick={e => e.stopPropagation()}>
                <button onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'} style={{ width: 36, height: 36, borderRadius: 999, border: '1px solid rgba(255,255,255,0.9)', background: 'rgba(255,255,255,0.95)', display: 'grid', placeItems: 'center', cursor: 'pointer', flexShrink: 0 }}>
                  {playing ? <svg width={16} height={16} viewBox="0 0 24 24" fill="#7C3AED"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg> : <svg width={16} height={16} viewBox="0 0 24 24" fill="#7C3AED" style={{ marginLeft: 2 }}><path d="M8 5v14l11-7z" /></svg>}
                </button>
                <button onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'} style={{ width: 36, height: 36, borderRadius: 999, border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(0,0,0,0.45)', display: 'grid', placeItems: 'center', cursor: 'pointer', color: '#fff' }}>
                  {muted ? <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M11 5L6 9H2v6h4l5 4z" /><path d="M23 9l-6 6M17 9l6 6" /></svg> : <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M11 5L6 9H2v6h4l5 4z" /><path d="M15.54 8.46a5 5 0 010 7.07" /></svg>}
                </button>
                <div style={{ flex: 1 }} />
                <button onClick={toggleFs} aria-label="Fullscreen" style={{ width: 36, height: 36, borderRadius: 999, border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(0,0,0,0.45)', display: 'grid', placeItems: 'center', cursor: 'pointer', color: '#fff' }}>
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M8 3H5a2 2 0 00-2 2v3M16 3h3a2 2 0 012 2v3M8 21H5a2 2 0 01-2-2v-3M16 21h3a2 2 0 002-2v-3" /></svg>
                </button>
              </div>
              <div onClick={onSeek} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'rgba(255,255,255,0.22)', cursor: 'pointer' }}>
                <div style={{ height: '100%', width: `${progress}%`, background: '#7C3AED' }} />
              </div>
            </div>
          )}
        </div>
        <div className="hero-vsl-footer">
          <span className="hero-vsl-live" />
          <span className="hero-vsl-note">Zara shares her AI income story</span>
        </div>
      </div>
    </div>
  )
}
