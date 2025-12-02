"use client"

import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} index={i} {...p} />
        ))}
      </div>
    </section>
  )
}
