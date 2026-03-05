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
      {/* Premium shadow and glow */}
      <div className="absolute -inset-8 bg-gradient-to-br from-[--color-teal-400]/15 via-[--color-teal-400]/5 to-[--color-navy-800]/25 rounded-[3.5rem] blur-3xl opacity-80" />
      <div className="absolute -inset-4 bg-gradient-to-t from-black/10 to-transparent rounded-[2.8rem] blur-2xl" />
      
      {/* Phone body */}
      <div className="relative">
        {/* Metallic frame */}
        <div 
          className="relative rounded-[2.8rem] overflow-hidden p-3"
          style={{
            background: 'linear-gradient(135deg, rgba(42,45,62,0.95) 0%, rgba(26,29,46,0.98) 50%, rgba(42,45,62,0.95) 100%)',
            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.15), 0 0 0 0.5px rgba(0,0,0,0.8), 0 25px 60px -12px rgba(0,0,0,0.8), 0 40px 120px -20px rgba(0,0,0,0.9)'
          }}
        >
          {/* Dynamic Island notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-30" />
          
          {/* Screen display */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-black">
            {/* Screen with image */}
            <div className="relative w-72 h-[560px] overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Glossy reflection overlay */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/8 via-transparent to-black/20 pointer-events-none" />
          </div>
        </div>
        
        {/* Side lighting highlight */}
        <div className="absolute -right-3 top-1/3 w-0.5 h-40 bg-gradient-to-b from-white/30 to-transparent rounded-full blur-md" />
      </div>
    </div>
  )
}
