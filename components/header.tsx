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
            Docs
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition text-sm font-medium">
            Twitter
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition text-sm font-medium">
            Discord
          </a>
        </nav>

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
            Docs
          </a>
          <a href="#" className="block text-gray-300 hover:text-white transition text-sm font-medium py-2">
            Twitter
          </a>
          <a href="#" className="block text-gray-300 hover:text-white transition text-sm font-medium py-2">
            Discord
          </a>
        </nav>
      )}
    </header>
  )
}
