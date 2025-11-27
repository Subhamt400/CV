"use client"

import Link from 'next/link'
import { Github, Mail, Linkedin } from 'lucide-react'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-heading text-sm">SK</div>
          <div>
            <div className="font-heading">Subham Kumar</div>
            <div className="text-sm muted">Full Stack Developer</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/subhamt400" target="_blank" rel="noreferrer" aria-label="GitHub" className="muted hover:brightness-150 transition-all" style={{ color: 'var(--muted)' }}>
            <Github />
          </a>
          <a href="https://linkedin.com/in/subham-kumar-661558264" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="muted hover:brightness-150 transition-all" style={{ color: 'var(--muted)' }}>
            <Linkedin />
          </a>
          <a href="mailto:tiwarisubham400off@gmail.com" aria-label="Email" className="muted hover:brightness-150 transition-all" style={{ color: 'var(--muted)' }}>
            <Mail />
          </a>
          <Link href="/assets/CV.pdf" className="text-sm muted hover:brightness-150 transition-all" target="_blank" rel="noreferrer" style={{ color: 'var(--muted)' }}>Download CV</Link>
        </div>
      </div>

      <div className="container mt-6 text-center text-sm muted">© {year} Subham Kumar. Built with Next.js & Tailwind.</div>
    </footer>
  )
}
