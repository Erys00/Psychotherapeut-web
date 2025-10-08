'use client'

export default function Credentials() {
  const credentials = [
    {
      title: 'Psychologia kliniczna',
      institution: 'Uniwersytet Warszawski',
      year: '2013',
      type: 'Studia magisterskie',
      icon: '🎓'
    },
    {
      title: 'Certyfikat psychoterapii uzależnień',
      institution: 'Instytut Psychologii Zdrowia PTP',
      year: '2015',
      type: 'Certyfikat zawodowy',
      icon: '📜'
    },
    {
      title: 'Terapia poznawczo-behawioralna (CBT)',
      institution: 'Polskie Towarzystwo Terapii Poznawczej i Behawioralnej',
      year: '2016',
      type: 'Szkolenie specjalistyczne',
      icon: '🧠'
    },
    {
      title: 'Wywiad motywujący (MI)',
      institution: 'MINT - Motivational Interviewing Network of Trainers',
      year: '2017',
      type: 'Międzynarodowy certyfikat',
      icon: '💬'
    },
    {
      title: 'Terapia oparta na uważności (MBCT)',
      institution: 'Center for Mindfulness',
      year: '2018',
      type: 'Certyfikat',
      icon: '🧘'
    },
    {
      title: 'Terapia trauma i EMDR',
      institution: 'EMDR Europe',
      year: '2019',
      type: 'Certyfikat specjalistyczny',
      icon: '💫'
    }
  ]

  const memberships = [
    {
      name: 'Polskie Towarzystwo Psychologiczne (PTP)',
      description: 'Członek stowarzyszenia od 2013 roku',
      logo: '🏛️',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Polskie Towarzystwo Psychiatryczne',
      description: 'Członek współpracujący',
      logo: '⚕️',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'PARPA - Polska Akademia Rehabilitacji Psychospołecznej Osób Uzależnionych',
      description: 'Członek zwyczajny',
      logo: '🤝',
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Europejskie Stowarzyszenie Psychoterapeutów (EAP)',
      description: 'Certyfikowany psychoterapeuta europejski',
      logo: '🇪🇺',
      color: 'from-yellow-400 to-orange-600'
    }
  ]

  const supervision = [
    {
      title: 'Superwizja indywidualna',
      frequency: 'Miesięcznie',
      description: 'Regularna superwizja z doświadczonym superwizorem w zakresie terapii uzależnień'
    },
    {
      title: 'Superwizja grupowa',
      frequency: 'Co 2 tygodnie',
      description: 'Uczestnictwo w grupie interwizyjnej terapeutów uzależnień'
    },
    {
      title: 'Szkolenia i konferencje',
      frequency: 'Minimum 40h rocznie',
      description: 'Ciągłe doskonalenie zawodowe i aktualizacja wiedzy'
    }
  ]

  return (
    <section id="credentials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">Kwalifikacje i certyfikaty</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Posiadam wieloletnie wykształcenie i doświadczenie w pracy z osobami uzależnionymi. 
          Ciągle się uczę i rozwijam, aby oferować najwyższą jakość usług.
        </p>
        
        {/* Wykształcenie i certyfikaty */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Wykształcenie i certyfikaty</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((credential, index) => (
              <div 
                key={index} 
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{credential.icon}</div>
                  <span className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-semibold">
                    {credential.year}
                  </span>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                  {credential.type}
                </span>
                <h4 className="text-lg font-bold text-gray-800 mt-2 mb-2">
                  {credential.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {credential.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Członkostwa */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Członkostwa organizacji zawodowych</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {memberships.map((membership, index) => (
              <div 
                key={index} 
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${membership.color} rounded-full flex items-center justify-center text-3xl flex-shrink-0`}>
                    {membership.logo}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      {membership.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {membership.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Superwizja i rozwój */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Ciągły rozwój zawodowy</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {supervision.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-teal-600 font-semibold mb-3">{item.frequency}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Kodeks etyczny */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">Kodeks Etyki Psychologa</h3>
                <p className="text-lg text-teal-50 mb-6 leading-relaxed">
                  Kieruję się zasadami Kodeksu Etyczno-Zawodowego Psychologa Polskiego Towarzystwa Psychologicznego. 
                  Przestrzegam najwyższych standardów etycznych w pracy z pacjentami, dbam o poufność, 
                  kompetencje oraz dobro osób korzystających z mojej pomocy.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Poszanowanie godności pacjenta</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Tajemnica zawodowa</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Działanie w dobru pacjenta</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Kompetencje zawodowe</span>
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

