'use client'

import { IBM_Plex_Mono } from 'next/font/google'
import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
})

export default function AutomatePage() {
  const [isClientSide, setIsClientSide] = useState(false);
  
  useEffect(() => {
    setIsClientSide(true);
  }, []);

  return (
    <div className={`relative flex flex-col min-h-screen bg-background text-foreground bg-dotted-grid ${ibmPlexMono.className}`}>
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
                Automate Your Web Business
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Streamline operations and customer interactions with intelligent automation.
              </p>
              <button className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-200">
                Request Automation Solutions →
              </button>
            </div>
          </div>
          <div className="hero-glow"></div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 