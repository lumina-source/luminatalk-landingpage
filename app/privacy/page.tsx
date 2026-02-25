import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy & Legal - LuminaTalk",
  description:
    "Kebijakan privasi, disclaimer, dan hak cipta LuminaTalk. Pelajari bagaimana kami melindungi data Anda.",
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function UserCheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  )
}

function CreditCardIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function AlertTriangleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

function CopyrightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9.354a4 4 0 1 0 0 5.292" />
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

function ShareIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}

type SectionCardProps = {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
  accentColor?: string
}

function SectionCard({ icon, title, children, accentColor = "teal" }: SectionCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-teal-100 bg-white/80 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/5">
      <div className={`h-1 w-full ${accentColor === "amber" ? "bg-amber-400" : accentColor === "rose" ? "bg-rose-400" : "bg-teal-400"}`} />
      <div className="p-6 md:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentColor === "amber" ? "bg-amber-400/10" : accentColor === "rose" ? "bg-rose-400/10" : "bg-teal-400/10"}`}>
            {icon}
          </div>
          <h2 className="text-lg font-bold text-navy-800">{title}</h2>
        </div>
        <div className="space-y-3 text-sm leading-relaxed text-navy-800/70">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function PrivacyPage() {
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
        <section className="relative overflow-hidden px-6 pb-12 pt-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-transparent to-transparent opacity-60" />
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-400/10">
              <ShieldIcon className="h-8 w-8 text-teal-400" />
            </div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-navy-800 md:text-5xl">
              Privacy & <span className="text-teal-400">Legal</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy-800/60">
              Komitmen kami terhadap keamanan data dan transparansi.
            </p>
            <p className="mt-2 text-xs text-navy-800/40">Last Updated: February 24, 2026</p>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="px-6 pb-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-2xl font-extrabold text-navy-800 md:text-3xl">
              Privacy Policy
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <SectionCard
                icon={<DatabaseIcon className="h-5 w-5 text-teal-400" />}
                title="Information We Collect"
              >
                <ul className="list-inside space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span><strong className="text-navy-800">Account Data:</strong> Email address dan profile information untuk mengelola akun Anda via secure authentication providers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span><strong className="text-navy-800">Learning Progress:</strong> Lesson progress, quiz scores, dan level preferences untuk pengalaman yang tersinkronisasi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span><strong className="text-navy-800">Audio Data:</strong> Untuk fitur AI Voice, audio diproses secara real-time. Kami <strong>tidak menyimpan</strong> rekaman suara secara permanen.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span><strong className="text-navy-800">Technical Data:</strong> Informasi dasar perangkat (OS version, device model) untuk optimalisasi performa.</span>
                  </li>
                </ul>
              </SectionCard>

              <SectionCard
                icon={<FileTextIcon className="h-5 w-5 text-teal-400" />}
                title="Use of Data"
              >
                <p>Kami menggunakan data Anda untuk:</p>
                <ul className="list-inside space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span>Menyediakan dan memelihara layanan.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span>Personalisasi pengalaman belajar bahasa Jepang Anda.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span>Verifikasi status langganan dan memproses transaksi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span>Mengirimkan update teknis atau peringatan keamanan.</span>
                  </li>
                </ul>
              </SectionCard>

              <SectionCard
                icon={<ShareIcon className="h-5 w-5 text-teal-400" />}
                title="Data Sharing & Third Parties"
              >
                <p className="font-semibold text-navy-800">Kami tidak menjual data pribadi Anda.</p>
                <p>Kami hanya berbagi informasi dengan kategori layanan terpercaya:</p>
                <ul className="list-inside space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span><strong className="text-navy-800">Cloud Infrastructure:</strong> Untuk penyimpanan database dan autentikasi yang aman.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span><strong className="text-navy-800">AI Service Providers:</strong> Untuk memproses interaksi bahasa (data dikirim secara anonim).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span><strong className="text-navy-800">Payment Processors:</strong> Untuk memverifikasi pembelian langganan.</span>
                  </li>
                </ul>
              </SectionCard>

              <SectionCard
                icon={<CreditCardIcon className="h-5 w-5 text-teal-400" />}
                title="Subscription & Refund"
              >
                <ul className="list-inside space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span>Langganan dikelola secara manual (via WhatsApp) atau melalui app stores resmi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span>Refund untuk pembayaran manual hanya dipertimbangkan untuk kegagalan teknis permanen.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span>Pembelian melalui Store mengikuti kebijakan refund Google/Apple.</span>
                  </li>
                </ul>
              </SectionCard>

              <SectionCard
                icon={<UserCheckIcon className="h-5 w-5 text-teal-400" />}
                title="User Rights & Data Deletion"
              >
                <p>
                  Anda memiliki hak untuk mengakses, mengoreksi, atau menghapus data pribadi Anda. Anda dapat menghapus akun Anda secara permanen melalui menu <strong className="text-navy-800">{"\"Settings\""}</strong> di dalam aplikasi.
                </p>
              </SectionCard>

              <SectionCard
                icon={<LockIcon className="h-5 w-5 text-teal-400" />}
                title="Security"
              >
                <p>
                  Kami menerapkan enkripsi standar industri <strong className="text-navy-800">(SSL/TLS)</strong> untuk melindungi data Anda selama transmisi dan penyimpanan.
                </p>
              </SectionCard>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="px-6 pb-8 pt-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-2xl font-extrabold text-navy-800 md:text-3xl">
              Disclaimer (Penafian)
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <SectionCard
                icon={<AlertTriangleIcon className="h-5 w-5 text-amber-500" />}
                title="Akurasi AI"
                accentColor="amber"
              >
                <p>
                  LuminaTalk menggunakan teknologi Kecerdasan Buatan (AI) untuk membantu praktik percakapan bahasa Jepang. Meskipun kami berupaya memberikan hasil yang akurat, AI mungkin dapat menghasilkan kesalahan tata bahasa, terjemahan, atau konteks. Pengguna disarankan untuk tetap menggunakan buku teks resmi sebagai referensi utama.
                </p>
              </SectionCard>

              <SectionCard
                icon={<AlertTriangleIcon className="h-5 w-5 text-amber-500" />}
                title="Konektivitas"
                accentColor="amber"
              >
                <p>
                  Kami tidak bertanggung jawab atas gangguan layanan yang disebabkan oleh masalah koneksi internet pengguna atau pemeliharaan server pihak ketiga.
                </p>
              </SectionCard>

              <SectionCard
                icon={<AlertTriangleIcon className="h-5 w-5 text-amber-500" />}
                title="Penyalahgunaan"
                accentColor="amber"
              >
                <p>
                  LuminaTalk tidak bertanggung jawab atas tindakan pengguna yang melanggar hukum atau etika saat menggunakan fitur chat/suara di dalam aplikasi.
                </p>
              </SectionCard>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <section className="px-6 pb-16 pt-8">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-3xl border border-rose-100 bg-white/80 shadow-sm">
              <div className="h-1 w-full bg-rose-400" />
              <div className="p-8 text-center md:p-12">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-400/10">
                  <CopyrightIcon className="h-7 w-7 text-rose-400" />
                </div>
                <h2 className="mb-4 text-xl font-bold text-navy-800">Hak Cipta & Kepemilikan</h2>
                <p className="mx-auto max-w-2xl text-sm leading-relaxed text-navy-800/70">
                  &copy; 2026 LuminaTalk. Seluruh Hak Cipta Dilindungi. Seluruh desain UI/UX, algoritma fitur, materi kurikulum, logo, dan identitas visual LuminaTalk adalah properti intelektual milik pemilik aplikasi. <strong className="text-navy-800">Dilarang keras</strong> melakukan rekayasa balik (reverse engineering), penggandaan, atau pendistribusian ulang tanpa izin tertulis.
                </p>
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
              <h2 className="mb-2 text-2xl font-bold text-navy-800">Ada Pertanyaan?</h2>
              <p className="mb-6 text-sm text-navy-800/60">
                Hubungi kami jika Anda memiliki pertanyaan terkait kebijakan privasi atau legal.
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
