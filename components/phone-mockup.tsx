interface PhoneMockupProps {
  src: string
  alt: string
  type?: "ios" | "android"
  className?: string
}

export function PhoneMockup({ src, alt, type = "ios", className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* FlyonUI Mockup Phone */}
      <div className="mockup-phone">
        <div className="mockup-phone-camera"></div>
        <div className="mockup-phone-display flex justify-center">
          <div className="h-full w-80">
            <img 
              className="size-full object-cover" 
              src={src} 
              alt={alt}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
