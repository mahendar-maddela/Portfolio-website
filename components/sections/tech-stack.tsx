'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { GlassCard } from '@/components/ui/glass-card'

const technologies = [
  { name: 'Python', emoji: '🐍' },
  { name: 'Java', emoji: '🐱' },
  { name: 'Node.js', emoji: '⚡' },
  { name: 'TypeScript', emoji: '📘' },
  { name: 'Express.js', emoji: '🚀' },
  { name: 'Spring Boot', emoji: '🚀' },
  { name: 'MySQL', emoji: '🗄️' },
  { name: 'PostgreSQL', emoji: '🗄️' },
  { name: 'MongoDB', emoji: '🍃' },
  { name: 'Redis', emoji: '⚙️' },
  { name: 'AWS', emoji: '☁️' },
  { name: 'Docker', emoji: '📦' },
  { name: 'REST APIs', emoji: '🌐' },
  { name: 'Razorpay', emoji: '💳' },
  { name: 'MQTT', emoji: '📡' },
  { name: 'OCPP', emoji: '🔌' },
  { name: 'Postman', emoji: '📡' },
  { name: 'Nginx', emoji: '⚙️' },
  { name: 'Git', emoji: '🔀' },
  { name: 'Linux', emoji: '🐧' },
  { name: 'Microservices', emoji: '🏗️' },
  // { name: 'Kubernetes', emoji: '⛵' },
  // { name: 'GraphQL', emoji: '🔷' },
]

export function TechStackSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.1,
      rotateZ: 5,
    },
  }

  return (
    <SectionWrapper id="tech-stack" title="Tech Stack" subtitle="Tools and technologies I master">
      <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {technologies.map((tech) => (
          <motion.div key={tech.name} variants={itemVariants} whileHover="hover">
            <GlassCard hover className="flex flex-col items-center justify-center py-6">
              <div className="text-4xl mb-2">{tech.emoji}</div>
              <p className="text-sm font-medium text-center">{tech.name}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
