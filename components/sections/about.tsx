'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { GlassCard } from '@/components/ui/glass-card'
import { Server, Cloud, Cpu, Database, CheckCircle2 } from 'lucide-react'

const highlights = [
  {
    icon: Server,
    title: 'Enterprise APIs',
    description: 'Designing and building scalable REST and GraphQL APIs that handle millions of requests with high reliability.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Setting up and managing AWS infrastructure, databases, and deployment pipelines for production systems.',
  },
  {
    icon: Cpu,
    title: 'Backend Systems',
    description: 'Architecting complete backend solutions with authentication, payment processing, and real-time features.',
  },
  {
    icon: Database,
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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <SectionWrapper id="about" title="About Me" subtitle="Passionate about scalable architecture & resilient engineering">
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column - Narrative */}
        <motion.div
          className="lg:col-span-6 glass-card rounded-2xl p-8 flex flex-col justify-between border-white/10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Architecting Digital Backbones That Scale
            </h3>
            <p className="text-base text-gray-300 leading-relaxed">
              I&apos;m a Software Engineer & Fullstack Developer with 2+ years of hands-on experience building enterprise-grade backend systems and scalable APIs.
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              My expertise centers around Node.js backend architecture, AWS cloud management, EV charging OCPP protocols, and database query optimization. I bridge technical complexity with high-availability business needs.
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              Beyond engineering, I prioritize clean code principles, automated microservices, and continuous performance tuning.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 size={16} className="text-blue-400" />
              <span>Clean Code Advocate</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>AWS & Cloud Operations</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 size={16} className="text-purple-400" />
              <span>High Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 size={16} className="text-pink-400" />
              <span>IoT & Real-Time Data</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Highlight Cards Grid */}
        <motion.div
          className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight) => {
            const Icon = highlight.icon
            return (
              <motion.div key={highlight.title} variants={itemVariants} className="h-full">
                <GlassCard hover className="h-full flex flex-col justify-between space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1 tracking-tight">{highlight.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{highlight.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

