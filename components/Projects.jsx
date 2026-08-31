"use client"

import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { Code2, Filter } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'Professional Work', label: 'Professional' },
    { id: 'AI & Full-Stack', label: 'AI & Web' },
    { id: 'Full-Stack Web', label: 'Full-Stack' },
    { id: 'IoT & Web Development', label: 'IoT & Embedded' }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter || (filter === 'IoT & Web Development' && p.category?.includes('Embedded')))

  return (
    <section id="projects" className="py-12">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-1 font-semibold">
              <Code2 size={14} />
              Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 dark:text-slate-100">
              Featured Projects
            </h2>
            <p className="text-sm muted mt-1 max-w-xl">
              A collection of production applications, embedded IoT solutions, and full-stack software built with modern tools.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800">
            <div className="px-2 text-slate-500 hidden sm:block">
              <Filter size={14} />
            </div>
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  filter === opt.id
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md'
                    : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-300/60 dark:hover:bg-slate-800/50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <ProjectCard key={p.id} index={i} {...p} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
