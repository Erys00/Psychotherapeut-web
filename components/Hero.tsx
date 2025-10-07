'use client'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="pt-24 pb-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Droga do <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">wolności</span> od uzależnień
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Profesjonalna psychoterapia uzależnień z indywidualnym podejściem. 
              Razem możemy przezwyciężyć trudności i zbudować lepszą przyszłość.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToContact} className="btn-primary">
                Umów konsultację
              </button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
                Dowiedz się więcej
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full opacity-20 blur-3xl absolute"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Bezpieczne środowisko</p>
                      <p className="text-sm text-gray-600">Pełna poufność i wsparcie</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Indywidualne podejście</p>
                      <p className="text-sm text-gray-600">Terapia dostosowana do Ciebie</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Skuteczne metody</p>
                      <p className="text-sm text-gray-600">Oparte na dowodach naukowych</p>
                    </div>
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

