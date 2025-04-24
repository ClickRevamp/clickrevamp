import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { formControlVariants } from "@/utils/animations"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  animated?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, animated = false, ...props }, ref) => {
    const textareaComponent = (
      <textarea
        className={cn(
          "flex min-h-24 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-mono",
          "placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/70 transition-all duration-300",
          "disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )

    if (animated) {
      return (
        <motion.div variants={formControlVariants}>
          {textareaComponent}
        </motion.div>
      )
    }

    return textareaComponent
  }
)
Textarea.displayName = "Textarea"

export { Textarea } 