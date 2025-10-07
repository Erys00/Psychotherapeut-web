'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Psychoterapia Uzależnień
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Profesjonalna pomoc w drodze do wolności od uzależnień. 
              Indywidualne podejście, wsparcie i skuteczne metody terapeutyczne.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  O mnie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('specializations')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Specjalizacje
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Metody terapeutyczne
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +48 123 456 789
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                kontakt@psychoterapia-uzaleznien.pl
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-teal-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>ul. Przykładowa 123<br/>00-000 Warszawa</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Psychoterapia Uzależnień. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              Polityka prywatności
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

