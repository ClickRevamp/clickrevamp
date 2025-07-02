'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Zap, Brush, Rocket, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance with sub-2s load times. Your visitors won\'t wait around.'
  },
  {
    icon: Brush,
    title: 'Custom Design',
    description: 'No templates. Every design is crafted specifically for your brand and conversion goals.'
  },
  {
    icon: Rocket,
    title: 'Built to Convert',
    description: 'Psychology-driven layouts that guide visitors to take action and become customers.'
  }
]

export const Features = () => {
  return (
    <section className="relative bg-[#0c0c0c] py-24 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(212,255,63,0.05)_1px,transparent_1px)] [background-size:50px_50px] opacity-30" />
      
      {/* Center Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-[#d4ff3f]/10 via-[#00ff95]/5 to-transparent rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-[1300px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#d4ff3f] to-[#00ff95] bg-clip-text text-transparent">
              ClickRevamp
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We combine cutting-edge design with conversion psychology to create websites
            <br />
            that don't just look amazing—they perform.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              className="group"
            >
                                            <div className="relative bg-zinc-900/50 rounded-2xl p-8 h-full shadow-[0_0_0.5px_rgba(255,255,255,0.2)] ring-1 ring-white/5 max-w-sm mx-auto transition-all duration-300 hover:bg-zinc-800/60 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(132,204,22,0.15)] hover:ring-lime-400/20 group cursor-pointer">
                 {/* Icon */}
                 <div className="mb-6">
                   <div className="relative w-14 h-14 rounded-xl bg-gradient-to-r from-lime-400 to-yellow-400 p-[2px] shadow-[0_0_8px_rgba(132,204,22,0.3)] transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(132,204,22,0.4)]">
                     <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                       <feature.icon className="w-7 h-7 text-white stroke-2 transition-all duration-300 group-hover:scale-110" />
                     </div>
                   </div>
                 </div>

                 {/* Content */}
                 <h3 className="text-lg font-semibold text-white mb-4 leading-tight">
                   {feature.title}
                 </h3>
                 <p className="text-sm text-white/70 leading-relaxed">
                   {feature.description}
                 </p>
               </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-center text-gray-400 mt-12 mb-4">
            Ready to transform your website into a conversion machine?
          </p>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-[#d4ff3f] to-[#00ff95] text-black rounded-full hover:shadow-2xl hover:shadow-[#d4ff3f]/30 transition-all duration-300 border-0 overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e6ff00] to-[#00ffae] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 