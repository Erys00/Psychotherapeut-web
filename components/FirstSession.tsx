'use client'

export default function FirstSession() {
  const steps = [
    {
      number: '1',
      title: 'Powitanie i zapoznanie',
      duration: '5-10 min',
      description: 'Witamy się i tworzę bezpieczną, przyjazną atmosferę. Omawiamy kwestie poufności i ram terapeutycznych.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Twoja historia',
      duration: '15-20 min',
      description: 'Opowiadasz o swojej sytuacji, problemie i tym, co Cię tu przywiodło. Słucham uważnie i bez osądzania.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Wstępna ocena',
      duration: '10-15 min',
      description: 'Razem oceniamy sytuację, identyfikujemy główne problemy i określamy, jakiego wsparcia potrzebujesz.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: '4',
      title: 'Plan terapeutyczny',
      duration: '10-15 min',
      description: 'Wspólnie ustalamy cele terapii, metody pracy i częstotliwość spotkań. Odpowiadam na wszystkie pytania.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: '5',
      title: 'Następne kroki',
      duration: '5 min',
      description: 'Umawiamy kolejną sesję i omawiamy ewentualne zadania do wykonania. Decydujesz, czy chcesz kontynuować.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      )
    }
  ]

  const concerns = [
    {
      question: 'Co jeśli będę się czuł/a skrępowany/a?',
      answer: 'To całkowicie normalne! Większość ludzi czuje się nerwowo na pierwszej sesji. Idę w Twoim tempie i nie musisz dzielić się niczym, na co nie jesteś gotowy/a.'
    },
    {
      question: 'Czy muszę znać odpowiedzi na wszystkie pytania?',
      answer: 'Absolutnie nie! Terapia to proces odkrywania. Często ludzie nie mają jasności co do swoich uczuć i motywacji - to normalne i razem będziemy to odkrywać.'
    },
    {
      question: 'Co jeśli stwierdzę, że to nie dla mnie?',
      answer: 'Nie ma żadnego zobowiązania. Pierwsza sesja to okazja do sprawdzenia, czy czujesz się komfortowo ze mną jako terapeutą. Jeśli nie, mogę polecić innych specjalistów.'
    },
    {
      question: 'Czy mogę przyjść z kimś bliskim?',
      answer: 'Oczywiście! Jeśli obecność osoby wspierającej pomoże Ci czuć się bardziej komfortowo, jest mile widziana. Możemy też umówić sesję rodzinną.'
    }
  ]

  return (
    <section id="first-session" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">Jak wygląda pierwsza sesja?</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Wiem, że pierwszy krok jest najtrudniejszy. Dlatego chcę, żebyś wiedział/a dokładnie, 
          czego możesz się spodziewać podczas pierwszego spotkania.
        </p>
        
        {/* Timeline pierwszej sesji */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Linia czasu */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 to-emerald-500"></div>
            
            {steps.map((step, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex items-center`}>
                {/* Kontent */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="card hover:scale-105 transition-transform duration-300">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                      <span className="text-sm text-teal-600 font-semibold">{step.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Numer na osi czasu */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full items-center justify-center text-white font-bold text-2xl shadow-lg z-10 border-4 border-white">
                  {step.number}
                </div>
                
                <div className="md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Częste obawy */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Częste obawy przed pierwszą sesją</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {concerns.map((concern, index) => (
              <div key={index} className="card">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{concern.question}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{concern.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <svg className="w-20 h-20 mx-auto mb-6 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-3xl font-bold mb-4">Gotowy/a na pierwszy krok?</h3>
            <p className="text-xl mb-8 text-teal-50 leading-relaxed">
              Pamiętaj: pierwsza konsultacja (30 min) jest <span className="font-bold">całkowicie darmowa</span>. 
              To szansa, żebyśmy mogli się poznać bez żadnego zobowiązania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Umów darmową konsultację
              </button>
              <a 
                href="tel:+48123456789"
                className="text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                Zadzwoń: +48 123 456 789
              </a>
            </div>
            <p className="text-sm text-teal-100 mt-6">
              Odpowiadam na telefony Pon-Pt 9:00-18:00 lub umów się przez formularz kontaktowy
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

