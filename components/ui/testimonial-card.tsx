import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { testimonialCardVariants, transitions } from "@/utils/animations"

export interface TestimonialProps {
  quote: string
  name: string
  title: string
  position?: number
  active?: boolean
}

export interface TestimonialCardProps extends Omit<HTMLMotionProps<"div">, "title"> {
  testimonial: TestimonialProps
  animated?: boolean
}

const TestimonialCard = ({
  testimonial,
  animated = false,
  className,
  ...props
}: TestimonialCardProps) => {
  const { quote, name, title, position = 0, active = false } = testimonial;

  const cardContent = (
    <>
      <div className="mb-6 relative">
        <svg className="absolute top-0 left-0 text-primary/10 w-12 md:w-16 h-12 md:h-16 -mt-4 md:-mt-6 -ml-3 md:-ml-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-base md:text-lg leading-relaxed relative z-10 text-gray-700">{quote}</p>
      </div>
      <div className="mt-auto flex items-center">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/10 to-blue-100 flex items-center justify-center text-primary mr-4 shadow-sm">
          <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div>
          <p className="font-bold text-primary text-sm md:text-base">{name}</p>
          <p className="text-xs md:text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </>
  );

  if (animated) {
    return (
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        initial={false}
        animate={testimonialCardVariants(position).animate}
        transition={transitions.springBounce}
        {...props}
      >
        <div 
          className={cn(
            `bg-white/95 p-6 md:p-8 lg:p-10 rounded-2xl w-[90%] max-w-md mx-auto transition-all duration-300 flex flex-col`,
            active 
              ? 'shadow-lg border-gray-200 border hover:shadow-xl hover:scale-[1.02]' 
              : 'shadow-md',
            className
          )}
        >
          {cardContent}
        </div>
      </motion.div>
    );
  }

  return (
    <div 
      className={cn(
        "bg-white/95 p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-200 flex flex-col",
        className
      )}
      {...props as React.HTMLAttributes<HTMLDivElement>}
    >
      {cardContent}
    </div>
  );
};

export { TestimonialCard }; 