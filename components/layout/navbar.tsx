'use client'

import { Menu, X, Send, User, Code2, Briefcase, FolderGit2, Cpu, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Projects', href: '#projects', icon: FolderGit2 },
  { label: 'Tech Stack', href: '#tech-stack', icon: Cpu },
  { label: 'Contact', href: '#contact', icon: Mail },
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

  // Prevent background scrolling when mobile sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Framer Motion Animation Variants for Staggered Links
  const containerVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.08,
      },
    },
  }

  const linkVariants = {
    closed: { opacity: 0, x: 25 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <nav
          className={`max-w-5xl mx-auto rounded-2xl transition-all duration-500 pointer-events-auto ${scrolled || isOpen
              ? 'glass-effect shadow-2xl border-white/15 bg-[#0c0d10]/90 py-2.5 px-6 backdrop-blur-xl'
              : 'bg-transparent py-4 px-6 border border-transparent'
            }`}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-white/25 shadow-md group-hover:scale-105 group-hover:border-blue-400 transition-all flex-shrink-0 bg-[#08090a] relative">
                <img
                  src="/favicon.svg"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder-user.jpg"
                  }}
                  alt="Mahendar Maddela"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors text-sm sm:text-base">
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

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl text-gray-300 hover:text-white bg-white/[0.06] hover:bg-white/12 transition-all border border-white/15 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar & Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/75 backdrop-blur-md md:hidden pointer-events-auto"
            />

            {/* Sidebar Drawer */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[320px] z-50 bg-[#0b0c0e]/95 backdrop-blur-2xl border-l border-white/15 shadow-2xl p-6 flex flex-col justify-between md:hidden pointer-events-auto overflow-y-auto"
            >
              <div className="relative">
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-[#08090a] shadow-inner">
                      <img
                        src="/favicon.svg"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder-user.jpg"
                        }}
                        alt="Mahendar Maddela"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <span className="font-semibold text-white text-sm tracking-tight">
                      Mahendar<span className="text-blue-500">.dev</span>
                    </span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                    aria-label="Close sidebar"
                  >
                    <X size={18} />
                  </motion.button>
                </div>

                {/* Staggered Navigation Links */}
                <motion.div
                  variants={containerVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="py-6 space-y-1.5"
                >
                  <p className="px-3 text-[10px] font-semibold tracking-widest text-blue-400/80 uppercase mb-3">
                    Navigation
                  </p>
                  {navLinks.map((link) => {
                    const IconComponent = link.icon
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        variants={linkVariants}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-500/10 hover:border-blue-500/25 border border-transparent transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                          <span>{link.label}</span>
                        </div>
                        <span className="text-xs text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-[-4px] group-hover:translate-x-0 transition-all">
                          →
                        </span>
                      </motion.a>
                    )
                  })}
                </motion.div>
              </div>

              {/* Bottom Footer / CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="pt-5 border-t border-white/10 space-y-3"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98]"
                >
                  <Send size={15} />
                  <span>Get in Touch</span>
                </a>
                <p className="text-center text-[11px] text-gray-500 pt-1">
                  © {new Date().getFullYear()} Mahendar Maddela
                </p>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}



