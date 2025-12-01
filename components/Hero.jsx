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
    <section className="pt-7 pb-12 flex items-center justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl text-center px-4"
      >
        <motion.div variants={item} className="flex justify-center mb-6">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <Image 
              src="/images/image.png" 
              alt="Subham Kumar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div variants={item} className="text-sm uppercase tracking-wide muted">Hi, I'm</motion.div>

        <motion.h1 variants={item} className="mt-2 text-4xl sm:text-6xl font-heading font-extrabold leading-tight">
          <span className="block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Subham Kumar</span>
          </span>
        </motion.h1>

        <motion.h2 variants={item} className="mt-4 text-2xl sm:text-3xl font-semibold leading-tight">
          Bridging Reliable Backends with Modern Interfaces.
        </motion.h2>

        <motion.p variants={item} className="mt-4 max-w-2xl mx-auto muted">
          Final Year B.Tech Student & Full-Stack Developer. I combine professional PHP/MySQL
          experience with modern MERN Stack development and IoT innovation.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-blue-400 to-purple-500 text-white font-medium shadow hover:brightness-105"
          >
            View My Work
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-4 py-3 rounded-md border transition-colors"
            style={{ borderColor: 'var(--muted)', color: 'var(--text)' }}
          >
            <Download className="mr-2" size={16} />
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
