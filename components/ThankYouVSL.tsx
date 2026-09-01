'use client'
import { useRef, useState } from 'react'

export default function ThankYouVSL() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="ty__vslWrap">
      {!playing ? (
        <button type="button" onClick={() => setPlaying(true)} aria-label="Play video" className="ty__vslThumb">
          <img src="https://pub-855fb210496f45fa86233cee4863af77.r2.dev/thankyou-vsl-thumbnail.png" alt="VSL thumbnail" width={1280} height={720} loading="eager" crossOrigin="anonymous" />
          <span className="ty__vslOverlay">
            <span className="ty__playBtn">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#7C3AED"><path d="M8 5.14v14l11-7z" /></svg>
            </span>
            <span className="ty__vslDur">1:06</span>
          </span>
        </button>
      ) : (
        <div className="ty__vslPlayer">
          <video ref={videoRef} controls autoPlay playsInline preload="metadata" poster="https://pub-855fb210496f45fa86233cee4863af77.r2.dev/thankyou-vsl-thumbnail.png">
            <source src="https://pub-855fb210496f45fa86233cee4863af77.r2.dev/thankyou-vsl-roughcut.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  )
}