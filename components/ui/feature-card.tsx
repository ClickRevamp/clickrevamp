import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { featureCardVariants, featureIconVariants, transitions } from "@/utils/animations"

export interface FeatureCardProps extends Omit<HTMLMotionProps<"div">, "title"> {
  title: string
  description: string
  icon: React.ReactNode
  animated?: boolean
  iconBg?: string
  index?: number
}

const FeatureCard = ({
  title,
  description,
  icon,
  animated = false,
  iconBg = "bg-gradient-to-br from-primary/10 to-blue-100",
  index = 0,
  className,
  ...props
}: FeatureCardProps) => {
  const cardContent = (
    <>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-blue-100/10 rounded-full -mr-10 -mt-10 z-0"></div>
      <div className="relative z-10">
        {animated ? (
          <motion.div 
            className={cn(
              "w-20 h-20 rounded-2xl text-primary flex items-center justify-center mb-8 shadow-sm",
              "group-hover:shadow group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-blue-200 transition-all duration-300",
              iconBg
            )}
            variants={featureIconVariants}
            whileHover="hover"
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="transform transition-transform duration-300"
            >
              {icon}
            </svg>
          </motion.div>
        ) : (
          <div 
            className={cn(
              "w-20 h-20 rounded-2xl text-primary flex items-center justify-center mb-8 shadow-sm",
              "group-hover:shadow group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-blue-200 transition-all duration-300",
              iconBg
            )}
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="transform group-hover:scale-110 transition-transform duration-300"
            >
              {icon}
            </svg>
          </div>
        )}
        <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors font-sans text-gray-900">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-mono">
          {description}
        </p>
      </div>
    </>
  )

  if (animated) {
    return (
      <motion.div 
        className={cn(
          "bg-white/90 p-8 rounded-xl border border-gray-200 shadow-sm group overflow-hidden relative",
          className
        )}
        variants={featureCardVariants}
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
        "bg-white/90 p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden relative",
        className
      )}
      {...props as React.HTMLAttributes<HTMLDivElement>}
    >
      {cardContent}
    </div>
  )
}

export { FeatureCard } 