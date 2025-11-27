"use client"

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
  SiArduino
} from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={40} className="text-gray-400" /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} className="text-gray-400" /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} className="text-gray-400" /> },
  { name: 'PHP', icon: <FaPhp size={40} className="text-gray-400" /> },
  { name: 'MySQL', icon: <SiMysql size={40} className="text-gray-400" /> },
  { name: 'React', icon: <FaReact size={40} className="text-gray-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-gray-400" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-gray-400" /> },
  { name: 'Arduino', icon: <SiArduino size={40} className="text-gray-400" /> },
  { name: 'Python', icon: <FaPython size={40} className="text-gray-400" /> },
  { name: 'Java', icon: <FaJava size={40} className="text-gray-400" /> }
]

export default function TechStack(){
  // Duplicate in render for seamless marquee
  const rendered = [...skills, ...skills]

  return (
    <div className="w-full overflow-hidden py-6">
      <motion.div
        className="flex items-center"
        // animate x from 0% to -50% so the duplicated set scrolls seamlessly
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
      >
        {rendered.map((s, idx) => (
          <div key={`${s.name}-${idx}`} className="flex flex-col items-center justify-center px-10">
            <div className="flex items-center justify-center">{s.icon}</div>
            <div className="text-sm mt-2 muted">{s.name}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
