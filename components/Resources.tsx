'use client'

export default function Resources() {
  const resources = [
    {
      title: 'Przewodnik po wychodzeniu z uzależnienia',
      description: 'Kompleksowy e-book (50 stron) opisujący krok po kroku proces zdrowienia, strategie radzenia sobie i praktyczne wskazówki.',
      type: 'E-book',
      pages: '50 stron',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Dziennik trzeźwości',
      description: 'Interaktywny dziennik do śledzenia postępów, emocji, triggerów i sukcesów. Świetne narzędzie do pracy między sesjami.',
      type: 'Narzędzie',
      pages: '30 dni',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: 'from-teal-400 to-emerald-600'
    },
    {
      title: 'Plan awaryjny na chwile kryzysu',
      description: 'Gotowy szablon planu działania w sytuacji, gdy pojawia się silna pokusa lub myśli o nawrocie. Must-have dla każdego w procesie zdrowienia.',
      type: 'Szablon',
      pages: '5 stron',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-red-400 to-pink-600'
    },
    {
      title: 'Ćwiczenia mindfulness i relaksacji',
      description: 'Zbiór 15 nagrań audio z prowadzonymi medytacjami, ćwiczeniami oddechowymi i praktykami uważności (MP3 + transkrypcje).',
      type: 'Audio',
      pages: '15 nagrań',
      format: 'MP3 + PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      color: 'from-purple-400 to-indigo-600'
    },
    {
      title: 'Lista pytań do zadania sobie',
      description: 'Pomocne pytania refleksyjne do odkrywania własnych motywacji, wartości i celów. Idealne na początku drogi.',
      type: 'Arkusz',
      pages: '10 stron',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-yellow-400 to-orange-600'
    },
    {
      title: 'Ćwiczenia CBT do samodzielnej pracy',
      description: 'Praktyczne ćwiczenia z terapii poznawczo-behawioralnej do identyfikacji i zmiany szkodliwych wzorców myślenia.',
      type: 'Workbook',
      pages: '25 stron',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-green-400 to-teal-600'
    }
  ]

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">Darmowe materiały</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Praktyczne narzędzia i materiały edukacyjne, które wspierają proces zdrowienia. 
          Wszystkie zasoby są całkowicie darmowe.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="card hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {resource.icon}
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-semibold">
                  {resource.type}
                </span>
                <span className="text-xs text-gray-500">{resource.pages}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                {resource.description}
              </p>
              
              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <span className="text-sm text-gray-500 font-semibold">{resource.format}</span>
                <button className="flex items-center text-teal-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Pobierz
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Potrzebujesz natychmiastowej pomocy?
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Jeśli znajdujesz się w kryzysie lub potrzebujesz pilnego wsparcia, 
                  skorzystaj z poniższych zasobów dostępnych 24/7.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">Telefon zaufania</p>
                    <p className="text-sm text-gray-600">116 123 (całodobowo, anonimowo)</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">Chat wsparcia</p>
                    <p className="text-sm text-gray-600">chat.edu.pl (codziennie 12:00-22:00)</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">Grupy wsparcia</p>
                    <p className="text-sm text-gray-600">AA, NA, Al-Anon (spotkania codziennie)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

