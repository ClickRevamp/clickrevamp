'use client'

import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { Space_Grotesk } from 'next/font/google';
import { motion } from 'framer-motion';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export default function OurProcessSection() {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section 
      className={`py-24 px-8 relative overflow-hidden transition-opacity duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} 
      ref={ref} 
      id="process"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-70"></div>
      <div className="absolute inset-0 bg-grid-gray-100/40 bg-center"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 text-primary font-medium px-3 py-1 bg-primary/10 rounded-full text-xs sm:text-sm">
            Our Process
          </div>
          <h2 className={`text-3xl sm:text-3xl md:text-4xl font-bold mb-4 ${spaceGrotesk.className} font-sans text-gray-900`}>
            Our Redesign Process
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your website with our simple three-step process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative" id="redesign-process">
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors group shadow-sm hover:shadow-md relative backdrop-blur-sm"
          >
            <div className="absolute -top-3 -left-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-lg font-semibold">1</div>
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </div>
            <h3 className={`text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors ${spaceGrotesk.className}`}>Discovery & Planning</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We analyze your current website and business goals to create a strategic redesign plan that addresses your specific needs.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors group shadow-sm hover:shadow-md relative backdrop-blur-sm"
          >
            <div className="absolute -top-3 -left-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-lg font-semibold">2</div>
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 className={`text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors ${spaceGrotesk.className}`}>Design & Development</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our team creates a beautiful, functional design that aligns with your brand and implements it with clean, responsive code.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors group shadow-sm hover:shadow-md relative backdrop-blur-sm"
          >
            <div className="absolute -top-3 -left-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-lg font-semibold">3</div>
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className={`text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors ${spaceGrotesk.className}`}>Launch & Optimize</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We deploy your new website and provide ongoing support to ensure it performs at its best and continues to drive results.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 