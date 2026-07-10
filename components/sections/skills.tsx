'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { Badge } from '@/components/ui/badge'

const skillsData = {
  'Languages': ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  'Backend': ['Node.js', 'Spring Boot', 'Express.js', 'REST APIs', 'WebSockets'],
  'Frontend': ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Shadcn UI'],
  'Databases': ['MySQL', 'PostgreSQL', 'MongoDB',],
  'Cloud & DevOps': ['AWS (EC2, RDS, S3, SES,Lambda)', 'Docker', 'CI/CD Pipelines', 'Nginx'],
  'Tools & Platforms': ['Git', 'GitHub', 'Postman', 'Redis', 'OCPP', 'MQTT'],
  'Other Skills': ['System Design', 'Microservices', 'Caching', 'Authentication', 'Performance Optimization'],
}

export function SkillsSection() {
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
  }

  return (
    <SectionWrapper id="skills" title="Skills & Expertise" subtitle="Technologies and tools I work with daily">
      <div className="space-y-8">
        {Object.entries(skillsData).map((category) => (
          <motion.div key={category[0]} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">{category[0]}</h3>
            <motion.div className="flex flex-wrap gap-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {category[1].map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Badge variant="primary">{skill}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
