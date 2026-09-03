'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { GlassCard } from '@/components/ui/glass-card'
import { GradientButton } from '@/components/ui/gradient-button'
import { SocialLinks } from '@/components/ui/social-links'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
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
    href: 'tel:+919666124136',
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
    setSubmitted(true)
    toast.error("Form submission is under maintenance. Please send a direct email to  mahendar1241@gmail.com")
    // toast.success("Message recorded! Feel free to also send a direct email to mahendar1241@gmail.com")
    setFormData({ name: '', email: '', company: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Available for engineering opportunities, consultations & collaborations">
      <motion.div
        className="grid lg:grid-cols-12 gap-8 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Contact Info Side */}
        <motion.div className="lg:col-span-5 space-y-6" variants={itemVariants}>
          <div className="glass-card rounded-2xl p-6 border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Let&apos;s Connect</h3>
                <p className="text-xs text-gray-400">Response guaranteed within 24 hours</p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Whether you have a question about backend infrastructure, EV platform architecture, full stack roles, or just want to connect—my inbox is always open.
            </p>

            <div className="space-y-3 pt-2">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-3.5 glass-effect rounded-xl hover:border-blue-500/30 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">{info.label}</p>
                      <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">Social Handles</p>
              <SocialLinks links={socialLinks} />
            </div>
          </div>
        </motion.div>

        {/* Contact Form Side */}
        <motion.div className="lg:col-span-7" variants={itemVariants}>
          <GlassCard className="border-white/10 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                    Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                    Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                  Company / Organization (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {/* Thank you! Your message has been logged successfully. */}
                  Please send a direct email to  mahendar1241@gmail.com
                </motion.div>
              )}

              <GradientButton variant="primary" onClick={handleSubmit as any} className="w-full mt-2">
                <Send size={16} />
                <span>Send Message</span>
              </GradientButton>
            </form>
          </GlassCard>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

