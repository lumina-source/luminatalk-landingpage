import { BookOpen, Award, Globe } from "lucide-react"

const KanjiIcon = () => (
  <svg className="h-7 w-7 text-teal-300" fill="currentColor" viewBox="0 0 24 24">
    <text x="2" y="20" fontSize="20" fontWeight="bold">漢</text>
  </svg>
)

const stats = [
  { icon: KanjiIcon, value: "10,000+", label: "Kosakata & Kanji" },
  { icon: BookOpen, value: "5,000+", label: "Materi Pelajaran" },
  { icon: Award, value: "N5-N1", label: "Level JLPT" },
  { icon: Globe, value: "100%", label: "Bahasa Indonesia" },
]

export function StatsSection() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-navy-800" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-400/20">
                <stat.icon className="h-7 w-7 text-teal-300" />
              </div>
              <span className="text-3xl font-extrabold text-white">{stat.value}</span>
              <span className="mt-1 text-sm font-medium text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
