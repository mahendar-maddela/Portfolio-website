'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { GlassCard } from '@/components/ui/glass-card'

const technologies = [
  { name: 'Python', emoji: '🐍', tag: 'Language' },
  { name: 'FastAPI', emoji: '⚡', tag: 'Python Framework' },
  { name: 'OpenAI API', emoji: '🤖', tag: 'AI / ML' },
  { name: 'OpenCV', emoji: '👁️', tag: 'Computer Vision' },
  { name: 'Java', emoji: '☕', tag: 'Language' },
  { name: 'Node.js', emoji: '⚡', tag: 'Backend' },
  { name: 'TypeScript', emoji: '📘', tag: 'Language' },
  { name: 'Express.js', emoji: '🚀', tag: 'Backend' },
  { name: 'Spring Boot', emoji: '🌱', tag: 'Backend' },
  { name: 'MySQL', emoji: '🐬', tag: 'Database' },
  { name: 'PostgreSQL', emoji: '🐘', tag: 'Database' },
  { name: 'MongoDB', emoji: '🍃', tag: 'Database' },
  { name: 'Redis', emoji: '⚡', tag: 'Cache' },
  { name: 'AWS', emoji: '☁️', tag: 'Cloud' },
  { name: 'Docker', emoji: '🐳', tag: 'DevOps' },
  { name: 'REST APIs', emoji: '🌐', tag: 'Protocol' },
  { name: 'Razorpay', emoji: '💳', tag: 'FinTech' },
  { name: 'MQTT', emoji: '📡', tag: 'IoT' },
  { name: 'OCPP', emoji: '🔌', tag: 'EV Platform' },
  { name: 'Postman', emoji: '🚀', tag: 'Testing' },
  { name: 'Nginx', emoji: '⚙️', tag: 'Server' },
  { name: 'Git', emoji: '🔀', tag: 'VCS' },
  { name: 'Linux', emoji: '🐧', tag: 'OS' },
  { name: 'Microservices', emoji: '🏗️', tag: 'Architecture' },
]

export function TechStackSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <SectionWrapper id="tech-stack" title="Tech Stack & Tools" subtitle="Core technologies powering high-reliability applications">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {technologies.map((tech) => (
          <motion.div key={tech.name} variants={itemVariants} whileHover={{ y: -4, scale: 1.03 }}>
            <GlassCard hover className="flex flex-col items-center justify-center p-4 h-full border-white/10 group cursor-default text-center">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {tech.emoji}
              </div>
              <p className="text-xs sm:text-sm font-bold text-white tracking-tight">{tech.name}</p>
              <span className="text-[10px] font-mono text-gray-400 mt-1 uppercase tracking-wider">{tech.tag}</span>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}


