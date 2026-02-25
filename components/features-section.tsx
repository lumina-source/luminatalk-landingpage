"use client"

import {
  BookOpen,
  Mic,
  PenTool,
  MessageCircle,
  GraduationCap,
  Layers,
  FileText,
  Sparkles,
} from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Materi JLPT Lengkap",
    description: "Pelajaran dari N5 sampai N1 mencakup Grammar, Vocabulary, Kanji, dan Partikel secara terstruktur.",
    color: "bg-teal-400",
  },
  {
    icon: Mic,
    title: "AI Voice Practice",
    description: "Latihan percakapan dengan AI yang interaktif. Tingkatkan kemampuan berbicara dan listening kamu.",
    color: "bg-teal-300",
  },
  {
    icon: PenTool,
    title: "Kanji Stroke Practice",
    description: "Latihan menulis kanji dengan panduan stroke order. AI akan memeriksa skor tulisanmu.",
    color: "bg-teal-500",
  },
  {
    icon: MessageCircle,
    title: "Kaiwa Roleplay",
    description: "Latihan percakapan situasional seperti di supermarket, rumah sakit, atau kantor.",
    color: "bg-teal-400",
  },
  {
    icon: GraduationCap,
    title: "JLPT Tryout Simulasi",
    description: "Simulasi ujian JLPT dengan timer dan format resmi. Persiapkan diri untuk ujian sesungguhnya.",
    color: "bg-teal-300",
  },
  {
    icon: Layers,
    title: "Konjugasi Kata Kerja",
    description: "Pelajari perubahan bentuk kata kerja lengkap: Bisa, Maksud, Perintah, dan Syarat.",
    color: "bg-teal-500",
  },
  {
    icon: FileText,
    title: "Hiragana & Katakana",
    description: "Belajar huruf Jepang dari Basic, Dakuon, hingga Kombinasi dengan quiz interaktif.",
    color: "bg-teal-400",
  },
  {
    icon: Sparkles,
    title: "Vocabulary Quiz",
    description: "Quiz kosakata dengan sistem spaced repetition. Kuasai ribuan kata bahasa Jepang.",
    color: "bg-teal-300",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-64 w-full bg-teal-50/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-bold text-teal-500">
            Fitur Unggulan
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-800 md:text-4xl">
            <span className="text-balance">
              Semua yang Kamu Butuhkan untuk Belajar Bahasa Jepang
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-800/60">
            LuminaTalk menyediakan tools lengkap dengan AI-powered features untuk mempercepat proses belajarmu.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-teal-100/50 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-400/10"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} text-white shadow-md`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-800">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
