'use client'

import { IBM_Plex_Mono } from 'next/font/google'
import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/sections/HeroSection"
import HowItWorksSection from "@/components/sections/HowItWorksSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ComparisonSection from "@/components/sections/ComparisonSection"
import OurProcessSection from "@/components/sections/OurProcessSection"
import PricingSection from "@/components/sections/PricingSection"
import ContactSection from "@/components/sections/ContactSection"

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
})

export default function Page() {
  const [isClientSide, setIsClientSide] = useState(false);
  
  useEffect(() => {
    setIsClientSide(true);
  }, []);

  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTally();
  }, []);

  return (
    <div className={`flex flex-col min-h-screen bg-background text-foreground bg-dotted-grid ${ibmPlexMono.className}`}>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(79, 70, 229, 0); }
          100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
        }

        /* Fix for anchor links being hidden behind sticky header */
        section[id] {
          scroll-margin-top: 80px;
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        
        .glimmer-card {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 32, 84, 0.05);
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 32, 115, 0.03),
            rgba(0, 32, 115, 0.06),
            rgba(0, 32, 115, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .pricing-card-pro::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30%;
          background: linear-gradient(to right, rgb(217, 70, 239), rgb(250, 204, 21));
          background-size: 200% 100%;
          animation: gradientShift 15s ease infinite;
          border-radius: 0 0 1rem 1rem;
          z-index: 0;
          mask-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));
        }

        .glimmer-pill {
          position: relative;
          background: #f5f7fa;
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 32, 115, 0.03),
            rgba(0, 32, 115, 0.06),
            rgba(0, 32, 115, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(0, 32, 115, 0.08) 0%,
            rgba(0, 32, 115, 0.03) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
      `}</style>

      <Header />

      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ComparisonSection />
        <OurProcessSection />
        <PricingSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}