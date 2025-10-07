import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'Psychoterapia Uzależnień - Profesjonalna Pomoc',
  description: 'Profesjonalna psychoterapia uzależnień. Wsparcie w walce z nałogami. Indywidualne podejście i skuteczne metody terapeutyczne.',
  keywords: 'psychoterapia, uzależnienia, nałogi, terapia, pomoc psychologiczna, wsparcie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

