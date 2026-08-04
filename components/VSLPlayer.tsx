'use client'

import { useState, useRef, useEffect } from 'react'

export default function HeroVSL() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    if (playing) {
      vid.play().catch(() => {})
    } else {
      vid.pause()
    }
  }, [playing])

  const VSL_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_3F6NuQ25OFHTqLKUwjR9KKmBRi4/hf_20260804_115410_a02fdcb2-9596-42ff-abdb-d7e00b4b1d5e.mp4'
  const POSTER_URL = 'https://cdn.higgsfield.ai/marketing_studio_avatar/8c8e0717-70c1-46a5-b67f-4581637ff1fc.webp'

  return (
    <div className="hero-media">
      <div className="hero-vsl-box">
        <button
          className={`hero-vsl-screen${playing ? ' is-playing' : ''}`}
          type="button"
          aria-label={playing ? 'Pause video' : 'Play video'}
          onClick={() => setPlaying((value) => !value)}
        >
          <div className="hero-vsl-glow" />
          <div className="vsl-lines" />
          
          <video
            ref={videoRef}
            id="vslVideo"
            preload="metadata"
            playsInline
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
            poster={POSTER_URL}
          >
            <source src={VSL_URL} type="video/mp4" />
          </video>

          {!playing && (
            <div className="hero-vsl-center" style={{ zIndex: 2 }}>
              <div className="hero-vsl-play">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="hero-vsl-label">Watch This First</p>
              <p className="hero-vsl-time">2 min 26 sec</p>
            </div>
          )}
        </button>
        <div className="hero-vsl-footer">
          <span className="hero-vsl-live" />
          <span className="hero-vsl-note">Zara shares her AI income story</span>
        </div>
      </div>
    </div>
  )
}