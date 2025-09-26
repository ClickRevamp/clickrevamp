'use client'

import { createContext, useContext, useEffect, ReactNode } from 'react'
import { useForm, FormProvider, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Step1Schema, Step2Schema, Step3Schema, WizardData } from './types'
import { useLead } from '@/components/providers/LeadWizardProvider'

// Combined schema for all steps
const WizardSchema = Step1Schema.merge(Step2Schema).merge(Step3Schema)

interface WizardFormContextType {
  // Form methods for current step
  form: UseFormReturn<WizardData>
  // Validation helpers
  validateCurrentStep: () => Promise<boolean>
  // Data persistence
  saveStep: (stepData: Partial<WizardData>) => void
  getDefaults: () => WizardData
  // Step-specific form getters
  getStep1Form: () => UseFormReturn<z.infer<typeof Step1Schema>>
  getStep2Form: () => UseFormReturn<z.infer<typeof Step2Schema>>
  getStep3Form: () => UseFormReturn<z.infer<typeof Step3Schema>>
}

const WizardFormContext = createContext<WizardFormContextType | undefined>(undefined)

interface WizardFormProviderProps {
  children: ReactNode
}

const STORAGE_KEY = 'leadWizard_formData'

// Default form values
const getDefaultValues = (): WizardData => ({
  path: undefined as any, // Will be set by user selection
  siteUrl: '',
  goals: [],
  pages: undefined as any, // Will be set by user selection
  features: []
})

// Load persisted data from localStorage
const loadPersistedData = (): Partial<WizardData> => {
  if (typeof window === 'undefined') return {}
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch (error) {
    console.warn('Failed to load wizard data from localStorage:', error)
    return {}
  }
}

// Save data to localStorage
const saveToLocalStorage = (data: Partial<WizardData>) => {
  if (typeof window === 'undefined') return
  
  try {
    const existing = loadPersistedData()
    const merged = { ...existing, ...data }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
  } catch (error) {
    console.warn('Failed to save wizard data to localStorage:', error)
  }
}

export const WizardFormProvider = ({ children }: WizardFormProviderProps) => {
  const { currentStep } = useLead()
  
  // Initialize form with default values + persisted data
  const form = useForm<WizardData>({
    resolver: zodResolver(WizardSchema),
    defaultValues: getDefaultValues(),
    mode: 'onChange'
  })

  // Load persisted data on mount
  useEffect(() => {
    const persistedData = loadPersistedData()
    if (Object.keys(persistedData).length > 0) {
      // Reset form with persisted data
      form.reset({ ...getDefaultValues(), ...persistedData })
    }
  }, [form])

  const validateCurrentStep = async (): Promise<boolean> => {
    const values = form.getValues()
    
    try {
      switch (currentStep) {
        case 1:
          await Step1Schema.parseAsync({
            path: values.path,
            siteUrl: values.siteUrl
          })
          return true
        case 2:
          await Step2Schema.parseAsync({
            goals: values.goals
          })
          return true
        case 3:
          await Step3Schema.parseAsync({
            pages: values.pages,
            features: values.features
          })
          return true
        default:
          return false
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Set form errors using issues (not errors)
        error.issues.forEach((issue) => {
          // Only set error if path exists and is not empty
          if (issue.path && issue.path.length > 0) {
            const path = issue.path.join('.') as keyof WizardData
            form.setError(path, { message: issue.message })
          }
        })
      }
      return false
    }
  }

  const saveStep = (stepData: Partial<WizardData>) => {
    // Update form values
    const currentValues = form.getValues()
    const newValues = { ...currentValues, ...stepData }
    form.reset(newValues)
    
    // Persist to localStorage
    saveToLocalStorage(stepData)
  }

  const getDefaults = (): WizardData => {
    const persisted = loadPersistedData()
    return { ...getDefaultValues(), ...persisted }
  }

  // Step-specific form helpers (these would return properly typed forms)
  const getStep1Form = () => form as UseFormReturn<z.infer<typeof Step1Schema>>
  const getStep2Form = () => form as UseFormReturn<z.infer<typeof Step2Schema>>
  const getStep3Form = () => form as UseFormReturn<z.infer<typeof Step3Schema>>

  const contextValue: WizardFormContextType = {
    form,
    validateCurrentStep,
    saveStep,
    getDefaults,
    getStep1Form,
    getStep2Form,
    getStep3Form
  }

  return (
    <WizardFormContext.Provider value={contextValue}>
      <FormProvider {...form}>
        {children}
      </FormProvider>
    </WizardFormContext.Provider>
  )
}

export const useWizardForm = () => {
  const context = useContext(WizardFormContext)
  if (context === undefined) {
    throw new Error('useWizardForm must be used within a WizardFormProvider')
  }
  return context
}

// Clear stored data (useful for testing or when wizard completes)
export const clearWizardData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY)
  }
}
