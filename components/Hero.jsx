"use client"

import { motion } from 'framer-motion'
import { Download, ArrowRight, Code, Cpu, Database, Sparkles, Terminal } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
  }

  return (
    <section className="pt-10 pb-16 relative overflow-hidden">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          {/* Left - Bio & Action Buttons (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Software Engineering Roles</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div variants={item}>
              <div className="text-sm font-mono text-cyan-700 dark:text-cyan-400 tracking-wider flex items-center gap-2 mb-2">
                <Terminal size={16} />
                <span>hello_world.sh</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight leading-none text-slate-900 dark:text-slate-100">
                Hi, I'm{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-400">
                  Subham Kumar
                </span>
              </h1>
            </motion.div>

            {/* Sub-heading */}
            <motion.h2 variants={item} className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 leading-snug">
              Full-Stack Developer & IoT Engineer
            </motion.h2>

            {/* Bio Paragraph */}
            <motion.p variants={item} className="text-base sm:text-lg muted max-w-2xl leading-relaxed">
              Final-year B.Tech Student specializing in robust backend architecture, reactive frontends, and smart IoT microcontrollers. Experienced in shipping production-grade PHP/MySQL systems, MERN stack web applications, and AI integrations.
            </motion.p>

            {/* Tech Chips Grid */}
            <motion.div variants={item} className="flex flex-wrap gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/60 text-xs font-mono text-slate-800 dark:text-slate-300">
                <Code size={13} className="text-cyan-600 dark:text-cyan-400" />
                MERN & Next.js
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/60 text-xs font-mono text-slate-800 dark:text-slate-300">
                <Database size={13} className="text-purple-600 dark:text-purple-400" />
                PHP & MySQL Architecture
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/60 text-xs font-mono text-slate-800 dark:text-slate-300">
                <Cpu size={13} className="text-emerald-600 dark:text-emerald-400" />
                ESP8266 & IoT Sensors
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/60 text-xs font-mono text-slate-800 dark:text-slate-300">
                <Sparkles size={13} className="text-amber-600 dark:text-amber-400" />
                Gemini AI Client APIs
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={item} className="pt-3 flex flex-wrap gap-4 items-center">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/assets/CV.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-200/80 hover:bg-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-slate-200 font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                <Download size={16} className="text-cyan-600 dark:text-cyan-400" />
                <span>Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Right - Hexagon photo frame & tech stats badge (5 cols on lg) */}
          <motion.div variants={item} className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="hexagon-wrapper">
              <div className="hexagon shadow-2xl">
                <Image
                  src="/images/image.png"
                  alt="Subham Kumar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating Quick Stat Badge */}
            <div className="-mt-6 z-10 glass-card px-5 py-2.5 rounded-full flex items-center gap-3 border border-slate-200 dark:border-indigo-500/30 shadow-xl bg-white/95 dark:bg-slate-900/90">
              <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
              <div className="text-xs font-mono">
                <span className="text-slate-500 dark:text-slate-400">Location: </span>
                <span className="text-slate-900 dark:text-slate-200 font-semibold">India</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
