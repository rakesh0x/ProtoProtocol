export function Dashboard() {
  const candleData = [
    { o: 2820, h: 2835, l: 2810, c: 2828, color: "green" },
    { o: 2828, h: 2845, l: 2820, c: 2840, color: "green" },
    { o: 2840, h: 2855, l: 2835, c: 2850, color: "green" },
    { o: 2850, h: 2860, l: 2840, c: 2852, color: "green" },
    { o: 2852, h: 2858, l: 2835, c: 2838, color: "red" },
    { o: 2838, h: 2848, l: 2825, c: 2832, color: "red" },
    { o: 2832, h: 2845, l: 2820, c: 2842, color: "green" },
    { o: 2842, h: 2848, l: 2830, c: 2835, color: "red" },
    { o: 2835, h: 2852, l: 2828, c: 2848, color: "green" },
    { o: 2848, h: 2865, l: 2840, c: 2860, color: "green" },
    { o: 2860, h: 2875, l: 2850, c: 2870, color: "green" },
    { o: 2870, h: 2885, l: 2862, c: 2878, color: "green" },
    { o: 2878, h: 2890, l: 2868, c: 2882, color: "green" },
    { o: 2882, h: 2892, l: 2872, c: 2885, color: "green" },
    { o: 2885, h: 2898, l: 2875, c: 2895, color: "green" },
    { o: 2895, h: 2905, l: 2885, c: 2900, color: "green" },
    { o: 2900, h: 2910, l: 2890, c: 2908, color: "green" },
    { o: 2908, h: 2920, l: 2898, c: 2915, color: "green" },
    { o: 2915, h: 2925, l: 2905, c: 2920, color: "green" },
    { o: 2920, h: 2935, l: 2910, c: 2925, color: "green" },
    // Price correction
    { o: 2925, h: 2928, l: 2890, c: 2895, color: "red" },
    { o: 2895, h: 2910, l: 2880, c: 2905, color: "green" },
    { o: 2905, h: 2918, l: 2895, c: 2912, color: "green" },
    { o: 2912, h: 2925, l: 2902, c: 2920, color: "green" },
    { o: 2920, h: 2930, l: 2910, c: 2925, color: "green" },
    // Major decline
    { o: 2925, h: 2928, l: 2880, c: 2885, color: "red" },
    { o: 2885, h: 2892, l: 2820, c: 2830, color: "red" },
    { o: 2830, h: 2850, l: 2805, c: 2825, color: "red" },
    { o: 2825, h: 2845, l: 2800, c: 2815, color: "red" },
    { o: 2815, h: 2835, l: 2790, c: 2810, color: "red" },
    { o: 2810, h: 2828, l: 2795, c: 2820, color: "green" },
    { o: 2820, h: 2842, l: 2815, c: 2835, color: "green" },
    { o: 2835, h: 2855, l: 2830, c: 2850, color: "green" },
    { o: 2850, h: 2862, l: 2840, c: 2858, color: "green" },
    { o: 2858, h: 2870, l: 2850, c: 2865, color: "green" },
    { o: 2865, h: 2875, l: 2855, c: 2870, color: "green" },
    { o: 2870, h: 2882, l: 2862, c: 2875, color: "green" },
    { o: 2875, h: 2888, l: 2868, c: 2880, color: "green" },
    { o: 2880, h: 2890, l: 2872, c: 2885, color: "green" },
    { o: 2885, h: 2895, l: 2880, c: 2888, color: "green" },
    // Slight pullback
    { o: 2888, h: 2892, l: 2875, c: 2880, color: "red" },
    { o: 2880, h: 2888, l: 2870, c: 2878, color: "red" },
    { o: 2878, h: 2885, l: 2872, c: 2882, color: "green" },
    { o: 2882, h: 2892, l: 2878, c: 2888, color: "green" },
    { o: 2888, h: 2898, l: 2885, c: 2895, color: "green" },
    { o: 2895, h: 2905, l: 2890, c: 2900, color: "green" },
    { o: 2900, h: 2910, l: 2895, c: 2905, color: "green" },
    { o: 2905, h: 2915, l: 2900, c: 2910, color: "green" },
    { o: 2910, h: 2920, l: 2905, c: 2915, color: "green" },
    { o: 2915, h: 2925, l: 2910, c: 2920, color: "green" },
    { o: 2920, h: 2930, l: 2915, c: 2925, color: "green" },
    { o: 2925, h: 2935, l: 2920, c: 2930, color: "green" },
    { o: 2930, h: 2940, l: 2925, c: 2935, color: "green" },
    { o: 2935, h: 2945, l: 2930, c: 2940, color: "green" },
    { o: 2940, h: 2950, l: 2935, c: 2945, color: "green" },
    { o: 2945, h: 2952, l: 2940, c: 2948, color: "green" },
    { o: 2948, h: 2958, l: 2945, c: 2952, color: "green" },
  ]

  const maxPrice = Math.max(...candleData.map((d) => d.h))
  const minPrice = Math.min(...candleData.map((d) => d.l))
  const priceRange = maxPrice - minPrice

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
                    { symbol: "ETH-USD", price: "$2931.58", change: "+0.3%" },
                    { symbol: "BTC-USD", price: "29604", change: "+0.5%" },
                    { symbol: "OP-USD", price: "15829", change: "+1.28%" },
                    { symbol: "SOL-USD", price: "24.874", change: "-1.36%" },
                    { symbol: "CRV-USD", price: "0.5859", change: "+0.88%" },
                    { symbol: "EUR-USD", price: "1.0923", change: "-0.32%" },
                    { symbol: "DOGE-USD", price: "0.074912", change: "-0.89%" },
                    { symbol: "MKR-USD", price: "1289.2", change: "+2.1%" },
                    { symbol: "APE-USD", price: "2.097", change: "-0.4%" },
                    { symbol: "PEPE-USD", price: "0.00000142", change: "+1.1%" },
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
                      <div className="text-xl sm:text-2xl font-bold text-white">$2931.58</div>
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
                    {candleData.map((candle, i) => {
                      const candleHeight = ((candle.h - candle.l) / priceRange) * 100
                      const bodyHeight = (Math.abs(candle.c - candle.o) / priceRange) * 100 || 1
                      const wickOffset = ((candle.h - Math.max(candle.o, candle.c)) / priceRange) * 100
                      const isGreen = candle.color === "green"

                      return (
                        <div key={i} className="flex-1 flex flex-col items-center justify-end gap-0 group relative">
                          {/* Wick line */}
                          <div
                            className={`w-0.5 ${isGreen ? "bg-green-500/60" : "bg-red-500/60"}`}
                            style={{ height: `${Math.max(candleHeight, 2)}%` }}
                          />
                          {/* Body */}
                          <div
                            className={`w-full rounded-sm ${
                              isGreen
                                ? "bg-gradient-to-t from-green-500/80 to-green-500/40 hover:from-green-500 hover:to-green-500/60"
                                : "bg-gradient-to-t from-red-500/80 to-red-500/40 hover:from-red-500 hover:to-red-500/60"
                            } transition-all`}
                            style={{ height: `${Math.max(bodyHeight, 3)}%`, minHeight: "2px" }}
                          />
                          {/* Tooltip on hover */}
                          <div className="absolute bottom-full mb-2 bg-slate-800 border border-slate-600 rounded px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-20 pointer-events-none">
                            O: ${candle.o} H: ${candle.h} L: ${candle.l} C: ${candle.c}
                          </div>
                        </div>
                      )
                    })}
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
                      <span className="text-white">0x1Ab...1C5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Limit</span>
                      <span className="text-white">$2931.58</span>
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
                    <div>
                      <div className="text-gray-400 mb-1">Size</div>
                      <div className="text-white font-semibold">10000 USDC</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="bg-slate-600/50 hover:bg-slate-600 py-1 rounded text-xs">1.6197</button>
                      <button className="bg-slate-600/50 hover:bg-slate-600 py-1 rounded text-xs">3000</button>
                    </div>
                    <div className="flex gap-2">
                      {["25%", "50%", "75%", "100%"].map((percent) => (
                        <button
                          key={percent}
                          className="flex-1 bg-slate-600/30 hover:bg-slate-600/50 py-1 rounded text-xs transition"
                        >
                          {percent}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Margin & Leverage */}
                  <div className="bg-slate-700/20 rounded p-2 sm:p-3 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Margin</span>
                      <span className="text-white">30</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Leverage</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1 bg-slate-600 rounded-full relative">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                        <span className="text-white">100x</span>
                      </div>
                    </div>
                  </div>

                  {/* Take Profit & Stop Loss */}
                  <div className="bg-slate-700/20 rounded p-2 sm:p-3 space-y-2 text-xs">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-3 h-3" />
                      <span className="text-gray-400">Take Profit</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-3 h-3" />
                      <span className="text-gray-400">Stop Loss</span>
                    </label>
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
