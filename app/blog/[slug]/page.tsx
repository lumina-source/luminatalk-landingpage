import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { articles } from '@/data/articles'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return {
      title: 'Artikel tidak ditemukan | LuminaTalk',
    }
  }

  return {
    title: `${article.title} | LuminaTalk`,
    description: article.description,
    keywords: article.tags,
    authors: [{ name: article.author }],
    publishedTime: article.publishedDate,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      authors: [article.author],
      publishedTime: article.publishedDate,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { articles } from '@/data/articles'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'

const categoryLabels = {
  berangkat: 'Cara Berangkat',
  biaya: 'Biaya Hidup',
  regulasi: 'Regulasi',
  budaya: 'Budaya & Musim',
  karir: 'Karir'
}

const categoryColors = {
  berangkat: 'bg-blue-100 text-blue-700',
  biaya: 'bg-green-100 text-green-700',
  regulasi: 'bg-purple-100 text-purple-700',
  budaya: 'bg-pink-100 text-pink-700',
  karir: 'bg-yellow-100 text-yellow-700'
}

export default function ArticlePage() {
  const params = useParams()
  const slug = params.slug as string
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Navbar />
        <main className="pt-40 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-[--color-navy-800] mb-4">Artikel tidak ditemukan</h1>
            <p className="text-[--color-navy-800]/60 mb-8">Maaf, artikel yang Anda cari tidak tersedia.</p>
            <Link href="/blog">
              <button className="bg-[--color-teal-400] text-white hover:bg-[--color-teal-500] px-6 py-2 rounded-lg font-medium transition-colors">
                Kembali ke Blog
              </button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-16 px-6">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-10 h-96 w-96 rounded-full bg-[--color-teal-100]/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Back Button */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-[--color-teal-400] hover:text-[--color-teal-500] mb-6">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Blog
            </Link>

            {/* Header */}
            <div className="space-y-6 mb-8">
              <div>
                <span className={`inline-block rounded-full text-sm font-bold px-4 py-1.5 mb-4 ${categoryColors[article.category as keyof typeof categoryColors]}`}>
                  {categoryLabels[article.category as keyof typeof categoryLabels]}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-[--color-navy-800] mb-4">
                  {article.title}
                </h1>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-[--color-navy-800]/60 border-b border-[--color-navy-800]/10 pb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.publishedDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readingTime} menit membaca</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12 bg-gray-100">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <article className="prose prose-navy max-w-none mb-16">
              <div className="space-y-8">
                {article.sections.map((section) => (
                  <div key={section.id} className="space-y-4">
                    <h2 className="text-3xl font-bold text-[--color-navy-800] mt-8 mb-4">
                      {section.title}
                    </h2>

                    <div className="text-[--color-navy-800]/70 whitespace-pre-wrap leading-relaxed">
                      {section.content}
                    </div>

                    {section.subsections && section.subsections.length > 0 && (
                      <div className="space-y-6 mt-6 ml-4 border-l-4 border-[--color-teal-400] pl-6">
                        {section.subsections.map((subsection) => (
                          <div key={subsection.id} className="space-y-2">
                            <h3 className="text-xl font-bold text-[--color-navy-800]">
                              {subsection.title}
                            </h3>
                            <div className="text-[--color-navy-800]/70 whitespace-pre-wrap leading-relaxed">
                              {subsection.content}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </article>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-16 pb-8 border-b border-[--color-navy-800]/10">
              {article.tags.map((tag) => (
                <Link key={tag} href={`/blog?search=${tag}`}>
                  <span className="inline-block rounded-full bg-[--color-teal-50] text-[--color-teal-700] px-3 py-1 text-sm hover:bg-[--color-teal-100] transition-colors cursor-pointer border border-[--color-teal-200]">
                    #{tag}
                  </span>
                </Link>
              ))}
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[--color-navy-800] mb-6">
                    Artikel Terkait
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedArticles.map((relatedArticle) => (
                      <Link key={relatedArticle.id} href={`/blog/${relatedArticle.slug}`}>
                        <div className="group rounded-xl border-2 border-[--color-navy-800]/10 bg-white overflow-hidden hover:border-[--color-teal-400] hover:shadow-md transition-all">
                          <div className="relative h-32 overflow-hidden bg-gray-100">
                            <Image
                              src={relatedArticle.image}
                              alt={relatedArticle.title}
                              width={300}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              priority={false}
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-[--color-navy-800] line-clamp-2 group-hover:text-[--color-teal-500] transition-colors text-sm">
                              {relatedArticle.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-[--color-navy-800]/50 mt-2">
                              <Calendar className="h-3 w-3" />
                              <span>{new Date(relatedArticle.publishedDate).toLocaleDateString('id-ID', { month: 'short', day: 'numeric' })}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-16 md:py-24 px-6 bg-gradient-to-r from-[--color-teal-400] to-[--color-teal-500]">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Siap Belajar Bahasa Jepang?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pelajar yang telah mulai perjalanan mereka menuju penguasaan bahasa Jepang bersama LuminaTalk.
            </p>
            <Link href="/">
              <button className="bg-white text-[--color-teal-500] hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg transition-colors">
                Mulai Sekarang
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
