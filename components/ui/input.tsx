import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { formControlVariants } from "@/utils/animations"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  animated?: boolean
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, animated = false, icon, ...props }, ref) => {
    const inputComponent = (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-mono",
          "placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/70 transition-all duration-300",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )

    if (animated) {
      return (
        <motion.div
          variants={formControlVariants}
          className={cn("relative", icon && "flex items-center")}
        >
          {icon && (
            <div className="absolute left-3 flex h-10 w-8 items-center justify-center text-gray-500">
              {icon}
            </div>
          )}
          {inputComponent}
        </motion.div>
      )
    }

    if (icon) {
      return (
        <div className="relative flex items-center">
          <div className="absolute left-3 flex h-10 w-8 items-center justify-center text-gray-500">
            {icon}
          </div>
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-4 py-3 text-sm font-mono",
              "placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/70 transition-all duration-300",
              "disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      )
    }

    return inputComponent
  }
)
Input.displayName = "Input"

export { Input } 