'use client'

import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { FeatureCard } from '@/components/ui/feature-card';
import { SectionHeader } from '@/components/ui/section-header';
import { MotionContainer, MotionItem } from '@/components/ui/motion-container';

// Feature data
const features = [
  {
    title: "Designed to Convert",
    description: "Our layouts follow proven UX principles used by the highest-converting websites online.",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  },
  {
    title: "No Tech Headaches",
    description: "We build it all for you — no DIY builders, no bloated plugins, just clean, modern performance.",
    icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  },
  {
    title: "Fast Turnaround",
    description: "We'll deliver a custom redesign preview within 48 hours so you can see the value before committing.",
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  }
];

export default function FeaturesSection() {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section 
      className="py-24 px-8 border-t border-gray-100"
      ref={ref}
      id="why-us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why ClickRevamp"
          description="What makes our website redesign service different"
          animated={true}
          showAnimation={isVisible}
        />

        <MotionContainer
          staggered={true}
          visible={isVisible}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <MotionItem key={index} index={index}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                animated={isVisible}
                index={index}
              />
            </MotionItem>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
} 