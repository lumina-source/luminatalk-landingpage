import type { Metadata } from 'next'
import { Nunito, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'LuminaTalk - Belajar Bahasa Jepang Lebih Praktis & Lengkap',
  description: 'Aplikasi belajar bahasa Jepang terlengkap dengan AI Voice, Kanji Stroke, Vocabulary Quiz, Grammar Lessons, dan JLPT Tryout. Mulai dari N5 sampai N1.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
