'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { 
  FileText, 
  Star, 
  MessageSquare, 
  FileImage, 
  Mail, 
  Calendar, 
  MessageCircle, 
  Users, 
  Zap,
  AlertCircle,
  Check,
  Crown,
  Building
} from 'lucide-react'
import { Label } from '@/components/ui/label'
import { WizardData, pageOptions, featureOptions } from '../types'
import { cn } from '@/lib/utils'

// Icon mapping for features
const featureIcons = {
  hero: <Star className="h-4 w-4" />,
  pricing: <Crown className="h-4 w-4" />,
  testimonials: <MessageSquare className="h-4 w-4" />,
  blog: <FileText className="h-4 w-4" />,
  forms: <Mail className="h-4 w-4" />,
  calendar: <Calendar className="h-4 w-4" />,
  chat: <MessageCircle className="h-4 w-4" />,
  crm: <Users className="h-4 w-4" />,
  email_automations: <Zap className="h-4 w-4" />
} as const

// Page count icons
const pageIcons = {
  '1-3': <FileImage className="h-5 w-5" />,
  '4-7': <Building className="h-5 w-5" />,
  '8+': <FileText className="h-5 w-5" />
} as const

// Hook to detect first mount and prevent re-animation
const useFirstMount = () => {
  const isFirstMount = useRef(true)
  
  useEffect(() => {
    isFirstMount.current = false
  }, [])
  
  return isFirstMount.current
}

export const Step3Scope = () => {
  const { control, formState: { errors } } = useFormContext<WizardData>()
  const isFirstMount = useFirstMount()

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          What's the scope of your project?
        </h2>
        <p className="text-gray-400 text-sm">
          Help us understand the size and features you need
        </p>
      </div>

      {/* Page Count Selection */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            How many pages do you need?
          </h3>
          <p className="text-gray-400 text-sm">
            This helps us estimate the project timeline and cost
          </p>
        </div>

        <Controller
          name="pages"
          control={control}
          render={({ field }) => (
            <div role="group" aria-labelledby="pages-selection" className="grid gap-4 md:gap-5 overflow-x-hidden">
              <Label id="pages-selection" className="sr-only">
                Page count selection
              </Label>
              
              {pageOptions.map((option) => (
                <div key={option.value} className="p-1">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                  <button
                    type="button"
                    onClick={() => field.onChange(option.value)}
                    className={cn(
                      "w-full p-4 rounded-xl border-2 transition-all duration-200",
                      "text-left flex items-center space-x-4",
                      "hover:border-lime-500/50 hover:bg-gray-900/50",
                      "focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/20",
                      field.value === option.value
                        ? "border-lime-500 bg-lime-500/10 ring-1 ring-lime-500/20"
                        : "border-gray-700 bg-gray-900/30"
                    )}
                    aria-pressed={field.value === option.value}
                    aria-describedby={`page-${option.value}-desc`}
                  >
                    {/* Icon */}
                    <div className={cn(
                      "flex-shrink-0 p-2 rounded-lg transition-colors",
                      field.value === option.value
                        ? "bg-lime-500/20 text-lime-400"
                        : "bg-gray-700 text-gray-300"
                    )}>
                      {pageIcons[option.value]}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className={cn(
                        "font-semibold text-lg transition-colors",
                        field.value === option.value ? "text-lime-400" : "text-white"
                      )}>
                        {option.label}
                      </div>
                      <p
                        id={`page-${option.value}-desc`}
                        className="text-sm text-gray-400 mt-1"
                      >
                        {option.description}
                      </p>
                    </div>
                    
                    {/* Selection indicator */}
                    <div className={cn(
                      "flex-shrink-0 w-5 h-5 rounded-full border-2 transition-all",
                      field.value === option.value
                        ? "border-lime-500 bg-lime-500"
                        : "border-gray-500"
                    )}>
                      {field.value === option.value && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-full h-full rounded-full bg-lime-500 flex items-center justify-center"
                        >
                          <div className="w-2 h-2 rounded-full bg-black" />
                        </motion.div>
                      )}
                    </div>
                  </button>
                  </motion.div>
                </div>
              ))}
            </div>
          )}
        />

        {/* Error message for pages */}
        {errors.pages && (
          <div className="flex items-center space-x-2 text-red-400 text-sm" role="alert">
            <AlertCircle className="h-4 w-4" />
            <span>{errors.pages.message}</span>
          </div>
        )}
      </div>

      {/* Features Selection */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            What features do you need?
          </h3>
          <p className="text-gray-400 text-sm">
            Select any features you'd like included (optional)
          </p>
        </div>

        <Controller
          name="features"
          control={control}
          render={({ field }) => (
            <div className="space-y-4">
              <div 
                role="group" 
                aria-labelledby="features-selection"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 overflow-x-hidden"
              >
                <Label id="features-selection" className="sr-only">
                  Feature selection
                </Label>
                
                {featureOptions.map((option, index) => {
                  const isSelected = field.value?.includes(option.value) || false
                  
                  return (
                    <div key={option.value} className="p-1">
                      <button
                        type="button"
                        onClick={() => {
                          const currentFeatures = field.value || []
                          const newFeatures = isSelected
                            ? currentFeatures.filter(f => f !== option.value)
                            : [...currentFeatures, option.value]
                          field.onChange(newFeatures)
                        }}
                        className={cn(
                          "w-full p-3 rounded-lg border-2 transition-all duration-200",
                          "text-left flex items-center space-x-3",
                          "hover:border-lime-500/50 hover:bg-gray-900/50",
                          "focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/20",
                          isSelected
                            ? "border-lime-500 bg-lime-500/10 ring-1 ring-lime-500/20"
                            : "border-gray-700 bg-gray-900/30"
                        )}
                        aria-pressed={isSelected}
                      >
                        {/* Icon */}
                        <div className={cn(
                          "flex-shrink-0 p-1.5 rounded transition-colors",
                          isSelected
                            ? "bg-lime-500/20 text-lime-400"
                            : "bg-gray-700 text-gray-300"
                        )}>
                          {featureIcons[option.value]}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className={cn(
                            "font-medium text-sm transition-colors",
                            isSelected ? "text-lime-400" : "text-white"
                          )}>
                            {option.label}
                          </div>
                        </div>
                        
                        {/* Selection indicator */}
                        <div className={cn(
                          "flex-shrink-0 w-4 h-4 rounded border transition-all",
                          "flex items-center justify-center",
                          isSelected
                            ? "border-lime-500 bg-lime-500"
                            : "border-gray-500"
                        )}>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              <Check className="h-2.5 w-2.5 text-black" />
                            </motion.div>
                          )}
                        </div>
                      </button>
                    </div>
                  )
                })}
              </div>

              {/* Helper text */}
              <div className="text-center">
                <p className="text-gray-500 text-xs">
                  {field.value?.length > 0 
                    ? `${field.value.length} feature${field.value.length === 1 ? '' : 's'} selected`
                    : 'Features are optional - you can add them later'
                  }
                </p>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  )
}
