import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import HowToStart from '@/components/HowToStart'
import QuickStart from '@/components/QuickStart'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <QuickStart />
      <HowToStart />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}