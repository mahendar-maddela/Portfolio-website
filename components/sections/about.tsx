'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { GlassCard } from '@/components/ui/glass-card'
import { Server, Cloud, Cpu, Database, CheckCircle2, MapPin, Briefcase } from 'lucide-react'

const highlights = [
  {
    icon: Server,
    title: 'Enterprise APIs',
    description: 'Designing and building scalable REST and GraphQL APIs handling high transaction volumes with SLA reliability.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Managing AWS cloud infrastructure, databases, automated deployments, and serverless pipelines.',
  },
  {
    icon: Cpu,
    title: 'Backend Systems',
    description: 'Architecting end-to-end backend solutions with JWT/OAuth authentication, payment webhooks, and IoT messaging.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Optimizing relational database schemas, Redis caching strategies, and time-series sensor data integrity.',
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
        {/* Left Column - Profile Photo Card */}
        <motion.div
          className="lg:col-span-4 flex flex-col items-center justify-between glass-card rounded-2xl p-6 border-white/10 relative overflow-hidden group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/15 shadow-2xl mb-4 bg-[#08090a]">
            <img
              src="/profile.jpg"
              onError={(e) => {
                e.currentTarget.src = "/placeholder-user.jpg"
              }}
              alt="Mahendar Maddela Profile"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 contrast-[1.05]"
            />
            {/* Dark theme vignette blend overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-transparent to-black/30 opacity-70"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,#08090a_95%)] opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/70 backdrop-blur-md text-gray-200 border border-white/15 inline-block shadow-lg">
                Software Developer
              </span>
            </div>
          </div>


          <div className="w-full space-y-2 pt-2 text-center sm:text-left border-t border-white/10">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-gray-400">
              <Briefcase size={14} className="text-blue-400" />
              <span>Full-Stack & Backend Engineer</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-gray-400">
              <MapPin size={14} className="text-emerald-400" />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Narrative & Capabilities */}
        <div className="lg:col-span-8 space-y-6 flex flex-col justify-between">
          <motion.div
            className="glass-card rounded-2xl p-6 sm:p-8 border-white/10 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Architecting Digital Backbones That Scale
            </h3>
            <p className="text-base text-gray-300 leading-relaxed">
              I&apos;m a Software Developer & Fullstack Developer with 2+ years of hands-on experience building enterprise-grade backend systems and scalable APIs.
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              My expertise centers around Node.js backend architecture, AWS cloud management, EV charging OCPP protocols, and database query optimization. I bridge technical complexity with high-availability business needs.
            </p>

            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 size={14} className="text-blue-400" />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>AWS & Cloud</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 size={14} className="text-purple-400" />
                <span>High Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 size={14} className="text-pink-400" />
                <span>IoT & AI Solutions</span>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight) => {
              const Icon = highlight.icon
              return (
                <motion.div key={highlight.title} variants={itemVariants} className="h-full">
                  <GlassCard hover className="h-full flex flex-col justify-between space-y-3 p-5">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white mb-1 tracking-tight">{highlight.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{highlight.description}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}


