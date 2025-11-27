"use client"

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  // Start with a stable default so server & client initial HTML match (prevents hydration mismatch)
  const [theme, setTheme] = useState('dark')
  const [hydrated, setHydrated] = useState(false)

  // On mount, read the saved preference (or system) and update theme.
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved ?? (prefersDark ? 'dark' : 'light')
    setTheme(initial)
    setHydrated(true)
  }, [])

  // Apply theme class and persist whenever it changes after mount
  useEffect(() => {
    const root = window?.document?.documentElement
    if (!root) return
    // Our CSS defaults to a dark theme (variables set in :root).
    // We use a `.light` class to switch to the light theme.
    if (theme === 'light') {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      // ignore
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <motion.button
      onClick={toggle}
      onKeyDown={onKeyDown}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-200"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      role="switch"
      aria-checked={theme === 'dark' ? 'false' : 'true'}
    >
      {/* Render a stable icon initially (server + first client render) to avoid mismatches.
          After hydration we show the actual state. */}
      {hydrated ? (theme === 'light' ? <Sun size={16} /> : <Moon size={16} />) : <Sun size={16} />}
    </motion.button>
  )
}
