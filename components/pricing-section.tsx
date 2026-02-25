import { Check, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

const SUBSCRIBE_LINK =
  "https://drive.google.com/drive/folders/1JsSOKgWPijbgt4fC3Xgqt1wT_C5aG46q?usp=sharing"

const allBenefits = [
  "Full Akses Semua Materi N5-N1",
  "AI Voice Practice Tanpa Batas",
  "Kanji Stroke Practice + AI Scoring",
  "Kaiwa Roleplay (44 Skenario)",
  "JLPT Tryout Simulasi Lengkap",
  "Vocabulary 5000+ Kata",
  "Konjugasi Kata Kerja Lengkap",
  "Grammar & Partikel N5-N1",
  "Hiragana & Katakana + Quiz",
  "Update Materi Berkala",
]

const plans = [
  {
    name: "Bulanan",
    price: "Rp 39.000",
    period: "/bulan",
    badge: null,
    description: "Langganan fleksibel untuk kamu yang ingin mencoba dulu.",
    highlight: false,
  },
  {
    name: "6 Bulan",
    price: "Rp 215.000",
    period: "/6 bulan",
    badge: "Best Deal",
    description: "Hemat lebih banyak dengan komitmen 6 bulan belajar.",
    highlight: true,
    savings: "Hemat Rp 19.000",
  },
  {
    name: "Tahunan",
    price: "Rp 429.000",
    period: "/tahun",
    badge: "Best Value",
    description: "Investasi terbaik untuk perjalanan belajar jangka panjang.",
    highlight: false,
    savings: "Hemat Rp 39.000",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-bold text-teal-500">
            Harga
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-800 md:text-4xl">
            <span className="text-balance">Pilih Paket Belajar yang Cocok untuk Kamu</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-800/60">
            Semua paket memberikan full akses ke seluruh fitur LuminaTalk. Pilih durasi yang paling sesuai.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 ${
                plan.highlight
                  ? "scale-[1.02] border-teal-400 bg-white shadow-xl shadow-teal-400/15 ring-1 ring-teal-400 lg:scale-105"
                  : "border-teal-100 bg-white/70 hover:shadow-lg hover:shadow-teal-400/10"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 rounded-full bg-teal-400 px-4 py-1.5 text-sm font-bold text-white shadow-lg">
                    {plan.badge === "Best Deal" ? (
                      <Zap className="h-3.5 w-3.5 fill-current" />
                    ) : (
                      <Crown className="h-3.5 w-3.5 fill-current" />
                    )}
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-navy-800">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-navy-800">{plan.price}</span>
                  <span className="text-sm text-navy-800/60">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-navy-800/60">{plan.description}</p>
                {plan.savings && (
                  <span className="mt-2 inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-500">
                    {plan.savings}
                  </span>
                )}
              </div>

              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {allBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                    <span className="text-sm text-navy-800/80">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-full py-6 text-base font-bold transition-all duration-200 ${
                  plan.highlight
                    ? "bg-teal-400 text-white shadow-lg shadow-teal-400/30 hover:bg-teal-500 hover:shadow-xl"
                    : "border border-teal-200 bg-white text-navy-800 hover:bg-teal-50 hover:text-teal-500"
                }`}
              >
                <a href={SUBSCRIBE_LINK} target="_blank" rel="noopener noreferrer">
                  Langganan Sekarang
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-navy-800/40">
          Semua paket memberikan akses penuh ke seluruh fitur tanpa batasan.
        </p>
      </div>
    </section>
  )
}
