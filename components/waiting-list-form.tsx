'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { X, CheckCircle2 } from 'lucide-react'

interface WaitingListFormProps {
  isOpen: boolean
  onClose: () => void
}

function SuccessModal({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 5000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative rounded-3xl bg-white p-8 md:p-12 max-w-md w-full mx-4 shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-6 w-6 text-gray-500" />
        </button>

        {/* Success animation */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400/20 rounded-full animate-pulse" />
            <div className="relative rounded-full bg-gradient-to-br from-green-400 to-emerald-500 p-4 animate-bounce">
              <CheckCircle2 className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="text-center space-y-3">
          <h3 className="text-2xl font-bold text-navy-800">Yeay, Selamat! 🎉</h3>
          <p className="text-navy-800/70">
            Anda telah berhasil mendaftar untuk waiting list LuminaTalk!
          </p>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-navy-800">
            <p className="font-semibold text-teal-600 mb-1">Data Anda telah dikirim ke admin</p>
            <p>Tunggu konfirmasi melalui WhatsApp dalam 24 jam</p>
          </div>
          <p className="text-xs text-navy-800/50 italic">Jendela ini akan menutup dalam 5 detik...</p>
        </div>
      </div>
    </div>
  )
}

export function WaitingListForm({ isOpen, onClose }: WaitingListFormProps) {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    email: '',
    pesan: '',
  })
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')
  const [waitlistCount, setWaitlistCount] = useState(0)

  // Load waitlist count from localStorage
  useEffect(() => {
    const count = localStorage.getItem('luminatalk_waitlist_count')
    if (count) {
      setWaitlistCount(parseInt(count))
    }
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!formData.nama.trim()) {
      setError('Nama tidak boleh kosong')
      return
    }
    if (!formData.whatsapp.trim()) {
      setError('Nomor WhatsApp tidak boleh kosong')
      return
    }
    if (!formData.email.trim()) {
      setError('Email tidak boleh kosong')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Email tidak valid')
      return
    }

    // Check if limit reached
    if (waitlistCount >= 200) {
      setError('Maaf, waiting list telah mencapai batas 200 pengguna')
      return
    }

    setLoading(true)

    try {
      // Format message for WhatsApp
      const message = `
🎯 *PENDAFTARAN WAITING LIST LUMINATALK* 🎯

*Nama:* ${formData.nama}
*WhatsApp:* ${formData.whatsapp}
*Email:* ${formData.email}
*Pesan untuk LuminaTalk:* ${formData.pesan || '-'}

---
📱 Promo Early Access untuk 200 pengguna pertama
💰 Jangan mulai dari 39K - dapatkan harga spesial!
⏰ Peluncuran Fase 1: Hari Sabtu
      `.trim()

      // Send via WhatsApp using WhatsApp Business API format
      const adminNumber = '081246380454'
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/${adminNumber}?text=${encodedMessage}`

      // Increment counter
      const newCount = waitlistCount + 1
      localStorage.setItem('luminatalk_waitlist_count', newCount.toString())
      setWaitlistCount(newCount)

      // Open WhatsApp
      window.open(whatsappUrl, '_blank')

      // Show success modal
      setShowSuccess(true)

      // Reset form
      setFormData({
        nama: '',
        whatsapp: '',
        email: '',
        pesan: '',
      })

      // Close form after success
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (err) {
      setError('Terjadi kesalahan, silakan coba lagi')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
        <div
          className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 md:p-8 animate-in fade-in zoom-in duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-800">Waiting List</h2>
              <p className="text-sm text-navy-800/60 mt-1">Jadilah bagian dari 100 pengguna pertama</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Waitlist Counter */}
          <div className="mb-6 rounded-lg bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-navy-800/60">Pengguna Terdaftar</p>
                <p className="text-2xl font-bold text-teal-500">{waitlistCount}/200</p>
              </div>
              <div className="relative h-12 w-12 rounded-full bg-white border-2 border-teal-300 flex items-center justify-center">
                <div className="text-xs font-bold text-teal-600">{Math.round((waitlistCount / 200) * 100)}%</div>
              </div>
            </div>
          </div>

          {waitlistCount >= 200 ? (
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 mb-6 text-center">
              <p className="font-semibold text-amber-900">Maaf, waiting list sudah penuh!</p>
              <p className="text-sm text-amber-800 mt-1">200 pengguna pertama sudah terdaftar</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm font-semibold text-navy-800 mb-2 block">Nama Lengkap</label>
                <Input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama Anda"
                  disabled={loading}
                  className="rounded-lg"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="text-sm font-semibold text-navy-800 mb-2 block">Nomor WhatsApp Aktif</label>
                <Input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="Contoh: 081246380454"
                  disabled={loading}
                  className="rounded-lg"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-navy-800 mb-2 block">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Masukkan email Anda"
                  disabled={loading}
                  className="rounded-lg"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-semibold text-navy-800 mb-2 block">Pesan untuk LuminaTalk (Opsional)</label>
                <Textarea
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleInputChange}
                  placeholder="Bagikan ekspektasi atau pertanyaan Anda..."
                  disabled={loading}
                  className="rounded-lg min-h-24"
                />
              </div>

              {/* Error message */}
              {error && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  onClick={onClose}
                  variant="outline"
                  className="flex-1 rounded-lg"
                  disabled={loading}
                >
                  Kembali
                </Button>
                <Button
                  type="submit"
                  className="flex-1 rounded-lg bg-teal-400 text-white hover:bg-teal-500 disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? 'Mengirim...' : 'Daftar Sekarang'}
                </Button>
              </div>

              <p className="text-xs text-navy-800/50 text-center">
                Data Anda akan dikirim ke admin melalui WhatsApp
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal isVisible={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  )
}
