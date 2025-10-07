'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">O mnie</h2>
          
          {/* Zdjęcie i intro */}
          <div className="grid md:grid-cols-5 gap-12 items-start mb-16">
            <div className="md:col-span-2">
              <div className="relative">
                {/* Placeholder dla zdjęcia - zastąp swoim zdjęciem */}
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center">
                    {/* Tymczasowy placeholder - zastąp Image ze swoim zdjęciem */}
                    <div className="text-center text-white p-8">
                      <svg className="w-32 h-32 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-sm">Miejsce na Twoje zdjęcie</p>
                      <p className="text-xs mt-2 opacity-75">Umieść plik w folderze /public/images/</p>
                    </div>
                    {/* 
                    Odkomentuj i użyj gdy będziesz mieć zdjęcie:
                    <Image
                      src="/images/terapeuta.jpg"
                      alt="Zdjęcie psychoterapeuty"
                      fill
                      className="object-cover"
                      priority
                    />
                    */}
                  </div>
                </div>
                
                {/* Dekoracyjny element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full opacity-20 blur-2xl -z-10"></div>
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-6">
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
          </div>
          
          {/* Statystyki i filozofia */}
          <div className="grid md:grid-cols-3 gap-8">
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
            
            <div className="md:col-span-3 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Moja filozofia</h3>
              <p className="leading-relaxed text-lg">
                "Wierzę, że każdy człowiek ma w sobie potencjał do zmiany. Moją rolą jest 
                towarzyszyć Ci w tej drodze, dostarczając narzędzi i wsparcia potrzebnych 
                do osiągnięcia trwałej wolności od uzależnienia."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

