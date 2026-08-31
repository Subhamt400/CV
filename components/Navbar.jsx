"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Github, Menu, X, FileText, Code2, User, Sparkles } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 site-header backdrop-blur-xl transition-colors duration-300">
      <div className="container flex items-center justify-between h-16">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md">
            <div className="w-full h-full rounded-[10px] bg-slate-900 dark:bg-slate-950 flex items-center justify-center font-mono font-bold text-sm text-cyan-400 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:to-purple-400">
              SK
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-wider text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              Subham Kumar
            </span>
            <span className="text-[10px] font-mono muted tracking-wider -mt-1 hidden sm:block">
              FULL-STACK & IoT
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1 font-medium text-sm">
          <a
            href="#about"
            className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800/50 transition-all flex items-center gap-1.5"
          >
            <User size={15} className="text-cyan-600 dark:text-cyan-400" />
            About
          </a>
          <a
            href="#skills"
            className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800/50 transition-all flex items-center gap-1.5"
          >
            <Sparkles size={15} className="text-purple-600 dark:text-purple-400" />
            Skills
          </a>
          <a
            href="#projects"
            className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800/50 transition-all flex items-center gap-1.5"
          >
            <Code2 size={15} className="text-indigo-600 dark:text-indigo-400" />
            Projects
          </a>
          <a
            href="/assets/CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800/50 transition-all flex items-center gap-1.5"
          >
            <FileText size={15} className="text-pink-600 dark:text-pink-400" />
            Resume
          </a>

          <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700/50 mx-2" />

          <ThemeToggle />

          <a
            href="https://github.com/subhamt400"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800/50 transition-all"
          >
            <Github size={18} />
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="p-2 rounded-lg text-slate-800 dark:text-slate-200 bg-slate-200/80 dark:bg-slate-800/60 hover:bg-slate-300 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/50 transition-all"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200">
          <a
            href="#about"
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/70"
            onClick={() => setOpen(false)}
          >
            <User size={16} className="text-cyan-600 dark:text-cyan-400" />
            About
          </a>
          <a
            href="#skills"
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/70"
            onClick={() => setOpen(false)}
          >
            <Sparkles size={16} className="text-purple-600 dark:text-purple-400" />
            Skills
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/70"
            onClick={() => setOpen(false)}
          >
            <Code2 size={16} className="text-indigo-600 dark:text-indigo-400" />
            Projects
          </a>
          <a
            href="/assets/CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/70"
            onClick={() => setOpen(false)}
          >
            <FileText size={16} className="text-pink-600 dark:text-pink-400" />
            Resume
          </a>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between px-3">
            <span className="text-xs muted">Social Links</span>
            <a
              href="https://github.com/subhamt400"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 text-xs"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
