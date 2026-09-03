'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { GlassCard } from '@/components/ui/glass-card'
import { ExternalLink, GitBranch, FolderCode, ArrowUpRight } from 'lucide-react'
import { toast } from 'sonner'

const projects = [
  {
    title: 'Multi-Tenant SaaS EV Charging Platform',
    description: 'Enterprise backend platform for electric vehicle charging networks with OCPP protocol support, real-time monitoring, and multi-tenant architecture.',
    tech: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'OCPP', 'OCPI', 'AWS'],
    links: { demo: 'https://github.com/mahendar-maddela', github: 'https://github.com/mahendar-maddela' },
  },
  {
    title: 'Real-Time IoT Data Platform',
    description: 'Scalable IoT backend handling millions of sensor data points with MQTT protocol, real-time analytics, and time-series data storage.',
    tech: ['MQTT', 'WebSockets', 'MySQL', 'AWS', 'React'],
    links: { demo: 'https://github.com/mahendar-maddela', github: 'https://github.com/mahendar-maddela' },
  },
  {
    title: 'Enterprise SaaS Backend',
    description: 'Secure multi-tenant backend system with user authentication, role-based access control, billing integration, and comprehensive API documentation.',
    tech: ['Java', 'Spring Boot', 'RDS', 'JWT', 'Docker'],
    links: { demo: 'https://github.com/mahendar-maddela', github: 'https://github.com/mahendar-maddela' },
  },
  {
    title: 'Artificial Intelligence (AI) Solutions',
    description: 'Artificial Intelligence (AI) solutions for image classification, object detection, and natural language processing.',
    tech: ['Python', 'Langchain', 'OpenCV', 'OpenAI', 'Docker', 'FastAPI'],
    links: { demo: 'https://github.com/mahendar-maddela', github: 'https://github.com/mahendar-maddela' },
  },
  {
    title: 'Payment Processing System',
    description: 'Integrated payment processing with Razorpay, supporting subscriptions, refunds, webhooks, and financial reporting for e-commerce platforms.',
    tech: ['Node.js', 'Razorpay API', 'PostgreSQL', 'Docker'],
    links: { demo: 'https://github.com/mahendar-maddela', github: 'https://github.com/mahendar-maddela' },
  },
  {
    title: 'Analytics & Reporting Engine',
    description: 'Real-time analytics engine processing and visualizing large datasets with custom dashboards, exports, and scheduled reporting.',
    tech: ['Python', 'PostgreSQL', 'Redis', 'Cron'],
    links: { demo: 'https://github.com/mahendar-maddela', github: 'https://github.com/mahendar-maddela' },
  },
]

export function ProjectsSection() {
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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const handleLinkClick = (e: React.MouseEvent, type: string) => {
    // Keep link functional or toast friendly notification
  }

  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="Scalable backend platforms, IoT systems, and enterprise solutions">
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={itemVariants} className="h-full">
            <GlassCard hover className="h-full flex flex-col justify-between group border-white/10 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <FolderCode size={20} />
                  </div>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>

              <div className="space-y-4 pt-6 mt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-1 text-xs">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Overview
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    <GitBranch size={14} />
                    Repository
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

