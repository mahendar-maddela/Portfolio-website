'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { GlassCard } from '@/components/ui/glass-card'
import { GradientButton } from '@/components/ui/gradient-button'
import { SocialLinks } from '@/components/ui/social-links'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { toast } from 'sonner'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mahendar1241@gmail.com',
    href: 'mailto:mahendar1241@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9666124136',
    href: 'tel:+91 9666124136',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hyderabad, India',
    href: '#',
  },
]

const socialLinks = [
  {
    icon: 'github' as const,
    href: 'https://github.com/mahendar-maddela',
    label: 'GitHub',
  },
  {
    icon: 'linkedin' as const,
    href: 'https://www.linkedin.com/in/mahendar-maddela-629b33277',
    label: 'LinkedIn',
  },
  {
    icon: 'email' as const,
    href: 'mailto:mahendar1241@gmail.com',
    label: 'Email',
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    toast.error("I'm still working on it!, Please direct email to mahendar1241@gmail.com")
    setFormData({ name: '', email: '', company: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

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
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Let's work together on your next project">
      <motion.div className="grid md:grid-cols-2 gap-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* Contact Info */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <p className="text-lg text-gray-300 mb-8">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>

          <div className="space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              )
            })}
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-4">Connect on social media</p>
            <SocialLinks links={socialLinks} />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <GlassCard hover className="h-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/15 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/15 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/15 transition-all"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/15 transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {submitted && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-3 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 text-sm">
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              <GradientButton variant="primary" onClick={handleSubmit as any} className="w-full">
                <Send size={20} />
                <span>Send Message</span>
              </GradientButton>
            </form>
          </GlassCard>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
