"use client"

import { PhoneMockup } from "@/components/phone-mockup"
import { Button } from "@/components/ui/button"
import { Download, Star, Zap } from "lucide-react"
import { useEffect, useState } from "react"

function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTime = () => {
      // Target: Next Saturday
      const now = new Date()
      const currentDay = now.getDay()
      const daysUntilSaturday = (6 - currentDay + 7) % 7 || 7
      
      const target = new Date(now)
      target.setDate(target.getDate() + daysUntilSaturday)
      target.setHours(0, 0, 0, 0)

      const diff = target.getTime() - now.getTime()

      if (diff > 0) {
        setTime({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      }
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex gap-3 justify-center">
      {[
        { label: "Hari", value: time.days },
        { label: "Jam", value: time.hours },
        { label: "Menit", value: time.minutes },
        { label: "Detik", value: time.seconds },
      ].map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-1 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 px-4 py-3 border border-teal-200 shadow-sm"
        >
          <div className="text-xl sm:text-2xl font-bold text-teal-600">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="text-xs font-medium text-teal-600/70">{item.label}</div>
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-teal-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Left content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Zap className="h-4 w-4 fill-amber-500 text-amber-500" />
            <span className="text-sm font-semibold text-amber-900">
              🎉 Peluncuran Fase 1 Segera Dimulai!
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-navy-800 md:text-5xl lg:text-6xl">
            <span className="text-balance">
              Belajar Bahasa Jepang{" "}
              <span className="text-teal-400">Lebih Praktis</span> &{" "}
              <span className="text-teal-400">Lengkap!</span>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-800/60">
            Kuasai bahasa Jepang dari N5 hingga N1 dengan metode interaktif, AI Voice Practice,
            dan materi lengkap yang dirancang khusus untuk pelajar Indonesia.
          </p>

          {/* Countdown Section */}
          <div className="mt-8 w-full space-y-4 rounded-2xl border border-teal-100 bg-gradient-to-br from-white to-teal-50/30 p-6 backdrop-blur-sm">
            <div className="space-y-2">
              <h3 className="font-bold text-navy-800">⏰ Peluncuran Mobile App Fase 1</h3>
              <p className="text-sm text-navy-800/60">Hari Sabtu - Jangan Lewatkan Promo Launching!</p>
            </div>
            <Countdown />
            <div className="flex flex-col gap-2 pt-2 text-center">
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
                ✨ Penawaran Eksklusif untuk 100 Pengguna Baru ✨
              </p>
              <p className="text-sm font-bold text-navy-800">
                💰 Jangan Mulai Dari 39K - Dapatkan Paket Premium <span className="text-teal-500">dengan Harga Spesial</span>
              </p>
              <p className="text-xs text-navy-800/50 italic">
                Terbatas hanya untuk early adopters selama fase peluncuran
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row w-full justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-teal-400 px-8 text-base font-bold text-white shadow-lg shadow-teal-400/30 hover:bg-teal-500 hover:shadow-xl hover:shadow-teal-400/40"
            >
              <a href="https://drive.google.com/drive/folders/1JsSOKgWPijbgt4fC3Xgqt1wT_C5aG46q?usp=sharing">
                <Download className="mr-2 h-5 w-5" />
                Download APK
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-teal-200 bg-white/60 px-8 text-base font-bold text-navy-800 backdrop-blur-sm hover:bg-teal-50 hover:text-teal-500"
            >
              <a href="#features">Lihat Fitur</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-navy-800/60">
              {'4.9 Rating dari 1000+ pengguna'}
            </span>
          </div>

          {/* Store badges */}
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 rounded-xl bg-navy-800 px-5 py-3 text-white transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-[9px] leading-none opacity-80">GET IT ON</div>
                <div className="text-sm font-semibold leading-tight">Google Play</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-xl bg-navy-800 px-5 py-3 text-white transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M18.71,19.5C17.88,20.5 17,21.4 15.66,21.41C14.32,21.42 13.89,20.59 12.37,20.59C10.84,20.59 10.37,21.38 9.1,21.41C7.79,21.45 6.8,20.39 5.96,19.39C4.25,17.35 2.97,13.69 4.76,11.22C5.64,9.99 6.96,9.22 8.38,9.2C9.64,9.18 10.85,10.09 11.65,10.09C12.45,10.09 13.93,8.98 15.46,9.15C16.11,9.18 17.73,9.42 18.75,10.95C18.66,11.01 16.54,12.23 16.56,14.78C16.59,17.84 19.29,18.88 19.32,18.89C19.29,18.97 18.96,19.26 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-[9px] leading-none opacity-80">Download on the</div>
                <div className="text-sm font-semibold leading-tight">App Store</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right - Phone mockups */}
        <div className="relative flex flex-1 items-center justify-center">
          <div className="animate-float relative z-10">
            <PhoneMockup
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-hVp0oqFyIlBw23VwPIltCPQLxqyq4f.jpeg"
              alt="LuminaTalk Home Screen"
              type="ios"
            />
          </div>
          <div className="animate-float-delayed absolute top-8 -right-4 z-0 opacity-75 md:top-12 md:right-0">
            <PhoneMockup
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-3G5yiwaQzF6GeOTWjxbZgT0SX3nh61.jpeg"
              alt="LuminaTalk Roleplay"
              type="android"
              className="scale-[0.85]"
            />
          </div>
        </div>
      </div>

    </section>
  )
}
