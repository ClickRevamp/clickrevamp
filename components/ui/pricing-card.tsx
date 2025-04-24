import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { 
  pricingCardVariants, 
  listContainerVariants, 
  listItemVariants, 
  buttonHoverVariants,
  transitions 
} from "@/utils/animations"
import { Button } from "./button"

export interface PricingFeature {
  text: string
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  highlight?: boolean
  highlightText?: string
  features: string[]
  buttonStyle?: "primary" | "secondary"
}

export interface PricingCardProps extends Omit<HTMLMotionProps<"div">, "id"> {
  plan: PricingPlan
  animated?: boolean
  onButtonClick?: () => void
  index?: number
}

const PricingCard = ({
  plan,
  animated = false,
  onButtonClick,
  index = 0,
  className,
  ...props
}: PricingCardProps) => {
  
  const cardContent = (
    <>
      {plan.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-fuchsia-500 to-yellow-400 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md font-sans">
          {plan.highlightText}
        </div>
      )}
      <div className={`mb-6 ${plan.highlight ? 'mt-3' : ''} relative z-10`}>
        <div className="text-lg md:text-xl font-bold text-gray-900 font-sans">{plan.name}</div>
        <div className="text-2xl md:text-3xl font-bold mt-2 text-gray-900 font-sans">{plan.price}</div>
        <div className="text-xs md:text-sm text-gray-500 mt-1 font-mono">One-time payment</div>
      </div>
      
      {animated ? (
        <motion.ul 
          className="mb-6 space-y-3 text-xs sm:text-sm text-gray-600 relative z-10 font-mono"
          variants={listContainerVariants}
        >
          {plan.features.map((feature, featureIndex) => (
            <motion.li 
              key={featureIndex} 
              className="flex items-center"
              variants={listItemVariants}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <ul className="mb-6 space-y-3 text-xs sm:text-sm text-gray-600 relative z-10 font-mono">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      {animated ? (
        <motion.button 
          onClick={onButtonClick}
          className={cn(
            "w-full py-2.5 md:py-3 rounded-lg font-medium duration-300 relative z-10 text-sm md:text-base font-sans",
            plan.buttonStyle === 'primary' 
              ? 'bg-gray-900 text-white hover:opacity-90 transition-opacity' 
              : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors'
          )}
          variants={buttonHoverVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Get Started
        </motion.button>
      ) : (
        <Button
          onClick={onButtonClick}
          variant={plan.buttonStyle === 'primary' ? 'default' : 'outline'}
          className="w-full py-2.5 md:py-3"
        >
          Get Started
        </Button>
      )}
    </>
  )

  if (animated) {
    return (
      <motion.div 
        className={cn(
          "bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-md transition-all duration-300 relative",
          plan.highlight ? 'shadow-lg pricing-card-pro' : '',
          className
        )}
        variants={pricingCardVariants}
        transition={{...transitions.soft, delay: index * 0.1}}
        whileHover="hover"
        {...props}
      >
        {cardContent}
      </motion.div>
    )
  }

  return (
    <div 
      className={cn(
        "bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative",
        plan.highlight ? 'shadow-lg pricing-card-pro' : '',
        className
      )}
      {...props as React.HTMLAttributes<HTMLDivElement>}
    >
      {cardContent}
    </div>
  )
}

export { PricingCard } 