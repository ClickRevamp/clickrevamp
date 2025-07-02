'use client'

import { motion } from 'framer-motion'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { Search, Palette, Code, Rocket } from 'lucide-react'

const processSteps = [
  {
    step: '01',
    icon: Search,
    title: 'Discovery',
    description: 'We dive deep into your business goals, target audience, and current challenges to understand exactly what needs to change.',
    details: [
      'Competitor analysis and market research',
      'User journey mapping and pain point identification',
      'Conversion audit of your current site'
    ],
    duration: '1-2 weeks'
  },
  {
    step: '02',
    icon: Palette,
    title: 'Design',
    description: 'Our team creates custom wireframes and high-fidelity designs that prioritize user experience and conversion optimization.',
    details: [
      'Psychology-driven layout and flow design',
      'Custom brand integration and visual identity',
      'Interactive prototypes for user testing'
    ],
    duration: '2-3 weeks'
  },
  {
    step: '03',
    icon: Code,
    title: 'Build',
    description: 'We develop your site using cutting-edge technology, ensuring lightning-fast performance and seamless user experience.',
    details: [
      'Modern, responsive development with Next.js',
      'Performance optimization and speed testing',
      'Cross-browser compatibility and accessibility'
    ],
    duration: '3-4 weeks'
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Launch',
    description: 'Your new conversion-optimized website goes live with full support, analytics setup, and ongoing performance monitoring.',
    details: [
      'Seamless deployment and domain migration',
      'Analytics and conversion tracking setup',
      'Post-launch support and optimization'
    ],
    duration: '1 week'
  }
]

export const Process = () => {
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            How{' '}
            <span className="bg-gradient-to-r from-[#d4ff3f] to-[#00ff95] bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Our proven 4-step process takes your website from conversion liability
            <br />
            to your most powerful sales asset.
          </p>
        </motion.div>

        {/* Timeline with TracingBeam */}
        <div className="relative">
          <TracingBeam className="pb-20">
            <div className="space-y-20">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                  className="relative pl-8 md:pl-16"
                >
                  <div className="relative bg-zinc-900/50 rounded-2xl p-8 md:p-10 shadow-[0_0_0.5px_rgba(255,255,255,0.2)] ring-1 ring-white/5 transition-all duration-300 hover:bg-zinc-800/60 hover:ring-lime-400/20 group">
                    {/* Step Number Badge */}
                    <div className="absolute -left-4 md:-left-8 top-8 md:top-10">
                      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-r from-lime-400 to-yellow-400 p-[2px] shadow-[0_0_8px_rgba(132,204,22,0.3)] transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(132,204,22,0.4)]">
                        <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                          <span className="text-white font-bold text-sm md:text-base">
                            {step.step}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-start gap-4">
                        <div className="relative w-12 h-12 rounded-xl bg-gradient-to-r from-lime-400 to-yellow-400 p-[2px] shadow-[0_0_8px_rgba(132,204,22,0.3)] transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(132,204,22,0.4)]">
                          <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                            <step.icon className="w-6 h-6 text-white stroke-2" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                              {step.title}
                            </h3>
                            <span className="px-3 py-1 text-xs font-medium bg-lime-400/10 text-lime-400 rounded-full border border-lime-400/20">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-lg text-white/70 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Details List */}
                      <div className="pl-16">
                        <ul className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detailIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: (index * 0.2) + (detailIndex * 0.1) + 0.3,
                                ease: "easeOut" 
                              }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 text-white/60"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-lime-400 to-yellow-400 mt-2 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TracingBeam>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to transform your website into a conversion machine?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-[#d4ff3f] to-[#00ff95] text-black rounded-full hover:shadow-2xl hover:shadow-[#d4ff3f]/30 transition-all duration-300 border-0 overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <Rocket className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#e6ff00] to-[#00ffae] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 