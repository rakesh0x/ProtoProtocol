export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-4 md:gap-0">
          <div className="flex items-center gap-2 order-1 md:order-1">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-slate-950 rounded-full flex items-center justify-center text-yellow-400 font-bold text-xs">
                P
              </div>
            </div>
            <span className="text-white font-bold text-sm sm:text-base">Pika Protocol</span>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-right">
            © 2025 Pika Protocol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
