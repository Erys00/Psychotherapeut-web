'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Jak wygląda pierwsza konsultacja?',
      answer: 'Pierwsza konsultacja to spotkanie, podczas którego poznajemy się wzajemnie. Opowiadasz o swojej sytuacji, trudnościach i oczekiwaniach wobec terapii. Wspólnie oceniamy problem i ustalamy cele oraz plan terapeutyczny. To bezpieczna przestrzeń, w której możesz zadawać pytania i rozwiać wątpliwości.'
    },
    {
      question: 'Ile trwa terapia uzależnień?',
      answer: 'Czas trwania terapii jest bardzo indywidualny i zależy od wielu czynników: rodzaju uzależnienia, jego zaawansowania, motywacji pacjenta oraz celów terapeutycznych. Zazwyczaj terapia trwa od kilku miesięcy do roku lub dłużej. Regularność sesji i zaangażowanie są kluczowe dla skuteczności.'
    },
    {
      question: 'Czy terapia może odbywać się online?',
      answer: 'Tak, oferuję sesje zarówno stacjonarne, jak i online. Terapia online jest równie skuteczna i daje większą elastyczność. Potrzebujesz jedynie stabilnego połączenia internetowego, kamery i mikrofonu oraz spokojnego miejsca, gdzie nikt Cię nie przeszkodzi.'
    },
    {
      question: 'Czy terapia jest poufna?',
      answer: 'Absolutnie. Wszystkie informacje przekazane podczas terapii są objęte tajemnicą zawodową zgodnie z Kodeksem Etyki Psychologa. Twoja prywatność jest moim najwyższym priorytetem. Wyjątkiem mogą być jedynie sytuacje zagrożenia życia lub zdrowia.'
    },
    {
      question: 'Ile kosztuje sesja terapeutyczna?',
      answer: 'Koszt pojedynczej sesji (50 min) wynosi od 150 do 250 zł w zależności od formy (online/stacjonarna) i rodzaju terapii. Szczegółowe informacje znajdziesz w sekcji cennik. Istnieje również możliwość częściowej refundacji z NFZ lub ubezpieczenia prywatnego.'
    },
    {
      question: 'Jak często odbywają się sesje?',
      answer: 'Na początku terapii zalecam sesje raz w tygodniu, aby zapewnić ciągłość i dynamikę procesu. W miarę postępów możemy przejść na rzadsze spotkania - raz na dwa tygodnie. Częstotliwość dostosowujemy do Twoich potrzeb i możliwości.'
    },
    {
      question: 'Co jeśli muszę odwołać sesję?',
      answer: 'Rozumiem, że czasem mogą zdarzyć się nieprzewidziane sytuacje. Proszę o odwołanie sesji minimum 24 godziny wcześniej. Sesje odwołane później niż 24h przed terminem mogą być płatne, chyba że zaistnieją szczególne okoliczności.'
    },
    {
      question: 'Czy angażujesz rodzinę w proces terapeutyczny?',
      answer: 'Tak, jeśli wyrażasz na to zgodę i jest to wskazane terapeutycznie. Wsparcie rodziny jest bardzo ważne w procesie zdrowienia. Oferuję sesje rodzinne oraz pracę z osobami współuzależnionymi. Zawsze jednak priorytetem jest Twoja wola i komfort.'
    },
    {
      question: 'Co jeśli doświadczę nawrotu?',
      answer: 'Nawroty są częścią procesu zdrowienia i nie oznaczają porażki. Ważne jest, jak szybko i konstruktywnie na nie zareagujemy. Pracujemy nad strategiami radzenia sobie w trudnych momentach i profilaktyką nawrotów. Zawsze możesz skontaktować się ze mną w sytuacji kryzysowej.'
    },
    {
      question: 'Czy współpracujesz z innymi specjalistami?',
      answer: 'Tak, jeśli zaistnieje taka potrzeba, współpracuję z psychiatrami, lekarzami, terapeutami uzależnień oraz innymi specjalistami. Kompleksowe podejście często przynosi najlepsze rezultaty. Zawsze działam w porozumieniu z Tobą i za Twoją zgodą.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">Najczęściej zadawane pytania</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Znajdź odpowiedzi na najczęstsze pytania dotyczące terapii. 
          Jeśli masz inne wątpliwości, skontaktuj się ze mną.
        </p>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-800 text-lg pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-teal-600 flex-shrink-0 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed bg-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Nie znalazłeś odpowiedzi na swoje pytanie?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Skontaktuj się ze mną
          </button>
        </div>
      </div>
    </section>
  )
}

