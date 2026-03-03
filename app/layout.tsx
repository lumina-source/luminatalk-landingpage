import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Suspense } from 'react'
import './globals.css'

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: 'LuminaTalk - Belajar Bahasa Jepang Lebih Praktis & Lengkap',
  description: 'Aplikasi belajar bahasa Jepang terlengkap dengan AI Voice, Kanji Stroke, Vocabulary Quiz, Grammar Lessons, dan JLPT Tryout. Mulai dari N5 sampai N1.',
  keywords: ['Bahasa Jepang', 'JLPT', 'Pembelajaran', 'AI Voice', 'Kanji'],
  // charset dihapus - sudah otomatis di Next.js 14+
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
  openGraph: {
    title: 'LuminaTalk - Belajar Bahasa Jepang Lebih Praktis & Lengkap',
    description: 'Aplikasi belajar bahasa Jepang terlengkap',
    type: 'website',
  },
  // alternatif jika perlu charset custom:
  other: {
    charset: 'utf-8',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
  colorScheme: 'light dark',
}

// Komponen terpisah untuk Analytics dengan error handling
function AnalyticsWrapper() {
  if (typeof window === 'undefined') return null

  try {
    return <Analytics />
  } catch (error) {
    console.warn('Analytics gagal dimuat:', error)
    return null
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={nunito.variable} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="font-nunito antialiased bg-background text-foreground">
        {children}
        <Suspense fallback={null}>
          <AnalyticsWrapper />
        </Suspense>
      </body>
    </html>
  )
}