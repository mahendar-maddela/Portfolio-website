'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles, Code2, Server, Cpu, Database, Cloud, Bot, Snowflake,  } from 'lucide-react'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { GradientButton } from '@/components/ui/gradient-button'
import { toast } from "sonner"
import { useEffect, useState } from 'react'

const stats = [
  { value: 2, label: 'Years Experience', suffix: '+' },
  { value: 100, label: 'APIs Built', suffix: '+' },
  { value: 6, label: 'Projects', suffix: '+' },
  { value: 99.9, label: 'Uptime %', suffix: '' },
]

// Deterministic float positions to avoid SSR hydration mismatch
const floatItems = [
  { icon: Code2, label: 'Node.js', top: '15%', left: '8%', delay: 0 },
  { icon: Snowflake, label: 'Python', top: '45%', left: '12%', delay: 1.5 },
  { icon: Server, label: 'REST APIs', top: '22%', right: '10%', delay: 1 },
  { icon: Cpu, label: 'IoT / MQTT', bottom: '25%', left: '12%', delay: 2 },
  { icon: Database, label: 'SQL / Databases', bottom: '30%', right: '8%', delay: 1.5 },
  { icon: Cloud, label: 'AWS Cloud', top: '60%', left: '6%', delay: 0.5 },
  { icon: Bot, label: 'AI / ML', top: '35%', right: '12%', delay: 1.5 },
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const downloadResume = () => {
    toast.error("Resume document is being updated! Please reach out directly via email.")
  }

  return (
    <section className="min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/15 to-purple-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Floating Tech Badges (Deterministic client-side keyframes) */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
          {floatItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                className="absolute px-3 py-1.5 rounded-full glass-effect text-xs text-gray-300 font-mono flex items-center gap-2 shadow-lg border-white/10"
                style={{
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom,
                }}
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: item.delay,
                }}
              >
                <Icon size={14} className="text-blue-400" />
                <span>{item.label}</span>
              </motion.div>
            )
          })}
        </div>
      )}

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10 space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Status Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center justify-center">
          <div className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md flex items-center gap-2.5 shadow-inner">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-300 tracking-wide">
              Available for Software Engineering Roles & Projects
            </span>
            <Sparkles size={14} className="text-amber-400 ml-0.5" />
          </div>
        </motion.div>


        {/* Main Heading */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="block text-gray-200 text-2xl sm:text-3xl font-medium mb-3">Hello, I&apos;m</span>
            <span className="gradient-text inline-block drop-shadow-sm">Mahendar Maddela</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-400/90 font-medium tracking-wide">
            Software Engineer & Full-Stack Developer
          </p>
        </motion.div>


        {/* Bio Paragraph */}
        <motion.div variants={itemVariants}>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building scalable APIs, architecting cloud infrastructure, and engineering resilient backend solutions.
            2+ years of hands-on expertise in Node.js, Spring Boot, IoT OCPP platforms, and AWS cloud ecosystem.
          </p>
        </motion.div>

        {/* CTA Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <GradientButton href="#projects" variant="primary">
            <span>Explore Projects</span>
            <ArrowRight size={18} />
          </GradientButton>
          <GradientButton variant="secondary" onClick={downloadResume}>
            <Download size={18} />
            <span>Download Resume</span>
          </GradientButton>
        </motion.div>

        {/* Highlight Stats Grid */}
        <motion.div variants={itemVariants} className="pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex justify-center items-baseline gap-0.5">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <p className="text-xs font-medium text-gray-400 mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          className="pt-10 flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
            <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-9 border border-white/20 rounded-full flex items-start justify-center p-1">
              <motion.div
                className="w-1 h-2 bg-blue-400 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

