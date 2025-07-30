"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Create", href: "#create" },
    { name: "Revamp", href: "#revamp" },
    { name: "Automate", href: "#automate" }
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" }
  ],
  contact: [
    { name: "Let's Chat", href: "#contact" },
    { name: "info@clickrevamp.com", href: "mailto:info@clickrevamp.com" }
  ]
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/clickrevamp" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/clickrevamp" },
  { name: "GitHub", icon: Github, href: "https://github.com/clickrevamp" }
];

export function Footer() {
  return (
    <footer className="relative bg-[#0c0c0c] border-t border-neutral-800/50">
      {/* Main Footer Content */}
      <div className="max-w-[1300px] mx-auto px-6 py-16">
        {/* Top CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 pb-16 border-b border-neutral-800/50"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to transform your website?
          </h2>
          <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
            Join 200+ businesses who've increased their conversions with ClickRevamp
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-[#d4ff3f] to-[#00ff95] text-black rounded-full hover:shadow-2xl hover:shadow-[#d4ff3f]/30 transition-all duration-300 border-0 overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Project
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#e6ff00] to-[#00ffae] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold text-white mb-4">ClickRevamp</h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Premium website redesigns for startups and small businesses.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800/50 rounded-full flex items-center justify-center hover:bg-lime-500/20 hover:border-lime-500/50 border border-neutral-700/50 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-lime-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <nav>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-lime-400 transition-colors duration-300 focus:outline-none focus:text-lime-400"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <nav>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-lime-400 transition-colors duration-300 focus:outline-none focus:text-lime-400"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <nav>
              <ul className="space-y-4">
                {footerLinks.contact.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-lime-400 transition-colors duration-300 focus:outline-none focus:text-lime-400 flex items-center gap-2"
                    >
                      {link.name === "info@clickrevamp.com" && (
                        <Mail className="w-4 h-4" />
                      )}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-neutral-800/50 bg-neutral-950/50">
        <div className="max-w-[1300px] mx-auto px-6 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">ClickRevamp</span>
            </div>
            <p className="text-sm text-neutral-500">
              © 2025 ClickRevamp. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 