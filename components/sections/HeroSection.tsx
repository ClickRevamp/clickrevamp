'use client'

import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { Space_Grotesk } from 'next/font/google';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { heroElementVariants, transitions } from '@/utils/animations';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export default function HeroSection() {
  const { ref, isVisible } = useInViewAnimation();
  const [isClientSide, setIsClientSide] = useState(false);

  useEffect(() => {
    setIsClientSide(true);
  }, []);

  const scrollToContactForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    });
  };

  return (
    <section 
      className={`py-24 px-8 relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-transparent transition-opacity duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
      ref={ref}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      <div className="hero-glow pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Gradient Blob - Adjusted for better positioning behind heading */}
        <div
          className="absolute top-[10%] left-1/2 z-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[conic-gradient(at_top_right,_#FF6EC4_10%,_#7873F5_35%,_#4ADEDE_60%,_#C084FC_85%,_#F472B6)] opacity-20 blur-3xl animate-gradientSpin pointer-events-none"
        />
        
        <motion.div 
          initial={isClientSide ? heroElementVariants.hidden : false}
          animate={isClientSide ? heroElementVariants.visible : {}}
          transition={transitions.fadeIn}
          className="inline-flex items-center px-6 py-2 text-sm md:text-base font-medium text-primary mb-8 glimmer-pill bg-accent/40 border border-primary/20 shadow-[0_0_15px_rgba(0,32,115,0.1)]"
        >
          <span className="font-medium">Modern Website Redesign Service</span>
        </motion.div>
        
        <motion.h1 
          initial={isClientSide ? heroElementVariants.hidden : false}
          animate={isClientSide ? heroElementVariants.visible : {}}
          transition={{ ...transitions.fadeIn, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-[#111827] [text-shadow:_0_1px_2px_rgba(0,0,0,0.08)]"
        >
          Your Website Is <span className="bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#2563EB] to-[#6366F1]">Costing<br />You Customers</span>
        </motion.h1>
        
        <motion.p 
          initial={isClientSide ? heroElementVariants.hidden : false}
          animate={isClientSide ? heroElementVariants.visible : {}}
          transition={{ ...transitions.fadeIn, delay: 0.4 }}
          className="text-base md:text-lg leading-relaxed max-w-2xl text-center mx-auto mt-4 mb-12 text-gray-700"
        >
          We transform outdated websites into modern, high-converting experiences — without the agency price tag.
        </motion.p>
        
        <div className="relative z-20">
          <Button 
            size="lg" 
            className="rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#1E3A8A] hover:to-[#2563EB] px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-base md:text-lg font-bold transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg text-white relative z-20"
            onClick={scrollToContactForm}
          >
            Get a Free Redesign Preview
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-2 inline-block transform transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
} 