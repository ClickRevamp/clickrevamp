'use client'

import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { MotionContainer, MotionItem } from '@/components/ui/motion-container';
import { PricingCard, PricingPlan } from '@/components/ui/pricing-card';
import { buttonHoverVariants } from '@/utils/animations';

// Define pricing plans data structure for cleaner component
const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$299",
    highlight: false,
    features: [
      "1-page redesign",
      "Mobile-optimized",
      "Speed enhanced"
    ],
    buttonStyle: "secondary"
  },
  {
    id: "pro",
    name: "Pro",
    price: "$499",
    highlight: true,
    highlightText: "Most Popular",
    features: [
      "Up to 5 pages",
      "Conversion-focused layout",
      "On-page SEO setup"
    ],
    buttonStyle: "primary"
  },
  {
    id: "elite",
    name: "Elite",
    price: "$799",
    highlight: false,
    features: [
      "Full site revamp (5+ pages)",
      "Copy refresh + booking integrations",
      "Analytics + review system"
    ],
    buttonStyle: "secondary"
  }
];

export default function PricingSection() {
  const { ref, isVisible } = useInViewAnimation();

  const scrollToContactForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <section 
      className="scroll-mt-28 py-24 px-8 border-t border-gray-100 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-100"
      ref={ref}
      id="pricing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your website redesign needs"
          animated={true}
          showAnimation={isVisible}
        />
        
        <MotionContainer
          staggered={true}
          visible={isVisible}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {pricingPlans.map((plan, index) => (
            <MotionItem key={plan.id} index={index}>
              <PricingCard
                plan={plan}
                animated={isVisible}
                onButtonClick={scrollToContactForm}
                index={index}
              />
            </MotionItem>
          ))}
        </MotionContainer>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-muted-foreground mb-2 text-sm md:text-base font-mono">Need something custom?</p>
          <motion.button 
            className="text-primary font-medium hover:underline text-sm md:text-base font-sans"
            onClick={scrollToContactForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 