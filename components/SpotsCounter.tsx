'use client'

import { useEffect, useState } from 'react'

const KEY = 'aib_spots_v2'

export default function SpotsCounter() {
  const [n, setN] = useState(17)

  useEffect(() => {
    let val = parseInt(localStorage.getItem(KEY) || '17')
    if (isNaN(val) || val < 3) val = 17
    setN(val)

    const id = setInterval(() => {
      val = Math.max(val - 1, 3)
      try { localStorage.setItem(KEY, String(val)) } catch { /* noop */ }
      setN(val)
    }, 480000)

    return () => clearInterval(id)
  }, [])

  return (
    <strong id="spots" style={{ color: n <= 6 ? 'var(--red)' : 'var(--gold)' }}>
      {n}
    </strong>
  )
}
