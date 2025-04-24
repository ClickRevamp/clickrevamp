'use client'

import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { Space_Grotesk } from 'next/font/google';
import { ReactNode } from 'react';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

type SectionProps = {
  id: string;
  title: string;
  highlightedTitle?: string;
  subtitle?: string;
  backgroundColor?: string;
  children: ReactNode;
  hasBorder?: boolean;
  bgPattern?: boolean;
};

export default function SectionTemplate({
  id,
  title,
  highlightedTitle,
  subtitle,
  backgroundColor = 'bg-white',
  children,
  hasBorder = true,
  bgPattern = false
}: SectionProps) {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section 
      className={`py-24 px-8 ${backgroundColor} ${hasBorder ? 'border-t border-gray-100' : ''} relative transition-opacity duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} 
      ref={ref} 
      id={id}
    >
      {bgPattern && (
        <>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-100 opacity-70"></div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${spaceGrotesk.className}`}>
            {title}{' '}
            {highlightedTitle && (
              <span className="bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] bg-gradient-to-r from-primary to-blue-600">
                {highlightedTitle}
              </span>
            )}
          </h2>
          {subtitle && <p className="text-muted-foreground text-xl max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        {children}
      </div>
    </section>
  );
} 