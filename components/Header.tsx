'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Psychoterapia Uzależnień
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-teal-600 transition-colors">
              Start
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 transition-colors">
              O mnie
            </button>
            <button onClick={() => scrollToSection('specializations')} className="text-gray-700 hover:text-teal-600 transition-colors">
              Specjalizacje
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-teal-600 transition-colors">
              Cennik
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-teal-600 transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-teal-600 transition-colors">
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 transition-colors font-semibold">
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors">
              Start
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors">
              O mnie
            </button>
            <button onClick={() => scrollToSection('specializations')} className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors">
              Specjalizacje
            </button>
            <button onClick={() => scrollToSection('approach')} className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors">
              Metody terapeutyczne
            </button>
            <button onClick={() => scrollToSection('first-session')} className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors">
              Pierwsza sesja
            </button>
            <button onClick={() => scrollToSection('timeline')} className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors">
              Proces terapii
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors">
              Opinie
            </button>
            <button onClick={() => scrollToSection('credentials')} className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors">
              Kwalifikacje
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors">
              Gabinet
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors">
              Cennik
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('blog')} className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors">
              Blog
            </button>
            <button onClick={() => scrollToSection('resources')} className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors">
              Materiały
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors font-semibold">
              Kontakt
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

