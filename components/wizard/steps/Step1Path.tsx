'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Globe, Plus, AlertCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { WizardData } from '../types'
import { cn } from '@/lib/utils'

interface PathOption {
  value: 'new' | 'revamp'
  title: string
  description: string
  icon: React.ReactNode
}

const pathOptions: PathOption[] = [
  {
    value: 'new',
    title: 'New Website',
    description: 'Build a brand new site from scratch',
    icon: <Plus className="h-6 w-6" />
  },
  {
    value: 'revamp',
    title: 'Revamp My Site', 
    description: 'Redesign and improve existing site',
    icon: <Globe className="h-6 w-6" />
  }
]

export const Step1Path = () => {
  const { control, watch, formState: { errors }, setValue } = useFormContext<WizardData>()
  
  const selectedPath = watch('path')
  const showUrlInput = selectedPath === 'revamp'

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          What type of project is this?
        </h2>
        <p className="text-gray-400 text-sm">
          Choose the path that best describes your needs
        </p>
      </div>

      {/* Path Selection Cards */}
      <Controller
        name="path"
        control={control}
        render={({ field }) => (
          <div role="group" aria-labelledby="path-selection" className="grid gap-4 md:gap-5 overflow-x-hidden">
            <Label id="path-selection" className="sr-only">
              Project type selection
            </Label>
            
                        {pathOptions.map((option) => (
              <div key={option.value} className="p-1">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Card
                  className={cn(
                    "relative cursor-pointer border-2 transition-all duration-200",
                    "hover:border-lime-500/50 hover:bg-gray-900/50",
                    field.value === option.value
                      ? "border-lime-500 bg-lime-500/10 ring-1 ring-lime-500/20"
                      : "border-gray-700 bg-gray-900/30",
                    "focus-within:border-lime-500 focus-within:ring-1 focus-within:ring-lime-500/20"
                  )}
                  onClick={() => {
                    field.onChange(option.value)
                    // Clear URL when switching to "new" path
                    if (option.value === 'new') {
                      // We'll handle this in the parent form context
                    }
                  }}
                >
                  <div className="p-6 flex items-start space-x-4">
                    {/* Radio input for accessibility */}
                    <input
                      type="radio"
                      id={`path-${option.value}`}
                      value={option.value}
                      checked={field.value === option.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="sr-only"
                      aria-describedby={`path-${option.value}-desc`}
                    />
                    
                    {/* Icon */}
                    <div className={cn(
                      "flex-shrink-0 p-2 rounded-lg transition-colors",
                      field.value === option.value
                        ? "bg-lime-500/20 text-lime-400"
                        : "bg-gray-700 text-gray-300"
                    )}>
                      {option.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <Label
                        htmlFor={`path-${option.value}`}
                        className={cn(
                          "block text-lg font-semibold cursor-pointer transition-colors",
                          field.value === option.value
                            ? "text-lime-400"
                            : "text-white"
                        )}
                      >
                        {option.title}
                      </Label>
                      <p
                        id={`path-${option.value}-desc`}
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
                  </div>
                </Card>
                </motion.div>
              </div>
            ))}
          </div>
        )}
      />

      {/* Error message for path selection */}
      {errors.path && (
        <div className="flex items-center space-x-2 text-red-400 text-sm" role="alert">
          <AlertCircle className="h-4 w-4" />
          <span>{errors.path.message}</span>
        </div>
      )}

      {/* URL Input (conditional) */}
      {showUrlInput && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-3"
        >
          <div>
            <Label htmlFor="siteUrl" className="text-white font-medium">
              Current Website URL
            </Label>
            <p className="text-gray-400 text-sm mt-1">
              Drop your current site URL so we can analyze it
            </p>
          </div>
          
          <Controller
            name="siteUrl"
            control={control}
            render={({ field }) => (
              <div className="space-y-2">
                <Input
                  id="siteUrl"
                  placeholder="https://example.com"
                  autoComplete="url"
                  className={cn(
                    "bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500",
                    "focus:border-lime-500 focus:ring-lime-500/20",
                    errors.siteUrl && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  )}
                  aria-invalid={!!errors.siteUrl}
                  aria-describedby={errors.siteUrl ? "siteUrl-error" : "siteUrl-helper"}
                  onBlur={() => {
                    const raw = field.value?.trim() || "";
                    const val = raw && !/^https?:\/\//i.test(raw) ? `https://${raw}` : raw;
                    setValue("siteUrl", val, { shouldValidate: true, shouldDirty: true });
                  }}
                  {...field}
                />
                
                {/* Helper text */}
                <p
                  id="siteUrl-helper"
                  className="text-gray-500 text-xs"
                >
                  Tip: You can paste a domain — we'll add https:// for you.
                </p>
                
                {errors.siteUrl && (
                  <div
                    id="siteUrl-error"
                    className="flex items-center space-x-2 text-red-400 text-sm"
                    role="alert"
                  >
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.siteUrl.message}</span>
                  </div>
                )}
              </div>
            )}
          />
        </motion.div>
      )}
    </div>
  )
}
