'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "ClickRevamp transformed our landing page and increased our conversion rate by 340%. The attention to detail and psychology-driven design is incredible.",
    name: "Sarah Chen",
    role: "Head of Growth",
    company: "TechFlow",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "Working with ClickRevamp was a game-changer. They didn't just redesign our site—they reimagined our entire user journey. Revenue is up 280%.",
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "InnovateLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    quote: "The team at ClickRevamp understands conversion psychology like no one else. Our new site doesn't just look amazing—it performs beyond our expectations.",
    name: "Emily Foster",
    role: "Marketing Director",
    company: "GrowthCo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    quote: "From wireframes to launch, ClickRevamp delivered a website that perfectly captures our brand and drives results. The ROI has been phenomenal.",
    name: "David Kim",
    role: "VP of Marketing",
    company: "ScaleUp",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
]

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section className="relative bg-[#0c0c0c] py-24 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(212,255,63,0.05)_1px,transparent_1px)] [background-size:50px_50px] opacity-30" />
      
      {/* Center Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-[#d4ff3f]/8 via-transparent to-transparent rounded-full blur-3xl" />
      
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
            What Our{' '}
            <span className="bg-gradient-to-r from-[#d4ff3f] to-[#00ff95] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about
            <br />
            working with ClickRevamp.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Mobile: Single testimonial */}
          <div className="block lg:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </div>

          {/* Desktop: Multiple testimonials */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${currentIndex}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                className={index === 1 ? "lg:scale-105" : ""}
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  isCenter={index === 1}
                />
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-zinc-900/50 border border-white/10 flex items-center justify-center hover:bg-zinc-800/60 hover:border-lime-400/30 transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:text-lime-400 transition-colors" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-lime-400 w-8' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-zinc-900/50 border border-white/10 flex items-center justify-center hover:bg-zinc-800/60 hover:border-lime-400/30 transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:text-lime-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: typeof testimonials[0]
  isCenter?: boolean
}

const TestimonialCard = ({ testimonial, isCenter = false }: TestimonialCardProps) => {
  return (
    <div className={`relative bg-zinc-900/50 rounded-2xl p-8 h-full shadow-[0_0_0.5px_rgba(255,255,255,0.2)] ring-1 ring-white/5 transition-all duration-300 hover:bg-zinc-800/60 hover:ring-lime-400/20 hover:shadow-[0_0_20px_rgba(132,204,22,0.15)] group cursor-default ${isCenter ? 'ring-lime-400/30 shadow-[0_0_15px_rgba(132,204,22,0.1)]' : ''}`}>
      {/* Quote */}
      <div className="mb-8">
        <p className="text-gray-300 leading-relaxed text-lg italic">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className={`relative w-14 h-14 rounded-full overflow-hidden ring-2 transition-all duration-300 ${isCenter ? 'ring-lime-400/60' : 'ring-white/20 group-hover:ring-lime-400/40'}`}>
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Name & Role */}
        <div>
          <h4 className="text-white font-semibold text-lg leading-tight">
            {testimonial.name}
          </h4>
          <p className="text-gray-400 text-sm">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d4ff3f]/5 to-[#00ff95]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
} 