"use client";

import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";
import { ArrowRight, Rocket } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-24 px-6 bg-[#0c0c0c] overflow-hidden">
      <div className="max-w-[1300px] mx-auto text-center">
        {/* Main Heading with Typewriter */}
        <div className="relative mb-8">
          {/* Lime Green Glow Behind Text */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-80 h-32 bg-gradient-radial from-lime-500/35 via-lime-500/15 to-transparent rounded-full blur-2xl pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              We build websites that{" "}
              <br className="hidden sm:block" />
              <Typewriter
                text={["convert", "impress", "stand out", "grow your business"]}
                speed={80}
                deleteSpeed={50}
                waitTime={2000}
                className="bg-gradient-to-r from-[#d4ff3f] to-[#00ff95] bg-clip-text text-transparent"
                cursorChar="_"
                cursorClassName="text-[#d4ff3f] ml-1"
              />
            </h2>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Custom designs. No templates. No compromises.
          <br />
          <span className="text-white font-semibold">Ready to transform your business?</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-[#d4ff3f] to-[#00ff95] text-black rounded-full hover:shadow-2xl hover:shadow-[#d4ff3f]/30 transition-all duration-300 border-0 overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Rocket className="w-5 h-5 text-black" />
              Start Your Project
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#e6ff00] to-[#00ffae] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 space-y-4"
        >
          <p className="text-xs text-white/40 uppercase tracking-wider font-medium">
            Join 200+ Happy Clients
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-white/60">
            <span className="flex items-center gap-2">
              ⚡ 2-Week Delivery
            </span>
            <span className="flex items-center gap-2">
              🎯 Conversion Focused
            </span>
            <span className="flex items-center gap-2">
              💎 Premium Quality
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 