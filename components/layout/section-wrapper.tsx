'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, title, subtitle, children, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-24 px-4 sm:px-6 lg:px-8 relative ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.div
            className="mb-14 text-center space-y-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="inline-block px-3 py-1 text-xs font-mono tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full mb-1">
              {id}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {title}
            </h2>
            {subtitle && <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

