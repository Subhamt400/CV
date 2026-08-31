"use client"

import { motion } from 'framer-motion'
import { GraduationCap, Code2, Server, Cpu, UserCheck } from 'lucide-react'

export default function AboutSection() {
  const highlights = [
    {
      icon: <Server className="text-cyan-600 dark:text-cyan-400" size={22} />,
      title: "Backend & Database Architecture",
      description: "Building scalable RESTful APIs in PHP and Node.js with optimized MySQL relational schemas and secure query logic."
    },
    {
      icon: <Code2 className="text-purple-600 dark:text-purple-400" size={22} />,
      title: "Modern Frontend Engineering",
      description: "Crafting fast, responsive web interfaces using React, Next.js, Tailwind CSS, and Framer Motion."
    },
    {
      icon: <Cpu className="text-emerald-600 dark:text-emerald-400" size={22} />,
      title: "IoT & Embedded Systems",
      description: "Developing custom C++ firmware for ESP8266/ESP32 microcontrollers with HTTPS cloud data logging and Gemini AI integration."
    }
  ]

  return (
    <section id="about" className="py-12 my-6">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Intro & Background */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-1 font-semibold">
                <UserCheck size={14} />
                About Me
              </div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-slate-100">
                Engineering Solutions Across Hardware & Cloud
              </h2>
            </div>

            <p className="text-sm sm:text-base muted leading-relaxed">
              I am a software engineer focused on building resilient backend architectures, intuitive web applications, and low-level embedded systems. Driven by an interest in AI-driven technologies, FinTech, and data analytics, I specialize in writing maintainable code, optimizing system performance, and shipping high-impact products that solve complex real-world problems.
            </p>

            {/* Education Badge Card */}
            <div className="glass-card p-4 border border-slate-200 dark:border-slate-800 flex items-start gap-4 bg-white/80 dark:bg-slate-900/60">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">B.Tech Degree</h4>
                <p className="text-xs text-indigo-700 dark:text-indigo-300 font-mono mt-0.5 font-medium">Electrical & Electronics / Engineering</p>
                <p className="text-xs muted mt-1">Focus on Data Structures, Web Development & Microcontrollers.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-1 gap-4">
            {highlights.map((h, idx) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-5 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 bg-white/80 dark:bg-slate-900/60 flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/50 flex-shrink-0">
                  {h.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    {h.title}
                  </h3>
                  <p className="text-xs sm:text-sm muted mt-1 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
