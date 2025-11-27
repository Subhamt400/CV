"use client"

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function ProjectCard({ id, title, category, description, techStack = [], liveLink = null, repoLink = null, image = '', index = 0 }){
  const imageSrc = image || ''
  const githubLink = repoLink || null
  const live = liveLink || null
  return (
    <motion.article
      initial={{ opacity: 0, y: 8, scale: 0.995 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20, delay: index * 0.08 }}
      className="card overflow-hidden"
    >
      {imageSrc && (
        <div className="w-full h-40 sm:h-44 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 overflow-hidden rounded-md relative">
          <Image src={imageSrc} alt={`${title} cover`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
        </div>
      )}

      <div className="mt-4 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>{title}</h3>
            {category && <span className="text-xs px-2 py-1 rounded" style={{ color: 'var(--muted)', backgroundColor: 'var(--card-border)' }}>{category}</span>}
          </div>
          {description && <p className="mt-2 text-sm muted">{description}</p>}
        </div>

        <div className="flex items-center gap-3">
          {githubLink ? (
            <a href={githubLink} className="text-neutral-400 hover:text-neutral-200" aria-label="Repository" target="_blank" rel="noreferrer">
              <Github />
            </a>
          ) : null}
          {live ? (
            <a href={live} className="text-neutral-400 hover:text-neutral-200" aria-label="Live demo" target="_blank" rel="noreferrer">
              <ExternalLink />
            </a>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {techStack?.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--card-border)', color: 'var(--muted)' }}>{t}</span>
        ))}
      </div>
    </motion.article>
  )
}
