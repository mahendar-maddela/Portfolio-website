'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { GlassCard } from '@/components/ui/glass-card'
import { Zap, ShieldCheck, Cpu, Bot, Check } from 'lucide-react'

const experiences = [
  {
    icon: Zap,
    accent: 'from-blue-500 to-indigo-500',
    title: 'Enterprise Backend APIs',
    description: 'Designed and implemented RESTful APIs serving millions of requests. Built authentication systems, payment integrations, and complex data validation layers.',
    highlights: ['High-performance API architecture', 'Database design', 'Razorpay Payment integration', 'JWT authentication', '99.9% uptime SLA'],
  },
  {
    icon: ShieldCheck,
    accent: 'from-purple-500 to-pink-500',
    title: 'EV Charging Infrastructure',
    description: 'Developed backend systems for electric vehicle charging networks using OCPP protocol. Managed real-time monitoring, billing, and user management for thousands of charging stations.',
    highlights: ['OCPP protocol implementation', 'OCPI integration', 'Real-time monitoring systems', 'Billing & analytics', 'AWS infrastructure'],
  },
  {
    icon: Cpu,
    accent: 'from-emerald-500 to-teal-500',
    title: 'IoT & MQTT Solutions',
    description: 'Built scalable IoT backend systems handling millions of sensor data points. Implemented real-time data processing and storage solutions for connected devices.',
    highlights: ['MQTT broker setup', 'Real-time data processing', 'Time-series databases', 'Device management'],
  },
  {
    icon: Bot,
    accent: 'from-amber-500 to-orange-500',
    title: 'Artificial Intelligence (AI) Solutions',
    description: 'Developed AI solutions for image classification, object detection, and natural language processing. Implemented machine learning models for advanced tasks.',
    highlights: ['Image classification', 'Object detection', 'Video analysis', 'Natural language processing', 'Machine learning models'],
  }
]

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <SectionWrapper id="experience" title="Experience & Expertise Highlights" subtitle="Key domain capabilities and battle-tested achievements">
      <motion.div
        className="space-y-6 relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {experiences.map((exp, idx) => {
          const Icon = exp.icon
          return (
            <motion.div key={exp.title} variants={itemVariants} className="relative">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full bg-[#08090a] border-2 border-blue-400 flex items-center justify-center shadow-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              </div>

              <GlassCard hover className="relative overflow-hidden group border-white/10">
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${exp.accent}`}></div>

                <div className="pl-2 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{exp.title}</h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{exp.description}</p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.05] text-gray-300 border border-white/10 hover:border-white/20 transition-colors"
                      >
                        <Check size={12} className="text-blue-400" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}

