import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-teal-100 bg-white/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.jpeg"
                alt="LuminaTalk Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-navy-800">
                Lumina<span className="text-teal-400">Talk</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-800/60">
              Belajar bahasa Jepang lebih praktis dan lengkap. Dari N5 sampai N1 dengan AI-powered features.
            </p>
          </div>

          {/* Fitur */}
          <div>
            <h4 className="text-sm font-bold text-navy-800">Fitur</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {["JLPT Study", "AI Voice", "Kanji Stroke", "Vocabulary", "Kaiwa Roleplay"].map((item) => (
                <li key={item}>
                  <a href="#features" className="text-sm text-navy-800/60 transition-colors hover:text-teal-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="text-sm font-bold text-navy-800">Perusahaan</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/tentang" className="text-sm text-navy-800/60 transition-colors hover:text-teal-400">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-navy-800/60 transition-colors hover:text-teal-400">
                  Privacy & Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Ikuti Kami */}
          <div>
            <h4 className="text-sm font-bold text-navy-800">Ikuti Kami</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="https://www.instagram.com/luminatalk?igsh=anJiOGk1d3hwcmo5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-navy-800/60 transition-colors hover:text-teal-400"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  </svg>
                  @luminatalk
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@luminatalk?_r=1&_t=ZS-94BPDrD4JCH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-navy-800/60 transition-colors hover:text-teal-400"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.27 8.27 0 0 0 4.76 1.51v-3.5a4.84 4.84 0 0 1-1-.01Z" />
                  </svg>
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="mailto:luminafoundation.ai@gmail.com"
                  className="flex items-center gap-2 text-sm text-navy-800/60 transition-colors hover:text-teal-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-teal-100 pt-8">
          <p className="text-center text-sm text-navy-800/40">
            &copy; 2026 LuminaTalk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
