"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava
} from 'react-icons/fa'
import {
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiArduino,
  SiTailwindcss,
  SiExpress,
  SiGit,
  SiPostman
} from 'react-icons/si'
import { Sparkles } from 'lucide-react'

const skills = [
  { name: 'HTML5', category: 'frontend', icon: <FaHtml5 size={32} color="#e34c26" /> },
  { name: 'CSS3', category: 'frontend', icon: <FaCss3Alt size={32} color="#264de4" /> },
  { name: 'JavaScript', category: 'frontend', icon: <SiJavascript size={32} color="#f0db4f" /> },
  { name: 'React', category: 'frontend', icon: <FaReact size={32} color="#61dbfb" /> },
  { name: 'Next.js', category: 'frontend', icon: <SiNextdotjs size={32} className="text-slate-900 dark:text-slate-100" /> },
  { name: 'Tailwind CSS', category: 'frontend', icon: <SiTailwindcss size={32} color="#38bdf8" /> },
  { name: 'PHP', category: 'backend', icon: <FaPhp size={36} color="#8993be" /> },
  { name: 'MySQL', category: 'backend', icon: <SiMysql size={36} color="#00758f" /> },
  { name: 'Node.js', category: 'backend', icon: <FaNodeJs size={32} color="#3c873a" /> },
  { name: 'Express', category: 'backend', icon: <SiExpress size={32} className="text-slate-900 dark:text-slate-200" /> },
  { name: 'ESP8266 & C++', category: 'iot', icon: <SiArduino size={32} color="#00979d" /> },
  { name: 'Python', category: 'backend', icon: <FaPython size={32} color="#306998" /> },
  { name: 'Java', category: 'languages', icon: <FaJava size={32} color="#f89820" /> },
  { name: 'Git & GitHub', category: 'tools', icon: <SiGit size={32} color="#f05032" /> },
  { name: 'REST APIs', category: 'tools', icon: <SiPostman size={32} color="#ff6c37" /> }
]

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('all')

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'iot', label: 'IoT & Microcontrollers' },
    { id: 'tools', label: 'Tools & APIs' }
  ]

  const filteredSkills = activeTab === 'all'
    ? skills
    : skills.filter(s => s.category === activeTab || (activeTab === 'backend' && s.category === 'languages'))

  const marqueeItems = [...skills, ...skills]

  return (
    <section id="skills" className="py-12 border-t border-b border-slate-300/80 dark:border-slate-800/60 my-10 bg-slate-100/50 dark:bg-slate-950/40 relative">
      <div className="container">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-700 dark:text-purple-400 uppercase tracking-widest mb-1 font-semibold">
              <Sparkles size={14} />
              Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-slate-100">
              Tech Stack & Ecosystem
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-300/60 dark:hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Display Mode: Infinite Marquee when 'all' tab is selected */}
        {activeTab === 'all' ? (
          <div className="w-full overflow-hidden marquee-mask py-4">
            <motion.div
              className="flex items-center gap-6"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
            >
              {marqueeItems.map((s, idx) => (
                <div
                  key={`${s.name}-${idx}`}
                  className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/50 hover:bg-white dark:hover:bg-slate-800/90 transition-all duration-200 group shadow-sm"
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {s.icon}
                  </div>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200 font-mono">
                    {s.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          /* Grid View when a specific category tab is filtered */
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-2"
          >
            {filteredSkills.map((s) => (
              <div
                key={s.name}
                className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 group border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 bg-white/80 dark:bg-slate-900/60"
              >
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors">
                  {s.icon}
                </div>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200 font-mono">
                  {s.name}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
