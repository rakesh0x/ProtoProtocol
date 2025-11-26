"use client"

import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-slate-950 font-bold text-lg leading-none">Φ</span>
          </div>
          <span className="text-white font-bold text-xl">Pika</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          <a href="#" className="text-gray-300 hover:text-white transition text-sm font-medium">
            Trade
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition text-sm font-medium">
            Vault
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition text-sm font-medium">
            Fees
          </a>
          <a href="#" className="text-white transition text-sm font-medium">
            Dashboard
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition text-sm font-medium">
            Leaderboard
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition text-sm font-medium">
            V3 App
          </a>
        </nav>

        {/* Right side actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-yellow-400 text-slate-950 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-500 transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            Connect Wallet
          </button>
          <button className="p-2 text-gray-300 hover:text-white transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31 2.37 2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:bg-slate-800 rounded-lg transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-slate-700 bg-slate-900/50 px-4 py-4 space-y-3">
          <a href="#" className="block text-gray-300 hover:text-white transition text-sm font-medium py-2">
            Trade
          </a>
          <a href="#" className="block text-gray-300 hover:text-white transition text-sm font-medium py-2">
            Vault
          </a>
          <a href="#" className="block text-gray-300 hover:text-white transition text-sm font-medium py-2">
            Fees
          </a>
          <a href="#" className="block text-white transition text-sm font-medium py-2">
            Dashboard
          </a>
          <a href="#" className="block text-gray-300 hover:text-white transition text-sm font-medium py-2">
            Leaderboard
          </a>
          <a href="#" className="block text-gray-300 hover:text-white transition text-sm font-medium py-2">
            V3 App
          </a>
          <button className="w-full bg-yellow-400 text-slate-950 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-500 transition mt-4">
            Connect Wallet
          </button>
        </nav>
      )}
    </header>
  )
}
