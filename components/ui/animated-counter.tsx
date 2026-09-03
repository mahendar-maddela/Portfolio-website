'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2 }: AnimatedCounterProps) {
  const isFloat = end % 1 !== 0
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
            const currentVal = end * progress
            setCount(isFloat ? parseFloat(currentVal.toFixed(1)) : Math.floor(currentVal))

            if (progress < 1) {
              requestAnimationFrame(animateCount)
            } else {
              setCount(end)
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
  }, [end, duration, isFloat])

  return (
    <div ref={elementRef} className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
      {prefix}
      {isFloat ? count.toFixed(1) : count}
      {suffix}
    </div>
  )
}

