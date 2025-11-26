export function Dashboard() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-xl sm:rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-slate-950/60 backdrop-blur-md p-1 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 via-transparent to-transparent pointer-events-none rounded-2xl" />

          {/* Dashboard content */}
          <div className="relative z-10 rounded-xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
            {/* Header with tabs */}
            <div className="border-b border-slate-700/50 px-3 sm:px-6 py-3 sm:py-4 flex items-center gap-4 sm:gap-8 bg-gradient-to-r from-slate-800/50 to-transparent overflow-x-auto">
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="w-5 h-5 bg-yellow-400 rounded-full" />
                <span className="text-white text-xs sm:text-sm font-semibold">PIKA</span>
              </div>
              <div className="hidden sm:flex gap-3 sm:gap-6 ml-4 sm:ml-8">
                {["Trade", "Vault", "Stake", "Dashboard", "Fees"].map((tab) => (
                  <button key={tab} className="text-xs text-gray-400 hover:text-white transition whitespace-nowrap">
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Main dashboard grid - responsive */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 p-3 sm:p-6">
              {/* Left sidebar - Hidden on mobile */}
              <div className="hidden md:block md:col-span-2 border-r border-slate-700/50">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-3 py-2 bg-slate-700/30 border border-slate-600/50 rounded text-xs text-gray-300 placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {[
                    { symbol: "ETH-USD", price: "$3952.7", change: "+2.1%" },
                    { symbol: "BTC-USD", price: "28604", change: "-0.5%" },
                    { symbol: "OP-USD", price: "15829", change: "+1.2%" },
                    { symbol: "SOL-USD", price: "24.874", change: "-1.8%" },
                    { symbol: "CSV-USD", price: "0.9888", change: "+0.3%" },
                    { symbol: "EUR-USD", price: "12023", change: "+0.7%" },
                    { symbol: "DOGE-USD", price: "0.074882", change: "-0.2%" },
                    { symbol: "ARB-USD", price: "1348", change: "+1.5%" },
                    { symbol: "AAVE-USD", price: "96.447", change: "-0.4%" },
                    { symbol: "PEPE-USD", price: "0.0000142", change: "+2.1%" },
                  ].map((asset, i) => (
                    <div key={i} className="px-2 py-1 text-xs hover:bg-slate-700/20 cursor-pointer rounded">
                      <div className="text-white font-semibold flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full" /> {asset.symbol}
                      </div>
                      <div className="text-gray-500 text-xs">{asset.price}</div>
                      <div className={asset.change.includes("+") ? "text-green-400 text-xs" : "text-red-400 text-xs"}>
                        {asset.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center - Chart area - responsive height */}
              <div className="col-span-1 md:col-span-7 border-b md:border-b-0 md:border-r border-slate-700/50">
                <div className="h-48 sm:h-64 md:h-80 flex flex-col">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3 sm:mb-4">
                    <div>
                      <div className="text-white font-semibold text-sm">ETH-USD</div>
                      <div className="text-xl sm:text-2xl font-bold text-white">$3952.7</div>
                    </div>
                    <div className="flex gap-1 sm:gap-2">
                      {["1D", "1W", "1M", "1Y"].map((period) => (
                        <button
                          key={period}
                          className="px-2 py-1 text-xs bg-slate-700/30 hover:bg-slate-700/50 text-gray-400 rounded"
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Candlestick chart visualization */}
                  <div className="flex-1 flex items-end justify-between gap-0.5 sm:gap-1 bg-gradient-to-t from-slate-800/30 to-transparent p-2 sm:p-4 rounded">
                    {Array.from({ length: 60 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-red-500/60 to-red-500/30 hover:from-red-500/80 hover:to-red-500/50 transition rounded-t min-w-0.5"
                        style={{ height: `${30 + Math.sin(i * 0.5) * 40 + Math.random() * 30}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right sidebar - Order form - stacks on mobile/tablet */}
              <div className="col-span-1 md:col-span-3">
                <div className="space-y-3 sm:space-y-4">
                  {/* Account info */}
                  <div className="bg-slate-700/20 rounded p-2 sm:p-3 text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Market</span>
                      <span className="text-white">UNO</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Step</span>
                      <span className="text-white">1</span>
                    </div>
                  </div>

                  {/* Order buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold text-xs sm:text-sm transition">
                      LONG
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold text-xs sm:text-sm transition">
                      SHORT
                    </button>
                  </div>

                  {/* Trade details */}
                  <div className="bg-slate-700/20 rounded p-2 sm:p-3 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Entry</span>
                      <span className="text-white">$3952.7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Leverage</span>
                      <span className="text-yellow-400">50x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Take Profit</span>
                      <span className="text-white">-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Stop Loss</span>
                      <span className="text-white">-</span>
                    </div>
                  </div>

                  {/* Positions table */}
                  <div className="bg-slate-700/20 rounded p-2 sm:p-3 text-xs">
                    <div className="font-semibold text-white mb-2">Positions</div>
                    <div className="space-y-1 text-gray-400">
                      <div className="flex justify-between">
                        <span>Symbol</span>
                        <span>Margin</span>
                      </div>
                      <div className="border-t border-slate-600/50 pt-1">
                        <div className="flex justify-between">
                          <span>ETH-USD</span>
                          <span className="text-white">$1823</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit button */}
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 sm:py-3 rounded font-semibold transition text-sm">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
