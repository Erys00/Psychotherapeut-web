import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Specializations from '@/components/Specializations'
import Approach from '@/components/Approach'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Specializations />
      <Approach />
      <Contact />
      <Footer />
    </main>
  )
}

