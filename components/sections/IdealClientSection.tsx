'use client'

import { useInViewAnimation } from '@/hooks/useInViewAnimation'
import { Space_Grotesk } from 'next/font/google'
import { motion, Variants, Easing } from 'framer-motion'
import { 
  Check, 
  X, 
  Rocket, 
  UserCircle, 
  Users, 
  Store,
  Building2, 
  PanelLeftClose, 
  DollarSign, 
  ClockIcon 
} from 'lucide-react'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export default function IdealClientSection() {
  const { ref, isVisible } = useInViewAnimation()

  // Animation variants
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + (i * 0.1),
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as Easing
      }
    })
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  const perfectForItems = [
    {
      icon: <Rocket className="w-5 h-5 text-blue-600" />,
      text: "Startup founders ready to modernize their site"
    },
    {
      icon: <UserCircle className="w-5 h-5 text-blue-600" />,
      text: "Freelancers & solo operators wanting better conversions"
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      text: "Small teams launching a new product or service"
    },
    {
      icon: <Store className="w-5 h-5 text-blue-600" />,
      text: "Business owners tired of clunky DIY builders"
    }
  ]

  const notIdealForItems = [
    {
      icon: <Building2 className="w-5 h-5 text-rose-600" />,
      text: "Enterprise clients with complex backend systems"
    },
    {
      icon: <PanelLeftClose className="w-5 h-5 text-rose-600" />,
      text: "Teams looking for $99 cookie-cutter templates"
    },
    {
      icon: <DollarSign className="w-5 h-5 text-rose-600" />,
      text: "Businesses not ready to invest in conversion UX"
    },
    {
      icon: <ClockIcon className="w-5 h-5 text-rose-600" />,
      text: "Projects needing ongoing monthly dev retainers"
    }
  ]

  return (
    <section 
      className="scroll-mt-28 py-24 px-8 relative bg-white border-t border-gray-100"
      ref={ref} 
      id="ideal-client"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <h2 className={`text-3xl sm:text-3xl md:text-4xl font-bold mb-4 ${spaceGrotesk.className} font-sans text-gray-900`}>
            Is ClickRevamp Right for You?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            We deliver the best results for specific types of clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Perfect For Card */}
          <motion.div 
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={0}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className={`text-xl md:text-2xl font-bold ${spaceGrotesk.className} text-gray-900`}>
                Perfect For
              </h3>
            </div>

            <ul className="space-y-5">
              {perfectForItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={fadeInUpVariants}
                  custom={index + 1}
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-50 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex gap-2 items-center">
                    {item.icon}
                    <span className="text-sm md:text-base text-gray-800">{item.text}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not Ideal For Card */}
          <motion.div 
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={1}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mr-4">
                <X className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className={`text-xl md:text-2xl font-bold ${spaceGrotesk.className} text-gray-900`}>
                Not Ideal For
              </h3>
            </div>

            <ul className="space-y-5">
              {notIdealForItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={fadeInUpVariants}
                  custom={index + 5}
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-50 flex items-center justify-center mr-3 mt-0.5">
                    <X className="w-4 h-4 text-rose-600" />
                  </div>
                  <div className="flex gap-2 items-center">
                    {item.icon}
                    <span className="text-sm md:text-base text-gray-800">{item.text}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 