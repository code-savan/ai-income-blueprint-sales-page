'use client'
import { useState } from 'react'

export default function ThankYouVSL() {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="ty-vsl-box">
      <div className="ty-vsl-ratio">
        {!playing ? (
          <button type="button" onClick={() => setPlaying(true)} aria-label="Play video" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, padding: 0, cursor: 'pointer', background: 'transparent', display: 'block' }}>
            <img src="https://pub-855fb210496f45fa86233cee4863af77.r2.dev/thankyou-vsl-thumbnail.png" alt="VSL thumbnail" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} crossOrigin="anonymous" />
            <span style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, background: 'linear-gradient(180deg,rgba(11,16,32,0.08) 0%,rgba(11,16,32,0.38) 100%)' }}>
              <span className="ty-vsl-play"><svg width={28} height={28} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
              <span className="ty-vsl-label">Watch This Next</span>
              <span className="ty-vsl-time">1:06 • Tap to play</span>
            </span>
          </button>
        ) : (
          <video controls autoPlay playsInline preload="metadata" poster="https://pub-855fb210496f45fa86233cee4863af77.r2.dev/thankyou-vsl-thumbnail.png" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', background: '#0b1020' }}>
            <source src="https://pub-855fb210496f45fa86233cee4863af77.r2.dev/thankyou-vsl-roughcut.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div className="ty-vsl-footer">
        <span className="ty-vsl-live" />
        <span className="ty-vsl-note">What to do with your 300+ prompts next</span>
      </div>
    </div>
  )
}
