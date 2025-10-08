'use client'

export default function Blog() {
  const articles = [
    {
      title: 'Jak rozpoznać uzależnienie? Pierwsze znaki ostrzegawcze',
      excerpt: 'Uzależnienie rozwija się stopniowo i często osoby dotknięte problemem nie zdają sobie sprawy z jego wagi. Poznaj kluczowe symptomy, które mogą wskazywać na rozwijające się uzależnienie.',
      category: 'Edukacja',
      readTime: '5 min',
      date: '15 września 2024',
      image: '📚'
    },
    {
      title: 'Współuzależnienie - cicha epidemia w rodzinach',
      excerpt: 'Życie z osobą uzależnioną wpływa na całą rodzinę. Dowiedz się czym jest współuzależnienie, jakie są jego objawy i jak zacząć proces zdrowienia dla siebie i bliskich.',
      category: 'Dla rodzin',
      readTime: '7 min',
      date: '8 września 2024',
      image: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Nawrót nie oznacza porażki - jak sobie z nim radzić',
      excerpt: 'Nawroty są naturalną częścią procesu zdrowienia. Kluczem jest nie to, czy się zdarzają, ale jak na nie reagujemy. Poznaj strategie radzenia sobie i profilaktyki.',
      category: 'Proces zdrowienia',
      readTime: '6 min',
      date: '1 września 2024',
      image: '💪'
    },
    {
      title: 'Mindfulness w terapii uzależnień - praktyczne zastosowanie',
      excerpt: 'Techniki uważności pomagają w radzeniu sobie z impulsami i trudnymi emocjami. Dowiedz się jak praktyki mindfulness wspierają proces wychodzenia z uzależnienia.',
      category: 'Techniki terapeutyczne',
      readTime: '8 min',
      date: '25 sierpnia 2024',
      image: '🧘'
    },
    {
      title: 'Czy uzależnienie behawioralne jest prawdziwe?',
      excerpt: 'Hazard, zakupy, internet - uzależnienia bez substancji są równie realne i niszczące. Zrozum mechanizmy uzależnień behawioralnych i możliwości ich leczenia.',
      category: 'Rodzaje uzależnień',
      readTime: '6 min',
      date: '18 sierpnia 2024',
      image: '🎮'
    },
    {
      title: 'Budowanie systemu wsparcia - klucz do sukcesu',
      excerpt: 'Nikt nie wychodzi z uzależnienia w samotności. Dowiedz się jak budować zdrowy system wsparcia, który pomoże Ci w trudnych momentach i będzie świętować sukcesy.',
      category: 'Wsparcie',
      readTime: '5 min',
      date: '10 sierpnia 2024',
      image: '🤝'
    }
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">Artykuły i zasoby</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Praktyczna wiedza, porady i wsparcie w procesie zdrowienia. 
          Edukacja to pierwszy krok do zmiany.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <article 
              key={index} 
              className="card hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-6xl mb-4">{article.image}</div>
              
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-semibold">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500">{article.readTime} czytania</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                {article.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">{article.date}</span>
                <span className="text-teal-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Czytaj więcej →
                </span>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <h3 className="text-2xl font-bold mb-3">Zapisz się na newsletter</h3>
            <p className="mb-6 text-teal-50">
              Otrzymuj najnowsze artykuły, praktyczne porady i wsparcie bezpośrednio na swoją skrzynkę.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Twój adres email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Zapisz się
              </button>
            </div>
            <p className="text-sm text-teal-100 mt-4">
              Bez spamu. Możesz zrezygnować w każdej chwili.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

