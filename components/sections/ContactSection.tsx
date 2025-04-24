'use client'

import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { MotionContainer } from '@/components/ui/motion-container';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { buttonHoverVariants, transitions } from '@/utils/animations';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// Form fields configuration
const formFields = [
  { 
    id: 'name', 
    type: 'text', 
    placeholder: 'Name', 
    gridSpan: 'md:col-span-1',
    required: true 
  },
  { 
    id: 'email', 
    type: 'email', 
    placeholder: 'Email', 
    gridSpan: 'md:col-span-1',
    required: true 
  },
  { 
    id: 'website', 
    type: 'url', 
    placeholder: 'Website URL', 
    gridSpan: 'md:col-span-2',
    required: true 
  },
  { 
    id: 'message', 
    type: 'textarea', 
    placeholder: "Tell us what you'd like help with…", 
    gridSpan: 'md:col-span-2',
    required: false, 
    rows: 4 
  }
];

export default function ContactSection() {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section 
      className="py-24 px-8 bg-dot-muted relative"
      ref={ref}
      id="contact-form"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100/50 via-white/30 to-transparent opacity-70" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            title={
              <>
                Let's Talk About Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFC300] to-[#F17CA2] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Redesign</span>
              </>
            }
            description="Send us your current site — we'll show you a free redesign preview."
            animated={true}
            showAnimation={isVisible}
          />

          <MotionContainer
            staggered={true}
            visible={isVisible}
            delayChildren={0.3}
            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6 border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {formFields.slice(0, 2).map((field, index) => (
                <Input
                  key={field.id}
                  id={field.id}
                  type={field.type as "text" | "email" | "url"}
                  placeholder={field.placeholder}
                  required={field.required}
                  animated={isVisible}
                />
              ))}
            </div>
            
            {formFields.slice(2, 3).map((field) => (
              <Input
                key={field.id}
                id={field.id}
                type={field.type as "text" | "email" | "url"}
                placeholder={field.placeholder}
                required={field.required}
                animated={isVisible}
              />
            ))}
            
            {formFields.slice(3).map((field) => (
              <Textarea
                key={field.id}
                id={field.id}
                rows={field.rows}
                placeholder={field.placeholder}
                required={field.required}
                animated={isVisible}
              />
            ))}
            
            <motion.button 
              type="submit"
              className={`w-full bg-white text-gray-900 py-3 md:py-3.5 rounded-xl font-medium border border-gray-200 shadow-sm hover:border-transparent hover:shadow-[0_0_0_2px_rgba(79,70,229,0.4)] transition-all duration-300 relative group text-sm md:text-base ${spaceGrotesk.className} font-sans`}
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Send My Site for Review</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FFC300] to-[#F17CA2] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-300"></span>
            </motion.button>
          </MotionContainer>
        </div>
      </div>
    </section>
  );
} 