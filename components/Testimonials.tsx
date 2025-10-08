'use client'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Anna M.',
      age: 34,
      issue: 'Uzależnienie od alkoholu',
      text: 'Po latach walki z alkoholem w końcu znalazłam prawdziwe wsparcie. Dzięki profesjonalnemu podejściu i empatii terapeuty, udało mi się odzyskać kontrolę nad swoim życiem. Dziś jestem trzeźwa od 2 lat i czuję się silniejsza niż kiedykolwiek.',
      rating: 5
    },
    {
      name: 'Piotr K.',
      age: 28,
      issue: 'Uzależnienie behawioralne',
      text: 'Hazard zniszczył moje życie - straciłem pracę, oszczędności i niemal rodzinę. Terapia pomogła mi zrozumieć przyczyny mojego uzależnienia i nauczyła skutecznych strategii radzenia sobie. Jestem wdzięczny za drugą szansę.',
      rating: 5
    },
    {
      name: 'Maria S.',
      age: 42,
      issue: 'Współuzależnienie',
      text: 'Jako żona osoby uzależnionej, sama potrzebowałam pomocy. Nauczyłam się stawiać granice, dbać o siebie i wspierać męża w jego drodze do zdrowienia. Terapia uratowała nasze małżeństwo i zdrowie psychiczne całej rodziny.',
      rating: 5
    },
    {
      name: 'Tomasz W.',
      age: 31,
      issue: 'Uzależnienie od substancji',
      text: 'Myślałem, że nigdy nie wyjdę z nałogu. Miałem za sobą kilka prób leczenia, które kończyły się nawrotami. Tutaj po raz pierwszy poczułem, że ktoś naprawdę rozumie przez co przechodzę. Jestem czysty od roku i buduję nowe życie.',
      rating: 5
    },
    {
      name: 'Karolina D.',
      age: 26,
      issue: 'Uzależnienie od internetu',
      text: 'Uzależnienie od mediów społecznościowych i gier online kontrolowało każdą minutę mojego życia. Dzięki terapii odkryłam prawdziwe wartości i nauczyłam się zdrowego korzystania z technologii. Dziś mam czas na prawdziwe życie i relacje.',
      rating: 5
    },
    {
      name: 'Jacek N.',
      age: 45,
      issue: 'Profilaktyka nawrotów',
      text: 'Po ukończeniu programu odwykowego, terapia ambulatoryjna pomogła mi utrwalić zmiany i nauczyła jak radzić sobie z pokusami. Dzięki regularnym sesjom i wsparciu, udaje mi się utrzymać trzeźwość i cieszyć się życiem bez substancji.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">Co mówią moi pacjenci</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Historie prawdziwych ludzi, którzy odzyskali kontrolę nad swoim życiem. 
          Wszystkie dane zostały zanonimizowane w celu ochrony prywatności.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card hover:scale-105 transition-all duration-300 flex flex-col"
            >
              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow italic">
                "{testimonial.text}"
              </p>
              
              {/* Author info */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.age} lat</p>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="inline-block bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">
                    {testimonial.issue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-start">
            <svg className="w-12 h-12 text-teal-600 mr-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Twoja historia może być następna
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Każda z tych osób kiedyś stała w miejscu, w którym możesz być teraz Ty. 
                Podjęły odważny krok i sięgnęły po pomoc. Dzisiaj cieszą się życiem wolnym od uzależnienia. 
                Ty też możesz to osiągnąć - nie jesteś sam/sama w tej drodze.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

