'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 backdrop-blur-md border-b border-white/5 bg-black/20"
    >
      <div className="max-w-[1300px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="text-xl md:text-2xl font-bold text-white tracking-tight"
        >
          ClickRevamp
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {(['CREATE', 'REVAMP', 'AUTOMATE'] as const).map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 text-sm font-medium text-white/80 hover:text-white border border-white/10 rounded-full backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:shadow-lg hover:shadow-white/10"
            >
              {item}
            </motion.button>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="relative px-6 py-2.5 bg-gradient-to-r from-[#d4ff3f] to-[#00ff95] text-black font-semibold rounded-full hover:shadow-xl hover:shadow-[#d4ff3f]/25 transition-all duration-300 border-0 overflow-hidden group">
            <span className="relative z-10">Let's Chat</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#e6ff00] to-[#00ffae] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </motion.button>
      </div>
    </motion.header>
  )
} 