'use client'

import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { Space_Grotesk } from 'next/font/google';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { 
  fadeInUpVariants, 
  iconContainerVariants, 
  eyeIconVariants,
  eyePupilVariants,
  layoutIconRectVariants,
  layoutIconHorizLineVariants,
  layoutIconVertLineVariants,
  checkCircleVariants,
  checkmarkVariants,
  transitions
} from '@/utils/animations';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export default function HowItWorksSection() {
  const { ref, isVisible } = useInViewAnimation();
  const [animateIcons, setAnimateIcons] = useState(false);
  const animatingRef = useRef(false);

  // Manage animation state based on visibility
  useEffect(() => {
    if (isVisible && !animatingRef.current) {
      setAnimateIcons(true);
      animatingRef.current = true;
    } else if (!isVisible && animatingRef.current) {
      // Reset animation state when section is no longer visible
      setAnimateIcons(false);
      animatingRef.current = false;
    }
  }, [isVisible]);

  return (
    <section 
      className={`scroll-mt-28 py-24 px-8 border-t border-gray-100 bg-gray-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-100 transition-opacity duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} 
      ref={ref} 
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-3xl md:text-4xl font-bold mb-4 ${spaceGrotesk.className} font-sans text-gray-900`}>
            How It Works
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-mono">Our simple three-step process to transform your website</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div 
            className="flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ ...transitions.fadeIn, delay: 0.1 }}
          >
            <div className="relative mb-8">
              <motion.div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center"
                variants={iconContainerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={transitions.iconScale}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 md:w-9 md:h-9"
                  variants={eyeIconVariants}
                  initial="hidden"
                  animate="visible"
                  custom={animateIcons}
                >
                  <path
                    d="M1 12C3.5 7 8 4 12 4s8.5 3 11 8c-2.5 5-7 8-11 8s-8.5-3-11-8z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <motion.circle 
                    cx="12" 
                    cy="12" 
                    r="3" 
                    fill="currentColor"
                    variants={eyePupilVariants}
                    initial="hidden"
                    animate="visible"
                    custom={animateIcons}
                  />
                </motion.svg>
              </motion.div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">
                1
              </div>
            </div>
            <h3 className={`text-lg md:text-xl font-bold mb-3 ${spaceGrotesk.className} font-sans text-gray-900`}>We Review Your Site</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-mono">Share your current website. We&apos;ll audit it and highlight what&apos;s holding it back.</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            className="flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ ...transitions.fadeIn, delay: 0.2 }}
          >
            <div className="relative mb-8">
              <motion.div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center"
                variants={iconContainerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ ...transitions.iconScale, delay: 0.1 }}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.svg 
                  className="w-8 h-8 md:w-9 md:h-9"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <motion.rect 
                    width="18" 
                    height="18" 
                    x="3" 
                    y="3" 
                    rx="2"
                    variants={layoutIconRectVariants}
                    initial="hidden"
                    animate="visible"
                    custom={animateIcons}
                  />
                  <motion.path 
                    d="M3 9h18"
                    variants={layoutIconHorizLineVariants}
                    initial="hidden"
                    animate="visible"
                    custom={animateIcons}
                  />
                  <motion.path 
                    d="M9 21V9"
                    variants={layoutIconVertLineVariants}
                    initial="hidden"
                    animate="visible"
                    custom={animateIcons}
                  />
                </motion.svg>
              </motion.div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">
                2
              </div>
            </div>
            <h3 className={`text-lg md:text-xl font-bold mb-3 ${spaceGrotesk.className} font-sans text-gray-900`}>We Rebuild It for You</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-mono">We redesign your site to match modern UX, mobile responsiveness, and high-conversion structure.</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            className="flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ ...transitions.fadeIn, delay: 0.3 }}
          >
            <div className="relative mb-8">
              <motion.div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center"
                variants={iconContainerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ ...transitions.iconScale, delay: 0.2 }}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.svg 
                  className="w-8 h-8 md:w-9 md:h-9"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <motion.path 
                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                    variants={checkCircleVariants}
                    initial="hidden"
                    animate="visible"
                    custom={animateIcons}
                    strokeLinecap="round"
                  />
                  <motion.path 
                    d="m9 11 3 3L22 4"
                    variants={checkmarkVariants}
                    initial="hidden"
                    animate="visible"
                    custom={animateIcons}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">
                3
              </div>
            </div>
            <h3 className={`text-lg md:text-xl font-bold mb-3 ${spaceGrotesk.className} font-sans text-gray-900`}>You Launch With Confidence</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-mono">Approve the redesign, go live, and start converting more visitors.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 