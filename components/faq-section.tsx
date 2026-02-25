import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Apa itu LuminaTalk?",
    answer:
      "LuminaTalk adalah aplikasi belajar bahasa Jepang yang dirancang khusus untuk pelajar Indonesia. Dilengkapi dengan materi JLPT dari N5 sampai N1, AI Voice Practice, Kanji Stroke, dan banyak fitur interaktif lainnya.",
  },
  {
    question: "Apakah LuminaTalk gratis?",
    answer:
      "LuminaTalk menyediakan paket berlangganan mulai dari Rp 39.000/bulan, Rp 215.000/6 bulan (Best Deal), atau Rp 429.000/tahun (Best Value). Semua paket memberikan full akses ke seluruh fitur tanpa batasan.",
  },
  {
    question: "Apa saja level JLPT yang tersedia?",
    answer:
      "LuminaTalk menyediakan materi lengkap untuk semua level JLPT: N5 (Beginner), N4 (Elementary), N3 (Intermediate), N2 (Advanced), dan N1 (Master). Setiap level dilengkapi dengan Grammar, Vocabulary, Kanji, dan Partikel.",
  },
  {
    question: "Bagaimana fitur AI Voice Practice bekerja?",
    answer:
      "AI Voice Practice memungkinkan kamu untuk berlatih percakapan bahasa Jepang dengan AI. Kamu bisa memilih berbagai skenario percakapan seperti di supermarket, restoran, atau kantor. AI akan memberikan feedback tentang pengucapanmu.",
  },
  {
    question: "Apakah ada simulasi ujian JLPT?",
    answer:
      "Ya! LuminaTalk menyediakan simulasi tryout JLPT dengan format yang sama seperti ujian resmi. Tersedia untuk level N5 sampai N1 dengan timer dan sistem scoring lengkap mencakup Moji, Bunpou, Dokkai, dan Choukai.",
  },
  {
    question: "Apakah bisa digunakan offline?",
    answer:
      "Sebagian besar materi dan quiz bisa diakses secara offline setelah di-download. Namun, fitur AI Voice Practice dan beberapa fitur interaktif membutuhkan koneksi internet.",
  },
  {
    question: "Tersedia di platform apa saja?",
    answer:
      "LuminaTalk tersedia di Android (Google Play Store) dan iOS (App Store). Kamu bisa belajar kapan saja dan di mana saja langsung dari smartphone-mu.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-bold text-teal-500">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-800 md:text-4xl">
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border-b border-teal-100"
            >
              <AccordionTrigger className="py-5 text-left text-base font-bold text-navy-800 hover:text-teal-400 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-navy-800/60">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
