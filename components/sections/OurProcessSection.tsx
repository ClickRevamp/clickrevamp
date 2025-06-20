'use client'

import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { Space_Grotesk } from 'next/font/google';
import { motion, Variants } from 'framer-motion';
import { 
  ActivitySquare,
  Smartphone,
  Rocket,
  Check
} from 'lucide-react';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export default function OurProcessSection() {
  const { ref, isVisible } = useInViewAnimation();

  // Animation variants
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 300 }
    }
  };
  
  const iconContainerVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  return (
    <section 
      className="scroll-mt-28 py-24 px-8 border-t border-gray-100 bg-gray-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-100 transition-opacity duration-700"
      ref={ref} 
      id="process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-3xl md:text-4xl font-bold mb-4 ${spaceGrotesk.className} font-sans text-gray-900`}>
            What You Get With Your Redesign
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            Everything included to transform your website into a conversion machine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div 
            className="flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            <div className="relative mb-8">
              <motion.div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center"
                variants={iconContainerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                whileHover="hover"
                whileTap="tap"
              >
                <ActivitySquare className="w-8 h-8 md:w-9 md:h-9" />
              </motion.div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">
                1
              </div>
            </div>
            <h3 className={`text-lg md:text-xl font-bold mb-3 ${spaceGrotesk.className} font-sans text-gray-900`}>
              Strategic Redesign Plan
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-mono">
              Tailored UX recommendations based on your current site and goals
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <div className="relative mb-8">
              <motion.div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center"
                variants={iconContainerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                whileHover="hover"
                whileTap="tap"
              >
                <Smartphone className="w-8 h-8 md:w-9 md:h-9" />
              </motion.div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">
                2
              </div>
            </div>
            <h3 className={`text-lg md:text-xl font-bold mb-3 ${spaceGrotesk.className} font-sans text-gray-900`}>
              Fully Responsive Build
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-mono">
              Modern, mobile-optimized layout built for all screen sizes
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <div className="relative mb-8">
              <motion.div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center"
                variants={iconContainerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                whileHover="hover"
                whileTap="tap"
              >
                <Rocket className="w-8 h-8 md:w-9 md:h-9" />
              </motion.div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">
                3
              </div>
            </div>
            <h3 className={`text-lg md:text-xl font-bold mb-3 ${spaceGrotesk.className} font-sans text-gray-900`}>
              Launch & Support
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-mono">
              You approve the site and we help launch it live with revisions included
            </p>
          </motion.div>
        </div>

        {/* Bulleted list */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <ul className="inline-flex flex-wrap justify-center gap-x-8 gap-y-3">
            <li className="flex items-center text-sm md:text-base font-mono text-gray-700">
              <Check className="w-5 h-5 mr-2 text-green-600" /> Speed Optimization
            </li>
            <li className="flex items-center text-sm md:text-base font-mono text-gray-700">
              <Check className="w-5 h-5 mr-2 text-green-600" /> SEO Setup (basic)
            </li>
            <li className="flex items-center text-sm md:text-base font-mono text-gray-700">
              <Check className="w-5 h-5 mr-2 text-green-600" /> Built to convert visitors
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
} 