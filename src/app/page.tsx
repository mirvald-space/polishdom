import AboutMe from '@/components/AboutMe'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HowToStart from '@/components/HowToStart'
import Testimonials from '@/components/Testimonials'
import Features from '../components/Features'; // Импортируем компонент Hero
import Hero from '../components/Hero'

export default function Home() {
  return (
<>
			<Header/>
      <Hero /> 
			<Features />
			<AboutMe />
			<HowToStart/>
			<Testimonials/>
			<FAQ/>
			<CTA/>
			<Footer/>
</>
  );
}