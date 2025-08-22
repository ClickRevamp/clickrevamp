'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function TopStripScanner() {
  const [isActive, setIsActive] = useState(false)
  const searchParams = useSearchParams()
  
  // Check if debug mode is enabled
  const debugMode = 
    process.env.NEXT_PUBLIC_DEBUG_TOPSTRIP === '1' || 
    searchParams?.get('debug') === '1'

  useEffect(() => {
    if (!debugMode) return

    setIsActive(true)
    
    const overlays: HTMLDivElement[] = []
    const suspects: Array<{
      selector: string
      y: number
      width: number
      stylesSubset: Record<string, string>
    }> = []

    const getElementSelector = (element: Element): string => {
      if (element.id) return `#${element.id}`
      if (element.className) {
        const classes = Array.from(element.classList).join('.')
        return `${element.tagName.toLowerCase()}.${classes}`
      }
      return element.tagName.toLowerCase()
    }

    const scanTopStrip = () => {
      console.log('🔍 TopStripScanner: Starting scan for y=0-3px...')
      
      const seenElements = new Set<Element>()
      const windowWidth = window.innerWidth
      
      // Sample 24 evenly-spaced x positions
      for (let i = 0; i < 24; i++) {
        const x = (windowWidth / 23) * i
        
        // Check y positions 0-3px from top
        for (let y = 0; y <= 3; y++) {
          const elements = document.elementsFromPoint(x, y)
          
          if (elements.length > 0) {
            // Get all elements except html/body
            const topElements = elements.filter(el => 
              el.tagName !== 'HTML' && 
              el.tagName !== 'BODY'
            )
            
            topElements.forEach(el => seenElements.add(el))
          }
        }
      }

      // Log html and body styles once
      const htmlEl = document.documentElement
      const bodyEl = document.body
      
      const htmlStyles = window.getComputedStyle(htmlEl)
      const bodyStyles = window.getComputedStyle(bodyEl)
      
      console.log('📋 HTML computed styles:', {
        background: htmlStyles.background,
        backgroundColor: htmlStyles.backgroundColor,
        borderTop: htmlStyles.borderTop,
        boxShadow: htmlStyles.boxShadow,
        backdropFilter: htmlStyles.backdropFilter,
        position: htmlStyles.position,
        zIndex: htmlStyles.zIndex
      })
      
      console.log('📋 BODY computed styles:', {
        background: bodyStyles.background,
        backgroundColor: bodyStyles.backgroundColor,
        borderTop: bodyStyles.borderTop,
        boxShadow: bodyStyles.boxShadow,
        backdropFilter: bodyStyles.backdropFilter,
        position: bodyStyles.position,
        zIndex: bodyStyles.zIndex
      })

      // Analyze each unique element
      seenElements.forEach(element => {
        const rect = element.getBoundingClientRect()
        const computedStyle = window.getComputedStyle(element)
        
        // Check if element spans >90% of viewport width
        const isWideElement = rect.width >= windowWidth * 0.9
        
        if (isWideElement && rect.top <= 3) {
          const selector = getElementSelector(element)
          
          const stylesSubset = {
            background: computedStyle.background,
            backgroundColor: computedStyle.backgroundColor,
            borderTop: computedStyle.borderTop,
            boxShadow: computedStyle.boxShadow,
            backdropFilter: computedStyle.backdropFilter,
            position: computedStyle.position,
            zIndex: computedStyle.zIndex
          }
          
          // Add to suspects array
          suspects.push({
            selector,
            y: rect.top,
            width: rect.width,
            stylesSubset
          })
          
          // Log detailed info
          console.log('🎯 WIDE TOP ELEMENT DETECTED:', {
            selector,
            rect: {
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
              bottom: rect.bottom
            },
            computedStyles: stylesSubset,
            element: element // For inspection
          })

          // Create visual overlay
          const overlay = document.createElement('div')
          overlay.style.position = 'fixed'
          overlay.style.left = rect.left + 'px'
          overlay.style.top = rect.top + 'px'
          overlay.style.width = rect.width + 'px'
          overlay.style.height = rect.height + 'px'
          overlay.style.border = '2px dashed red'
          overlay.style.boxShadow = '0 0 8px rgba(255, 0, 0, 0.6), inset 0 0 8px rgba(255, 0, 0, 0.3)'
          overlay.style.pointerEvents = 'none'
          overlay.style.zIndex = '99998'
          overlay.style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
          
          // Add label
          const label = document.createElement('div')
          label.textContent = selector
          label.style.position = 'absolute'
          label.style.top = '2px'
          label.style.left = '2px'
          label.style.fontSize = '10px'
          label.style.color = 'red'
          label.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
          label.style.padding = '1px 3px'
          label.style.borderRadius = '2px'
          label.style.fontFamily = 'monospace'
          overlay.appendChild(label)
          
          document.body.appendChild(overlay)
          overlays.push(overlay)
        }
      })

      // Print summary line
      console.log('🔥 TopStrip suspects:', suspects)

      if (suspects.length === 0) {
        console.log('✅ No wide elements detected at y=0-3px')
      } else {
        console.log(`🚨 Found ${suspects.length} suspect element(s) spanning >90% width at y=0-3px`)
      }
    }

    // Run scanner after DOM is ready
    const timeoutId = setTimeout(scanTopStrip, 1500)

    // Cleanup function
    return () => {
      clearTimeout(timeoutId)
      setIsActive(false)
      // Remove all overlays
      overlays.forEach(overlay => {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay)
        }
      })
    }
  }, [debugMode])

  if (!debugMode) return null

  return (
    <div className="fixed top-4 right-4 z-[99999] pointer-events-none">
      {isActive && (
        <div className="bg-red-500/90 text-white text-xs px-3 py-1 rounded font-mono shadow-lg">
          TopStrip Scanner Active
        </div>
      )}
    </div>
  )
}
