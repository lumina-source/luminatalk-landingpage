import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy-800 px-8 py-16 text-center md:px-16">
          {/* Decorative blurs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-teal-400/20 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-teal-300/15 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              <span className="text-balance">
                Mulai Perjalanan Belajar Bahasa Jepangmu Sekarang!
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
              Download LuminaTalk dan bergabung dengan ribuan pelajar Indonesia yang sudah membuktikan kemajuan mereka.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-teal-400 px-8 text-base font-bold text-white shadow-lg shadow-teal-400/30 hover:bg-teal-300"
              >
                <a href="https://drive.google.com/drive/folders/1JsSOKgWPijbgt4fC3Xgqt1wT_C5aG46q?usp=sharing">
                  <Download className="mr-2 h-5 w-5" />
                  Download Sekarang - Mulai Rp 39K/bulan
                </a>
              </Button>
            </div>

            <p className="mt-4 text-sm text-white/50">
              Tersedia di Google Play Store & App Store
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
