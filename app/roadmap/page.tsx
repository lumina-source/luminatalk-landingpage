'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { PhaseDetailModal } from '@/components/phase-detail-modal'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Rocket, Store, Zap, Trophy, ArrowRight, Sparkles, Info } from 'lucide-react'

const phases = [
  {
    id: 1,
    title: 'THE BEGINNING',
    status: 'LIVE NOW',
    statusColor: 'from-green-400 to-emerald-500',
    icon: Rocket,
    description: 'Peluncuran perdana LuminaTalk dengan fondasi pembelajaran N5 hingga N3 tanpa AI.',
    features: [
      'Materi pembelajaran N5-N3 lengkap',
      'Kanji & Hiragana practice interaktif',
      'Vocabulary quiz dan grammar lessons',
      'Akses gratis tanpa biaya subscription'
    ],
    detailedInfo: `Saat ini, LuminaTalk berada dalam Fase 1 (Early Access). Kami membangun fondasi pembelajaran bahasa Jepang yang kuat dengan fokus pada level N5 hingga N3, yang merupakan dasar penting untuk semua pelajar pemula.

Fitur utama Fase 1:
- Materi pembelajaran N5 hingga N3 yang komprehensif dan terstruktur dengan baik
- Practice kanji dengan sistem stroke-by-stroke untuk memahami setiap karakter dengan detail
- Quiz vocabulary interaktif untuk memperkuat penguasaan kosakata sehari-hari
- Lessons grammar yang mudah dipahami dengan contoh kontekstual
- Sistem pembelajaran yang intuitif dan user-friendly tanpa kompleksitas AI

Fase 1 dirancang untuk memberikan akses pembelajaran berkualitas tinggi kepada semua orang tanpa biaya, membangun komunitas pembelajar yang solid, dan mengumpulkan feedback untuk pengembangan fitur lanjutan di fase-fase mendatang. Pembelajaran dasar yang kuat di fase ini adalah kunci menuju kesuksesan Anda di level JLPT yang lebih tinggi.`,
    image: '/images/playstore.png',
    imageAlt: 'LuminaTalk Phase 1'
  },
  {
    id: 2,
    title: 'EXPANSION',
    status: 'COMING SOON',
    statusColor: 'from-blue-400 to-indigo-500',
    icon: Store,
    description: 'Ekspansi ke Google Play Store dengan gateway pembayaran otomatis.',
    features: [
      'Google Play Store official',
      'Gateway pembayaran otomatis',
      'E-wallet & Credit Card',
      'Jangkauan pengguna luas'
    ],
    detailedInfo: `Fase 2 merupakan momentum ekspansi besar-besaran LuminaTalk ke pasar yang lebih luas melalui Google Play Store. Dengan kehadiran di toko aplikasi resmi, kami akan mencapai jutaan pembelajaran potensial di Indonesia dan negara Asia Tenggara.

Inovasi utama di fase ini:
- Integrasi Gateway Pembayaran Otomatis untuk kemudahan transaksi
- Dukungan berbagai metode pembayaran (E-wallet, Virtual Account, Credit Card)
- Sistem subscription otomatis yang fleksibel
- Peningkatan infrastruktur untuk mendukung jutaan pengguna

Fase ini menandai transisi dari komunitas inti ke adopsi massal, dengan tetap menjaga kualitas layanan dan support pengguna yang telah kami bangun sejak Fase 1.`,
    image: '/images/appstore.png',
    imageAlt: 'LuminaTalk Phase 2'
  },
  {
    id: 3,
    title: 'EVOLUTION',
    status: 'COMING SOON',
    statusColor: 'from-purple-400 to-pink-500',
    icon: Zap,
    description: 'Integrasi AI advanced dan simulasi JLPT untuk pembelajaran adaptif.',
    features: [
      'LuminaVoice AI Conversation',
      'LuminaChat interaktif',
      'Simulasi JLPT & JFT',
      'Apple App Store (iOS)'
    ],
    detailedInfo: `Fase 3 adalah transformasi LuminaTalk menjadi asisten belajar berbasis kecerdasan buatan yang paling canggih. Di fase ini, kami menghadirkan teknologi AI yang benar-benar mengubah cara Anda belajar bahasa Jepang.

Fitur revolusioner di Fase 3:
- LuminaVoice: Percakapan interaktif dengan AI yang terdengar alami dan responsif
- LuminaChat: Asisten AI yang memahami konteks dan memberikan penjelasan grammar yang mendalam
- Simulasi JLPT & JFT: Tryout lengkap dengan sistem scoring internasional untuk mempersiapkan sertifikasi
- Peluncuran di Apple App Store: Membuka akses bagi pengguna iOS di seluruh dunia

Fase ini menghadirkan pengalaman pembelajaran yang dipersonalisasi sesuai kecepatan dan gaya belajar individual Anda.`,
    image: '/images/playstore.png',
    imageAlt: 'LuminaTalk Phase 3'
  },
  {
    id: 4,
    title: 'MASTERY',
    status: 'COMING SOON',
    statusColor: 'from-yellow-400 to-orange-500',
    icon: Trophy,
    description: 'Platform ekosistem lengkap dengan sertifikasi dan peluang karir di Jepang.',
    features: [
      'Level Advanced N2 & N1',
      'Modul SSW profesional',
      'Job placement assistance',
      'Mentorship premium'
    ],
    detailedInfo: `Fase 4 adalah puncak dari perjalanan LuminaTalk, di mana kami menjadi ekosistem pembelajaran bahasa Jepang yang paling komprehensif dan terpercaya. Fase ini dirancang untuk membawa Anda dari level pemula hingga profesional yang siap karir di Jepang.

Pencapaian utama di Fase 4:
- Materi Level Advanced N2 & N1 yang mendalam dan komprehensif
- Modul E-Book SSW (Specified Skilled Worker) untuk persiapan kerja profesional
- Bank soal teknis khusus untuk berbagai bidang karir di Jepang
- Program Mentorship Premium dengan native speakers dan profesional berpengalaman
- Job Placement Assistance untuk membantu Anda menemukan peluang kerja di Jepang

Fase ini mengubah LuminaTalk dari aplikasi pembelajaran menjadi jembatan menuju kesuksesan karir internasional Anda.`,
    image: '/images/appstore.png',
    imageAlt: 'LuminaTalk Phase 4'
  }
]

interface Phase {
  id: number
  title: string
  description: string
  features: string[]
  status: string
  statusColor: string
  detailedInfo: string
  image: string
  imageAlt: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface PhaseCardProps {
  phase: Phase
  onDetailClick: () => void
}

function PhaseCard({ phase, onDetailClick }: PhaseCardProps) {
  const Icon = phase.icon
  
  return (
    <div className="group relative rounded-2xl border-2 border-[--color-teal-100] bg-gradient-to-br from-white to-[--color-teal-50]/50 p-5 md:p-6 transition-all duration-300 hover:border-[--color-teal-200] hover:shadow-lg overflow-hidden cursor-pointer" onClick={onDetailClick}>
      {/* Status Badge */}
      <div className={`absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${phase.statusColor} px-3 py-1 text-white text-xs font-bold uppercase tracking-wide shadow-md`}>
        <div className={`inline-block h-1.5 w-1.5 rounded-full bg-white ${phase.status === 'LIVE NOW' ? 'animate-pulse' : ''}`} />
        {phase.status}
      </div>

      {/* Header with icon */}
      <div className="flex items-start gap-4 mb-4">
        <div className="rounded-lg bg-white p-2 shadow-sm group-hover:shadow-md transition-all">
          <Icon className="h-6 w-6 text-[--color-teal-400]" />
        </div>
        <div className="flex-1 pt-1">
          <div className="text-2xl font-bold text-[--color-navy-800]">
            Phase {phase.id}: {phase.title}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-[--color-navy-800]/70 mb-4 line-clamp-2">{phase.description}</p>

      {/* Features grid - compact */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {phase.features.map((feature: string, idx: number) => (
          <div key={idx} className="flex items-start gap-2">
            <CheckCircle2 className="h-3 w-3 flex-shrink-0 text-[--color-teal-400] mt-1" />
            <span className="text-xs text-[--color-navy-800]/60 line-clamp-1">{feature}</span>
          </div>
        ))}
      </div>

      {/* Image */}
      <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 mb-4">
        <Image
          src={phase.image}
          alt={phase.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* CTA Buttons */}
      <div className="space-y-2">
        <Button
          size="sm"
          className="w-full rounded-lg bg-[--color-teal-400] text-white hover:bg-[--color-teal-500] text-xs md:text-sm"
          onClick={(e) => {
            e.stopPropagation()
            onDetailClick()
          }}
        >
          <Info className="mr-1 h-3 w-3" />
          Pelajari Detail
        </Button>
        <Button
          asChild
          size="sm"
          variant="outline"
          className="w-full rounded-lg border-[--color-teal-200] text-xs md:text-sm"
        >
          <a href={phase.id === 1 ? 'https://drive.google.com/drive/folders/1JsSOKgWPijbgt4fC3Xgqt1wT_C5aG46q?usp=sharing' : '#'} onClick={(e) => phase.id !== 1 && e.preventDefault()}>
            {phase.status === 'LIVE NOW' ? 'Download APK' : 'Coming Soon'}
          </a>
        </Button>
      </div>
    </div>
  )
}

export default function RoadmapPage() {
  const [selectedPhase, setSelectedPhase] = useState<(typeof phases)[0] | null>(null)

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-10 left-10 h-96 w-96 rounded-full bg-[--color-teal-200]/20 blur-3xl" />
            <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-[--color-teal-100]/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="space-y-4 md:space-y-6 text-center">
              <Link href="/">
                <Button variant="outline" size="sm" className="rounded-full">
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  Kembali ke Home
                </Button>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-[--color-navy-800]">
                Roadmap <span className="text-[--color-teal-400]">LuminaTalk 2026</span>
              </h1>
              <p className="mx-auto max-w-2xl text-base md:text-lg text-[--color-navy-800]/60">
                Perjalanan transformasi dari perintisan hingga ekosistem pembelajaran profesional dengan teknologi AI terdepan
              </p>
            </div>
          </div>
        </section>

        {/* Phases Grid */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {phases.map((phase) => (
              <PhaseCard 
                key={phase.id} 
                phase={phase}
                onDetailClick={() => setSelectedPhase(phase)}
              />
            ))}
          </div>
        </section>

        {/* Founder's Note Section */}
        <section className="relative overflow-hidden py-12 md:py-20 px-6">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[--color-teal-100]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="rounded-3xl border-2 border-[--color-navy-800]/10 bg-gradient-to-br from-[--color-navy-800]/5 to-[--color-teal-400]/5 p-8 md:p-16 backdrop-blur-sm">
              
              {/* Quote */}
              <div className="mb-12 text-center space-y-4">
                <p className="text-2xl md:text-3xl italic font-serif text-[--color-navy-800] text-balance">
                  "Belajar bahasa baru bukan sekadar menghafal kata, melainkan membuka jendela menuju dunia yang baru."
                </p>
              </div>

              {/* Content Layout */}
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
                {/* Photo - Left */}
                <div className="md:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[--color-teal-200] to-[--color-teal-100] opacity-30 blur-lg" />
                    <div className="relative rounded-3xl overflow-hidden border-4 border-[--color-teal-300] shadow-xl">
                      <Image
                        src="/images/ben-wijaya.jpeg"
                        alt="Ben Wijaya - Founder"
                        width={300}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Text - Right */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[--color-navy-800] mb-2">
                      Pesan dari Pendiri
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-[--color-teal-400] to-[--color-teal-300] rounded-full" />
                  </div>

                  <div className="space-y-4 text-[--color-navy-800]/70 leading-relaxed text-lg">
                    <p>
                      Halo, saya <span className="font-semibold text-navy-800">Ben Wijaya</span>, Pendiri LuminaTalk.
                    </p>

                    <p>
                      LuminaTalk lahir dari sebuah keresahan sederhana: Mengapa belajar bahasa Jepang yang begitu indah harus terasa begitu rumit dan mahal? Saya melihat banyak pembelajar berbakat menyerah di tengah jalan karena merasa tersesat dalam kurikulum yang kaku atau tidak memiliki teman untuk berlatih bicara.
                    </p>

                    <p>
                      Roadmap yang Anda lihat di atas bukan sekadar rencana bisnis, melainkan janji dan komitmen saya kepada Anda. Saya ingin LuminaTalk menjadi sahabat setia yang menemani setiap coretan Kanji Anda, setiap kegagalan pelafalan Anda, hingga hari di mana Anda berdiri dengan percaya diri di tengah hiruk pikuk Tokyo.
                    </p>

                    <p>
                      Kami memulai perjalanan ini secara bertahap, dari sistem manual yang personal hingga kecanggihan AI yang futuristik. Terima kasih telah menjadi bagian dari sejarah awal LuminaTalk. Dukungan Anda di fase awal ini adalah bahan bakar utama kami untuk terus berinovasi dan menyempurnakan setiap fitur.
                    </p>

                    <p className="text-base italic text-teal-500 font-medium">
                      Mari kita taklukkan batasan bahasa, dan raih mimpi Anda di Negeri Sakura bersama-sama.
                    </p>
                  </div>

                  <div className="pt-4 space-y-2">
                    <p className="font-bold text-navy-800">Selamat belajar,</p>
                    <div>
                      <p className="font-bold text-lg text-teal-400">Ben Wijaya</p>
                      <p className="text-sm text-navy-800/60">Founder, LuminaTalk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
          <div className="rounded-2xl bg-gradient-to-r from-navy-800 to-navy-900 p-6 md:p-10 text-center text-white border border-teal-400/30">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Siap Memulai Perjalanan Bahasa Jepangmu?
            </h2>
            <p className="text-white/80 mb-6">
              Jadilah bagian dari 200 pengguna pertama dengan promo launching eksklusif
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/">
                <Button className="rounded-full bg-teal-400 text-navy-800 hover:bg-teal-300 px-6 text-sm md:text-base font-bold">
                  Download APK Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {selectedPhase && (
        <PhaseDetailModal
          isOpen={!!selectedPhase}
          onClose={() => setSelectedPhase(null)}
          phase={selectedPhase}
        />
      )}
    </div>
  )
}
