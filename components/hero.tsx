export function Hero() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
          Decentralized Perpetuals
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10">
          Trade crypto and forex with up to 200x leverage
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition shadow-lg shadow-yellow-500/20">
            Start Trading
          </button>
          <button className="w-full sm:w-auto border-2 border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition">
            Add Liquidity
          </button>
        </div>
      </div>
    </section>
  )
}
