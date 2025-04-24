import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeInUpVariants, transitions, iconContainerVariants, processCardVariants } from "@/utils/animations"
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export interface ProcessStepProps extends Omit<HTMLMotionProps<"div">, "title"> {
  title: string
  description: string
  stepNumber: number
  icon: React.ReactNode
  iconVariants?: any // For specific icon animations like eyeIconVariants
  animated?: boolean
  animationDelay?: number
}

const ProcessStep = ({
  title,
  description,
  stepNumber,
  icon,
  iconVariants,
  animated = false,
  animationDelay = 0,
  className,
  ...props
}: ProcessStepProps) => {
  const iconWithVariants = iconVariants ? (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-8 h-8 md:w-9 md:h-9"
      variants={iconVariants}
      initial="hidden"
      animate="visible"
      custom={animated}
    >
      {icon}
    </motion.svg>
  ) : (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-8 h-8 md:w-9 md:h-9"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      {icon}
    </svg>
  );

  const cardContent = (
    <>
      <div className="relative mb-8">
        <motion.div 
          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center"
          variants={iconContainerVariants}
          initial="hidden"
          animate={animated ? "visible" : "hidden"}
          transition={transitions.iconScale}
          whileHover="hover"
          whileTap="tap"
        >
          {iconWithVariants}
        </motion.div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">
          {stepNumber}
        </div>
      </div>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${spaceGrotesk.className} font-sans text-gray-900`}>{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-mono">{description}</p>
    </>
  );

  if (animated) {
    return (
      <motion.div 
        className={cn(
          "flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative",
          className
        )}
        variants={animated ? processCardVariants : fadeInUpVariants}
        initial="hidden"
        animate="visible"
        transition={{ ...transitions.fadeIn, delay: animationDelay }}
        whileHover="hover"
        {...props}
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <div 
      className={cn(
        "flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative",
        className
      )}
      {...props as React.HTMLAttributes<HTMLDivElement>}
    >
      {cardContent}
    </div>
  );
};

export { ProcessStep }; 