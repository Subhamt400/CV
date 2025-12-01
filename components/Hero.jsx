"use client"

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Image from 'next/image'
export default function Hero() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="pt-5 pb-20 flex items-center justify-center min-h-[60vh]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl text-center px-4"
      >
        <motion.div variants={item} className="flex justify-center mb-8">
          {/* Cyberpunk Avatar Border */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[var(--neon-cyan)] shadow-[0_0_20px_rgba(0,243,255,0.3)]">
            <Image 
              src="/images/image.png" 
              alt="Subham Kumar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div variants={item} className="text-sm uppercase tracking-[0.2em] text-[var(--neon-cyan)] mb-2 font-mono">
          // System.Init: Profile_Loaded
        </motion.div>

        <motion.h1 variants={item} className="mt-2 text-5xl sm:text-7xl font-heading font-extrabold leading-none tracking-tighter">
          <span className="block text-gradient">SUBHAM KUMAR</span>
        </motion.h1>

        <motion.h2 variants={item} className="mt-6 text-xl sm:text-2xl font-mono text-[var(--neon-pink)]">
          &lt;Bridging Backend_Logic with Modern_UI /&gt;
        </motion.h2>

        <motion.p variants={item} className="mt-6 max-w-2xl mx-auto text-slate-400 font-mono text-sm sm:text-base leading-relaxed border-l-2 border-[var(--neon-cyan)] pl-4 text-left sm:text-center sm:border-none sm:pl-0">
          Final Year B.Tech Student & Full-Stack Developer. I combine professional <span className="text-[var(--neon-cyan)]">PHP/MySQL</span> experience with modern <span className="text-[var(--neon-cyan)]">MERN Stack</span> development and IoT innovation.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#projects"
            className="btn-neon px-8 py-3 w-full sm:w-auto font-bold tracking-widest bg-[rgba(0,243,255,0.1)]"
          >
            Initialize_Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center px-8 py-3 w-full sm:w-auto text-slate-300 hover:text-white transition-colors border border-slate-700 hover:border-slate-500 font-mono text-sm"
          >
            <Download className="mr-2" size={16} />
            DOWNLOAD RESUME
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
