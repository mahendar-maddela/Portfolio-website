'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, GitBranch } from 'lucide-react'

const projects = [
  {
    title: 'Multi-Tenant SaaS EV Charging Platform',
    description: 'Enterprise backend platform for electric vehicle charging networks with OCPP protocol support, real-time monitoring, and multi-tenant architecture.',
    tech: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'OCPP', 'OCPI', 'AWS'],
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Real-Time IoT Data Platform',
    description: 'Scalable IoT backend handling millions of sensor data points with MQTT protocol, real-time analytics, and time-series data storage.',
    tech: ['MQTT', 'WebSockets', 'MySQL', 'AWS', 'React'],
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Enterprise SaaS Backend',
    description: 'Secure multi-tenant backend system with user authentication, role-based access control, billing integration, and comprehensive API documentation.',
    tech: ['Java', 'Spring Boot', 'RDS', 'JWT', 'Docker'],
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Artificial Intelligence (AI) Solutions',
    description: 'Artificial Intelligence (AI) solutions for image classification, object detection, and natural language processing.',
    tech: ['Python', 'Langchain', 'OpenCV', 'OpenAI', 'Docker', 'FastAPI'],
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Payment Processing System',
    description: 'Integrated payment processing with Razorpay, supporting subscriptions, refunds, webhooks, and financial reporting for e-commerce platforms.',
    tech: ['Node.js', 'Razorpay API', 'PostgreSQL', 'Docker'],
    links: { demo: '#', github: '#' },
  },
  // {
  //   title: 'API Gateway & Load Balancer',
  //   description: 'Custom API gateway with request routing, rate limiting, authentication, and monitoring for microservices architecture.',
  //   tech: ['Express.js', 'Nginx', 'Docker', 'Redis',],
  //   links: { demo: '#', github: '#' },
  // },
  {
    title: 'Analytics & Reporting Engine',
    description: 'Real-time analytics engine processing and visualizing large datasets with custom dashboards, exports, and scheduled reporting.',
    tech: ['Python', 'PostgreSQL', 'Redis', 'Cron'],
    links: { demo: '#', github: '#' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="Full-stack solutions I've built and deployed">
      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {projects.map((project) => (
          <motion.div key={project.title} variants={itemVariants}>
            <GlassCard hover className="h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2 gradient-text">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="accent">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-white/10">
                <a href={project.links.demo} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  <ExternalLink size={16} />
                  Demo
                </a>
                <a href={project.links.github} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  <GitBranch size={16} />
                  Code
                </a>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
