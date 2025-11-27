"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Github, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 site-header backdrop-blur-md">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-heading text-sm">SK</div>
          <Link href="/" className="font-heading text-lg">Subham Kumar</Link>
        </div>

        {/* Desktop links */}
        <nav className="hidden sm:flex items-center gap-6">
          <Link href="#" className="text-neutral-300 hover:text-white">Home</Link>
          <Link href="#projects" className="text-neutral-300 hover:text-white">Projects</Link>
          <a href="/assets/CV.pdf" className="text-neutral-300 hover:text-white" target="_blank" rel="noreferrer">Resume</a>
          <ThemeToggle />
          <a className="text-neutral-400 hover:text-neutral-200" href="https://github.com/subhamt400" aria-label="GitHub" target="_blank" rel="noreferrer">
            <Github />
          </a>
        </nav>

        {/* Mobile: hamburger */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="p-2 rounded-md text-neutral-200 bg-neutral-800/30 hover:bg-neutral-800"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`${open ? 'block' : 'hidden'} sm:hidden border-t border-neutral-800 bg-neutral-900/80`}>
        <div className="px-4 pt-4 pb-6 space-y-3">
          <Link href="#" className="block text-neutral-200" onClick={() => setOpen(false)}>Home</Link>
          <Link href="#projects" className="block text-neutral-200" onClick={() => setOpen(false)}>Projects</Link>
          <a href="/assets/CV.pdf" className="block text-neutral-200" onClick={() => setOpen(false)} target="_blank" rel="noreferrer">Resume</a>
          <div className="pt-2 flex items-center gap-3">
            <ThemeToggle />
            <a className="text-neutral-400 hover:text-neutral-200" href="https://github.com/subhamt400" aria-label="GitHub" target="_blank" rel="noreferrer">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
