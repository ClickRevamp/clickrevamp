import { Variants } from 'framer-motion';

// -----------------------------------------------------
// COMMON TRANSITION SETTINGS
// -----------------------------------------------------
export const transitions = {
  fadeIn: { duration: 0.7, ease: "easeOut" },
  springBounce: { type: "spring", stiffness: 300, damping: 30 },
  hoverSpring: { type: "spring", stiffness: 300 },
  buttonHover: { duration: 0.3, ease: "easeOut" },
  iconScale: { duration: 0.6, ease: "easeOut" },
  stagger: { staggerChildren: 0.1, delayChildren: 0.2 },
  soft: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  bounce: { type: "spring", stiffness: 300, damping: 15 },
};

// -----------------------------------------------------
// BASIC ANIMATION VARIANTS
// -----------------------------------------------------
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInDownVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRightVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const popUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 500, damping: 30 }
  },
};

// -----------------------------------------------------
// CONTAINER VARIANTS WITH STAGGERED CHILDREN
// -----------------------------------------------------
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  },
};

export const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  },
};

// -----------------------------------------------------
// SECTION SPECIFIC ANIMATIONS
// -----------------------------------------------------

// Hero section animations
export const heroElementVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Features section animations
export const featureCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: { y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" },
};

export const featureIconVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, rotate: [0, 10, 0] },
  hover: { 
    scale: 1.15, 
    rotate: 5,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

// Testimonial carousel animations
export const testimonialCardVariants = (position: number) => ({
  animate: {
    x: `${position * 60}%`,
    scale: position === 0 ? 1 : 0.92,
    opacity: position === 0 ? 1 : 0.7,
    zIndex: 10 - Math.abs(position),
    filter: `blur(${position === 0 ? 0 : 1}px)`,
  },
});

// Icon animations in How It Works section
export const iconContainerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

// Step 1 icon animation
export const eyeIconVariants = {
  hidden: { opacity: 0 },
  visible: (animate: boolean) => ({
    opacity: animate ? [0, 1, 1, 0] : 0,
    scaleY: animate ? [1, 1, 1, 0.1] : 1,
    transition: {
      duration: 4,
      times: [0, 0.1, 0.9, 1],
      ease: "easeInOut",
      repeat: animate ? Infinity : 0,
      repeatDelay: 8,
      repeatType: "loop" as const,
      delay: 0
    }
  })
};

export const eyePupilVariants = {
  hidden: { x: 0 },
  visible: (animate: boolean) => ({
    x: animate ? [0, -4, 4, 0] : 0,
    transition: {
      duration: 3,
      times: [0, 0.3, 0.6, 0.9],
      ease: "easeInOut",
      repeat: animate ? Infinity : 0,
      repeatDelay: 9,
      repeatType: "loop" as const,
      delay: 0.5
    }
  })
};

// Step 2 icon animations
export const layoutIconRectVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: (animate: boolean) => ({
    opacity: animate ? [0, 1, 1, 0] : 0,
    pathLength: animate ? [0, 1, 1, 0] : 0,
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: animate ? Infinity : 0,
      times: [0, 0.2, 0.8, 1],
      delay: 4,
      repeatDelay: 8,
      repeatType: "loop" as const
    }
  })
};

export const layoutIconHorizLineVariants = {
  hidden: { opacity: 0, pathLength: 0, y: 5 },
  visible: (animate: boolean) => ({
    opacity: animate ? [0, 1, 1, 0] : 0,
    pathLength: animate ? [0, 1, 1, 0] : 0,
    y: animate ? [5, 0, 0, 5] : 5,
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: animate ? Infinity : 0,
      times: [0.1, 0.3, 0.75, 0.95],
      delay: 4,
      repeatDelay: 8,
      repeatType: "loop" as const
    }
  })
};

export const layoutIconVertLineVariants = {
  hidden: { opacity: 0, pathLength: 0, x: -2 },
  visible: (animate: boolean) => ({
    opacity: animate ? [0, 1, 1, 0] : 0,
    pathLength: animate ? [0, 1, 1, 0] : 0,
    x: animate ? [-2, 0, 0, -2] : -2,
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: animate ? Infinity : 0,
      times: [0.2, 0.4, 0.7, 0.9],
      delay: 4,
      repeatDelay: 8,
      repeatType: "loop" as const
    }
  })
};

// Step 3 icon animations
export const checkCircleVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: (animate: boolean) => ({
    opacity: animate ? [0, 1, 1, 0] : 0,
    pathLength: animate ? [0, 1, 1, 0] : 0,
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: animate ? Infinity : 0,
      times: [0, 0.2, 0.8, 1],
      delay: 8,
      repeatDelay: 8,
      repeatType: "loop" as const
    }
  })
};

export const checkmarkVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: (animate: boolean) => ({
    opacity: animate ? [0, 1, 1, 0] : 0,
    pathLength: animate ? [0, 1, 1, 0] : 0,
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: animate ? Infinity : 0,
      times: [0.15, 0.35, 0.75, 0.95],
      delay: 8,
      repeatDelay: 8,
      repeatType: "loop" as const
    }
  })
};

// Process step card animations
export const processCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { y: -5 },
};

// Pricing section animations
export const pricingCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: { 
    y: -8, 
    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 }
  },
};

export const pricingFeatureItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

// Button hover animations
export const buttonHoverVariants = {
  hover: { 
    scale: 1.02, 
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 }
  },
  tap: { scale: 0.98 }
};

// Contact form animations
export const formControlVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  focus: { 
    scale: 1.01,
    transition: { duration: 0.2 }
  }
};

// Comparison section animations
export const comparisonRowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  hover: { backgroundColor: "rgba(59, 130, 246, 0.05)" }
};

// Section header animations
export const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// -----------------------------------------------------
// UTILITY ANIMATION FUNCTIONS
// -----------------------------------------------------

/**
 * Creates staggered delay for multiple elements
 * @param index Element index in array
 * @param baseDelay Base delay before staggering starts
 * @returns Delay value in seconds
 */
export const staggerDelay = (index: number, baseDelay = 0.2): number => {
  return baseDelay + (index * 0.1);
};

/**
 * Creates a custom scroll-triggered animation variant
 * @param direction Direction of animation: 'up', 'down', 'left', 'right'
 * @param distance Distance to travel in pixels
 * @returns Framer Motion variants object
 */
export const scrollAnimationVariant = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up', 
  distance: number = 30
): Variants => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };
  
  return {
    hidden: { 
      opacity: 0, 
      ...directions[direction] 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
}; 