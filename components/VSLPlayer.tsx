'use client'
import { useState, useRef } from 'react'

export default function HeroVSL() {
  const [playing, setPlaying] = useState(false)
  const [ratio, setRatio] = useState<string | undefined>(undefined)
  const videoRef = useRef<HTMLVideoElement>(null)
  const VSL_URL = 'https://pub-855fb210496f45fa86233cee4863af77.r2.dev/1788442753811017.mp4'
  const POSTER_URL = 'https://pub-855fb210496f45fa86233cee4863af77.r2.dev/1.jpeg'

  return (
    <div className="hero-media">
      <div className="hero-vsl-box hero-vsl-box--fit" style={ratio ? { aspectRatio: ratio } : undefined}>
        {!playing ? (
          <button className="hero-vsl-screen hero-vsl-screen--fit" type="button" aria-label="Play video" onClick={() => setPlaying(true)}>
            <img src={POSTER_URL} alt="Hero thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} onLoad={e => { const img = e.currentTarget; if (img.naturalWidth && img.naturalHeight) setRatio(`${img.naturalWidth}/${img.naturalHeight}`) }} />
            <span className="hero-vsl-center" style={{ zIndex: 2 }}>
              <span className="hero-vsl-play"><svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
              <span className="hero-vsl-label">Watch This First</span>
              <span className="hero-vsl-time">Tap to play</span>
            </span>
            <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(11,16,32,0.08) 0%,rgba(11,16,32,0.32) 100%)', zIndex: 1 }} />
          </button>
        ) : (
          <video ref={videoRef} controls autoPlay playsInline preload="metadata" poster={POSTER_URL} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain', background: '#000' }} onLoadedMetadata={e => { const v = e.currentTarget; if (v.videoWidth && v.videoHeight) setRatio(`${v.videoWidth}/${v.videoHeight}`) }}>
            <source src={VSL_URL} type="video/mp4" />
          </video>
        )}
        <div className="hero-vsl-footer" style={{ position: playing ? 'relative' : 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3 }}>
          <span className="hero-vsl-live" />
          <span className="hero-vsl-note">Zara shares her AI income story</span>
        </div>
      </div>
    </div>
  )
}
