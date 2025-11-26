export function Features() {
  const features = [
    {
      title: "Low Fees",
      description: "Built on Ethereum Layer 2",
      icon: (
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="1" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </div>
      ),
    },
    {
      title: "User Friendly",
      description: "Trade directly from wallet",
      icon: (
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
          <span className="text-lg font-bold text-black">UI</span>
        </div>
      ),
    },
    {
      title: "High Leverage",
      description: "Up to 200x Leverage",
      icon: (
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 3H11v8h2V3zm0 10h-2v8h2v-8zm8-5h-1V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-4-2h-4v2h4V6zm4 14H7v-8h14v8z" />
          </svg>
        </div>
      ),
    },
    {
      title: "Deep Liquidity",
      description: "Trade with low slippage",
      icon: (
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
      ),
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="border border-yellow-400/40 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-yellow-900/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-yellow-400/70 transition-all hover:shadow-lg hover:shadow-yellow-400/10"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
