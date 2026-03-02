import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  charset: 'utf-8',
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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={nunito.variable} suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="font-nunito antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
