'use client'

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Sesja online',
      price: '150',
      duration: '50 min',
      features: [
        'Indywidualna terapia online',
        'Elastyczne godziny spotkań',
        'Bezpieczna platforma wideo',
        'Możliwość nagrania sesji (za zgodą)',
        'Materiały do pracy między sesjami',
        'Kontakt mailowy w nagłych przypadkach'
      ],
      recommended: false,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Sesja stacjonarna',
      price: '200',
      duration: '50 min',
      features: [
        'Indywidualna terapia w gabinecie',
        'Bezpieczne i komfortowe środowisko',
        'Pełna poufność',
        'Dostęp do materiałów terapeutycznych',
        'Możliwość dłuższych sesji (90 min)',
        'Wsparcie w sytuacjach kryzysowych'
      ],
      recommended: true,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      name: 'Terapia rodzinna',
      price: '250',
      duration: '90 min',
      features: [
        'Sesje dla rodziny/par',
        'Praca z współuzależnieniem',
        'Dłuższe spotkania (90 min)',
        'Strategie komunikacji rodzinnej',
        'Wsparcie dla bliskich',
        'Materiały edukacyjne dla rodziny'
      ],
      recommended: false,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">Cennik</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Przejrzyste informacje o kosztach terapii. Inwestycja w zdrowie psychiczne 
          to najlepsza inwestycja w Twoje życie.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`card relative ${
                plan.recommended
                  ? 'ring-2 ring-teal-500 shadow-2xl scale-105'
                  : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Najpopularniejsze
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center mb-2">
                  <span className="text-5xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600 ml-2 mb-2">zł</span>
                </div>
                <p className="text-gray-600">{plan.duration}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.recommended
                    ? 'btn-primary'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Umów konsultację
              </button>
            </div>
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="card bg-gradient-to-br from-teal-500 to-emerald-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Pakiety i zniżki</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">Pakiet 10 sesji: -10%</span>
                </div>
                <p className="text-teal-50 text-sm ml-9">
                  Zaoszczędź przy dłuższej terapii
                </p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">Studenci/Seniorzy: -15%</span>
                </div>
                <p className="text-teal-50 text-sm ml-9">
                  Preferencyjne stawki dla grup szczególnych
                </p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">Bezrobocie: stawka negocjowana</span>
                </div>
                <p className="text-teal-50 text-sm ml-9">
                  Nie pozwolę, żeby pieniądze były przeszkodą
                </p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">Pierwsze spotkanie: bezpłatna konsultacja (30 min)</span>
                </div>
                <p className="text-teal-50 text-sm ml-9">
                  Poznaj mnie zanim podejmiesz decyzję
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Refundacja NFZ
              </h3>
              <p className="text-gray-600">
                Możliwość częściowej refundacji kosztów terapii w ramach NFZ. 
                Pomogę w załatwieniu formalności i skierowaniu.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Ubezpieczenia prywatne
              </h3>
              <p className="text-gray-600">
                Współpracuję z większością towarzystw ubezpieczeniowych (PZU, Allianz, Generali). 
                Wystawiam faktury do refundacji.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

