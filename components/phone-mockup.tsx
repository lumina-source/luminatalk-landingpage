import Image from "next/image"

interface PhoneMockupProps {
  src: string
  alt: string
  type?: "ios" | "android"
  className?: string
}

export function PhoneMockup({ src, alt, type = "ios", className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Phone body shadow and gradient background */}
      <div className="absolute -inset-6 bg-gradient-to-br from-[--color-teal-400]/20 via-transparent to-[--color-navy-800]/20 rounded-[3rem] blur-2xl" />
      
      {/* Main phone frame */}
      <div className="relative">
        {/* Outer frame - black bezels */}
        <div className="relative bg-gradient-to-b from-[--color-navy-800] to-black rounded-[2.5rem] p-3 shadow-[0_0_0_12px_rgba(0,0,0,0.8),0_25px_80px_-12px_rgba(0,0,0,0.6)]">
          
          {/* Speaker cutout */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-2 bg-black rounded-b-lg z-20" />
          
          {/* Front camera notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-black rounded-full z-20" />
          
          {/* Screen area with border radius */}
          <div className="relative bg-white overflow-hidden rounded-[2.2rem]">
            {/* Status bar simulation */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[--color-navy-800]/10 to-transparent z-10 flex items-center justify-between px-4 text-xs font-bold text-[--color-navy-800]/60">
              <span>9:41</span>
              <span>●●●●●</span>
            </div>
            
            {/* Screen content */}
            <div className="relative w-[260px] h-[540px] overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Home button */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 border-4 border-[--color-navy-800] rounded-full bg-gradient-to-b from-[--color-navy-800] to-black" />
        </div>
      </div>
    </div>
  )
}
