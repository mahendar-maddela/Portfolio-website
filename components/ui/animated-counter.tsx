'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = Date.now()
          const endTime = startTime + duration * 1000

          const animateCount = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / (endTime - startTime), 1)
            setCount(Math.floor(end * progress))

            if (progress < 1) {
              requestAnimationFrame(animateCount)
            }
          }

          requestAnimationFrame(animateCount)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration])

  return (
    <div ref={elementRef} className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {prefix}
      {count}
      {suffix}
    </div>
  )
}
