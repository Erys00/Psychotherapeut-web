'use client'

export default function Specializations() {
  const specializations = [
    {
      title: 'Uzależnienie od alkoholu',
      description: 'Pomoc w przezwyciężeniu uzależnienia od alkoholu z wykorzystaniem sprawdzonych metod terapeutycznych.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Uzależnienie od substancji psychoaktywnych',
      description: 'Terapia osób uzależnionych od narkotyków i innych substancji psychoaktywnych.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Uzależnienia behawioralne',
      description: 'Terapia uzależnień od hazardu, internetu, gier komputerowych i zakupów.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Współuzależnienie',
      description: 'Wsparcie dla rodzin i bliskich osób uzależnionych. Praca nad zdrowymi relacjami.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Profilaktyka nawrotów',
      description: 'Praca nad utrzymaniem trzeźwości i zapobieganiem powrotom do uzależnienia.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Terapia trauma i uzależnień',
      description: 'Kompleksowe podejście do leczenia traumy będącej źródłem uzależnienia.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="specializations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">Specjalizacje</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Oferuję kompleksowe wsparcie w różnych obszarach uzależnień, 
          dostosowując metody terapeutyczne do indywidualnych potrzeb.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {specializations.map((spec, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className="text-teal-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {spec.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {spec.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

