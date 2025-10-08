'use client'

import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Pokaż button po przewinięciu 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Floating button - główny CTA */}
      <button
        onClick={scrollToContact}
        className={`fixed bottom-6 right-6 z-40 bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center gap-3 group ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Umów konsultację"
      >
        <span className="font-bold text-lg hidden sm:inline">Umów konsultację</span>
        <span className="font-bold text-lg sm:hidden">Umów się</span>
        <svg 
          className="w-6 h-6 group-hover:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>

      {/* Floating button - telefon (dodatkowy, opcjonalny) */}
      <a
        href="tel:+48123456789"
        className={`fixed bottom-24 right-6 z-40 bg-white text-teal-600 w-14 h-14 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-teal-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Zadzwoń"
        title="Zadzwoń: +48 123 456 789"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 left-6 z-40 bg-gray-800 text-white w-12 h-12 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Przewiń do góry"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  )
}

