"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    name: "Starter",
    price: "€799",
    description: "Perfect for small businesses launching their first professional site",
    features: [
      "Custom responsive design",
      "SEO optimization",
      "Contact form integration",
      "Mobile-first approach",
      "2 weeks delivery"
    ],
    popular: false,
    spotlightColor: "#00ffae"
  },
  {
    name: "Growth",
    price: "€1,499",
    description: "Ideal for growing companies that need advanced features and integrations",
    features: [
      "Everything in Starter",
      "Advanced animations",
      "CMS integration",
      "Analytics dashboard",
      "A/B testing setup",
      "Priority support"
    ],
    popular: true,
    spotlightColor: "#d1ff00"
  },
  {
    name: "Scale",
    price: "€2,499",
    description: "Enterprise solution for businesses serious about conversion optimization",
    features: [
      "Everything in Growth",
      "Multi-language support",
      "Advanced integrations",
      "Performance optimization",
      "Conversion auditing",
      "6 months support"
    ],
    popular: false,
    spotlightColor: "#c6ff52"
  }
];

export function Pricing() {
  return (
    <section className="relative py-24 px-6 bg-[#0c0c0c] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(212,255,63,0.05)_1px,transparent_1px)] [background-size:50px_50px] opacity-30" />
      
      {/* Center Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-[#d4ff3f]/8 via-transparent to-transparent rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Simple,{" "}
            <span className="bg-gradient-to-r from-[#d1ff00] to-[#00ffae] bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <CardSpotlight
              key={tier.name}
              className={cn(
                "relative p-8 h-full bg-neutral-950/50 backdrop-blur-sm border-neutral-800/50",
                tier.popular && "ring-2 ring-[#d1ff00]/30 border-[#d1ff00]/30"
              )}
              color={tier.spotlightColor}
              radius={400}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#d1ff00] to-[#c6ff52] text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative z-10">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">
                    {tier.price}
                  </span>
                  <span className="text-neutral-400 ml-2">per project</span>
                </div>

                {/* Description */}
                <p className="text-neutral-300 mb-8 leading-relaxed">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#00ffae] mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={cn(
                    "w-full h-12 font-semibold transition-all duration-300 relative overflow-hidden group",
                    tier.popular
                      ? "bg-gradient-to-r from-[#d1ff00] to-[#00ffae] text-black hover:shadow-lg hover:shadow-[#d1ff00]/25"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30"
                  )}
                >
                  <span className="relative z-10">Get Started</span>
                  {tier.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d1ff00] to-[#00ffae] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  )}
                </Button>
              </div>
            </CardSpotlight>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-neutral-400 mb-4">
            Need a custom solution? Let's talk about your specific requirements.
          </p>
          <Button
            variant="outline"
            className="bg-transparent border-[#d1ff00]/30 text-[#d1ff00] hover:bg-[#d1ff00]/10 hover:border-[#d1ff00] transition-all duration-300"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
} 