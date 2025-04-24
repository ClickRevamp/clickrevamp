import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { sectionHeaderVariants } from "@/utils/animations"
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export interface SectionHeaderProps extends Omit<HTMLMotionProps<"div">, "title"> {
  title: React.ReactNode
  description?: React.ReactNode
  centered?: boolean
  animated?: boolean
  maxDescriptionWidth?: string
  showAnimation?: boolean
}

const SectionHeader = ({
  title,
  description,
  centered = true,
  animated = false,
  maxDescriptionWidth = "max-w-2xl",
  showAnimation = true,
  className,
  ...props
}: SectionHeaderProps) => {
  const alignmentClasses = centered ? "text-center" : "text-left";
  const marginClasses = centered ? "mx-auto" : "";
  
  const headerContent = (
    <>
      <h2 className={cn(
        `text-3xl sm:text-3xl md:text-4xl font-bold mb-4 ${spaceGrotesk.className} font-sans text-gray-900`
      )}>
        {title}
      </h2>
      
      {description && (
        <p className={cn(
          "text-base md:text-lg lg:text-xl text-muted-foreground font-mono",
          maxDescriptionWidth,
          marginClasses
        )}>
          {description}
        </p>
      )}
    </>
  );

  if (animated && showAnimation) {
    return (
      <motion.div 
        className={cn("mb-16", alignmentClasses, className)}
        initial="hidden"
        animate="visible"
        variants={sectionHeaderVariants}
        {...props}
      >
        {headerContent}
      </motion.div>
    );
  }

  return (
    <div className={cn("mb-16", alignmentClasses, className)} {...props as React.HTMLAttributes<HTMLDivElement>}>
      {headerContent}
    </div>
  );
};

export { SectionHeader }; 