"use client"

import { Github, Mail, Linkedin, FileText } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800/80 py-10 bg-slate-100/60 dark:bg-slate-950/60 backdrop-blur-md">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 p-[1.5px] shadow-md">
            <div className="w-full h-full rounded-[9px] bg-slate-900 dark:bg-slate-950 flex items-center justify-center font-mono font-bold text-xs text-cyan-400 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:to-purple-400">
              SK
            </div>
          </div>
          <div>
            <div className="font-heading font-bold text-slate-900 dark:text-slate-200">Subham Kumar</div>
            <div className="text-xs font-mono muted">Full-Stack & IoT Developer</div>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 text-sm font-mono">
          <a
            href="https://github.com/subhamt400"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-cyan-400 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/subham-kumar-661558264"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:tiwarisubham400off@gmail.com"
            aria-label="Email Subham"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-cyan-400 transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="/assets/CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
          >
            <FileText size={14} />
            <span>CV</span>
          </a>
        </div>
      </div>

      <div className="container mt-8 pt-6 border-t border-slate-200 dark:border-slate-900 text-center text-xs font-mono text-slate-500">
        © {year} Subham Kumar. Built with Next.js 16, React 19 & Tailwind CSS.
      </div>
    </footer>
  )
}
