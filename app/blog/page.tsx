'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { articles } from '@/data/articles'
import { Search, Calendar } from 'lucide-react'

const categoryLabels = {
  berangkat: 'Cara Berangkat',
  biaya: 'Biaya Hidup',
  regulasi: 'Regulasi',
  budaya: 'Budaya & Musim',
  karir: 'Karir'
}

const categoryColors = {
  berangkat: 'bg-blue-100 text-blue-700 border-blue-200',
  biaya: 'bg-green-100 text-green-700 border-green-200',
  regulasi: 'bg-purple-100 text-purple-700 border-purple-200',
  budaya: 'bg-pink-100 text-pink-700 border-pink-200',
  karir: 'bg-yellow-100 text-yellow-700 border-yellow-200'
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || article.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 px-6">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-10 h-96 w-96 rounded-full bg-teal-100/20 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-teal-100/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12 text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-[--color-navy-800]">
                Blog & <span className="text-[--color-teal-400]">Panduan Jepang</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-[--color-navy-800]/60">
                Informasi lengkap tentang cara berangkat ke Jepang, biaya hidup, regulasi, budaya, dan pengembangan karir
              </p>
            </div>

            {/* Search & Filter */}
            <div className="space-y-6 mb-12">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-[--color-navy-800]/40" />
                <Input
                  type="text"
                  placeholder="Cari artikel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-3 rounded-xl border-2 border-[--color-teal-100] focus:border-[--color-teal-400] w-full"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`rounded-full px-4 py-2 font-medium transition-all ${selectedCategory === null ? 'bg-[--color-teal-400] text-white' : 'bg-white border-2 border-[--color-navy-800]/20 text-[--color-navy-800]'}`}
                >
                  Semua Artikel
                </button>
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`rounded-full px-4 py-2 font-medium transition-all ${
                      selectedCategory === key
                        ? 'bg-[--color-teal-400] text-white'
                        : 'bg-white border-2 border-[--color-navy-800]/20 text-[--color-navy-800]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <p className="text-sm text-[--color-navy-800]/60">
                Menampilkan {filteredArticles.length} dari {articles.length} artikel
              </p>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <article className="group cursor-pointer rounded-2xl border-2 border-[--color-navy-800]/10 bg-white overflow-hidden hover:border-[--color-teal-400] hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={400}
                        height={192}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        priority={false}
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`inline-block rounded-full text-xs font-bold px-3 py-1 border ${categoryColors[article.category as keyof typeof categoryColors]}`}>
                          {categoryLabels[article.category as keyof typeof categoryLabels]}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-[--color-navy-800] line-clamp-2 group-hover:text-[--color-teal-500] transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-sm text-[--color-navy-800]/60 line-clamp-3 flex-1">
                        {article.description}
                      </p>

                      <div className="flex items-center justify-between text-xs text-[--color-navy-800]/50 pt-3 border-t border-gray-200">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(article.publishedDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                        <span className="text-[--color-navy-800]/40">{article.readingTime} min</span>
                      </div>

                      <button className="w-full rounded-lg bg-[--color-teal-400] text-white hover:bg-[--color-teal-500] mt-2 py-2 font-medium transition-colors">
                        Baca Selengkapnya
                      </button>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-[--color-navy-800]/60 mb-4">Tidak ada artikel yang sesuai dengan pencarian Anda</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory(null)
                  }}
                  className="bg-[--color-teal-400] text-white hover:bg-[--color-teal-500] px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Reset Pencarian
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
