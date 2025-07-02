import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility for creating consistent spacing classes
export const spacing = {
  xs: "4px",
  sm: "8px", 
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
} as const

// Common container styles using the GOD-stack pattern
export const containerStyles = cn(
  "max-w-[1300px] mx-auto px-6"
) 