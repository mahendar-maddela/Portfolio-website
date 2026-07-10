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
    <footer className="border-t border-white/10 bg-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mahendar Maddela</h3>
            <p className="text-gray-400 text-sm">Full stack developer</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <SocialLinks links={socialLinks} />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Mahendar Maddela. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
