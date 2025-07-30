"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    id: 1,
    question: "How long does a typical website project take?",
    answer: "Most projects are delivered within 2–3 weeks, depending on complexity and revisions."
  },
  {
    id: 2,
    question: "Do you offer revisions?",
    answer: "Absolutely. Every package includes at least 2 rounds of revisions to ensure you're satisfied."
  },
  {
    id: 3,
    question: "Can you redesign my existing website?",
    answer: "Yes, the REVAMP service is perfect for improving your current site's look and performance."
  },
  {
    id: 4,
    question: "What's included in the pricing?",
    answer: "Each tier includes design, development, and basic SEO setup. We can customize features as needed."
  },
  {
    id: 5,
    question: "Do you offer ongoing support?",
    answer: "Yes, ongoing support packages are available to keep your website running smoothly."
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="relative py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#d4ff3f] to-[#00ff95] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Everything you need to know about working with ClickRevamp
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-neutral-900/50 border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-lime-500/30 transition-all duration-300">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-neutral-800/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-lime-500/50"
                  aria-expanded={openItems.includes(item.id)}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4 group-hover:text-lime-400 transition-colors duration-300">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(item.id) ? (
                      <Minus className="w-5 h-5 text-lime-500 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 text-lime-500 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2">
                        <p className="text-neutral-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-neutral-400 mb-6">
            Still have questions? We're here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-[#d4ff3f] to-[#00ff95] text-black rounded-full hover:shadow-2xl hover:shadow-[#d4ff3f]/30 transition-all duration-300 border-0 overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#e6ff00] to-[#00ffae] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 