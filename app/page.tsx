import { Header } from '@/components/agency/Header'
import { Hero } from '@/components/agency/Hero'
import { Features } from '@/components/agency/Features'
import { Process } from '@/components/agency/Process'
import { Testimonials } from '@/components/agency/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Process />
      <Testimonials />
    </>
  )
}
