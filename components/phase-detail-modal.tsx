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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="w-full max-w-xl mx-auto rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300 my-auto max-h-[90vh] overflow-y-auto flex flex-col">
        <div className="p-5 md:p-8 flex-1 overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 hover:bg-gray-100 rounded-full transition-colors z-10"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>

          {/* Header */}
          <div className="mb-4 space-y-2 pr-8">
            <div className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-700">
              Phase {phase.id}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-800">{phase.title}</h2>
            <p className="text-navy-800/60 text-sm md:text-base">{phase.description}</p>
          </div>

          {/* Detailed Information */}
          <div className="mb-4 space-y-3">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-100 p-4 space-y-3 text-navy-800/80 leading-relaxed">
              {phase.detailedInfo.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-sm md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-navy-800 mb-3">Fitur Utama:</h3>
            <ul className="space-y-2">
              {phase.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="flex items-center justify-center h-4 w-4 rounded-full bg-teal-400 text-white text-xs font-bold">
                      ✓
                    </div>
                  </div>
                  <span className="text-navy-800/80 text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Close Button - Fixed at bottom */}
        <div className="flex justify-end gap-2 p-5 md:p-8 border-t bg-white sticky bottom-0">
          <Button
            onClick={onClose}
            className="rounded-lg bg-teal-400 text-white hover:bg-teal-500 px-6 py-2 text-sm"
          >
            Tutup
          </Button>
        </div>
      </div>
    </div>
  )
}
