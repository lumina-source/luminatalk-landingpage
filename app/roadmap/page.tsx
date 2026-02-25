'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Rocket, Store, Zap, Trophy, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const phases = [
  {
    id: 1,
    title: 'THE BEGINNING - PERINTISAN',
    subtitle: 'Fase 1',
    status: 'LIVE NOW',
    statusColor: 'from-green-400 to-emerald-500',
    icon: Rocket,
    description: 'Peluncuran perdana LuminaTalk melalui distribusi mandiri (APK) untuk komunitas pembelajar awal.',
    features: [
      'Sideload manual yang aman dan terenkripsi',
      'Sistem Pembayaran Manual via WhatsApp Admin',
      'Konfirmasi pembayaran instan 1x24 jam',
      'Membangun fondasi komunitas',
      'Mengumpulkan feedback langsung dari pengguna pertama'
    ],
    color: 'from-teal-50 to-cyan-50',
    borderColor: 'border-teal-200'
  },
  {
    id: 2,
    title: 'EXPANSION - EKSPANSI GOOGLE PLAY STORE',
    subtitle: 'Fase 2',
    status: 'COMING SOON',
    statusColor: 'from-blue-400 to-indigo-500',
    icon: Store,
    description: 'Ekspansi besar-besaran ke Google Play Store untuk aksesibilitas yang lebih luas dan keamanan otomatis.',
    features: [
      'Instalasi satu klik dari toko aplikasi resmi',
      'Integrasi Gateway Pembayaran Otomatis',
      'E-wallet, Virtual Account, & Credit Card',
      'Sistem langganan otomatis',
      'Jangkauan pengguna yang lebih luas'
    ],
    color: 'from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 3,
    title: 'EVOLUTION - INTEGRASI AI & SIMULASI JLPT',
    subtitle: 'Fase 3',
    status: 'COMING SOON',
    statusColor: 'from-purple-400 to-pink-500',
    icon: Zap,
    description: 'Transformasi LuminaTalk menjadi asisten belajar berbasis kecerdasan buatan seutuhnya.',
    features: [
      'Peluncuran LuminaVoice (AI Conversation)',
      'LuminaChat yang responsif dan interaktif',
      'Tryout Simulasi JLPT & JFT',
      'Standar skor internasional',
      'Peluncuran resmi di Apple App Store (iOS)'
    ],
    color: 'from-purple-50 to-pink-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 4,
    title: 'MASTERY - LEVEL ADVANCED & SSW HUB',
    subtitle: 'Fase 4',
    status: 'COMING SOON',
    statusColor: 'from-yellow-400 to-orange-500',
    icon: Trophy,
    description: 'Melengkapi ekosistem pembelajaran untuk tingkat profesional dan karir di Jepang.',
    features: [
      'Materi tingkat tinggi (N2 & N1) yang mendalam',
      'Modul E-Book SSW (Specified Skilled Worker)',
      'Bank soal teknis untuk karir di Jepang',
      'Persiapan profesional lengkap',
      'Ekosistem pembelajaran komprehensif'
    ],
    color: 'from-yellow-50 to-orange-50',
    borderColor: 'border-yellow-200'
  }
]

function PhaseCard({ phase, isHovered, setHovered }: any) {
  const Icon = phase.icon
  
  return (
    <div className="relative">
      {/* Connecting line */}
      {phase.id < 4 && (
        <div className="absolute left-1/2 top-full h-12 w-1 -translate-x-1/2 bg-gradient-to-b from-teal-300 to-transparent md:h-20 hidden md:block" />
      )}
      
      <div
        className={`group relative rounded-2xl border-2 ${phase.borderColor} bg-gradient-to-br ${phase.color} p-6 md:p-8 transition-all duration-300 cursor-pointer ${
          isHovered ? 'scale-105 shadow-2xl' : 'shadow-lg'
        }`}
        onMouseEnter={() => setHovered(phase.id)}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Status Badge */}
        <div className="absolute -top-4 right-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-4 py-2 text-white text-xs font-bold uppercase tracking-wide shadow-lg"
          style={{
            backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
          }}
        >
          <style>{`
            [class*="from-${phase.statusColor.split(' ')[0]}"]::before {
              content: '${phase.status === 'LIVE NOW' ? '✓' : ''}';
            }
          `}</style>
          <div className={`inline-block h-2 w-2 rounded-full bg-white animate-pulse`} />
          {phase.status}
        </div>

        {/* Fase number and icon */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-5xl font-black text-navy-800/10">{phase.id}</div>
          <div className="rounded-xl bg-white p-3 shadow-md group-hover:shadow-lg transition-all">
            <Icon className="h-8 w-8 text-teal-400" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-700 mb-2">
              {phase.subtitle}
            </span>
            <h3 className="text-2xl font-bold text-navy-800">{phase.title}</h3>
          </div>

          <p className="text-navy-800/70 leading-relaxed">{phase.description}</p>

          {/* Features list */}
          <ul className="space-y-2 pt-2">
            {phase.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-navy-800/60">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-teal-400 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hover indicator */}
        {isHovered && (
          <div className="absolute inset-0 rounded-2xl border-2 border-teal-400 bg-teal-400/5 animate-pulse pointer-events-none" />
        )}
      </div>
    </div>
  )
}

export default function RoadmapPage() {
  const [hoveredPhase, setHoveredPhase] = useState(null)

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

          <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-20">
            <div className="space-y-6 text-center">
              <h1 className="text-4xl md:text-6xl font-black text-navy-800 text-balance">
                LuminaTalk <span className="text-teal-400">Roadmap 2026</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-navy-800/60 leading-relaxed">
                Perjalanan transformasi pembelajaran bahasa Jepang. Dari perintisan hingga ekosistem pembelajaran profesional dengan teknologi AI terdepan.
              </p>
              <div className="pt-4 flex justify-center">
                <Link href="/#pricing">
                  <Button className="rounded-full bg-teal-400 px-8 text-white hover:bg-teal-500">
                    Download APK Fase 1
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mx-auto max-w-6xl px-6 py-12 md:py-24">
          <div className="space-y-8 md:space-y-16">
            {phases.map((phase) => (
              <PhaseCard
                key={phase.id}
                phase={phase}
                isHovered={hoveredPhase === phase.id}
                setHovered={setHoveredPhase}
              />
            ))}
          </div>
        </section>

        {/* Founder's Note Section */}
        <section className="relative overflow-hidden py-12 md:py-24 px-6">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-teal-100/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="rounded-3xl border-2 border-navy-800/10 bg-gradient-to-br from-navy-800/5 to-teal-400/5 p-8 md:p-16 backdrop-blur-sm">
              
              {/* Quote */}
              <div className="mb-12 text-center space-y-4">
                <p className="text-2xl md:text-3xl italic font-serif text-navy-800 text-balance">
                  "Belajar bahasa baru bukan sekadar menghafal kata, melainkan membuka jendela menuju dunia yang baru."
                </p>
              </div>

              {/* Content Layout - 2 col on desktop, 1 col on mobile */}
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
                {/* Photo - Left on desktop */}
                <div className="md:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-200 to-teal-100 opacity-30 blur-lg" />
                    <div className="relative rounded-3xl overflow-hidden border-4 border-teal-300 shadow-xl">
                      <Image
                        src="/images/ben-wijaya.jpeg"
                        alt="Ben Wijaya - Founder"
                        width={300}
                        height={400}
                        className="object-cover"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Text - Right on desktop */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-2">
                      Pesan dari Pendiri
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-teal-300 rounded-full" />
                  </div>

                  <div className="space-y-4 text-navy-800/70 leading-relaxed text-lg">
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
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-2xl bg-gradient-to-r from-teal-400 to-teal-500 p-8 md:p-12 text-center text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Siap Memulai Perjalanan Anda?</h2>
            <p className="text-lg text-white/90">Jadilah bagian dari 100 pengguna pertama dan nikmati promo launching eksklusif</p>
            <Link href="/#pricing">
              <Button className="rounded-full bg-white text-teal-500 hover:bg-white/90 px-8 text-lg font-bold shadow-lg">
                Download APK Sekarang <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
