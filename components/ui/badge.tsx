interface BadgeProps {
  children: string
  variant?: 'default' | 'primary' | 'secondary' | 'accent'
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-white/10 text-white border border-white/20',
    primary: 'bg-blue-500/20 text-blue-200 border border-blue-500/30',
    secondary: 'bg-purple-500/20 text-purple-200 border border-purple-500/30',
    accent: 'bg-pink-500/20 text-pink-200 border border-pink-500/30',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
