'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    alert('Dziękuję za wiadomość! Skontaktuję się z Tobą wkrótce.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">Kontakt</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Skontaktuj się ze mną, aby umówić pierwszą konsultację. Odpowiem na wszystkie pytania 
          i wspólnie ustalimy najlepszy sposób pomocy.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="card">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Telefon</h3>
                  <p className="text-gray-600">+48 123 456 789</p>
                  <p className="text-sm text-gray-500 mt-1">Pon-Pt: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">kontakt@psychoterapia-uzaleznien.pl</p>
                  <p className="text-sm text-gray-500 mt-1">Odpowiedź w ciągu 24h</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Gabinet</h3>
                  <p className="text-gray-600">ul. Przykładowa 123</p>
                  <p className="text-gray-600">00-000 Warszawa</p>
                  <p className="text-sm text-gray-500 mt-1">Możliwość sesji online</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Poufność i bezpieczeństwo</h3>
              <p className="leading-relaxed mb-4">
                Wszystkie informacje przekazane podczas terapii są objęte tajemnicą zawodową. 
                Twoja prywatność i bezpieczeństwo są moim priorytetem.
              </p>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm">100% poufności zgodnie z Kodeksem Etyki</span>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="card">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Wyślij wiadomość</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Jan Kowalski"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="jan@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon (opcjonalnie)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="+48 123 456 789"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    placeholder="Opisz krótko, z czym chciałbyś/chciałabyś pracować..."
                  />
                </div>
                
                <button type="submit" className="w-full btn-primary">
                  Wyślij wiadomość
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  Odpowiem na Twoją wiadomość w ciągu 24 godzin
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

