import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  return (
    <div
      className={`glass-card ${hover ? 'hover:bg-white/10 transition-all duration-300' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
