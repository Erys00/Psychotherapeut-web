'use client'

import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      title: 'Poczekalnia',
      description: 'Przyjazna i komfortowa przestrzeń do oczekiwania',
      placeholder: '🛋️'
    },
    {
      title: 'Gabinet terapeutyczny',
      description: 'Bezpieczne i prywatne miejsce na sesje',
      placeholder: '🪴'
    },
    {
      title: 'Strefa relaksu',
      description: 'Miejsce na chwilę wytchnienia przed lub po sesji',
      placeholder: '☕'
    },
    {
      title: 'Przestrzeń terapeutyczna',
      description: 'Wygodne fotele i spokojna atmosfera',
      placeholder: '🕯️'
    },
    {
      title: 'Materiały terapeutyczne',
      description: 'Książki i narzędzia wspierające proces terapii',
      placeholder: '📚'
    },
    {
      title: 'Sala do terapii grupowej',
      description: 'Przestronna sala na sesje rodzinne i grupowe',
      placeholder: '🪑'
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">Gabinet</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Poznaj przestrzeń, w której odbywają się sesje. Zadbałem o to, 
          aby było to miejsce bezpieczne, komfortowe i sprzyjające otwartości.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {images.map((image, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(index)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Placeholder dla zdjęć - zastąp prawdziwymi zdjęciami */}
              <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 via-emerald-100 to-cyan-100 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">{image.placeholder}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                  {/* Ikona zoom */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
                
                {/* Instrukcja dla developera */}
                <div className="absolute top-2 left-2 right-2 bg-white/80 backdrop-blur-sm p-2 rounded text-xs text-gray-600">
                  <p className="font-semibold">💡 Miejsce na zdjęcie</p>
                  <p className="text-[10px]">Dodaj zdjęcia do /public/images/gallery/</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Informacje o gabinecie */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          <div className="card text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Doskonała lokalizacja</h3>
            <p className="text-gray-600 text-sm">
              Centrum miasta, łatwy dojazd komunikacją miejską i parkingiem w pobliżu
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Pełna dyskrecja</h3>
            <p className="text-gray-600 text-sm">
              Osobne wejście, system zapisu uniemożliwiający spotkanie innych pacjentów
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Komfortowe wnętrze</h3>
            <p className="text-gray-600 text-sm">
              Przestronne, jasne pomieszczenia z dbałością o każdy szczegół
            </p>
          </div>
        </div>
        
        {/* Mapa i adres */}
        <div className="max-w-5xl mx-auto">
          <div className="card">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Jak dojechać?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">Adres gabinetu</p>
                      <p className="text-gray-600">ul. Przykładowa 123</p>
                      <p className="text-gray-600">00-000 Warszawa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">Komunikacja miejska</p>
                      <p className="text-gray-600">Autobus: 123, 456, 789</p>
                      <p className="text-gray-600">Metro: stacja Centrum (5 min pieszo)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">Parking</p>
                      <p className="text-gray-600">Bezpłatny parking dla pacjentów</p>
                      <p className="text-gray-600">Wjazd od ul. Bocznej</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-gray-700 font-semibold mb-2">Miejsce na mapę</p>
                  <p className="text-sm text-gray-600">Możesz dodać tutaj Google Maps lub inną mapę</p>
                  <button className="mt-4 text-teal-600 font-semibold text-sm hover:text-teal-700">
                    Zobacz w Google Maps →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modal dla powiększonego zdjęcia (opcjonalnie) */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full bg-white rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{images[selectedImage].title}</h3>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="aspect-video bg-gradient-to-br from-teal-100 via-emerald-100 to-cyan-100 rounded-xl flex items-center justify-center text-6xl">
                {images[selectedImage].placeholder}
              </div>
              <p className="mt-4 text-gray-600">{images[selectedImage].description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

