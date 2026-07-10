'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { GradientButton } from '@/components/ui/gradient-button'
import { toast } from "sonner";

const stats = [
  { value: 2, label: 'Years Experience', suffix: '+' },
  { value: 20, label: 'APIs Built', suffix: '+' },
  { value: 6, label: 'Projects', suffix: '+' },
  { value: 99.9, label: 'Uptime %', suffix: '' },
]

const floatingIcons = ['⚙️', '🔧', '📡', '💾', '🚀', '🌐']

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const downloadResume = () => {
    toast.error("I'm still working on it!")
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-20"></div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={{ x: Math.random() * 400 - 200, y: Math.random() * 400 - 200, opacity: 0 }}
            animate={{
              x: Math.random() * 600 - 300,
              y: Math.random() * 600 - 300,
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="block text-white mb-2">Hey, I&apos;m</span>
            <span className="gradient-text inline-block">Mahendar Maddela</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">Software Engineer</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Building scalable APIs, managing cloud infrastructure, and solving complex backend challenges. 2+ years of expertise in Node.js, enterprise systems, and IoT solutions.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <GradientButton href="#projects" variant="primary">
            <span>View My Projects</span>
            <ArrowRight size={20} />
          </GradientButton>
          <GradientButton variant="secondary" onClick={downloadResume}>
            <Download size={20} />
            <span>Download Resume</span>
          </GradientButton>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="flex justify-center items-baseline gap-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-gray-400">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-white/50 rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
