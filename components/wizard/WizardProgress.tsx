'use client'

import { useLead } from '@/components/providers/LeadWizardProvider'

export const WizardProgress = () => {
  const { currentStep, totalSteps } = useLead()
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-lime-400 to-green-400 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Progress Text */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-white/70">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-lime-400 font-medium">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  )
}
