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

export default function CreatePage() {
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
                Build Your Website From Scratch — Designed to Convert From Day One
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                For startups and small businesses who don&apos;t have a website yet — we design and launch a high-converting online presence for you.
              </p>
              <button className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-200">
                Request a Website Build Preview →
              </button>
            </div>
          </div>
          <div className="hero-glow"></div>
        </section>

        {/* Why Start From Scratch Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Start From Scratch With Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glimmer-card p-6">
                <h3 className="text-xl font-semibold mb-4">Fresh Start Advantage</h3>
                <p className="text-gray-600">No legacy constraints. Build exactly what you need with modern best practices from day one.</p>
              </div>
              <div className="glimmer-card p-6">
                <h3 className="text-xl font-semibold mb-4">Conversion-First Design</h3>
                <p className="text-gray-600">Every element is strategically placed to guide visitors toward your business goals.</p>
              </div>
              <div className="glimmer-card p-6">
                <h3 className="text-xl font-semibold mb-4">Future-Proof Foundation</h3>
                <p className="text-gray-600">Scalable architecture that grows with your business needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glimmer-card p-6">
                <h3 className="text-xl font-semibold mb-4">Strategic Site Map</h3>
                <p className="text-gray-600">Carefully planned information architecture for optimal user flow.</p>
              </div>
              <div className="glimmer-card p-6">
                <h3 className="text-xl font-semibold mb-4">Conversion-First Design</h3>
                <p className="text-gray-600">Every page optimized to convert visitors into customers.</p>
              </div>
              <div className="glimmer-card p-6">
                <h3 className="text-xl font-semibold mb-4">Mobile-First Layout</h3>
                <p className="text-gray-600">Responsive design that looks perfect on all devices.</p>
              </div>
              <div className="glimmer-card p-6">
                <h3 className="text-xl font-semibold mb-4">SEO-Ready Setup</h3>
                <p className="text-gray-600">Built-in optimization for search engine visibility.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Timeline & Pricing</h2>
            <div className="max-w-3xl mx-auto">
              <div className="glimmer-card p-8 mb-8">
                <h3 className="text-2xl font-semibold mb-6">Project Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-24 font-medium">Week 1-2</div>
                    <div>Discovery, Planning & Design</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-medium">Week 3-4</div>
                    <div>Development & Content Integration</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-medium">Week 5</div>
                    <div>Testing & Launch Preparation</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-medium">Week 6</div>
                    <div>Launch & Final Optimizations</div>
                  </div>
                </div>
              </div>
              
              <div className="glimmer-card p-8">
                <h3 className="text-2xl font-semibold mb-6">Investment</h3>
                <p className="text-lg mb-4">Starting from $5,000</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Custom Design & Development
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Content Strategy & Integration
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    SEO Foundation
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    3 Months of Support
                  </li>
                </ul>
                <button className="w-full px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-200">
                  Request a Website Build Preview →
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 