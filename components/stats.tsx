export function Stats() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-b border-slate-700/50 py-8 md:py-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">
              300,000+
            </div>
            <div className="text-sm sm:text-base text-gray-400 font-medium">Total Users</div>
          </div>
          <div className="text-center border-t md:border-t-0 md:border-l md:border-r border-slate-700/50 pt-8 md:pt-0 md:px-8">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">
              700,000+
            </div>
            <div className="text-sm sm:text-base text-gray-400 font-medium">Total Trades</div>
          </div>
          <div className="text-center border-t md:border-t-0 border-slate-700/50 pt-8 md:pt-0">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">$2B+</div>
            <div className="text-sm sm:text-base text-gray-400 font-medium">Total Volume</div>
          </div>
        </div>
      </div>
    </section>
  )
}
