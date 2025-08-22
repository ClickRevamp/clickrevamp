'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navigation = [
  { name: 'Results', href: '/results' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'CREATE', href: '/services/create' },
      { name: 'REVAMP', href: '/services/revamp' },
      { name: 'AUTOMATE', href: '/services/automate' },
    ]
  },
  { name: 'Process', href: '/process' },
  { name: 'Pricing', href: '/pricing' },
]

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  // Check if a nav item is active
  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="flex justify-center pt-4 px-6">
        <header className="pointer-events-auto">
          <div className="mx-auto max-w-6xl rounded-full border border-white/10 bg-white/5 supports-[backdrop-filter]:bg-white/5 backdrop-blur-md shadow-lg shadow-lime-500/10 transition-colors px-6 py-2">
            <div className="flex items-center w-full">
              {/* Zone 1: Logo - Left */}
              <div className="flex-shrink-0">
                <Link 
                  href="/" 
                  className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/60 rounded-md px-2 py-1"
                >
                  <Image
                    src="/logo-revamp.png"
                    alt="ClickRevamp logo"
                    width={140}
                    height={36}
                    priority
                    className="h-7 w-auto md:h-8 lg:h-9 object-contain"
                  />
                </Link>
              </div>

              {/* Zone 2: Navigation - Center */}
              <div className="flex-1 flex justify-center px-8">
                <nav 
                  className="hidden md:flex items-center gap-1"
                  aria-label="Primary"
                >
                  {navigation.map((item) => {
                    if (item.dropdown) {
                      return (
                        <DropdownMenu key={item.name}>
                          <DropdownMenuTrigger 
                            className={cn(
                              "relative flex items-center gap-1 px-4 py-2 text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/60 rounded-md",
                              isActive(item.href) && "text-white after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-6 after:rounded-full after:bg-lime-400/80"
                            )}
                            aria-expanded="false"
                          >
                            {item.name}
                            <ChevronDown className="h-3 w-3" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent 
                            className="mt-2 bg-black/90 backdrop-blur-md border-white/10"
                            align="center"
                          >
                            {item.dropdown.map((subItem) => (
                              <DropdownMenuItem key={subItem.name} asChild>
                                <Link 
                                  href={subItem.href}
                                  className="text-white/80 hover:text-white focus:text-white cursor-pointer"
                                >
                                  {subItem.name}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )
                    }

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "relative px-4 py-2 text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/60 rounded-md",
                          isActive(item.href) && "text-white after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-6 after:rounded-full after:bg-lime-400/80"
                        )}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </nav>
              </div>

              {/* Zone 3: CTAs - Right */}
              <div className="flex-shrink-0">
                <div className="hidden md:flex items-center gap-3">
                  <Link
                    href="/audit"
                    className="rounded-full border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-2 text-sm text-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/60"
                  >
                    Free Audit
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full bg-lime-400 text-black hover:bg-lime-300 px-5 py-2 text-sm font-medium shadow-[0_0_30px_rgba(163,230,53,0.25)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/60"
                  >
                    Let's Chat
                  </Link>
                </div>

                {/* Mobile: Let's Chat + Hamburger */}
                <div className="flex md:hidden items-center gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-lime-400 text-black hover:bg-lime-300 px-4 py-1.5 text-xs font-medium shadow-[0_0_20px_rgba(163,230,53,0.25)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/60"
                  >
                    Let's Chat
                  </Link>
                  
                  <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                    <SheetTrigger asChild>
                      <button
                        className="p-2 text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/60 rounded-md"
                        aria-label="Open menu"
                      >
                        <Menu className="h-5 w-5" />
                      </button>
                    </SheetTrigger>
                    <SheetContent 
                      side="right" 
                      className="bg-black/95 backdrop-blur-md border-white/10 text-white"
                    >
                      <SheetHeader>
                        <SheetTitle className="text-white text-left">Navigation</SheetTitle>
                      </SheetHeader>
                      
                      <nav className="flex flex-col gap-1 mt-6" aria-label="Mobile navigation">
                        {navigation.map((item) => {
                          if (item.dropdown) {
                            return (
                              <div key={item.name} className="space-y-1">
                                <div className="px-3 py-2 text-sm font-medium text-white/90">
                                  {item.name}
                                </div>
                                <div className="pl-3 space-y-1">
                                  {item.dropdown.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      onClick={() => setIsMobileOpen(false)}
                                      className={cn(
                                        "block px-3 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-md",
                                        isActive(subItem.href) && "text-lime-400"
                                      )}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )
                          }

                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsMobileOpen(false)}
                              className={cn(
                                "px-3 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-md",
                                isActive(item.href) && "text-lime-400"
                              )}
                            >
                              {item.name}
                            </Link>
                          )
                        })}
                        
                        {/* Mobile CTAs */}
                        <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-white/10">
                          <Link
                            href="/audit"
                            onClick={() => setIsMobileOpen(false)}
                            className="px-4 py-2 text-center text-sm text-white/80 hover:text-white rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            Free Audit
                          </Link>
                          <Link
                            href="/contact"
                            onClick={() => setIsMobileOpen(false)}
                            className="px-4 py-2 text-center text-sm text-black font-medium rounded-full bg-lime-400 hover:bg-lime-300 shadow-[0_0_30px_rgba(163,230,53,0.25)] transition-all"
                          >
                            Let's Chat
                          </Link>
                        </div>
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}