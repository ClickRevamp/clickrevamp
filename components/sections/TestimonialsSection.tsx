'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Space_Grotesk } from 'next/font/google'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Testimonial data
const testimonials = [
  {
    quote: "Our old website was getting zero leads. After ClickRevamp redesigned it, we're now seeing inquiries daily!",
    name: "Jamie R.",
    title: "Founder, LocalThreads",
  },
  {
    quote: "The process was seamless from start to finish. Within a week, we had a beautiful, modern site that converts.",
    name: "Sarah M.",
    title: "Marketing Director, Altura Solutions",
  },
  {
    quote: "ClickRevamp exceeded all expectations. They delivered a site that doubled our consultation bookings.",
    name: "Michael T.",
    title: "CEO, Pinnacle Financial Advisors",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragDistance, setDragDistance] = useState(0)
  const dragThreshold = 50 // Minimum drag distance to trigger slide change
  
  const isMobile = useMediaQuery('(max-width: 1023px)')
  const carouselRef = useRef<HTMLDivElement>(null)

  // Navigation functions
  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Get position index (-1: previous, 0: current, 1: next)
  const getPositionIndex = (index: number) => {
    // Calculate relative position
    let position = index - currentIndex
    
    // Adjust for wrapping (for smooth transitions when going from last to first slide and vice versa)
    if (position < -1) position = position + testimonials.length
    if (position > 1) position = position - testimonials.length
    
    return position
  }

  // Mouse and touch event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setDragDistance(0)
  }
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const distance = e.clientX - startX
    setDragDistance(distance)
  }
  
  const handleMouseUp = () => {
    if (!isDragging) return
    
    if (dragDistance > dragThreshold) {
      handlePrev()
    } else if (dragDistance < -dragThreshold) {
      handleNext()
    }
    
    setIsDragging(false)
    setDragDistance(0)
  }
  
  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setDragDistance(0)
  }
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const distance = e.touches[0].clientX - startX
    setDragDistance(distance)
    
    // Prevent page scrolling when swiping carousel
    if (Math.abs(distance) > 10) {
      e.preventDefault()
    }
  }
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  return (
    <section 
      id="testimonials"
      className="scroll-mt-28 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-gray-100 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-100 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header with extra top padding to ensure visibility when scrolled to */}
        <div className="text-center mb-14 pt-4">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${spaceGrotesk.className} text-gray-900`}>
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-gray-600">
            Success stories from businesses who transformed their online presence
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative px-4 lg:px-20 max-w-5xl mx-auto">
          {/* Navigation arrows - only visible on desktop */}
          {!isMobile && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary z-10 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30"
                aria-label="Previous testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary z-10 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30"
                aria-label="Next testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          {/* Carousel viewport */}
          <div
            ref={carouselRef}
            className="relative w-full overflow-hidden pb-8 mb-8"
            style={{
              perspective: isMobile ? 'none' : '1200px',
              transformStyle: isMobile ? 'flat' : 'preserve-3d',
              minHeight: isMobile ? '350px' : '300px',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            role="region"
            aria-label="Testimonial carousel"
            tabIndex={0}
          >
            {/* Testimonial cards */}
            <div className={`relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} h-full`}>
              {testimonials.map((testimonial, index) => {
                const position = getPositionIndex(index)
                
                // On mobile, only render the active slide
                if (isMobile && position !== 0) return null
                
                // On desktop, only render the previous, current, and next slides
                if (!isMobile && Math.abs(position) > 1) return null
                
                return (
                  <motion.div
                    key={index}
                    className="absolute w-full md:w-auto"
                    style={{
                      left: isMobile ? '0' : '50%',
                      right: isMobile ? '0' : 'auto',
                      top: 0,
                    }}
                    initial={false}
                    animate={{
                      x: isMobile 
                        ? dragDistance 
                        : `calc(${position * 60}% - 50%)`,
                      scale: isMobile 
                        ? 1 
                        : position === 0 ? 1 : 0.85,
                      opacity: isMobile 
                        ? 1 
                        : position === 0 ? 1 : 0.7,
                      zIndex: position === 0 ? 20 : 10,
                      filter: position === 0 ? 'blur(0px)' : 'blur(1.5px)',
                      transition: {
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                        opacity: { duration: 0.2 },
                      }
                    }}
                    aria-hidden={position !== 0}
                  >
                    <div 
                      className={`bg-white rounded-xl p-6 sm:p-8 shadow-md mx-auto ${
                        position === 0 ? 'shadow-lg border border-gray-100' : 'shadow-sm'
                      }`}
                      style={{
                        maxWidth: isMobile ? '100%' : '450px',
                        margin: isMobile ? '0 auto' : position === 0 ? '0 auto' : '0',
                      }}
                    >
                      {/* Quote mark */}
                      <div className="mb-6 relative">
                        <svg className="absolute top-0 left-0 w-10 h-10 text-primary/10 transform -translate-x-3 -translate-y-2" 
                             viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700 relative pl-4">
                          {testimonial.quote}
                        </p>
                      </div>
                      
                      {/* Author info */}
                      <div className="flex items-center mt-6">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-blue-100 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                          <span className="text-sm font-bold">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2.5 h-2.5 mx-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                  currentIndex === index
                    ? 'bg-primary scale-110'
                    : 'bg-gray-300 opacity-50 hover:opacity-75'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={currentIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 