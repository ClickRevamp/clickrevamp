'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion, Variants, Easing } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1] as Easing,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.2,
        ease: [0.4, 0.0, 0.2, 1] as Easing
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1] as Easing
      }
    },
    exit: { 
      y: 10, 
      opacity: 0,
      transition: { 
        duration: 0.2 
      }
    }
  }

  const navigationItems = [
    { name: 'CREATE', href: '/create' },
    { name: 'REVAMP', href: '/revamp' },
    { name: 'AUTOMATE', href: '/automate' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] as Easing }}
          >
            <Link href="/" className="text-2xl font-bold text-white hover:text-[#e6ff00] transition-colors duration-300">
              ClickRevamp
            </Link>
          </motion.div>

          {/* Desktop Navigation - Center */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] as Easing }}
          >
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#999999] hover:text-white transition-colors duration-300 font-medium tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] as Easing }}
          >
            <Link 
              href="#contact"
              className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#e6ff00] to-[#00ff95] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#e6ff00]/30 transition-all duration-300 hover:scale-105"
            >
              Let&apos;s Chat
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-[#999999] hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-[#0c0c0c]/95 backdrop-blur-md border-b border-white/10"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-6 py-6 space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className="block text-[#999999] hover:text-white transition-colors duration-300 font-medium tracking-wide py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} className="pt-4">
                  <Link 
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#e6ff00] to-[#00ff95] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#e6ff00]/30 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Let&apos;s Chat
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
} 