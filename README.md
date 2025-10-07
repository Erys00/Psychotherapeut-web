# Strona Psychoterapeuty Uzależnień

Profesjonalna, nowoczesna strona internetowa dla psychoterapeuty specjalizującego się w leczeniu uzależnień. Zbudowana z wykorzystaniem Next.js 14, React, TypeScript i Tailwind CSS.

## ✨ Funkcje

- 🎨 Nowoczesny, responsywny design
- 📱 W pełni dostosowana do urządzeń mobilnych
- ⚡ Szybka i zoptymalizowana (Next.js 14 z App Router)
- 🎯 Sekcje: Hero, O mnie, Specjalizacje, Metody terapeutyczne, Kontakt
- 💅 Piękne animacje i efekty hover
- 📝 Formularz kontaktowy
- 🔍 Optymalizacja SEO
- ♿ Dostępność (accessibility)

## 🚀 Rozpoczęcie pracy

### Wymagania

- Node.js 18.x lub wyższy
- npm, yarn lub pnpm

### Instalacja

1. Zainstaluj zależności:

```bash
npm install
# lub
yarn install
# lub
pnpm install
```

2. Uruchom serwer deweloperski:

```bash
npm run dev
# lub
yarn dev
# lub
pnpm dev
```

3. Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## 📦 Struktura projektu

```
terap/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Globalne style CSS
│   ├── layout.tsx         # Layout główny
│   └── page.tsx           # Strona główna
├── components/            # Komponenty React
│   ├── Header.tsx        # Nagłówek z nawigacją
│   ├── Hero.tsx          # Sekcja hero
│   ├── About.tsx         # Sekcja o mnie
│   ├── Specializations.tsx # Specjalizacje
│   ├── Approach.tsx      # Metody terapeutyczne
│   ├── Contact.tsx       # Formularz kontaktowy
│   └── Footer.tsx        # Stopka
├── public/               # Pliki statyczne
├── package.json          # Zależności projektu
├── tailwind.config.js    # Konfiguracja Tailwind CSS
├── tsconfig.json         # Konfiguracja TypeScript
└── next.config.js        # Konfiguracja Next.js
```

## 🎨 Personalizacja

### Kolory

Kolory można dostosować w pliku `tailwind.config.js`. Domyślnie używane są odcienie teal i emerald.

### Treść

Edytuj komponenty w folderze `components/` aby zmienić treść strony:

- **Header.tsx** - Logo i menu nawigacji
- **Hero.tsx** - Główny baner powitalny
- **About.tsx** - Sekcja "O mnie" z kwalifikacjami
- **Specializations.tsx** - Lista specjalizacji
- **Approach.tsx** - Metody terapeutyczne i proces
- **Contact.tsx** - Informacje kontaktowe i formularz
- **Footer.tsx** - Stopka z linkami

### Metadata i SEO

Edytuj plik `app/layout.tsx` aby zmienić:
- Tytuł strony
- Opis meta
- Słowa kluczowe
- Inne tagi SEO

## 🛠️ Technologie

- **Next.js 14** - Framework React z App Router
- **React 18** - Biblioteka UI
- **TypeScript** - Typowanie statyczne
- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Transformacje CSS
- **Autoprefixer** - Automatyczne prefiksy CSS

## 📝 Dostosowanie formularza kontaktowego

Formularz w `components/Contact.tsx` obecnie wyświetla alert. Aby podłączyć backend:

1. Stwórz API endpoint w `app/api/contact/route.ts`
2. Zaimplementuj wysyłanie emaili (np. z nodemailer, SendGrid, Resend)
3. Zaktualizuj funkcję `handleSubmit` w komponencie Contact

## 🚀 Wdrożenie

### Vercel (Zalecane)

1. Wypchnij kod do repozytorium Git (GitHub, GitLab, Bitbucket)
2. Zaimportuj projekt w [Vercel](https://vercel.com)
3. Vercel automatycznie wykryje Next.js i skonfiguruje build

### Inne platformy

Możesz również wdrożyć na:
- Netlify
- AWS Amplify
- Digitalocean App Platform
- Własny serwer VPS (używając `npm run build` i `npm run start`)

## 📄 Licencja

Ten projekt jest szablonem open-source. Możesz go swobodnie używać i modyfikować.

## 🤝 Wsparcie

Jeśli masz pytania lub potrzebujesz pomocy, skontaktuj się poprzez GitHub Issues.

---

Stworzono z ❤️ dla profesjonalnych psychoterapeutów

