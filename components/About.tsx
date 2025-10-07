'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">O mnie</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Jestem certyfikowanym psychoterapeutą specjalizującym się w leczeniu uzależnień. 
                Moja praca opiera się na głębokim przekonaniu, że każdy człowiek zasługuje na 
                wsparcie i ma w sobie siłę do zmiany.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Posiadam wieloletnie doświadczenie w pracy z osobami zmagającymi się z różnymi 
                formami uzależnień. Stosuję podejście holistyczne, łączące sprawdzone metody 
                terapeutyczne z indywidualnym dostosowaniem do potrzeb każdego pacjenta.
              </p>
              <div className="pt-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kwalifikacje</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Psychologia kliniczna - studia magisterskie</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Certyfikat psychoterapii uzależnień</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Szkolenia z terapii poznawczo-behawioralnej (CBT)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Superwizja i ciągłe doskonalenie zawodowe</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-3xl font-bold text-white">10+</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Lat doświadczenia</p>
                    <p className="font-semibold text-gray-800">w psychoterapii</p>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-3xl font-bold text-white">500+</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Pacjentów</p>
                    <p className="font-semibold text-gray-800">którym pomogłem</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4">Moja filozofia</h3>
                <p className="leading-relaxed">
                  "Wierzę, że każdy człowiek ma w sobie potencjał do zmiany. Moją rolą jest 
                  towarzyszyć Ci w tej drodze, dostarczając narzędzi i wsparcia potrzebnych 
                  do osiągnięcia trwałej wolności od uzależnienia."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

