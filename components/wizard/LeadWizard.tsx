'use client'

import { useState, useEffect, useRef } from 'react'
import { useLead } from '@/components/providers/LeadWizardProvider'
import { WizardFormProvider, useWizardForm } from './WizardFormProvider'
import { WizardProgress } from './WizardProgress'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Sheet, SheetContent, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { Step1Path } from './steps/Step1Path'
import { Step2Goals } from './steps/Step2Goals'
import { Step3Scope } from './steps/Step3Scope'

// Step titles based on PRD flow
const stepTitles = [
  'Choose Your Path',
  'Define Your Goals', 
  'Project Scope',
  'Brand & Content',
  'Timeline & Budget',
  'Contact Information',
  'Review & Confirm'
]

// Hook for imperative step animation - only animates when currentStep changes
const useStepAnimation = (currentStep: number) => {
  const controls = useAnimation()
  const prevStepRef = useRef(currentStep)
  
  useEffect(() => {
    if (prevStepRef.current !== currentStep) {
      // Step actually changed, trigger animation
      controls.start({
        opacity: [0, 1],
        x: [20, 0],
        transition: { duration: 0.3, ease: "easeOut" }
      })
      prevStepRef.current = currentStep
    }
  }, [currentStep, controls])
  
  return controls
}

// Internal wizard component that has access to form context
const WizardContent = () => {
  const { isOpen, closeWizard, currentStep, totalSteps, nextStep, prevStep } = useLead()
  const { validateCurrentStep, form } = useWizardForm()
  const [isDesktop, setIsDesktop] = useState(false)
  const [isValidating, setIsValidating] = useState(false)
  const stepAnimationControls = useStepAnimation(currentStep)

  // Check if desktop on mount and resize
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    checkIsDesktop()
    window.addEventListener('resize', checkIsDesktop)
    
    return () => window.removeEventListener('resize', checkIsDesktop)
  }, [])

  const currentStepTitle = stepTitles[currentStep - 1] || 'Website Planning'

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeWizard()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, closeWizard])

  // Handle navigation
  const handleContinue = async () => {
    if (currentStep > 3) return // Only handling steps 1-3 for now
    
    setIsValidating(true)
    try {
      const isValid = await validateCurrentStep()
      if (isValid) {
        // Save current step data
        const values = form.getValues()
        form.clearErrors() // Clear any previous errors
        nextStep()
      }
    } catch (error) {
      console.error('Validation error:', error)
    } finally {
      setIsValidating(false)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      prevStep()
    }
  }

  // Render the current step
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Path />
      case 2:
        return <Step2Goals />
      case 3:
        return <Step3Scope />
      default:
        return (
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-lime-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-lime-400">{currentStep}</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {currentStepTitle}
            </h3>
            <p className="text-white/60 mb-6">
              Step {currentStep} will be implemented in the next phase.
            </p>
          </div>
        )
    }
  }

  // Wizard content component - restructured to separate chrome from animated content
  const WizardStepContent = () => (
    <>
      {/* Static Progress Bar - doesn't re-animate */}
      <div className="py-4">
        <WizardProgress />
      </div>

      {/* Animated Step Content Only - no key, no AnimatePresence */}
      <div className="flex-1 py-8 overflow-y-auto overflow-x-hidden will-change-scroll">
        <motion.div
          animate={stepAnimationControls}
          className="h-full"
        >
          {renderCurrentStep()}
        </motion.div>
      </div>

      {/* Static Footer Navigation - doesn't re-animate */}
      <div className="flex-shrink-0 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between gap-4">
          {/* Back Button */}
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 hover:text-white"
            disabled={currentStep === 1}
            onClick={handleBack}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {/* Skip Button (only show for non-required steps) */}
          {currentStep > 3 && (
            <Button
              variant="ghost"
              className="text-white/60 hover:text-white hover:bg-white/10"
              onClick={() => nextStep()}
            >
              Skip
            </Button>
          )}

          {/* Continue Button */}
          <Button
            className="bg-gradient-to-r from-lime-400 to-green-400 text-black hover:from-lime-300 hover:to-green-300 font-medium disabled:opacity-50"
            disabled={isValidating || currentStep > 3}
            onClick={handleContinue}
          >
            {isValidating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Validating...
              </>
            ) : (
              <>
                {currentStep === 3 ? 'Next Phase' : 'Continue'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
        
        {/* Static Progress indicator - doesn't re-animate */}
        <div className="text-center mt-4">
          <span className="text-sm text-white/50">
            {currentStep} of {totalSteps} steps
            {currentStep <= 3 ? ' (Phase 1)' : ''}
          </span>
        </div>
      </div>
    </>
  )

  // Don't render until we know the viewport size
  if (typeof window === 'undefined') {
    return null
  }

  // Desktop: Dialog
  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && closeWizard()}>
        <DialogContent className="max-w-3xl max-h-[90vh] p-8 bg-black/95 backdrop-blur-md border-white/10">
          <DialogTitle asChild>
            <h2 className="text-2xl font-bold text-white mb-2">
              {currentStepTitle}
            </h2>
          </DialogTitle>
          <DialogDescription asChild>
            <p className="text-white/70 text-sm mb-4">
              Step {currentStep} of {totalSteps} — Get your personalized website plan in minutes
            </p>
          </DialogDescription>
          
          <div className="flex flex-col h-full min-h-[600px]">
            <WizardStepContent />
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // Mobile: Sheet
  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeWizard()}>
      <SheetContent 
        side="bottom" 
        className="h-[90vh] bg-black/95 backdrop-blur-md border-white/10 text-white p-6"
      >
        <SheetTitle asChild>
          <h2 className="text-xl font-bold text-white mb-1">
            {currentStepTitle}
          </h2>
        </SheetTitle>
        <SheetDescription asChild>
          <p className="text-white/70 text-sm mb-4">
            Step {currentStep} of {totalSteps} — Get your personalized website plan in minutes
          </p>
        </SheetDescription>
        
        <div className="flex flex-col h-full min-h-[500px]">
          <WizardStepContent />
        </div>
      </SheetContent>
    </Sheet>
  )
}

// Main component that provides form context
export const LeadWizard = () => {
  return (
    <WizardFormProvider>
      <WizardContent />
    </WizardFormProvider>
  )
}
