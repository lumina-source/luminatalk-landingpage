import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tentang Kami - LuminaTalk",
  description:
    "Kenali visi, misi, dan cerita di balik LuminaTalk. Dari gairah menjadi solusi untuk belajar bahasa Jepang.",
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  )
}

function BookOpenIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </svg>
  )
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 21a8 8 0 0 0-16 0" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-teal-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-navy-800/60 transition-colors hover:text-teal-400">
            <ArrowLeftIcon className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-16 pt-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-transparent to-transparent opacity-60" />
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-400/10">
              <BookOpenIcon className="h-8 w-8 text-teal-400" />
            </div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-navy-800 md:text-5xl">
              Tentang <span className="text-teal-400">LuminaTalk</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-navy-800/60">
              Dari Gairah Menjadi Solusi
            </p>
          </div>
        </section>

        {/* Mission Quote */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-white/80 p-8 shadow-lg shadow-teal-400/5 backdrop-blur-sm md:p-12">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-teal-400/5" />
              <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-6 translate-y-6 rounded-full bg-teal-400/5" />
              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-400/10">
                    <TargetIcon className="h-5 w-5 text-teal-400" />
                  </div>
                  <h2 className="text-xl font-bold text-navy-800">Misi Kami</h2>
                </div>
                <p className="text-2xl font-bold leading-snug text-navy-800 md:text-3xl">
                  {"\"Meruntuhkan Tembok Bahasa dengan Teknologi.\""}
                </p>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-navy-800/70">
                  <p>
                    Banyak orang bermimpi bisa fasih berbahasa Jepang -- entah untuk mengejar karier, pendidikan, atau sekadar menikmati budaya pop secara langsung. Namun, kami tahu kenyataannya tidak mudah. Menghafal ribuan Kanji, bingung dengan perubahan kata kerja, hingga rasa takut yang luar biasa saat ingin mencoba berbicara dengan native speaker.
                  </p>
                  <p>
                    <strong className="text-navy-800">LuminaTalk</strong> lahir dari visi sederhana:{" "}
                    <em className="text-teal-500">{"\"Belajar bahasa Jepang seharusnya tidak menakutkan, tidak mahal, dan tidak membosankan.\""}</em>
                  </p>
                  <p>
                    Kami percaya bahwa setiap coretan stroke Kanji di layar Anda adalah langkah menuju mimpi besar. Kami percaya bahwa percakapan dengan AI kami adalah jembatan yang akan membangun kepercayaan diri Anda sebelum benar-benar menginjakkan kaki di Tokyo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Big Quote */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="relative rounded-3xl bg-navy-800 px-8 py-12 md:px-16 md:py-16">
              <div className="absolute left-6 top-6 text-5xl font-bold text-teal-400/20 md:text-7xl">{"\u201C"}</div>
              <p className="relative text-xl font-semibold leading-relaxed text-white md:text-2xl">
                Kami percaya bahwa bahasa adalah kunci, dan teknologi adalah jembatan untuk membukanya.
              </p>
              <div className="absolute bottom-6 right-6 text-5xl font-bold text-teal-400/20 md:text-7xl">{"\u201D"}</div>
            </div>
          </div>
        </section>

        {/* Why LuminaTalk */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-navy-800 md:text-4xl">
                Mengapa <span className="text-teal-400">LuminaTalk</span>?
              </h2>
              <p className="mt-3 text-base text-navy-800/60">
                Kami bukan sekadar aplikasi kamus atau kumpulan soal. LuminaTalk adalah ekosistem yang dirancang dengan hati.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: <BookOpenIcon className="h-6 w-6 text-teal-400" />,
                  title: "Sistematis",
                  description:
                    "Kami mendampingi Anda dari nol (N5) hingga mahir (N1) tanpa membuat Anda merasa tersesat.",
                },
                {
                  icon: <HeartIcon className="h-6 w-6 text-teal-400" />,
                  title: "Empati",
                  description:
                    "Fitur AI kami dirancang untuk mendengarkan tanpa menghakimi, membiarkan Anda salah agar Anda bisa belajar.",
                },
                {
                  icon: <ZapIcon className="h-6 w-6 text-teal-400" />,
                  title: "Efisien",
                  description:
                    "Kami membawa seluruh perpustakaan pengetahuan Jepang ke dalam genggaman Anda -- hemat waktu, hemat biaya.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-teal-100 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-400/10"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 transition-colors group-hover:bg-teal-400/20">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy-800">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-navy-800/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-3xl border border-teal-100 bg-white/80 shadow-sm">
              <div className="grid items-center md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10">
                    <UsersIcon className="h-6 w-6 text-teal-400" />
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-navy-800">Bergabunglah Bersama Kami</h2>
                  <p className="mb-6 text-sm leading-relaxed text-navy-800/60">
                    Di LuminaTalk, Anda bukan sekadar pengguna aplikasi; Anda adalah bagian dari komunitas pembelajar masa depan yang berani melampaui batas diri. Mari kita taklukkan JLPT dan bicara Jepang dengan bangga bersama <strong>LuminaChat</strong> dan <strong>LuminaVoice</strong>.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://www.instagram.com/luminatalk?igsh=anJiOGk1d3hwcmo5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-500"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                      </svg>
                      Instagram
                    </a>
                    <a
                      href="https://www.tiktok.com/@luminatalk?_r=1&_t=ZS-94BPDrD4JCH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-teal-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:bg-teal-50"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.27 8.27 0 0 0 4.76 1.51v-3.5a4.84 4.84 0 0 1-1-.01Z" />
                      </svg>
                      TikTok
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-teal-50/50 p-8">
                  <Image
                    src="/images/logo.jpeg"
                    alt="LuminaTalk Logo"
                    width={240}
                    height={240}
                    className="rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-teal-100 bg-teal-50/30 p-8 text-center md:p-12">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10">
                <MailIcon className="h-6 w-6 text-teal-400" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-navy-800">Hubungi Kami</h2>
              <p className="mb-6 text-sm text-navy-800/60">
                Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami.
              </p>
              <a
                href="mailto:luminafoundation.ai@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-500"
              >
                <MailIcon className="h-4 w-4" />
                luminafoundation.ai@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer mini */}
      <footer className="border-t border-teal-100 bg-white/50 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.jpeg" alt="LuminaTalk Logo" width={28} height={28} className="rounded-md" />
            <span className="text-sm font-bold text-navy-800">
              Lumina<span className="text-teal-400">Talk</span>
            </span>
          </div>
          <p className="text-xs text-navy-800/40">&copy; 2026 LuminaTalk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
