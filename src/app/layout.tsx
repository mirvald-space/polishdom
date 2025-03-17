import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "PolishDom - Изучение польского языка с AI-ботом",
  description: "Telegram бот для изучения польского языка и подготовки к экзамену на Карту Поляка. Ежедневные слова, тренажер собеседования и тесты уровня языка.",
  keywords: ["польский язык", "карта поляка", "изучение польского", "telegram бот", "AI-консул", "тренажер польского", "подготовка к собеседованию", "тест уровня польского"],
  authors: [{ name: "PolishDom Team" }],
  creator: "PolishDom",
  publisher: "PolishDom",
  openGraph: {
    title: "PolishDom - AI-бот для изучения польского языка",
    description: "Telegram бот с AI-консулом для подготовки к экзамену на Карту Поляка. Ежедневные слова, тренажер собеседования и определение уровня языка.",
    url: "https://polishdom.com",
    siteName: "PolishDom",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PolishDom - Изучение польского языка с AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PolishDom - AI-бот для изучения польского языка",
    description: "Telegram бот с AI-консулом для подготовки к экзамену на Карту Поляка. Ежедневные слова, тренажер собеседования и определение уровня языка.",
    creator: "@polishdom_bot",
    images: ["/twitter-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    languages: {
      'ru-RU': '/ru',
      'pl-PL': '/pl',
    },
    canonical: 'https://polishdom.com',
  },
  metadataBase: new URL("https://polishdom.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "PolishDom",
              "url": "https://polishdom.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://polishdom.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "description": "Telegram бот для изучения польского языка и подготовки к экзамену на Карту Поляка",
              "inLanguage": "ru-RU",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-(--background)`}
      >
        {children}
      </body>
    </html>
  );
}
