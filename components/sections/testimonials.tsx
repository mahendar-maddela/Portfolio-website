'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { GlassCard } from '@/components/ui/glass-card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Mahendar is an exceptional backend engineer who consistently delivers high-quality, scalable solutions. His expertise in APIs and cloud infrastructure is impressive.',
    author: 'Sarah Chen',
    title: 'CTO at TechCorp',
    rating: 5,
  },
  {
    quote: 'Working with Mahendar on the IoT platform was seamless. His system design decisions and attention to performance made a huge difference in our project success.',
    author: 'Marcus Johnson',
    title: 'Product Manager at IoTSystems',
    rating: 5,
  },
  {
    quote: 'His knowledge of payment systems and Stripe integration saved us weeks of development time. Highly recommended for any backend challenges.',
    author: 'Elena Rodriguez',
    title: 'Founder at PaymentHub',
    rating: 5,
  },
]

export function TestimonialsSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <SectionWrapper id="testimonials" title="Testimonials" subtitle="What others say about working with me">
      <motion.div className="grid md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.author} variants={itemVariants}>
            <GlassCard hover className="h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 flex-grow italic">&quot;{testimonial.quote}&quot;</p>

              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
