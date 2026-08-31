"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2, Terminal } from 'lucide-react'
import Image from 'next/image'

export default function ProjectCard({
  id,
  title,
  category,
  description,
  techStack = [],
  liveLink = null,
  repoLink = null,
  image = '',
  index = 0
}) {
  const [imageError, setImageError] = useState(false)
  const githubLink = repoLink || null
  const live = liveLink || null

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: index * 0.06 }}
      className="glass-card flex flex-col h-full overflow-hidden border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/50 bg-white/90 dark:bg-slate-900/75 group shadow-sm"
    >
      {/* Project Banner / Thumbnail */}
      <div className="w-full h-48 sm:h-52 bg-slate-100 dark:bg-slate-950 relative overflow-hidden border-b border-slate-200 dark:border-slate-800/60">
        {image && !imageError ? (
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          /* Tech / Code Fallback Graphic when image isn't available */
          <div className="w-full h-full flex flex-col justify-between p-4 bg-gradient-to-br from-slate-100 via-indigo-50/50 to-slate-200 dark:from-slate-950 dark:via-indigo-950/40 dark:to-slate-900">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] text-indigo-700 dark:text-indigo-400 font-semibold flex items-center gap-1">
                <Terminal size={12} /> project_{id}.ts
              </span>
            </div>

            <div className="my-auto py-2">
              <div className="text-sm font-mono font-bold text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:to-purple-400 flex items-center gap-2">
                <Code2 size={18} className="text-cyan-600 dark:text-cyan-400" />
                {title}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                {description}
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>{category || "Software Project"}</span>
              <span className="text-indigo-700 dark:text-indigo-400 font-medium">Subham Kumar</span>
            </div>
          </div>
        )}

        {/* Hover Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          {/* Header Row: Category Badge & Title */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
              {title}
            </h3>
            {category && (
              <span className="flex-shrink-0 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-medium">
                {category}
              </span>
            )}
          </div>

          {/* Description */}
          {description && (
            <p className="text-sm muted leading-relaxed line-clamp-3">
              {description}
            </p>
          )}
        </div>

        {/* Bottom Section: Tech Badges & Action Links */}
        <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800/60">
          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5">
            {techStack?.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* External Links */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub repository for ${title}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Github size={15} />
                  <span>Code</span>
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Live demo for ${title}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold transition-colors"
                >
                  <ExternalLink size={15} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            {(!githubLink && !live) && (
              <span className="text-[11px] font-mono text-slate-500 italic">Internal / Hardware</span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
