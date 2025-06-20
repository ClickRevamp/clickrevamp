'use client'

import { useInViewAnimation } from '@/hooks/useInViewAnimation'
import { Space_Grotesk } from 'next/font/google'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Info,
  BadgeDollarSign,
  Zap,
  TrendingUp,
  UserCheck,
  Smartphone,
  LifeBuoy,
  ChevronRight
} from 'lucide-react'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Define the type for a competitor
type Competitor = {
  id: string
  name: string
  icon: React.ReactNode
  highlight: boolean
}

// Define the type for a feature
type Rating = 'positive' | 'negative' | 'neutral'

type FeatureComparison = {
  trait: string
  icon: React.ReactNode
  clickrevamp: { value: string, badge: Rating, description: string }
  freelancers: { value: string, badge: Rating, description: string }
  agencies: { value: string, badge: Rating, description: string }
  diyBuilders: { value: string, badge: Rating, description: string }
}

// Badge component for consistent styling
const Badge = ({ 
  type, 
  children 
}: { 
  type: Rating, 
  children: React.ReactNode 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'positive':
        return <CheckCircle className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
      case 'negative':
        return <XCircle className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
      case 'neutral':
        return <Info className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
      default:
        return null
    }
  }
  
  const classes = {
    positive: 'bg-blue-50 text-blue-700',
    negative: 'bg-rose-50 text-rose-700',
    neutral: 'bg-slate-100 text-slate-700'
  }

  return (
    <span className={`${classes[type]} inline-flex items-center px-3 py-1 rounded-full text-xs font-medium`}>
      {getIcon()}
      {children}
    </span>
  )
}

// Define comparison data
const comparisonData: FeatureComparison[] = [
  {
    trait: 'Price',
    icon: <BadgeDollarSign className="w-5 h-5 text-blue-700 flex-shrink-0" />,
    clickrevamp: { value: 'Affordable Fixed Price', badge: 'positive', description: 'One-time payment, no surprises' },
    freelancers: { value: 'Variable Rates', badge: 'neutral', description: 'Hourly rates can add up' },
    agencies: { value: 'Premium Pricing', badge: 'negative', description: 'High monthly retainers' },
    diyBuilders: { value: 'Monthly Subscription', badge: 'negative', description: 'Ongoing costs add up over time' }
  },
  {
    trait: 'Speed',
    icon: <Zap className="w-5 h-5 text-blue-700 flex-shrink-0" />,
    clickrevamp: { value: '1–2 Weeks', badge: 'positive', description: 'Fast turnaround time' },
    freelancers: { value: '2–4 Weeks', badge: 'neutral', description: 'Depends on their workload' },
    agencies: { value: '4–8 Weeks', badge: 'negative', description: 'Long project timelines' },
    diyBuilders: { value: 'DIY Timeline', badge: 'neutral', description: 'Depends on your skills & time' }
  },
  {
    trait: 'Conversion Focus',
    icon: <TrendingUp className="w-5 h-5 text-blue-700 flex-shrink-0" />,
    clickrevamp: { value: 'Conversion Optimized', badge: 'positive', description: 'Built to convert visitors' },
    freelancers: { value: 'Varies by Freelancer', badge: 'neutral', description: 'Depends on experience' },
    agencies: { value: 'Often Design-First', badge: 'neutral', description: 'May prioritize aesthetics over results' },
    diyBuilders: { value: 'Template Limitations', badge: 'negative', description: 'Limited conversion features' }
  },
  {
    trait: 'UX Expertise',
    icon: <UserCheck className="w-5 h-5 text-blue-700 flex-shrink-0" />,
    clickrevamp: { value: 'UX Specialists', badge: 'positive', description: 'User-centric approach' },
    freelancers: { value: 'Varies Widely', badge: 'neutral', description: 'Skill levels vary greatly' },
    agencies: { value: 'Full Teams', badge: 'positive', description: 'Multiple specialists' },
    diyBuilders: { value: 'DIY Learning Curve', badge: 'negative', description: 'You need to learn UX principles' }
  },
  {
    trait: 'Mobile Optimization',
    icon: <Smartphone className="w-5 h-5 text-blue-700 flex-shrink-0" />,
    clickrevamp: { value: 'Mobile-First Design', badge: 'positive', description: 'Perfect on all devices' },
    freelancers: { value: 'Inconsistent Quality', badge: 'neutral', description: 'Depends on developer' },
    agencies: { value: 'Usually Good', badge: 'positive', description: 'Standard practice' },
    diyBuilders: { value: 'Template Dependent', badge: 'neutral', description: 'Limited by theme options' }
  },
  {
    trait: 'Support & Iteration',
    icon: <LifeBuoy className="w-5 h-5 text-blue-700 flex-shrink-0" />,
    clickrevamp: { value: 'Included Revisions', badge: 'positive', description: 'Post-launch support included' },
    freelancers: { value: 'Limited Availability', badge: 'negative', description: 'Often move to next project' },
    agencies: { value: 'Ongoing Retainer', badge: 'neutral', description: 'Continuous support at premium price' },
    diyBuilders: { value: 'Self-Support', badge: 'negative', description: 'DIY troubleshooting' }
  }
]

const competitors: Competitor[] = [
  { id: 'clickrevamp', name: 'ClickRevamp', icon: <CheckCircle className="w-4 h-4 text-blue-700" />, highlight: true },
  { id: 'freelancers', name: 'Freelancers', icon: <UserCheck className="w-4 h-4 text-slate-700" />, highlight: false },
  { id: 'agencies', name: 'Agencies', icon: <BadgeDollarSign className="w-4 h-4 text-slate-700" />, highlight: false },
  { id: 'diyBuilders', name: 'DIY Builders', icon: <Smartphone className="w-4 h-4 text-slate-700" />, highlight: false }
]

export default function ComparisonSection() {
  const { ref, isVisible } = useInViewAnimation()
  const [isMobile, setIsMobile] = useState(false)
  
  // Set up viewport detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    // Set initial state
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + (i * 0.05),
        duration: 0.5
      }
    })
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="comparison" className="w-full px-4 py-16 md:py-24 bg-white/90">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInVariants}
          ref={ref}
        >
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${spaceGrotesk.className}`}>
            Choose the Right Partner
          </h2>
          <p className="text-slate-500 text-center mb-10 text-sm md:text-base max-w-3xl mx-auto">
            Compare the most popular options for modernizing your website
          </p>
        </motion.div>

        {/* Mobile scroll hint */}
        {isMobile && (
          <motion.p 
            className="text-sm text-center text-slate-500 mb-4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          >
            <span className="inline-flex items-center">
              <Info className="h-4 w-4 mr-1.5 text-slate-400" />
              Scroll horizontally to view all options
            </span>
          </motion.p>
        )}

        {/* Comparison Table Container */}
        <motion.div 
          className="rounded-2xl shadow-md border border-slate-200 bg-white relative max-w-[1100px] mx-auto overflow-hidden"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          {/* Mobile scroll indicator */}
          {isMobile && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-8 pointer-events-none bg-gradient-to-l from-slate-50 to-transparent z-20 flex items-center justify-end pr-2">
              <ChevronRight className="h-5 w-5 text-slate-300" />
            </div>
          )}

          {/* Table with horizontal scroll on mobile only */}
          <div 
            className={`${isMobile ? 'overflow-x-auto' : ''} scrollbar-hide`} 
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Fixed-width container for mobile */}
            <table className={`${isMobile ? 'min-w-[800px]' : 'w-full'} border-collapse`}>
              <thead>
                <tr>
                  <th className={`${isMobile ? 'sticky' : 'relative'} left-0 z-10 bg-slate-100 w-[200px] py-5 px-6 border-b border-r border-slate-200 text-left align-middle`}>
                    <span className="font-bold text-[18px] text-slate-800">Features</span>
                  </th>
                  
                  {competitors.map((competitor, index) => (
                    <th 
                      key={competitor.id}
                      className={`py-5 px-6 text-left align-middle border-b ${index < competitors.length - 1 ? 'border-r' : ''} border-slate-200 ${competitor.highlight ? 'bg-blue-50/80' : 'bg-slate-50'}`}
                      style={{ width: 'calc((100% - 200px) / 4)' }}
                    >
                      <div className={`flex items-center gap-2 ${competitor.highlight ? 'shadow-sm bg-blue-50 py-1.5 px-2.5 rounded-md -mx-1' : ''}`}>
                        {competitor.icon}
                        <span className={`font-bold text-[16px] ${competitor.highlight ? 'text-blue-700' : 'text-slate-700'}`}>
                          {competitor.name}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {comparisonData.map((row, rowIndex) => (
                  <motion.tr 
                    key={row.trait}
                    className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors"
                    custom={rowIndex}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeInUpVariants}
                  >
                    <td className={`${isMobile ? 'sticky' : 'relative'} left-0 z-10 bg-white w-[200px] py-5 px-6 border-r border-slate-200 align-middle`}>
                      <div className="flex gap-3 items-center">
                        <div className="flex-shrink-0">
                          {row.icon}
                        </div>
                        <span className="font-bold text-[16px] text-slate-800 break-words">
                          {row.trait}
                        </span>
                      </div>
                    </td>

                    {competitors.map((competitor, index) => {
                      // Extract the property dynamically based on competitor ID
                      const item = row[competitor.id as keyof typeof row] as {
                        value: string
                        badge: Rating
                        description: string
                      }
                      
                      return (
                        <td 
                          key={competitor.id} 
                          className={`py-4 px-6 align-middle ${competitor.highlight ? 'bg-blue-50/10' : ''} ${index < competitors.length - 1 ? 'border-r border-slate-200' : ''}`}
                          style={{ width: 'calc((100% - 200px) / 4)' }}
                        >
                          <div className="h-full flex flex-col justify-between gap-2" style={{ minHeight: '80px' }}>
                            <div>
                              <span className="font-normal text-[15px] text-slate-700 break-words block">
                                {item.value}
                              </span>
                            </div>
                            <Badge type={item.badge}>
                              {item.description}
                            </Badge>
                          </div>
                        </td>
                      )
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.p 
          className="text-sm text-center text-slate-500 italic mt-6"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Choose ClickRevamp for the perfect balance of quality, affordability, and speed—without the compromises.
        </motion.p>
      </div>
    </section>
  )
} 