import { Hero } from '@/components/agency/Hero'
import { Features } from '@/components/agency/Features'
import { Process } from '@/components/agency/Process'
import { Testimonials } from '@/components/agency/Testimonials'
import { Pricing } from '@/components/agency/Pricing'
import { FinalCTA } from '@/components/agency/FinalCTA'
import { FAQ } from '@/components/agency/FAQ'
import { Footer } from '@/components/agency/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Process />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <FAQ />
      <Footer />
    </>
  )
}