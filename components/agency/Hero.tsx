'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export const Hero = () => {
  return (
    <main className="relative min-h-screen bg-[#0c0c0c] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(212,255,63,0.1)_1px,transparent_1px)] [background-size:50px_50px] opacity-30" />
      
      {/* Glowing Orb Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#d4ff3f]/10 via-[#00ff95]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 pt-96 pb-20 text-center">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.9]">
            Conversion-Focused
            <br />
            Sites
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-gradient-to-r from-[#d4ff3f] via-[#e6ff00] to-[#00ff95] bg-clip-text text-transparent animate-gradient"
              style={{ backgroundSize: '200% 200%' }}
            >
              That Convert
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We redesign your website to drive more conversions, bookings,
          and sales. <span className="text-white font-semibold">No templates. No compromises.</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-[#d4ff3f] to-[#00ff95] text-black rounded-full hover:shadow-2xl hover:shadow-[#d4ff3f]/30 transition-all duration-300 border-0 overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
                              <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-black" />
                  Start Your Redesign
                </span>
              <ArrowRight className="w-5 h-5 text-black" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#e6ff00] to-[#00ffae] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>

        {/* Trust Logos - Simple Version */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="space-y-6 mb-16"
        >
          <p className="text-xs text-white/40 uppercase tracking-wider font-medium">
            Trusted by Leading Companies
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {['Stripe', 'Notion', 'Linear', 'Vercel', 'Figma', 'GitHub'].map((company, index) => (
              <motion.span
                key={company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className="text-base md:text-lg text-white/40 font-medium hover:text-white/60 transition-colors cursor-default"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col items-center space-y-2"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/15 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-gradient-to-b from-[#d4ff3f] to-[#c6ff52] rounded-full shadow-sm shadow-[#d4ff3f]/50"
            />
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 