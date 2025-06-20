'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const textVariations = [
  "World-Class AI Sites",
  "Premium Web Designs", 
  "Conversion-Focused Sites",
  "Modern Web Experiences"
]

const clientLogos = [
  "Stripe", "Notion", "Linear", "Vercel", "Figma", "GitHub"
]

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  // Text switching effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textVariations.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0c0c0c] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#e6ff00]/10 via-[#00ff95]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-[#00ff95]/8 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 text-center">
        {/* Main Headline */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center space-y-4">
            {/* Animated text switcher */}
            <div className="h-[120px] md:h-[140px] flex items-center justify-center">
              <motion.h1 
                key={currentTextIndex}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {textVariations[currentTextIndex]}
              </motion.h1>
            </div>
            
            {/* Static part */}
            <motion.h2 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              That Convert
            </motion.h2>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-[#999999] max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          We redesign your website to drive more conversions, bookings, and sales. 
          <span className="text-white"> No templates. No compromises.</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link 
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#e6ff00] to-[#00ff95] text-black font-bold text-lg rounded-full hover:shadow-[0_0_40px_rgba(230,255,0,0.4)] hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            Start Your Redesign
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Client Showcase */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm text-[#666666] uppercase tracking-wider font-medium">
            Trusted by leading companies
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                className="text-2xl md:text-3xl font-bold text-white/60 hover:text-white/80 transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="w-1 h-3 bg-gradient-to-b from-[#e6ff00] to-[#00ff95] rounded-full mt-2"
              animate={{
                height: [12, 6, 12],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 