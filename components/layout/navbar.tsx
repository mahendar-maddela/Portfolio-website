'use client'

import { Menu, X, Terminal } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <nav
        className={`max-w-5xl mx-auto rounded-2xl transition-all duration-500 pointer-events-auto ${
          scrolled
            ? 'glass-effect shadow-2xl border-white/15 bg-[#0c0d10]/80 py-2.5 px-6'
            : 'bg-transparent py-4 px-6 border border-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
              MM
            </div>
            <span className="font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              Mahendar<span className="text-blue-500">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-xs font-medium px-4 py-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20 transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden pt-4 pb-2 space-y-1 border-t border-white/10 mt-3"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2.5 rounded-xl text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

