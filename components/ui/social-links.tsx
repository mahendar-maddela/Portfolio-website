import { GitBranch, Mail, ExternalLink, Briefcase } from 'lucide-react'

interface SocialLink {
  icon: 'github' | 'linkedin' | 'email' | 'portfolio'
  href: string
  label: string
}

interface SocialLinksProps {
  links?: SocialLink[]
  className?: string
}

const defaultLinks: SocialLink[] = [
  {
    icon: 'github',
    href: 'https://github.com',
    label: 'GitHub',
  },
  {
    icon: 'linkedin',
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: 'email',
    href: 'mailto:hello@example.com',
    label: 'Email',
  },
]

export function SocialLinks({ links = defaultLinks, className = '' }: SocialLinksProps) {
  const iconMap = {
    github: GitBranch,
    linkedin: Briefcase,
    email: Mail,
    portfolio: ExternalLink,
  }

  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map((link) => {
        const Icon = iconMap[link.icon]
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="p-3 rounded-xl glass-effect hover:bg-white/15 transition-all duration-300 hover:scale-110"
          >
            <Icon className="w-5 h-5 text-blue-400" />
          </a>
        )
      })}
    </div>
  )
}
