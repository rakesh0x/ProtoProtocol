"use client"

export function DashboardPage() {
  return (
    <div className="w-full">
      {/* Green notification banner */}
      <div className="bg-emerald-500 text-slate-950 px-4 py-3 flex items-center justify-between">
        <span className="text-sm font-medium">
          Welcome to new Pika v4 (<span className="underline cursor-pointer">read more</span>). If you don't find your
          positions, pls check the v4 legacy app <span className="underline cursor-pointer">here</span>.
        </span>
        <button className="text-slate-950 hover:opacity-70">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dashboard Header */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Card - 24h Stats */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-400 mb-2">24h Volume</p>
                <p className="text-2xl font-bold text-white">$1,344</p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">24h Fees</p>
                <p className="text-2xl font-bold text-white">$0</p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">24h Trades</p>
                <p className="text-2xl font-bold text-white">3</p>
              </div>
            </div>
          </div>

          {/* Middle Card - Total Stats */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-400 mb-2">Total Volume</p>
                <p className="text-2xl font-bold text-white">$2,140,653,764</p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">Total Fees</p>
                <p className="text-2xl font-bold text-white">$2,120,359</p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">Total Trades</p>
                <p className="text-2xl font-bold text-white">849,670</p>
              </div>
            </div>
          </div>

          {/* Right Card - Vault Stats */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-400 mb-2">Vault Balance</p>
                <p className="text-2xl font-bold text-white">$93,356</p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">Vault Rewards APR</p>
                <p className="text-2xl font-bold text-white">0%</p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">Open Interest</p>
                <p className="text-2xl font-bold text-white">7,380</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
