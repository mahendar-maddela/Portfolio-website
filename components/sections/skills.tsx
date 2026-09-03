'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { Code, Server, Layout, Database, Cloud, Terminal, Layers, Bot } from 'lucide-react'

const skillsCategories = [
  {
    name: 'Languages & Core Syntax',
    icon: Code,
    color: 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30',
    badgeVariant: 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-400',
    skills: ['Python', 'Java', 'JavaScript (ES6+)', 'TypeScript', 'SQL'],
  },
  {
    name: 'Backend Engineering',
    icon: Server,
    color: 'from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30',
    badgeVariant: 'bg-purple-500/10 text-purple-300 border-purple-500/20 hover:border-purple-400',
    skills: ['Node.js', 'Spring Boot', 'Express.js', 'REST & GraphQL APIs', 'WebSockets', 'Sequelize ORM'],
  },
  {
    name: 'Frontend Development',
    icon: Layout,
    color: 'from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/30',
    badgeVariant: 'bg-pink-500/10 text-pink-300 border-pink-500/20 hover:border-pink-400',
    skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Shadcn UI'],
  },
  {
    name: 'Python & AI Engineering',
    icon: Bot,
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
    badgeVariant: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-400',
    skills: ['Python', 'FastAPI', 'OpenAI API', 'OpenCV', 'Pandas & NumPy'],
  },
  {
    name: 'Databases & Caching',
    icon: Database,
    color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
    badgeVariant: 'bg-amber-500/10 text-amber-300 border-amber-500/20 hover:border-amber-400',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis Caching', 'TimescaleDB / Time-Series'],
  },
  {
    name: 'Cloud Infrastructure & DevOps',
    icon: Cloud,
    color: 'from-indigo-500/20 to-blue-500/20 text-indigo-400 border-indigo-500/30',
    badgeVariant: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:border-indigo-400',
    skills: ['AWS (EC2, RDS, S3, SES, Lambda)', 'Serverless Architecture', 'Docker', 'CI/CD Pipelines', 'Nginx'],
  },
  {
    name: 'Tools & Protocols',
    icon: Terminal,
    color: 'from-cyan-500/20 to-teal-500/20 text-cyan-400 border-cyan-500/30',
    badgeVariant: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:border-cyan-400',
    skills: ['Git & GitHub', 'Postman & Swagger', 'OCPP (EV Charging)', 'MQTT (IoT)', 'Razorpay API'],
  },
  {
    name: 'Architecture & Security',
    icon: Layers,
    color: 'from-violet-500/20 to-purple-500/20 text-violet-400 border-violet-500/30',
    badgeVariant: 'bg-violet-500/10 text-violet-300 border-violet-500/20 hover:border-violet-400',
    skills: ['System Design', 'Microservices', 'Event-Driven Architecture', 'JWT & OAuth 2.0', 'Rate Limiting & Security'],
  },
]

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <SectionWrapper id="skills" title="Skills & Technical Expertise" subtitle="Comprehensive toolkit for crafting robust enterprise software">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {skillsCategories.map((cat) => {
          const Icon = cat.icon
          return (
            <motion.div key={cat.name} variants={cardVariants}>
              <div className="glass-card glass-card-hover rounded-2xl p-6 h-full flex flex-col justify-between space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.color} border flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="font-bold text-base text-white tracking-tight">{cat.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border transition-all duration-300 hover:scale-105 cursor-default ${cat.badgeVariant}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}


