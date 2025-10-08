'use client'

export default function Timeline() {
  const phases = [
    {
      phase: 'Faza 1',
      title: 'Konsultacja i ocena',
      duration: '1-2 sesje',
      description: 'Pierwsze kroki w procesie terapeutycznym',
      milestones: [
        'Bezpłatna konsultacja wstępna (30 min)',
        'Szczegółowa ocena sytuacji i uzależnienia',
        'Określenie celów terapeutycznych',
        'Ustalenie planu leczenia',
        'Budowanie relacji terapeutycznej'
      ],
      color: 'from-blue-400 to-blue-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      phase: 'Faza 2',
      title: 'Wczesna terapia',
      duration: '4-12 tygodni',
      description: 'Budowanie fundamentów zdrowienia',
      milestones: [
        'Praca nad abstynencją/redukcją',
        'Identyfikacja triggerów i schematów',
        'Rozwój strategii radzenia sobie',
        'Praca z trudnymi emocjami',
        'Wzmacnianie motywacji do zmiany',
        'Zaangażowanie systemu wsparcia'
      ],
      color: 'from-teal-400 to-teal-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      phase: 'Faza 3',
      title: 'Główny proces terapeutyczny',
      duration: '3-6 miesięcy',
      description: 'Praca nad głębszymi problemami',
      milestones: [
        'Odkrywanie przyczyn uzależnienia',
        'Praca z traumą (jeśli występuje)',
        'Zmiana szkodliwych wzorców myślenia',
        'Rozwijanie zdrowych mechanizmów radzenia sobie',
        'Odbudowa relacji i systemu wsparcia',
        'Praca nad samoświadomością i samooceną'
      ],
      color: 'from-emerald-400 to-emerald-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      phase: 'Faza 4',
      title: 'Utrwalanie zmian',
      duration: '2-4 miesiące',
      description: 'Stabilizacja i profilaktyka nawrotów',
      milestones: [
        'Tworzenie planu profilaktyki nawrotów',
        'Praktykowanie nowych umiejętności',
        'Radzenie sobie z wyzwaniami',
        'Budowanie długoterminowych celów',
        'Wzmacnianie autonomii',
        'Stopniowe zmniejszanie częstotliwości sesji'
      ],
      color: 'from-green-400 to-green-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      phase: 'Faza 5',
      title: 'Zakończenie i follow-up',
      duration: 'Długoterminowo',
      description: 'Niezależność z dostępem do wsparcia',
      milestones: [
        'Formalne zakończenie terapii',
        'Spotkania kontrolne (co 1-3 miesiące)',
        'Dostęp do wsparcia w razie potrzeby',
        'Kontynuacja samorozwoju',
        'Możliwość powrotu w trudnych momentach',
        'Świętowanie sukcesów i postępów'
      ],
      color: 'from-purple-400 to-purple-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ]

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">Droga do zdrowienia</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Proces terapeutyczny to podróż przez różne fazy. Każda osoba przechodzi przez nie w swoim tempie. 
          Oto czego możesz się spodziewać na każdym etapie.
        </p>
        
        {/* Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Linia łącząca */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-24 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400 to-emerald-400 opacity-30"></div>
              )}
              
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-12 items-start md:items-center`}>
                {/* Kontent */}
                <div className="flex-1">
                  <div className="card hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center text-white`}>
                        {phase.icon}
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{phase.phase}</span>
                        <h3 className="text-xl font-bold text-gray-800">{phase.title}</h3>
                      </div>
                    </div>
                    
                    <div className="mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-teal-600 font-semibold">{phase.duration}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 italic">{phase.description}</p>
                    
                    <ul className="space-y-2">
                      {phase.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <svg className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Numer fazy na osi czasu */}
                <div className="hidden md:flex relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-xl border-4 border-white z-10`}>
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Ważne informacje */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          <div className="card">
            <div className="flex items-start">
              <svg className="w-12 h-12 text-teal-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">To jest orientacyjny plan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Każdy człowiek jest inny i proces zdrowienia wygląda indywidualnie. 
                  Niektórzy potrzebują więcej czasu, inni mniej. Idziemy w Twoim tempie.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-start">
              <svg className="w-12 h-12 text-emerald-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Proces nie jest liniowy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mogą być wzloty i upadki, dobre i trudne dni. To normalne. 
                  Ważny jest ogólny kierunek i to, że nie jesteś sam/sama.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success metrics */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Jak mierzymy postępy?</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Abstynencja/Redukcja</h4>
                <p className="text-sm text-gray-600">Dni bez używania lub zmniejszenie częstotliwości</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Samopoczucie</h4>
                <p className="text-sm text-gray-600">Poprawa nastroju i redukcja lęku</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Relacje</h4>
                <p className="text-sm text-gray-600">Jakość relacji z bliskimi</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Cele życiowe</h4>
                <p className="text-sm text-gray-600">Realizacja osobistych aspiracji</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

