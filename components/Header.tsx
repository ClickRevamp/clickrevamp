'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
})

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll event to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Set scroll margins for sections based on header height
  useEffect(() => {
    const updateScrollMargins = () => {
      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height || 0;
      
      // Update scroll margins for all sections - keeping minimal to prevent conflicts with custom scrolling
      document.querySelectorAll('section[id]').forEach(section => {
        const sectionId = section.getAttribute('id');
        // Set minimal scroll margin (used only for native browser anchor behavior)
        (section as HTMLElement).style.scrollMarginTop = `${headerHeight + 10}px`;
      });
    };
    
    // Initial update
    updateScrollMargins();
    
    // Update on resize
    window.addEventListener('resize', updateScrollMargins);
    return () => window.removeEventListener('resize', updateScrollMargins);
  }, []);

  // Scroll to section implementation that handles special cases
  const scrollToSection = (sectionId: string) => {
    // Close mobile menu if open
    setMobileMenuOpen(false);
    
    // Special case for "redesign-process" - redirect to the "process" section
    const targetId = sectionId === 'redesign-process' ? 'process' : sectionId;
    
    // Standard approach for all sections
    const section = document.getElementById(targetId);
    if (section) {
      // Get section height
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl?.getBoundingClientRect().height || 0;
      
      // Calculate the optimal scroll position
      let scrollPosition;
      
      // Special handling for the "process" section that has the oval framed text at the top
      if (targetId === 'process') {
        // Find the oval-framed text element
        const ovalText = section.querySelector('div.inline-block.mb-3.text-primary');
        
        if (ovalText) {
          // Target the oval-framed text directly to position it right under the navbar
          const ovalTextPos = ovalText.getBoundingClientRect();
          // Reduce to just 2px for extremely tight spacing
          scrollPosition = window.scrollY + ovalTextPos.top - headerHeight - 2;
        } else {
          // Fallback if the oval text isn't found
          const sectionTop = section.getBoundingClientRect().top;
          scrollPosition = window.scrollY + sectionTop - headerHeight - 24;
        }
      } else {
        // For other sections, find the h2 element within the section
        const sectionHeader = section.querySelector('h2');
        
        if (sectionHeader) {
          // Get the section header position relative to the section
          const headerRect = sectionHeader.getBoundingClientRect();
          
          // Calculate position that places the section title right below the navbar
          // Add a small buffer (10px) to ensure it's visible
          scrollPosition = window.scrollY + headerRect.top - headerHeight - 10;
        } else {
          // Fallback if no h2 is found - place the section itself under the navbar
          scrollPosition = window.scrollY + section.getBoundingClientRect().top - headerHeight - 24;
        }
      }
      
      // Perform the scroll
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      
      // Update URL without scrolling
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', `#${sectionId}`);
      }
    }
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full backdrop-blur transition-all duration-300 bg-white/80 px-6 py-3 md:py-3"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full h-[64px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/revamp_logo.png" 
            alt="Revamp Logo" 
            width={150} 
            height={40}
            priority
            className="object-contain h-auto" 
          />
        </Link>

        {/* Desktop Navigation - Centered pill */}
        <nav className="hidden md:flex items-center justify-center mx-auto">
          <div className="flex items-center space-x-1 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full px-4 py-1">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="px-3 py-1 text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-white/50"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="px-3 py-1 text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-white/50"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="px-3 py-1 text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-white/50"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="px-3 py-1 text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-white/50"
            >
              Our Process
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="px-3 py-1 text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-white/50"
            >
              Pricing
            </button>
          </div>
        </nav>

        {/* CTA Button */}
        <Button 
          className="rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white"
          onClick={() => scrollToSection('contact-form')}
        >
          Get Started
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden ml-4 text-gray-700 p-2 z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center">
          <div className="flex flex-col space-y-6 text-center">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-primary py-3 px-8 text-xl transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="text-gray-700 hover:text-primary py-3 px-8 text-xl transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-primary py-3 px-8 text-xl transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-primary py-3 px-8 text-xl transition-colors"
            >
              Our Process
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-primary py-3 px-8 text-xl transition-colors"
            >
              Pricing
            </button>
            <div className="pt-6">
              <Button 
                className="rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white px-8"
                onClick={() => scrollToSection('contact-form')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header 