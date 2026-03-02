'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Calendar, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

const articles = [
  {
    id: 1,
    title: 'Cara Efektif Belajar Hiragana dan Katakana dalam 2 Minggu',
    excerpt: 'Belajar hiragana dan katakana tidak harus memakan waktu lama. Pelajari strategi efektif yang telah terbukti membantu ribuan pelajar menguasai kedua sistem karakter Jepang dalam waktu singkat.',
    content: `Belajar hiragana dan katakana adalah langkah pertama menuju penguasaan bahasa Jepang. Meskipun terlihat menakutkan pada awalnya, dengan strategi yang tepat, Anda bisa menguasainya dalam waktu yang relatif singkat.

Strategi 1: Pelajari dengan Pola
Hiragana dan katakana memiliki pola logis yang dapat dipelajari. Mulai dengan kelompok vokal (a, i, u, e, o), kemudian lanjutkan dengan konsonan. Ini jauh lebih efisien daripada menghafal secara acak.

Strategi 2: Gunakan Mnemonic Devices
Ciptakan cara mengingat untuk setiap karakter. Misalnya, hiragana 'あ' (a) terlihat seperti huruf 'a' dengan mata. Dengan asosiasi visual, karakter akan mudah diingat.

Strategi 3: Praktik Menulis Setiap Hari
Tulis karakter setiap hari, minimal 15 menit. Menulis membantu mengaktifkan memori motorik yang membuat pembelajaran lebih efektif daripada hanya membaca.

Strategi 4: Baca Materi Sederhana
Setelah menguasai hiragana, mulai baca kata-kata sederhana dan cerita pendek. Praktik membaca akan memperkuat apa yang sudah Anda pelajari.

Dengan pendekatan sistematis ini, Anda bisa yakin menguasai hiragana dan katakana dalam 2 minggu!`,
    image: '/images/playstore.png',
    date: '2026-03-02',
    time: '10:30 WIB',
    category: 'Tips & Trik'
  },
  {
    id: 2,
    title: 'Perbedaan JLPT N5, N4, N3 dan Level Mana yang Cocok untuk Anda',
    excerpt: 'Kebingungan memilih level JLPT? Ketahui perbedaan mendasar antara N5, N4, N3 dan tentukan target level belajar Anda sesuai kemampuan saat ini.',
    content: `JLPT (Japanese Language Proficiency Test) memiliki 5 level, dari N5 (paling mudah) hingga N1 (paling sulit). Memahami perbedaan ini penting untuk menetapkan tujuan pembelajaran yang realistis.

Level N5 (Elementary)
N5 adalah level terendah dan merupakan awal yang sempurna untuk pemula total. Pada level ini, Anda diharapkan dapat:
- Mengenali hiragana, katakana, dan sekitar 100 kanji
- Memahami kalimat sederhana dalam kehidupan sehari-hari
- Membaca dan menulis teks dasar
Waktu belajar yang disarankan: 6-12 bulan dengan belajar teratur

Level N4 (Elementary Lower)
N4 adalah level di atas N5 dengan tingkat kesulitan yang meningkat signifikan. Anda perlu:
- Menguasai 300 kanji dan 1.500 kosakata
- Memahami pola kalimat yang lebih kompleks
- Mengikuti percakapan dalam kehidupan sehari-hari dengan kecepatan normal
Waktu belajar yang disarankan: 6-12 bulan tambahan setelah N5

Level N3 (Intermediate)
N3 adalah "jembatan" antara level dasar dan tingkat lanjut. Ini adalah level yang paling diminati karena:
- Cukup untuk bekerja di industri tertentu
- Membuka akses ke lebih banyak material bahasa Jepang (film, buku, podcast)
- Menunjukkan komitmen serius terhadap pembelajaran bahasa Jepang
Anda perlu menguasai 600 kanji dan 3.500 kosakata
Waktu belajar yang disarankan: 6-9 bulan tambahan setelah N4

Memilih Level yang Tepat
- Jika Anda pemula total: Mulai dari N5
- Jika Anda ingin bekerja di Jepang: Target minimal N3, idealnya N2
- Jika Anda ingin belajar santai tanpa tekanan: N5 atau N4 sudah cukup

Di LuminaTalk, kami menyediakan materi lengkap untuk ketiga level ini dengan metode pembelajaran yang interaktif dan menyenangkan!`,
    image: '/images/appstore.png',
    date: '2026-02-28',
    time: '14:45 WIB',
    category: 'Panduan Belajar'
  },
  {
    id: 3,
    title: 'Pentingnya Konsistensi dalam Belajar Bahasa Jepang',
    excerpt: 'Konsistensi adalah kunci sukses belajar bahasa. Temukan bagaimana membangun rutinitas pembelajaran yang berkelanjutan dan menghindari burnout.',
    content: `Banyak pelajar bahasa Jepang mulai dengan semangat tinggi, tetapi putus asa setelah beberapa bulan. Rahasia sukses mereka yang bertahan adalah konsistensi, bukan intensitas.

Mengapa Konsistensi Lebih Penting dari Intensitas?
Belajar 30 menit setiap hari lebih efektif daripada belajar 5 jam sekali seminggu. Kenapa? Karena otak kita memproses informasi baru melalui pengulangan spasi (spaced repetition). Belajar sedikit tapi sering membuat informasi tertanam lebih dalam di memori jangka panjang.

Langkah 1: Tentukan Waktu dan Tempat yang Konsisten
Pilih waktu setiap hari yang paling sesuai untuk Anda - pagi sebelum bekerja, saat makan siang, atau sebelum tidur. Konsistensi dimulai dari kebiasaan.

Langkah 2: Mulai Kecil, Tumbuh Perlahan
Jangan membebani diri dengan target besar. Mulai dengan 15-20 menit sehari, lalu tingkatkan secara bertahap setelah 2-3 minggu.

Langkah 3: Buat Sistem Tracking
Gunakan kalender untuk menandai hari-hari Anda belajar. Melihat streak visual ini memotivasi Anda untuk terus melanjutkan.

Langkah 4: Variasikan Metode Pembelajaran
Untuk menghindari kebosanan, gunakan berbagai metode: watching anime dengan subtitle, membaca manga, mendengarkan podcast, atau berkomunikasi dengan native speakers.

Tips Menghindari Burnout:
- Ambil hari istirahat jika diperlukan (1-2 hari per minggu)
- Rayakan setiap milestone kecil
- Hubungkan pembelajaran dengan hal yang Anda sukai (anime, musik, K-drama Jepang)
- Bergabung dengan komunitas pembelajaran bahasa Jepang untuk motivasi

Ingat, perjalanan pembelajaran bahasa adalah maraton, bukan sprint. Konsistensi hari ini akan membawa Anda ke kesuksesan di masa depan!`,
    image: '/images/playstore.png',
    date: '2026-02-25',
    time: '11:20 WIB',
    category: 'Motivasi'
  }
]

export function ArticlesSection() {
  const [selectedArticle, setSelectedArticle] = useState<(typeof articles)[0] | null>(null)

  return (
    <>
      <section id="articles" className="relative overflow-hidden py-16 md:py-24 px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-10 h-96 w-96 rounded-full bg-teal-100/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-teal-100/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-800">
              Artikel & <span className="text-teal-400">Tips Belajar</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-navy-800/60">
              Dapatkan wawasan mendalam tentang strategi pembelajaran bahasa Jepang dan tips dari para ahli
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group cursor-pointer rounded-2xl border-2 border-teal-100 bg-white overflow-hidden hover:border-teal-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block rounded-full bg-teal-400 text-white text-xs font-bold px-3 py-1">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-navy-800 line-clamp-2 group-hover:text-teal-500 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-navy-800/60 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-navy-800/50 pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>LuminaTalk Team</span>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="w-full rounded-lg bg-teal-400 text-white hover:bg-teal-500 mt-2"
                  >
                    Baca Selengkapnya
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-10 shadow-2xl animate-in fade-in zoom-in duration-300 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>

            <div className="relative h-64 -mx-10 mb-8 overflow-hidden rounded-t-3xl">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block rounded-full bg-teal-400 text-white text-sm font-bold px-3 py-1">
                  {selectedArticle.category}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold text-navy-800">
                  {selectedArticle.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-navy-800/60 border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedArticle.date} • {selectedArticle.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>LuminaTalk Team</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-sm max-w-none space-y-4 text-navy-800/80 leading-relaxed">
                {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex justify-end pt-6 border-t">
                <Button
                  onClick={() => setSelectedArticle(null)}
                  className="rounded-lg bg-teal-400 text-white hover:bg-teal-500 px-6"
                >
                  Tutup
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
