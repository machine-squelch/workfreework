import { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'TurnCEO - Build Companies in Hours, Not Fiscal Quarters',
  description: 'The Startup Factory OS. Three-layer automation that turns ideas into revenue machines. No pitch decks. No gatekeepers. No permission.',
  openGraph: {
    title: 'TurnCEO - Build Companies in Hours, Not Fiscal Quarters',
    description: 'The Startup Factory OS. Three-layer automation that turns ideas into revenue machines.',
    url: 'https://turnceo.com',
    images: ['/turnceo-og.png'],
  },
}

export default function TurnCEOPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">

            {/* Rebellion Banner */}
            <div className="mb-8">
              <div className="inline-block bg-red-600/20 border border-red-500/30 rounded-full px-6 py-2 mb-6">
                <span className="text-red-400 font-bold text-sm tracking-wide">NO PITCH DECKS • NO GATEKEEPERS • NO PERMISSION</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
              Build a Company<br />
              <span className="bg-gradient-to-r from-red-500 to-green-400 bg-clip-text text-transparent">
                in Hours
              </span><br />
              Not Fiscal Quarters
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The Startup Factory OS. Three-layer automation that turns ideas into revenue machines.
              Your business. Your agents. Your infrastructure.
            </p>

            {/* OS Framework Teaser */}
            <div className="mb-12">
              <div className="inline-flex items-center space-x-8 text-sm font-bold tracking-wider">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-red-400">EXECUTION LAYER</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-green-400">AUTOMATION LAYER</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-400">INFRASTRUCTURE LAYER</span>
                </div>
              </div>
            </div>

            {/* Email Capture */}
            <div className="max-w-md mx-auto mb-8">
              <EmailCapture
                placeholder="Enter startup idea or email"
                buttonText="Claim Build Slot"
                className="bg-gray-900 border-2 border-gray-700 hover:border-red-500 transition-all"
              />
              <p className="text-xs text-gray-400 mt-2">
                Join the rebellion. Instant access to the OS.
              </p>
            </div>

            {/* Social Proof */}
            <div className="mb-12">
              <p className="text-gray-400 text-sm mb-4">Built for creators, founders, solopreneurs, and rebels tired of trading time for money.</p>
              <div className="flex justify-center items-center space-x-6 text-xs text-gray-500">
                <span>47 companies built this month</span>
                <span>•</span>
                <span>$2.3M revenue generated</span>
                <span>•</span>
                <span>12,000+ hours saved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Nuclear Weapon Section */}
      <section className="py-20 px-4 bg-gray-900 border-t-4 border-red-500 border-b-4 border-red-500">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Own Your AI Workforce
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Thumb-drive agent swarms that run anywhere. Cloud-based automation or portable and offline.
            Your business. Your agents. Your infrastructure.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black p-8 rounded-lg border-2 border-green-500/30 hover:border-green-500 transition-all">
              <div className="text-6xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Cloud Swarm</h3>
              <p className="text-gray-300">24/7 automation in the cloud. Scale infinitely, pay per use.</p>
            </div>
            <div className="bg-black p-8 rounded-lg border-2 border-blue-500/30 hover:border-blue-500 transition-all">
              <div className="text-6xl mb-4">💾</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Portable Agents</h3>
              <p className="text-gray-300">USB-drive deployable. Offline-capable. Your data never leaves your control.</p>
            </div>
            <div className="bg-black p-8 rounded-lg border-2 border-red-500/30 hover:border-red-500 transition-all">
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">Factory Mode</h3>
              <p className="text-gray-300">Mass-produce revenue streams. One command, infinite outputs.</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="#pricing"
              className="inline-block bg-gradient-to-r from-red-600 to-green-500 text-black font-black text-xl px-12 py-4 rounded-lg hover:from-red-500 hover:to-green-400 transition-all transform hover:scale-105"
            >
              Enter the OS →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-black border-t-4 border-gray-800 border-b-4 border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Choose Your Rebellion Level
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start small, scale infinitely. No long-term contracts. No bullshit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Core OS */}
            <div className="bg-gray-900 p-8 rounded-lg border-2 border-gray-700 hover:border-green-500 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Core OS</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-black text-green-400">$47</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400 text-sm">The foundation. Build your first automated business.</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>3-layer OS access</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Basic agent templates</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Cloud deployment</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Community access</span>
                </li>
              </ul>

              <Link
                href="/api/checkout?tier=core"
                className="w-full text-center block bg-green-600 text-black font-bold py-3 rounded hover:bg-green-500 transition-all"
              >
                Start Building - $47/mo
              </Link>
            </div>

            {/* Pro Factory */}
            <div className="bg-gray-900 p-8 rounded-lg border-2 border-red-500 shadow-2xl transform md:scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                MOST VIOLENT
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-red-400">Pro Factory</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-black text-red-400">$997</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400 text-sm">Unlimited automation. Mass production mode.</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-3">✓</span>
                  <span>Everything in Core</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-3">✓</span>
                  <span>Unlimited agent swarms</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-3">✓</span>
                  <span>Portable/offline deployment</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-3">✓</span>
                  <span>Custom agent development</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-3">✓</span>
                  <span>Direct founder access</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-3">✓</span>
                  <span>Revenue share partnerships</span>
                </li>
              </ul>

              <Link
                href="/api/checkout?tier=pro"
                className="w-full text-center block bg-red-600 text-white font-bold py-3 rounded hover:bg-red-500 transition-all"
              >
                Unleash Chaos - $997/mo
              </Link>
            </div>

            {/* Scale Engine Membership */}
            <div className="bg-gray-900 p-8 rounded-lg border-2 border-blue-500/30 hover:border-blue-500 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-blue-400">Scale Engine</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-3xl font-black text-blue-400">Membership</span>
                </div>
                <p className="text-gray-400 text-sm">Infinite upgrade path. Ongoing automations, new AI agents, business upgrades.</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Quarterly OS upgrades</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>New agent drops</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Business model evolutions</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Private mastermind</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Revenue acceleration calls</span>
                </li>
              </ul>

              <Link
                href="#waitlist"
                className="w-full text-center block bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-500 transition-all"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Truth Section */}
      <section className="py-20 px-4 bg-gray-900 border-t-4 border-green-500 border-b-4 border-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            You Aren't Here to Take Notes
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            You're here to build an asset that prints revenue.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-red-400">Before TurnCEO:</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Wake up at 5 AM for "productivity"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Trade 80 hours/week for mediocre pay</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Constantly chasing the next "opportunity"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Die with your best work still inside you</span>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-green-400">After TurnCEO:</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Business builds while you sleep</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Revenue compounds automatically</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Freedom to create what matters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Life becomes the ultimate product</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-black p-8 rounded-lg border-2 border-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Enter the OS → Claim your build slot. Autonomy starts now.</h3>
            <EmailCapture
              buttonText="Enter the OS"
              className="max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            TurnCEO - The Startup Factory OS
          </p>
          <p className="text-sm text-gray-500">
            Built for rebels who build.
          </p>
        </div>
      </footer>
    </div>
  )
}