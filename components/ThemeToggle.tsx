"use client"
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mode, setMode] = useState<'light'|'dark'>('light')

  useEffect(() => {
    const html = document.documentElement
    html.classList.toggle('dark', mode === 'dark')
  }, [mode])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setMode(m => (m === 'light' ? 'dark' : 'light'))}
      className="px-2 py-1 border rounded"
    >
      {mode === 'light' ? '🌞' : '🌙'}
    </button>
  )
}
