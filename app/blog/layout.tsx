import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Panduan Jepang | LuminaTalk',
  description: 'Blog lengkap tentang cara berangkat ke Jepang, biaya hidup, regulasi, budaya, dan pengembangan karir. Informasi terbaru March 2026.',
  keywords: ['blog', 'jepang', 'panduan', 'visa', 'kerja', 'budaya', 'biaya hidup', 'karir'],
  openGraph: {
    title: 'Blog - Panduan Jepang | LuminaTalk',
    description: 'Informasi lengkap tentang hidup dan bekerja di Jepang',
    type: 'website',
    siteName: 'LuminaTalk',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
