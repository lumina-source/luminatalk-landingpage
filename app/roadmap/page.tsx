'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Rocket, Store, Zap, Trophy, ArrowRight, Sparkles } from 'lucide-react'

const phases = [
  {
    id: 1,
    title: 'THE BEGINNING',
    status: 'LIVE NOW',
    statusColor: 'from-green-400 to-emerald-500',
    icon: Rocket,
    description: 'Peluncuran perdana LuminaTalk melalui distribusi APK untuk komunitas pembelajar awal.',
    features: [
      'Sideload manual aman terenkripsi',
      'Pembayaran Manual via WhatsApp Admin',
      'AI Voice Practice interaktif',
      'Materi N5-N4 lengkap'
    ],
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
    image: '/images/appstore.png',
    imageAlt: 'LuminaTalk Phase 4'
  }
]

function PhaseCard({ phase }: any) {
  const Icon = phase.icon
  
  return (
    <div className="group relative rounded-2xl border-2 border-teal-100 bg-gradient-to-br from-white to-teal-50/50 p-5 md:p-6 transition-all duration-300 hover:border-teal-200 hover:shadow-lg overflow-hidden">
      {/* Status Badge */}
      <div className={`absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${phase.statusColor} px-3 py-1 text-white text-xs font-bold uppercase tracking-wide shadow-md`}>
        <div className={`inline-block h-1.5 w-1.5 rounded-full bg-white ${phase.status === 'LIVE NOW' ? 'animate-pulse' : ''}`} />
        {phase.status}
      </div>

      {/* Header with icon */}
      <div className="flex items-start gap-4 mb-4">
        <div className="rounded-lg bg-white p-2 shadow-sm group-hover:shadow-md transition-all">
          <Icon className="h-6 w-6 text-teal-400" />
        </div>
        <div className="flex-1 pt-1">
          <div className="text-2xl font-bold text-navy-800">
            Phase {phase.id}: {phase.title}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-navy-800/70 mb-4 line-clamp-2">{phase.description}</p>

      {/* Features grid - compact */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {phase.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <CheckCircle2 className="h-3 w-3 flex-shrink-0 text-teal-400 mt-1" />
            <span className="text-xs text-navy-800/60 line-clamp-1">{feature}</span>
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

      {/* CTA Button */}
      <Button
        asChild
        size="sm"
        className="w-full rounded-lg bg-teal-400 text-white hover:bg-teal-500 text-xs md:text-sm"
      >
        <a href={phase.id === 1 ? 'https://drive.google.com/drive/folders/1JsSOKgWPijbgt4fC3Xgqt1wT_C5aG46q?usp=sharing' : '#'}>
          {phase.status === 'LIVE NOW' ? 'Download APK' : 'Coming Soon'}
        </a>
      </Button>
    </div>
  )
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-10 left-10 h-96 w-96 rounded-full bg-teal-200/20 blur-3xl" />
            <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-teal-100/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="space-y-4 md:space-y-6 text-center">
              <Link href="/">
                <Button variant="outline" size="sm" className="rounded-full">
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  Kembali ke Home
                </Button>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-800">
                Roadmap <span className="text-teal-400">LuminaTalk 2026</span>
              </h1>
              <p className="mx-auto max-w-2xl text-base md:text-lg text-navy-800/60">
                Perjalanan transformasi dari perintisan hingga ekosistem pembelajaran profesional dengan teknologi AI terdepan
              </p>
            </div>
          </div>
        </section>

        {/* Phases Grid */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {phases.map((phase) => (
              <PhaseCard key={phase.id} phase={phase} />
            ))}
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
    </div>
  )
}
