"use client"

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark')
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved ?? (prefersDark ? 'dark' : 'light')
    setTheme(initial)
    setHydrated(true)
  }, [])

  useEffect(() => {
    const root = window?.document?.documentElement
    if (!root) return
    if (theme === 'light') {
      root.classList.add('light')
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
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
      className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      role="switch"
      aria-checked={theme === 'dark' ? 'false' : 'true'}
    >
      {hydrated ? (theme === 'light' ? <Sun size={16} className="text-amber-500" /> : <Moon size={16} className="text-cyan-400" />) : <Sun size={16} />}
    </motion.button>
  )
}
