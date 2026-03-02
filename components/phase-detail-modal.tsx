'use client'

import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PhaseDetailModalProps {
  isOpen: boolean
  onClose: () => void
  phase: {
    id: number
    title: string
    description: string
    features: string[]
    detailedInfo: string
  }
}

export function PhaseDetailModal({ isOpen, onClose, phase }: PhaseDetailModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto pt-20 pb-8">
      <div className="w-full max-w-2xl mx-4 rounded-3xl bg-white p-6 md:p-10 shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-6 w-6 text-gray-500" />
        </button>

        {/* Header */}
        <div className="mb-6 space-y-2">
          <div className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-700 mb-2">
            Phase {phase.id}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800">{phase.title}</h2>
          <p className="text-navy-800/60 text-lg">{phase.description}</p>
        </div>

        {/* Detailed Information */}
        <div className="mb-8 space-y-4">
          <div className="prose prose-sm max-w-none">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl border-2 border-teal-100 p-6 space-y-4 text-navy-800/80 leading-relaxed">
              {phase.detailedInfo.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-navy-800 mb-4">Fitur Utama:</h3>
          <ul className="space-y-3">
            {phase.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-teal-400 text-white text-xs font-bold">
                    ✓
                  </div>
                </div>
                <span className="text-navy-800/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Close Button */}
        <div className="flex justify-end">
          <Button
            onClick={onClose}
            className="rounded-lg bg-teal-400 text-white hover:bg-teal-500 px-6 py-2"
          >
            Tutup
          </Button>
        </div>
      </div>
    </div>
  )
}
