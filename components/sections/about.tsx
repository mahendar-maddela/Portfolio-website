'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { GlassCard } from '@/components/ui/glass-card'

const highlights = [
  {
    title: 'Enterprise APIs',
    description: 'Designing and building scalable REST and GraphQL APIs that handle millions of requests with high reliability.',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Setting up and managing AWS infrastructure, databases, and deployment pipelines for production systems.',
  },
  {
    title: 'Backend Systems',
    description: 'Architecting complete backend solutions with authentication, payment processing, and real-time features.',
  },
  {
    title: 'Database Design',
    description: 'Optimizing database schemas, implementing caching strategies, and ensuring data integrity at scale.',
  },
]

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <SectionWrapper id="about" title="About Me" className="bg-white/5 rounded-3xl my-12">
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m a Fullstack Developer with 2+ years of experience building enterprise-grade solutions. My journey started with a passion for solving complex technical challenges and has evolved into architecting scalable systems that power real-world applications.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in Node.js backend development, cloud infrastructure on AWS, and database optimization. Whether it&apos;s building RESTful APIs, implementing payment systems, or managing IoT infrastructure, I bring a data-driven approach to every project.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Beyond coding, I&apos;m passionate about clean architecture, performance optimization, and mentoring other engineers. I believe in writing maintainable code and building systems that scale.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight) => (
            <motion.div key={highlight.title} variants={itemVariants}>
              <GlassCard hover>
                <h3 className="font-semibold mb-2 gradient-text">{highlight.title}</h3>
                <p className="text-sm text-gray-400">{highlight.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
