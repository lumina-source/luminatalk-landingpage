"use client"

import { PhoneMockup } from "@/components/phone-mockup"

const screenshots = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-P9F6lcmh5dZuwLN3PQWccSLPtihsGj.jpeg",
    alt: "Login Page",
    label: "Login",
    type: "android" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-hVp0oqFyIlBw23VwPIltCPQLxqyq4f.jpeg",
    alt: "Home Screen",
    label: "Home",
    type: "ios" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-SYAxzNTtv4yENkSKBjsNC2Cszm541D.jpeg",
    alt: "Belajar Hiragana",
    label: "Hiragana",
    type: "android" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-ey1J9kUG7dNdgly6S0nkI4pz55Rkrc.jpeg",
    alt: "Belajar Katakana",
    label: "Katakana",
    type: "ios" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-O9osn89Eyz2WhqdPaNKyjxk0nmUY9W.jpeg",
    alt: "Quiz Hiragana",
    label: "Hiragana Quiz",
    type: "android" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-5NSanCGpaimhjTGB5lkx9aTcWETu0A.jpeg",
    alt: "Kanji Library",
    label: "Vocabulary",
    type: "ios" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-jqMHROJWXgyA34J7FtTmWIKgfA8MuG.jpeg",
    alt: "Kanji Stroke Practice",
    label: "Kanji Stroke",
    type: "android" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-wwLD441aFFMUHEeJaF3aNt8mUMocli.jpeg",
    alt: "Kanji Quiz",
    label: "Kanji Quiz",
    type: "ios" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-waVCV7yei1L5UdvZTtNDooGdllRqjB.jpeg",
    alt: "Konjugasi Kata Kerja",
    label: "Konjugasi",
    type: "android" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-IWKIUyBIkaaLHkBMoXBQo1WkDMr4vY.jpeg",
    alt: "JLPT Study Levels",
    label: "JLPT Study",
    type: "ios" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-oF5PnAgSB8jMj62Z3VbkPpv1jUJzM4.jpeg",
    alt: "Materi Bunpou Grammar",
    label: "Grammar",
    type: "android" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-71CwYIEYF4rHk2LILx5mFHwjlcjZh9.jpeg",
    alt: "Materi Partikel",
    label: "Partikel",
    type: "ios" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-3G5yiwaQzF6GeOTWjxbZgT0SX3nh61.jpeg",
    alt: "Kaiwa Roleplay",
    label: "Roleplay",
    type: "android" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-m2ossbxmjniR4JSkUvcVjyuk6Bjgqm.jpeg",
    alt: "Simulasi Tryout JLPT",
    label: "JLPT Tryout",
    type: "ios" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-YO5FC1TCuAUHAdvapFlIRVg6RO5vS6.jpeg",
    alt: "Tryout JLPT N5",
    label: "Tryout Soal",
    type: "android" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-24%20at%2020.33.42-1B2GSV7XLCyoilC2fpR1H1TXhqVprc.jpeg",
    alt: "LuminaTalk Flyer - Belajar Bahasa Jepang",
    label: "Promo Flyer",
    type: "android" as const,
  },
]

export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-bold text-teal-500">
            App Preview
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-800 md:text-4xl">
            <span className="text-balance">Lihat Tampilan Aplikasi LuminaTalk</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-800/60">
            Tampilan yang bersih, intuitif, dan dirancang untuk pengalaman belajar yang menyenangkan.
          </p>
        </div>

        {/* Scrollable screenshots */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-8 overflow-x-auto px-4 pb-8 snap-x snap-mandatory scrollbar-hide">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex flex-shrink-0 snap-center flex-col items-center gap-3"
              >
                <PhoneMockup
                  src={screenshot.src}
                  alt={screenshot.alt}
                  type={screenshot.type}
                />
                <span className="text-sm font-semibold text-navy-800/70">
                  {screenshot.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <p className="mt-4 text-center text-sm text-navy-800/40">
          {'Geser ke kanan untuk melihat lebih banyak -->'}
        </p>
      </div>
    </section>
  )
}
