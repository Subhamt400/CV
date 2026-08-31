"use client"

import { useState } from 'react'
import { Mail, Github, Linkedin, Copy, Check, Send, MessageSquare } from 'lucide-react'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = "tiwarisubham400off@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="py-12 my-10 relative">
      <div className="container">
        <div className="relative glass-card p-8 sm:p-12 overflow-hidden border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white via-indigo-50/40 to-slate-100 dark:from-slate-900/90 dark:via-slate-950 dark:to-indigo-950/40 text-center rounded-2xl shadow-xl">
          {/* Background Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <MessageSquare size={14} />
              Let's Connect
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Have a project or opportunity in mind?
            </h2>

            <p className="text-sm sm:text-base muted leading-relaxed">
              I'm actively seeking full-stack web development and IoT engineering roles. Whether you have a question or want to collaborate, my inbox is always open.
            </p>

            {/* Email Copy Card */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="w-full sm:w-auto inline-flex items-center justify-between gap-4 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-mono text-sm shadow-sm">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-cyan-600 dark:text-cyan-400" />
                  <span className="truncate">{email}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors relative"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={16} className="text-emerald-600 dark:text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              <a
                href={`mailto:${email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Send size={16} />
                <span>Send Email</span>
              </a>
            </div>

            {/* Social Buttons */}
            <div className="pt-4 flex items-center justify-center gap-4">
              <a
                href="https://github.com/subhamt400"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:scale-105 shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/subham-kumar-661558264"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:scale-105 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
