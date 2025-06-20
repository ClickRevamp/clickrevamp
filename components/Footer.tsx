'use client'

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white hover:text-[#e6ff00] transition-colors duration-300">
              ClickRevamp
            </Link>
            <p className="text-[#888888] max-w-sm">
              Transform your website into a conversion-focused experience that drives real business results.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Services</h4>
              <div className="space-y-2">
                <Link href="/create" className="block text-[#888888] hover:text-white transition-colors duration-300">
                  Create
                </Link>
                <Link href="/revamp" className="block text-[#888888] hover:text-white transition-colors duration-300">
                  Revamp
                </Link>
                <Link href="/automate" className="block text-[#888888] hover:text-white transition-colors duration-300">
                  Automate
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-semibold">Company</h4>
              <div className="space-y-2">
                <Link href="#features" className="block text-[#888888] hover:text-white transition-colors duration-300">
                  Features
                </Link>
                <Link href="#testimonials" className="block text-[#888888] hover:text-white transition-colors duration-300">
                  Testimonials
                </Link>
                <Link href="#pricing" className="block text-[#888888] hover:text-white transition-colors duration-300">
                  Pricing
                </Link>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex items-center gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#888888] hover:text-[#e6ff00] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#888888] hover:text-[#e6ff00] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#888888] hover:text-[#e6ff00] transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hello@clickrevamp.com" 
                className="text-[#888888] hover:text-[#e6ff00] transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#888888] text-sm">
            © 2024 ClickRevamp. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-[#888888] hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#888888] hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 