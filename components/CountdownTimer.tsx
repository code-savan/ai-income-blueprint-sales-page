'use client'

import { useEffect, useState } from 'react'

const KEY = 'aib_end_v2'

function getEnd(): number {
  if (typeof window === 'undefined') return Date.now() + (23 * 3600 + 47 * 60 + 12) * 1000
  let end = parseInt(localStorage.getItem(KEY) || '0')
  if (!end || end < Date.now()) {
    end = Date.now() + (23 * 3600 + 47 * 60 + 12) * 1000
    try { localStorage.setItem(KEY, String(end)) } catch { /* noop */ }
  }
  return end
}

export default function CountdownTimer() {
  const [time, setTime] = useState('--:--:--')

  useEffect(() => {
    const end = getEnd()
    function tick() {
      const rem = Math.max(0, end - Date.now())
      const h = String(Math.floor(rem / 3600000)).padStart(2, '0')
      const m = String(Math.floor((rem % 3600000) / 60000)).padStart(2, '0')
      const s = String(Math.floor((rem % 60000) / 1000)).padStart(2, '0')
      setTime(`${h}:${m}:${s}`)
      if (rem > 0) setTimeout(tick, 1000)
    }
    tick()
  }, [])

  return <span className="sc-time" id="timer">{time}</span>
}
