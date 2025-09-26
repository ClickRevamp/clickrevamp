'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { 
  Target, 
  TrendingUp, 
  Search, 
  Zap, 
  Globe, 
  CreditCard, 
  Settings,
  AlertCircle,
  Check
} from 'lucide-react'
import { Label } from '@/components/ui/label'
import { WizardData, goalOptions } from '../types'
import { cn } from '@/lib/utils'

// Icon mapping for goals
const goalIcons = {
  leads: <Target className="h-4 w-4" />,
  conversions: <TrendingUp className="h-4 w-4" />,
  seo: <Search className="h-4 w-4" />,
  speed: <Zap className="h-4 w-4" />,
  multilingual: <Globe className="h-4 w-4" />,
  payments: <CreditCard className="h-4 w-4" />,
  cms: <Settings className="h-4 w-4" />
} as const

// Hook to detect first mount and prevent re-animation
const useFirstMount = () => {
  const isFirstMount = useRef(true)
  
  useEffect(() => {
    isFirstMount.current = false
  }, [])
  
  return isFirstMount.current
}

export const Step2Goals = () => {
  const { control, formState: { errors } } = useFormContext<WizardData>()
  const isFirstMount = useFirstMount()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          What are your main goals?
        </h2>
        <p className="text-gray-400 text-sm">
          Select all that apply - this helps us tailor your website plan
        </p>
      </div>

      <Controller
        name="goals"
        control={control}
        render={({ field }) => (
          <div className="space-y-4">
            <Label className="sr-only">Goal selection</Label>
            
            <div 
              role="group" 
              aria-labelledby="goals-selection"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 overflow-x-hidden"
            >
              <Label id="goals-selection" className="sr-only">
                Website goals
              </Label>
              
              {goalOptions.map((option, index) => {
                const isSelected = field.value?.includes(option.value) || false
                
                return (
                  <div key={option.value} className="p-1">
                    <button
                      type="button"
                      onClick={() => {
                        const currentGoals = field.value || []
                        const newGoals = isSelected
                          ? currentGoals.filter(g => g !== option.value)
                          : [...currentGoals, option.value]
                        field.onChange(newGoals)
                      }}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 transition-all duration-200",
                        "text-left flex items-center space-x-3",
                        "hover:border-lime-500/50 hover:bg-gray-900/50",
                        "focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/20",
                        isSelected
                          ? "border-lime-500 bg-lime-500/10 ring-1 ring-lime-500/20"
                          : "border-gray-700 bg-gray-900/30"
                      )}
                      aria-pressed={isSelected}
                      aria-describedby={`goal-${option.value}-desc`}
                    >
                      {/* Icon */}
                      <div className={cn(
                        "flex-shrink-0 p-2 rounded-lg transition-colors",
                        isSelected
                          ? "bg-lime-500/20 text-lime-400"
                          : "bg-gray-700 text-gray-300"
                      )}>
                        {goalIcons[option.value]}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className={cn(
                          "font-semibold transition-colors",
                          isSelected ? "text-lime-400" : "text-white"
                        )}>
                          {option.label}
                        </div>
                      </div>
                      
                      {/* Selection indicator */}
                      <div className={cn(
                        "flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all",
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
                            <Check className="h-3 w-3 text-black" />
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
                  ? `${field.value.length} goal${field.value.length === 1 ? '' : 's'} selected`
                  : 'Select at least one goal to continue'
                }
              </p>
            </div>
          </div>
        )}
      />

      {/* Error message */}
      {errors.goals && (
        <div
          className="flex items-center space-x-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20"
          role="alert"
        >
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>{errors.goals.message}</span>
        </div>
      )}
    </div>
  )
}
