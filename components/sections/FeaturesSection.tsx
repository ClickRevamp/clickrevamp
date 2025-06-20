'use client'

import { motion } from 'framer-motion'
import { useInViewAnimation } from '@/hooks/useInViewAnimation'
import { Zap, Palette, Rocket, ArrowUpRight } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and performance with sub-2s load times. Your visitors won't wait around.",
    gradient: "from-[#e6ff00] to-[#00ff95]",
    delay: 0.1
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "No templates. Every design is crafted specifically for your brand and conversion goals.",
    gradient: "from-[#00ff95] to-[#e6ff00]",
    delay: 0.2
  },
  {
    icon: Rocket,
    title: "Built to Convert",
    description: "Psychology-driven layouts that guide visitors to take action and become customers.",
    gradient: "from-[#e6ff00] to-[#00ff95]",
    delay: 0.3
  }
]

export default function FeaturesSection() {
  const { ref, isVisible } = useInViewAnimation()

  return (
    <section 
      id="features" 
      ref={ref}
      className="relative py-32 bg-[#0c0c0c] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#e6ff00]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-[#00ff95]/5 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Why Choose 
            <span className="text-gradient"> ClickRevamp</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-[#999999] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            We combine cutting-edge design with conversion psychology to create websites that don&apos;t just look amazing—they perform.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            
            return (
              <motion.div
                key={feature.title}
                className="group floating-panel p-8 relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: feature.delay, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
              >
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Container */}
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5`}>
                    <div className="w-full h-full bg-[#0c0c0c] rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#e6ff00] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#999999] text-lg leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <motion.div 
                    className="flex items-center text-[#e6ff00] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="mr-2">Learn more</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#e6ff00]/30 transition-colors duration-500" />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#666666] mb-8">
            Ready to transform your website into a conversion machine?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#e6ff00] to-[#00ff95] text-black font-bold text-lg rounded-full hover:shadow-[0_0_40px_rgba(230,255,0,0.4)] hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 