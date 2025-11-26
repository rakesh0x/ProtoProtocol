export function Partners() {
  const partners = [
    { name: "Optimism", logo: "OPTIMISM" },
    { name: "Chainlink", logo: "⛓️" },
    { name: "Pyth", logo: "Ⓟ" },
    { name: "Aave", logo: "Ⓐ" },
    { name: "Li.Fi", logo: "Li.Fi" },
    { name: "Lido", logo: "Ⓛ" },
    { name: "TradingView", logo: "📊" },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 md:mb-16 text-center">
          Partners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {partners.slice(0, 6).map((partner, idx) => (
            <div
              key={idx}
              className="border border-slate-700/50 bg-gradient-to-br from-slate-800/20 to-slate-900/40 rounded-lg sm:rounded-xl p-6 sm:p-12 flex items-center justify-center hover:border-yellow-400/40 transition-all"
            >
              <span className="text-gray-300 font-semibold text-base sm:text-lg">{partner.logo}</span>
            </div>
          ))}
          {/* Last partner - centered on all screens */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="border border-slate-700/50 bg-gradient-to-br from-slate-800/20 to-slate-900/40 rounded-lg sm:rounded-xl p-6 sm:p-12 flex items-center justify-center hover:border-yellow-400/40 transition-all">
                <span className="text-gray-300 font-semibold text-base sm:text-lg">{partners[6].logo}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
