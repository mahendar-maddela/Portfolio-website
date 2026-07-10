import { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, title, subtitle, children, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {title}
            </h2>
            {subtitle && <p className="text-xl text-gray-400">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
