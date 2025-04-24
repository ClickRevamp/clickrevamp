'use client'

import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export default function ComparisonSection() {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section className="py-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-100 relative border-t border-gray-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} ref={ref}>
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-primary/70 font-medium mb-3">✨ See the Difference</span>
          <h2 className={`text-3xl sm:text-3xl md:text-4xl font-bold mb-4 ${spaceGrotesk.className} font-sans text-gray-900`}>
            Transform Your Online Presence
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl">Compare the impact of our redesign services with real examples</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Before Card */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200/50 via-gray-100/30 to-transparent rounded-2xl transform scale-[0.97] blur-sm"></div>
            <div className="rounded-2xl shadow-lg p-6 md:p-8 bg-white/95 border border-neutral-200/60 h-full relative z-10 flex flex-col">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-base md:text-xl font-medium text-gray-700">Before Redesign</h3>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">Outdated</span>
              </div>

              <div className="flex-grow flex flex-col items-center justify-center p-6 bg-gray-100/70 rounded-xl overflow-hidden opacity-80">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full bg-primary/10 text-gray-500 flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <path d="M20.4 14.5L16 10 4 20"></path>
                  </svg>
                </div>
                <p className="text-sm md:text-base text-gray-600 font-medium mb-3">Old Website Design</p>
                <div className="space-y-2 w-full max-w-xs">
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                  <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                </div>
                <div className="mt-8 flex flex-col gap-2 w-full max-w-xs">
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Outdated user interface
                    </div>
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Slow loading times
                  </div>
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Poor mobile experience
                    </div>
                    </div>
                    </div>
                    </div>
                  </div>

          {/* After Card */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-blue-100/20 to-transparent rounded-2xl transform scale-[0.98] blur-sm"></div>
            <div className="rounded-2xl shadow-lg p-6 md:p-8 bg-white border border-neutral-200/60 h-full relative z-10 flex flex-col">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-base md:text-xl font-bold text-primary">After Redesign</h3>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Optimized</span>
              </div>
              
              <div className="flex-grow flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-blue-50/50 rounded-xl overflow-hidden border border-blue-100/30">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/10 to-blue-100 text-primary flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <path d="M20.4 14.5L16 10 4 20"></path>
                  </svg>
                </div>
                <p className="text-sm md:text-base text-gray-800 font-bold mb-3">Modern Website Design</p>
                <div className="space-y-2 w-full max-w-xs">
                  <div className="h-3 bg-gradient-to-r from-primary/30 to-blue-300/30 rounded w-full"></div>
                  <div className="h-3 bg-gradient-to-r from-primary/30 to-blue-300/30 rounded w-3/4"></div>
                  <div className="h-3 bg-gradient-to-r from-primary/30 to-blue-300/30 rounded w-5/6"></div>
                  <div className="h-3 bg-gradient-to-r from-primary/30 to-blue-300/30 rounded w-full"></div>
                    </div>
                <div className="mt-8 flex flex-col gap-2 w-full max-w-xs">
                  <div className="flex items-center text-gray-700 text-xs sm:text-sm">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Intuitive user interface
                  </div>
                  <div className="flex items-center text-gray-700 text-xs sm:text-sm">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Optimized for speed
                </div>
                  <div className="flex items-center text-gray-700 text-xs sm:text-sm">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    Fully responsive design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="italic text-neutral-500 text-center mt-8 max-w-2xl mx-auto text-sm md:text-base">
          A modern redesign doesn't just look better — it works better.
        </p>
        
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">Key Improvements from Our Redesigns</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/10 to-blue-100 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1 text-base md:text-lg">Improved User Experience</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Modern navigation and interfaces that guide visitors to take action</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/10 to-blue-100 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1 text-base md:text-lg">Mobile-First Design</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Fully responsive layouts that look great on all devices</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/10 to-blue-100 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1 text-base md:text-lg">Increased Conversions</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Strategic design elements that turn visitors into customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 