'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    title: 'Enterprise Backend APIs',
    description: 'Designed and implemented RESTful APIs serving millions of requests. Built authentication systems, payment integrations, and complex data validation layers.',
    highlights: ['High-performance API architecture', 'Database design', 'Razorpay Payment integration', 'JWT authentication', '99.9% uptime SLA'],
  },
  {
    title: 'EV Charging Infrastructure',
    description: 'Developed backend systems for electric vehicle charging networks using OCPP protocol. Managed real-time monitoring, billing, and user management for thousands of charging stations.',
    highlights: ['OCPP protocol implementation', 'OCPI integration', 'Real-time monitoring systems', 'Billing & analytics', 'AWS infrastructure'],
  },
  {
    title: 'IoT & MQTT Solutions',
    description: 'Built scalable IoT backend systems handling millions of sensor data points. Implemented real-time data processing and storage solutions for connected devices.',
    highlights: ['MQTT broker setup', 'Real-time data processing', 'Time-series databases', 'Device management'],
  },
  {
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
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <SectionWrapper id="experience" title="Experience Highlights" subtitle="Key projects and areas of expertise">
      <motion.div className="space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {experiences.map((exp) => (
          <motion.div key={exp.title} variants={itemVariants}>
            <GlassCard hover>
              <h3 className="text-2xl font-semibold mb-2 gradient-text">{exp.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight) => (
                  <Badge key={highlight} variant="secondary">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
