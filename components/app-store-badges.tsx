import { Download } from 'lucide-react'

export function AppStoreBadges() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      {/* Google Play Store */}
      <a
        href="#"
        className="group relative flex items-center gap-3 rounded-2xl bg-gradient-to-r from-teal-400 to-teal-500 px-6 py-4 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
      >
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
        </div>

        <div className="relative flex items-center gap-3">
          <div className="flex-shrink-0">
            <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-xs leading-none opacity-90 font-medium">Tersedia di</div>
            <div className="text-lg font-bold leading-tight">Google Play</div>
          </div>
          <Download className="ml-2 h-5 w-5 opacity-75 group-hover:opacity-100 transition-opacity" />
        </div>
      </a>

      {/* App Store */}
      <a
        href="#"
        className="group relative flex items-center gap-3 rounded-2xl bg-gradient-to-r from-teal-400 to-teal-500 px-6 py-4 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
      >
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
        </div>

        <div className="relative flex items-center gap-3">
          <div className="flex-shrink-0">
            <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
              <path d="M18.71,19.5C17.88,20.5 17,21.4 15.66,21.41C14.32,21.42 13.89,20.59 12.37,20.59C10.84,20.59 10.37,21.38 9.1,21.41C7.79,21.45 6.8,20.39 5.96,19.39C4.25,17.35 2.97,13.69 4.76,11.22C5.64,9.99 6.96,9.22 8.38,9.2C9.64,9.18 10.85,10.09 11.65,10.09C12.45,10.09 13.93,8.98 15.46,9.15C16.11,9.18 17.73,9.42 18.75,10.95C18.66,11.01 16.54,12.23 16.56,14.78C16.59,17.84 19.29,18.88 19.32,18.89C19.29,18.97 18.96,19.26 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-xs leading-none opacity-90 font-medium">Download di</div>
            <div className="text-lg font-bold leading-tight">App Store</div>
          </div>
          <Download className="ml-2 h-5 w-5 opacity-75 group-hover:opacity-100 transition-opacity" />
        </div>
      </a>
    </div>
  )
}
