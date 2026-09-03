import { ReactNode } from 'react'

interface GradientButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  target?: string
  className?: string
  variant?: 'primary' | 'secondary'
}

export function GradientButton({
  children,
  onClick,
  href,
  target,
  className = '',
  variant = 'primary',
}: GradientButtonProps) {
  const baseClasses =
    'relative px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] inline-flex items-center justify-center gap-2 overflow-hidden shadow-lg'

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-blue-500/20 hover:shadow-blue-500/35 border border-white/10',
    secondary:
      'bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white backdrop-blur-md hover:border-white/30',
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

