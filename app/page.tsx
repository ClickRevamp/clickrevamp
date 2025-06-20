'use client'

import { Inter } from 'next/font/google'
import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import PricingSection from "@/components/sections/PricingSection"
import ContactSection from "@/components/sections/ContactSection"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export default function Page() {
  const [isClientSide, setIsClientSide] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsClientSide(true);
  }, []);

  // Cursor tracking for glow effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`relative flex flex-col min-h-screen bg-[#0c0c0c] text-white ${inter.className}`}>
      {/* Global Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          background: #0c0c0c;
          color: #ffffff;
        }
        
        /* Cursor glow effect */
        .cursor-glow {
          position: fixed;
          pointer-events: none;
          z-index: 50;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(230, 255, 0, 0.1) 0%, rgba(0, 255, 149, 0.05) 50%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
          transition: opacity 0.3s ease;
        }

        /* Text gradient effects */
        .text-gradient {
          background: linear-gradient(to right, #e6ff00, #00ff95);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Glowing button effects */
        .btn-glow {
          background: linear-gradient(135deg, #e6ff00, #00ff95);
          box-shadow: 0 0 20px rgba(230, 255, 0, 0.3);
          transition: all 0.3s ease;
        }

        .btn-glow:hover {
          box-shadow: 0 0 30px rgba(230, 255, 0, 0.5), 0 0 60px rgba(0, 255, 149, 0.3);
          transform: translateY(-2px);
        }

        /* Floating panel effects */
        .floating-panel {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .floating-panel:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(230, 255, 0, 0.3);
          transform: translateY(-5px);
        }

        /* Entrance animations */
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.8s ease-out forwards;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        /* Section spacing */
        section[id] {
          scroll-margin-top: 100px;
        }
      `}</style>

      {/* Cursor glow effect */}
      {isClientSide && (
        <div 
          className="cursor-glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        />
      )}

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}