'use client'

import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Space_Grotesk } from 'next/font/google';
import { testimonialCardVariants, transitions } from '@/utils/animations';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// Example testimonials data
const testimonials = [
  {
    quote: "Our old website was getting zero leads. After ClickRevamp redesigned it, we're now seeing inquiries daily! They understood exactly what our audience was looking for.",
    name: "Jamie R.",
    title: "Founder, LocalThreads"
  },
  {
    quote: "The process was seamless from start to finish. Within a week, we had a beautiful, modern site that actually converts. Our mobile traffic is up 70% since the redesign.",
    name: "Sarah M.",
    title: "Marketing Director, Altura Solutions"
  },
  {
    quote: "I was skeptical about outsourcing our redesign, but ClickRevamp exceeded all expectations. They delivered a site that perfectly captures our brand and has doubled our consultation bookings.",
    name: "Michael T.",
    title: "CEO, Pinnacle Financial Advisors"
  },
  // Add more testimonials as needed
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useInViewAnimation();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      className={`py-24 px-8 border-t border-gray-100 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-100 relative transition-opacity duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} 
      ref={ref}
      id="testimonials"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-3xl md:text-4xl font-bold mb-4 ${spaceGrotesk.className} font-sans text-gray-900`}>
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">Success stories from businesses who revamped their online presence</p>
        </div>

        <div className="relative mx-auto h-[450px] max-w-3xl lg:max-w-4xl">
          {/* Carousel Navigation */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary/5 transition-all duration-300 z-20 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="h-full relative">
            {testimonials.map((testimonial, index) => {
              // Calculate position relative to active testimonial
              let position = index - activeTestimonial;
              
              // Handle circular wrapping
              if (position < -1) position = testimonials.length - Math.abs(position);
              if (position > 1) position = position - testimonials.length;
              
              // Only render the active testimonial and its immediate neighbors
              if (Math.abs(position) > 1) return null;

              return (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  initial={false}
                  animate={testimonialCardVariants(position).animate}
                  transition={transitions.springBounce}
                >
                  <div 
                    className={`bg-white/95 p-6 md:p-8 lg:p-10 rounded-2xl w-[90%] max-w-md mx-auto transition-all duration-300 flex flex-col 
                    ${position === 0 
                      ? 'shadow-lg border-gray-200 border hover:shadow-xl hover:scale-[1.02]' 
                      : 'shadow-md'}`}
                  >
                    <div className="mb-6 relative">
                      <svg className="absolute top-0 left-0 text-primary/10 w-12 md:w-16 h-12 md:h-16 -mt-4 md:-mt-6 -ml-3 md:-ml-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-base md:text-lg leading-relaxed relative z-10 text-gray-700">{testimonial.quote}</p>
                    </div>
                    <div className="mt-auto flex items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/10 to-blue-100 flex items-center justify-center text-primary mr-4 shadow-sm">
                        <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-primary text-sm md:text-base">{testimonial.name}</p>
                        <p className="text-xs md:text-sm text-gray-500">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary/5 transition-all duration-300 z-20 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2.5 md:w-3 h-2.5 md:h-3 mx-1.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'bg-gradient-to-r from-primary to-blue-600 scale-100' 
                    : 'bg-gray-300 scale-75 hover:scale-90'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 