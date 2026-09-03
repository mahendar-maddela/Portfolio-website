import { SocialLinks } from '@/components/ui/social-links'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: 'github' as const,
      href: 'https://github.com/mahendar-maddela',
      label: 'GitHub',
    },
    {
      icon: 'linkedin' as const,
      href: 'https://www.linkedin.com/in/mahendar-maddela-629b33277/',
      label: 'LinkedIn',
    },
    {
      icon: 'email' as const,
      href: 'mailto:mahendar1241@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <footer className="border-t border-white/[0.08] bg-[#090a0d] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                MM
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">Mahendar Maddela</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Software Engineer specializing in scalable Node.js backend systems, AWS cloud solutions, and enterprise APIs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-gray-200 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-gray-200 uppercase tracking-wider mb-4">Connect</h4>
            <p className="text-xs text-gray-400 mb-4">Feel free to connect on GitHub, LinkedIn or via email.</p>
            <SocialLinks links={socialLinks} />
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-gray-500 text-xs">
            © {currentYear} Mahendar Maddela. Architected with Zen precision & React.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs text-gray-400">Hyderabad, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

