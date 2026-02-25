"use client"

import { useEffect, useState } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

function CountdownTimer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTime = () => {
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
    <div className="flex gap-2 md:gap-3">
      {[
        { label: "Hari", value: time.days },
        { label: "Jam", value: time.hours },
        { label: "Menit", value: time.minutes },
        { label: "Detik", value: time.seconds },
      ].map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-1 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 px-3 py-2 md:px-4 md:py-3 border border-teal-200 shadow-sm"
        >
          <div className="text-lg md:text-xl font-bold text-teal-600">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="text-xs font-medium text-teal-600/70">{item.label}</div>
        </div>
      ))}
    </div>
  )
}

interface CountdownSectionProps {
  onWaitingListClick: () => void
}

export function CountdownSection({ onWaitingListClick }: CountdownSectionProps) {
  return (
    <div className="w-full bg-gradient-to-r from-teal-50 via-blue-50 to-teal-50 border-y border-teal-100">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left Content */}
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-teal-500" />
              <h3 className="text-sm md:text-base font-bold text-teal-600 uppercase tracking-wider">
                Peluncuran Phase 1
              </h3>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-xl md:text-2xl font-bold text-navy-800">
                Hari Sabtu - Jangan Lewatkan!
              </h2>
              <p className="text-sm md:text-base text-navy-800/60">
                ✨ Penawaran Eksklusif untuk 200 Pengguna Pertama ✨
              </p>
              <p className="text-xs md:text-sm font-semibold text-teal-600">
                💰 Jangan Mulai Dari 39K - Dapatkan Harga Spesial Launching
              </p>
            </div>
          </div>

          {/* Right Content - Countdown and CTA */}
          <div className="flex flex-col gap-4 md:items-end">
            <div>
              <p className="text-xs md:text-sm text-navy-800/50 mb-2">Sisa waktu peluncuran:</p>
              <CountdownTimer />
            </div>
            <Button
              onClick={onWaitingListClick}
              className="rounded-full border-2 border-teal-400 bg-white text-teal-500 font-bold hover:bg-teal-50 shadow-lg shadow-teal-400/20 w-full md:w-auto"
            >
              <Bell className="mr-2 h-4 w-4" />
              Waiting List
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
