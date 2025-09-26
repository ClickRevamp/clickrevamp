'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLead } from '@/components/providers/LeadWizardProvider'

interface PrimaryCTAProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

const sizeVariants = {
  sm: {
    container: 'px-4 py-2 text-sm',
    icon: 'w-3 h-3',
    spacing: 'gap-1.5'
  },
  md: {
    container: 'px-6 py-3 text-base',
    icon: 'w-4 h-4',
    spacing: 'gap-2'
  },
  lg: {
    container: 'px-8 py-4 text-lg',
    icon: 'w-4 h-4',
    spacing: 'gap-2'
  }
}

export const PrimaryCTA = ({ 
  size = 'md', 
  className,
  onClick 
}: PrimaryCTAProps) => {
  const { openWizard } = useLead()
  const variant = sizeVariants[size]

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      openWizard()
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        // Base styles
        'relative font-semibold rounded-full transition-all duration-300 border-0 overflow-hidden group cursor-pointer',
        // Background gradient
        'bg-gradient-to-r from-[#d4ff3f] to-[#00ff95] text-black',
        // Glow effect
        'shadow-[0_0_30px_rgba(212,255,63,0.3)] hover:shadow-[0_0_40px_rgba(212,255,63,0.4)]',
        // Focus ring
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        // Size variant
        variant.container,
        className
      )}
      aria-label="Get My Website Plan - Open website planning wizard"
    >
      <span className={cn('relative z-10 flex items-center', variant.spacing)}>
        <Sparkles className={cn('text-black', variant.icon)} />
        <span>Get My Website Plan</span>
      </span>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e6ff00] to-[#00ffae] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  )
}

