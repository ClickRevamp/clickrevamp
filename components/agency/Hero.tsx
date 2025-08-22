'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { WordRotate } from "@/components/ui/word-rotate"

// Animation variants
const container = { 
  hidden: { opacity: 1 }, 
  show: { 
    transition: { 
      staggerChildren: 0.12 
    } 
  } 
}

const up = { 
  hidden: { opacity: 0, y: 12 }, 
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.45, 
      ease: [0.22, 1, 0.36, 1] as const
    } 
  } 
}

const left = { 
  hidden: { opacity: 0, x: -12 }, 
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.45 
    } 
  } 
}

export const Hero = () => {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section className="relative min-h-screen bg-[#0c0c0c] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(212,255,63,0.1)_1px,transparent_1px)] [background-size:50px_50px] opacity-30" />
      
      {/* Glowing Orb Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#d4ff3f]/10 via-[#00ff95]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 pt-96 pb-20 text-center">
        <motion.section
          variants={prefersReducedMotion ? {} : container}
          initial={prefersReducedMotion ? false : "hidden"}
          animate={prefersReducedMotion ? false : "show"}
        >
          {/* Main Headline */}
          <div className="space-y-4 mb-12 md:mb-16">
            <h1 
              className="font-extrabold tracking-tight text-white leading-tight"
              aria-label="Websites, Landing Pages, Funnels, Online Stores — That Convert"
            >
              {/* Rotating First Line (White) */}
              <motion.div 
                variants={prefersReducedMotion ? {} : up}
                className="block mb-6 md:mb-8"
              >
                <div className="mx-auto max-w-[min(90vw,1200px)] overflow-visible">
                  <WordRotate
                    words={["Websites", "Landing Pages", "Funnels", "Online Stores"]}
                    duration={2400}
                    className="text-[clamp(32px,8.5vw,96px)] font-extrabold tracking-tight text-white leading-tight block"
                  />
                </div>
              </motion.div>
              
              {/* Green Gradient Line - Keep Exactly As Is */}
              <motion.span
                variants={prefersReducedMotion ? {} : up}
                className="block text-[clamp(32px,8.5vw,96px)] text-transparent bg-clip-text bg-gradient-to-b from-lime-300 to-lime-500"
              >
                That Convert
              </motion.span>
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={prefersReducedMotion ? {} : up}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed mt-6 md:mt-7"
          >
            We redesign your website to drive more conversions, bookings,
            and sales. <span className="text-white font-semibold">No templates. No compromises.</span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={prefersReducedMotion ? {} : up}
            className="mb-20"
          >
            <motion.button
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
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

          {/* Trusted by Leading Companies */}
          <div className="mt-10 md:mt-12 lg:mt-14 text-center mb-16">
            <motion.div 
              variants={prefersReducedMotion ? {} : left}
              data-trust-heading 
              className="text-[11px] tracking-[0.2em] text-neutral-400/80 uppercase mb-4"
            >
              TRUSTED BY LEADING COMPANIES
            </motion.div>
            <div className="flex items-center justify-center gap-10 md:gap-12 text-neutral-300/80">
              {["Stripe", "Notion", "Linear", "Vercel", "Figma", "GitHub"].map((brand) => (
                <motion.span 
                  key={brand}
                  variants={prefersReducedMotion ? {} : left}
                  data-trust-logos
                  className="text-sm md:text-base lg:text-[17px]"
                >
                  {brand}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            variants={prefersReducedMotion ? {} : up}
            className="flex flex-col items-center space-y-2"
          >
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
              transition={prefersReducedMotion ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/15 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
                transition={prefersReducedMotion ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-gradient-to-b from-[#d4ff3f] to-[#c6ff52] rounded-full shadow-sm shadow-[#d4ff3f]/50"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </section>
  )
}