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
    'px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2'

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white',
    secondary: 'bg-white/10 hover:bg-white/20 border border-white/20 text-white',
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
