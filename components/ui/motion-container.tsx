import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { staggerContainerVariants, transitions } from "@/utils/animations"

export interface MotionContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  staggered?: boolean
  delayChildren?: number
  staggerChildren?: number
  visible?: boolean
  customVariants?: any
}

const MotionContainer = ({
  children,
  staggered = false,
  delayChildren = 0.2,
  staggerChildren = 0.1,
  visible = true,
  customVariants,
  className,
  ...props
}: MotionContainerProps) => {
  const variants = customVariants || (staggered ? {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren,
        delayChildren,
      }
    }
  } : {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  });

  return (
    <motion.div
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export interface MotionItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  index?: number
  customDelay?: number
  customVariants?: any
}

const MotionItem = ({
  children,
  index = 0,
  customDelay,
  customVariants,
  className,
  ...props
}: MotionItemProps) => {
  const delay = customDelay || index * 0.1;
  
  return (
    <motion.div
      variants={customVariants || staggerContainerVariants}
      className={className}
      transition={{
        ...transitions.soft,
        delay
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export { MotionContainer, MotionItem }; 