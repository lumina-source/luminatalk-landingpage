import Image from "next/image"

interface PhoneMockupProps {
  src: string
  alt: string
  type?: "ios" | "android"
  className?: string
}

export function PhoneMockup({ src, alt, type = "ios", className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Phone frame */}
      <div
        className={`relative overflow-hidden bg-[--color-navy-800] ${
          type === "ios"
            ? "rounded-[2.5rem] p-[10px] shadow-[0_0_0_2px_#2a2d3e,0_25px_60px_-12px_rgba(0,0,0,0.4)]"
            : "rounded-[1.8rem] p-[8px] shadow-[0_0_0_2px_#2a2d3e,0_25px_60px_-12px_rgba(0,0,0,0.4)]"
        }`}
      >
        {/* Notch (iOS) or Camera (Android) */}
        {type === "ios" ? (
          <div className="absolute top-[10px] left-1/2 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-b-2xl bg-[--color-navy-800]" />
        ) : (
          <div className="absolute top-[14px] left-1/2 z-20 h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-[--color-navy-900]" />
        )}

        {/* Screen */}
        <div
          className={`relative overflow-hidden bg-[--color-teal-50] ${
            type === "ios" ? "rounded-[2rem]" : "rounded-[1.4rem]"
          }`}
        >
          <Image
            src={src}
            alt={alt}
            width={300}
            height={640}
            className="block h-auto w-[260px] object-cover md:w-[280px]"
          />
        </div>

        {/* Home indicator (iOS) */}
        {type === "ios" && (
          <div className="absolute bottom-[14px] left-1/2 h-[4px] w-[100px] -translate-x-1/2 rounded-full bg-white/30" />
        )}
      </div>
    </div>
  )
}
