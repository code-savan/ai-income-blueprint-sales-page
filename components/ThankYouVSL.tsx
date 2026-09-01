'use client'
import { useRef, useState } from 'react'

export default function ThankYouVSL() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="ty__vsl" style={{ position: 'relative' }}>
      {!playing ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play video"
          style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#000', cursor: 'pointer', padding: 0, display: 'block', boxShadow: '0 24px 80px rgba(0,0,0,0.5),0 0 0 1px rgba(124,58,237,0.15)' }}
        >
          <img
            src="/thankyou-vsl-thumbnail.png"
            alt="Video thumbnail"
            width={1280}
            height={720}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="eager"
          />
          <span
            style={{
              position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
              background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%)'
            }}
          >
            <span style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.96)', display: 'grid', placeItems: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.9)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#7C3AED" style={{ marginLeft: 3 }}><path d="M8 5.14v14l11-7z" /></svg>
            </span>
          </span>
          <span style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(0,0,0,0.75)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '4px 8px', borderRadius: 6, letterSpacing: '0.02em' }}>1:06 • Tap to play</span>
        </button>
      ) : (
        <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: 16, overflow: 'hidden', background: '#000', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}>
          <video
            ref={videoRef}
            controls
            autoPlay
            playsInline
            preload="metadata"
            poster="/thankyou-vsl-thumbnail.png"
            style={{ width: '100%', height: '100%', display: 'block', background: '#000' }}
          >
            <source src="/thankyou-vsl-roughcut.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  )
}
