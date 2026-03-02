"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Fitur", href: "#features" },
  { label: "Screenshot", href: "#screenshots" },
  { label: "Harga", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Artikel", href: "#articles" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-teal-100 bg-white/80 shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpeg"
            alt="LuminaTalk Logo"
            width={32}
            height={32}
            className="rounded-lg"
            priority
          />
          <span className="text-xl font-bold text-navy-800">
            Lumina<span className="text-teal-400">Talk</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-navy-800/70 transition-colors hover:text-teal-400"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="rounded-full bg-teal-400 px-6 text-white hover:bg-teal-500"
          >
            <a href="/roadmap">Roadmap</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-navy-800 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-teal-100 bg-white/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-navy-800/70 transition-colors hover:text-teal-400"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 w-full rounded-full bg-teal-400 text-white hover:bg-teal-500"
            >
              <a href="/roadmap" onClick={() => setMobileOpen(false)}>Roadmap</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
