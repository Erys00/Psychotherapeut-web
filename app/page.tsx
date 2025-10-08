import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Specializations from '@/components/Specializations'
import Approach from '@/components/Approach'
import FirstSession from '@/components/FirstSession'
import Timeline from '@/components/Timeline'
import Testimonials from '@/components/Testimonials'
import Credentials from '@/components/Credentials'
import Gallery from '@/components/Gallery'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Blog from '@/components/Blog'
import Resources from '@/components/Resources'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Specializations />
      <Approach />
      <FirstSession />
      <Timeline />
      <Testimonials />
      <Credentials />
      <Gallery />
      <Pricing />
      <FAQ />
      <Blog />
      <Resources />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  )
}

