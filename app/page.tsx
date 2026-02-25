"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CountdownSection } from "@/components/countdown-section"
import { WaitingListForm } from "@/components/waiting-list-form"
import { FeaturesSection } from "@/components/features-section"
import { ScreenshotsSection } from "@/components/screenshots-section"
import { StatsSection } from "@/components/stats-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [showWaitingList, setShowWaitingList] = useState(false)

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <CountdownSection onWaitingListClick={() => setShowWaitingList(true)} />
        <StatsSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <WaitingListForm isOpen={showWaitingList} onClose={() => setShowWaitingList(false)} />
    </div>
  )
}
