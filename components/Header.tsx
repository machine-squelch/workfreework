'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 border-b border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Glitch Text */}
          <Link href="/" className="glitch-text-link">
            <span className="glitch-text text-2xl md:text-3xl font-bold tracking-tight" data-text="W0RKFREEW0RK">
              W0RKFREEW0RK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/essays" className="text-gray-300 hover:text-white transition-colors">
              Essays
            </Link>
            <Link href="/playbook" className="text-gray-300 hover:text-white transition-colors">
              Playbook
            </Link>
            <Link href="/tools" className="text-gray-300 hover:text-white transition-colors">
              Tools
            </Link>
            <Link href="/newsletter" className="text-gray-300 hover:text-white transition-colors">
              Newsletter
            </Link>
            <Link href="/community" className="text-gray-300 hover:text-white transition-colors">
              Community
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link 
              href="/playbook" 
              className="bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-wfw-gray-dark hover:text-white transition-all btn-glitch"
            >
              Get Playbook
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="/about" className="block py-2 text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/essays" className="block py-2 text-gray-300 hover:text-white">
              Essays
            </Link>
            <Link href="/playbook" className="block py-2 text-gray-300 hover:text-white">
              Playbook
            </Link>
            <Link href="/tools" className="block py-2 text-gray-300 hover:text-white">
              Tools
            </Link>
            <Link href="/newsletter" className="block py-2 text-gray-300 hover:text-white">
              Newsletter
            </Link>
            <Link href="/community" className="block py-2 text-gray-300 hover:text-white">
              Community
            </Link>
            <Link href="/pricing" className="block py-2 text-gray-300 hover:text-white">
              Pricing
            </Link>
            <Link 
              href="/playbook" 
              className="inline-block mt-2 bg-black text-white px-4 py-2 rounded-md font-semibold"
            >
              Get Playbook
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

