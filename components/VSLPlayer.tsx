'use client'

import { useState } from 'react'

export default function HeroVSL() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="hero-media">
      <div className="hero-vsl-box">
        <button
          className={`hero-vsl-screen${playing ? ' is-playing' : ''}`}
          type="button"
          aria-label={playing ? 'Pause video placeholder' : 'Play video placeholder'}
          onClick={() => setPlaying((value) => !value)}
        >
          <div className="hero-vsl-glow" />
          <div className="vsl-lines" />
          {playing ? (
            <div className="hero-vsl-placeholder">
              <span className="vsl-status">Preview placeholder</span>
              <p className="vsl-placeholder-title">VSL slot is ready</p>
              <p className="vsl-placeholder-copy">
                Drop the final video embed or file here when it is ready. Controls, sizing, and
                interaction state are already wired.
              </p>
            </div>
          ) : (
            <div className="hero-vsl-center">
              <div className="hero-vsl-play">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="hero-vsl-label">Watch This First</p>
              <p className="hero-vsl-time">4 min 38 sec</p>
            </div>
          )}
          <div className="vsl-controlbar" aria-hidden="true">
            <span className="vsl-control-icon">{playing ? 'Pause' : 'Play'}</span>
            <span className="vsl-progress">
              <span className="vsl-progress-fill" />
            </span>
            <span className="vsl-duration">4:38</span>
          </div>
        </button>
        <div className="hero-vsl-footer">
          <span className="hero-vsl-live" />
          <span className="hero-vsl-note">4-minute VSL placeholder — final video can be added here</span>
        </div>
        <p className="hero-vsl-caption">Click to test player state</p>
      </div>
    </div>
  )
}
