'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface LeadWizardState {
  isOpen: boolean
  currentStep: number
  totalSteps: number
  openWizard: () => void
  closeWizard: () => void
  nextStep: () => void
  prevStep: () => void
  goToStep: (step: number) => void
}

const LeadWizardContext = createContext<LeadWizardState | undefined>(undefined)

interface LeadWizardProviderProps {
  children: ReactNode
}

const TOTAL_STEPS = 7 // Based on PRD: Path → Goals → Scope → Brand → Timeline → Contact → Review

export const LeadWizardProvider = ({ children }: LeadWizardProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const openWizard = () => {
    console.log('🧙‍♂️ Lead Wizard opened - isOpen:', true)
    setIsOpen(true)
    // Keep current step when reopening (as per requirements)
  }

  const closeWizard = () => {
    console.log('🧙‍♂️ Lead Wizard closed - isOpen:', false)
    setIsOpen(false)
  }

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      const newStep = currentStep + 1
      setCurrentStep(newStep)
      console.log('🧙‍♂️ Wizard step changed:', newStep)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1
      setCurrentStep(newStep)
      console.log('🧙‍♂️ Wizard step changed:', newStep)
    }
  }

  const goToStep = (step: number) => {
    if (step >= 1 && step <= TOTAL_STEPS) {
      setCurrentStep(step)
      console.log('🧙‍♂️ Wizard jumped to step:', step)
    }
  }

  const value: LeadWizardState = {
    isOpen,
    currentStep,
    totalSteps: TOTAL_STEPS,
    openWizard,
    closeWizard,
    nextStep,
    prevStep,
    goToStep
  }

  return (
    <LeadWizardContext.Provider value={value}>
      {children}
    </LeadWizardContext.Provider>
  )
}

export const useLead = () => {
  const context = useContext(LeadWizardContext)
  if (context === undefined) {
    throw new Error('useLead must be used within a LeadWizardProvider')
  }
  return context
}

