'use client'

export default function Approach() {
  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">Metody terapeutyczne</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Stosuję sprawdzone, oparte na dowodach naukowych metody terapeutyczne, 
          dostosowane do indywidualnych potrzeb każdego pacjenta.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Terapia poznawczo-behawioralna (CBT)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Praca nad identyfikacją i zmianą szkodliwych wzorców myślenia oraz zachowań 
                  związanych z uzależnieniem. Rozwijanie zdrowszych strategii radzenia sobie.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Wywiad motywujący (MI)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Wspieranie wewnętrznej motywacji do zmiany poprzez empatyczne, 
                  nieoce niające podejście. Wzmacnianie własnych zasobów i motywacji pacjenta.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Terapia oparta na uważności (MBCT)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Rozwijanie świadomości chwili obecnej, radzenie sobie z trudnymi emocjami 
                  i impulsami. Praktyki mindfulness wspierające proces zdrowienia.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Terapia rodzinna i systemowa
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Praca z rodziną i bliskimi, odbudowa zdrowych relacji, 
                  wsparcie dla współuzależnionych. Budowanie systemu wsparcia.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-12 text-white max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">Proces terapeutyczny</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Konsultacja</h4>
              <p className="text-sm text-teal-50">Pierwsze spotkanie i ocena sytuacji</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Plan terapii</h4>
              <p className="text-sm text-teal-50">Wspólne ustalenie celów i metod</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Realizacja</h4>
              <p className="text-sm text-teal-50">Regularne sesje terapeutyczne</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Wsparcie</h4>
              <p className="text-sm text-teal-50">Kontynuacja i profilaktyka nawrotów</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

