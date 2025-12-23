/**
 * Copyright (c) 2025 Thinkazoo LLC
 * 
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'The WorkFree Blueprint - Turn CEO',
  description: 'How to Reclaim 20+ Hours a Week Without Going Broke. The complete playbook for automating your way to freedom.',
  openGraph: {
    title: 'The WorkFree Blueprint - Turn CEO',
    description: 'How to Reclaim 20+ Hours a Week Without Going Broke. The complete playbook for automating your way to freedom.',
    url: 'https://turnceo.com/automatic-cash-machine/playbook',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The WorkFree Blueprint - Turn CEO',
    description: 'How to Reclaim 20+ Hours a Week Without Going Broke.',
  },
}

export default function PlaybookPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/automatic-cash-machine"
            className="text-gray-400 hover:text-white mb-6 inline-block text-sm"
          >
            ← Back to Automatic Cash Machine
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white neon-text-strong">
            The WorkFree Blueprint
          </h1>
          <p className="text-2xl text-gray-200 mb-4">
            How to Reclaim 20+ Hours a Week Without Going Broke
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            A practical, no-BS guide to automating the boring stuff, monetizing your skills, 
            and designing a life that doesn't revolve around someone else's calendar.
          </p>
          <p className="text-base text-cyan-400 mb-6">
            Part of the $47 Automatic Cash Machine
          </p>
          
          <div className="bg-gray-800 p-8 rounded-lg neon-card-yellow shadow-lg max-w-2xl mx-auto">
            <EmailCapture 
              placeholder="Your email"
              buttonText="Download the Free Playbook"
            />
            <p className="text-sm text-gray-400 mt-3">
              Instant PDF delivery. No spam, no BS. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg neon-card-yellow relative">
            <p className="text-xl text-gray-200 leading-relaxed">
              <strong className="text-white">Work was never sacred.</strong> It was a temporary truce between survival and technology. The machines kept evolving. The contracts didn't.
            </p>
            <p className="text-xl text-gray-200 leading-relaxed mt-4">
              This playbook exists to help you break the cycle, reclaim your hours, and design an income that doesn't require obedience.
            </p>
          </div>
        </div>
      </section>

      {/* The 5 Steps */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white neon-text-strong">
            The 5 Steps to Freedom
          </h2>

          {/* Step 1 */}
          <div className="bg-gray-800 p-8 rounded-lg neon-card-yellow shadow-sm hover:shadow-md transition-shadow mb-6">
            <div className="flex items-start">
              <div className="text-4xl font-bold text-cyan-400 mr-6">01</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-white neon-text">Audit Your Life Like a Ruthless CFO</h3>
                <p className="text-gray-300 mb-4">
                  Track a week of your time and expenses. Use one column for tasks that make money, one for everything else.
                </p>
                <p className="text-gray-300 mb-4 font-semibold">
                  Now ask: <strong className="text-white">what actually requires you?</strong> Everything else is fair game for automation, delegation, or deletion.
                </p>
                <div className="bg-gray-900 p-4 rounded-lg mt-4">
                  <p className="text-sm font-semibold text-cyan-400 mb-2">Tools:</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• <strong>Clockify</strong> - Time audit</li>
                    <li>• <strong>Notion or Google Sheets</strong> - Task classification</li>
                    <li>• <strong>Pareto breakdown</strong> - 80/20 rule, but honest this time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800 p-8 rounded-lg neon-card-yellow shadow-sm hover:shadow-md transition-shadow mb-6">
            <div className="flex items-start">
              <div className="text-4xl font-bold text-cyan-400 mr-6">02</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-white neon-text">Automate the Boring</h3>
                <p className="text-gray-300 mb-4">
                  The point isn't to build an AI zoo. It's to kill repetition.
                </p>
                <p className="text-gray-300 mb-4 font-semibold">
                  <strong className="text-white">Automate what you repeat more than twice a week.</strong>
                </p>
                <div className="bg-gray-900 p-4 rounded-lg mt-4">
                  <p className="text-sm font-semibold text-cyan-400 mb-2">Examples:</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• <strong>Email triage</strong> → Superhuman + Gmail filters</li>
                    <li>• <strong>Client onboarding</strong> → Typeform + Zapier</li>
                    <li>• <strong>Social scheduling</strong> → Notion + Make</li>
                    <li>• <strong>Invoicing</strong> → Stripe + Quickbooks automation</li>
                  </ul>
                  <p className="text-gray-300 text-sm mt-3">
                    <strong>Goal:</strong> Cut 20–30% of time drain without adding new cognitive load.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800 p-8 rounded-lg neon-card-yellow shadow-sm hover:shadow-md transition-shadow mb-6">
            <div className="flex items-start">
              <div className="text-4xl font-bold text-cyan-400 mr-6">03</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-white neon-text">Productize What Can't Be Automated</h3>
                <p className="text-gray-300 mb-4">
                  What remains are things that need your taste, insight, or personality.
                </p>
                <p className="text-gray-300 mb-4 font-semibold">
                  <strong className="text-white">That's your moat. Package it.</strong>
                </p>
                <div className="bg-gray-900 p-4 rounded-lg mt-4">
                  <p className="text-sm font-semibold text-cyan-400 mb-2">Ideas:</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Sell templates, prompts, or toolkits</li>
                    <li>• Offer "automation audit" consulting</li>
                    <li>• Build micro-products around your skills</li>
                  </ul>
                  <p className="text-gray-300 text-sm mt-3">
                    <strong>The goal:</strong> Convert labor into assets that earn while you sleep or wander around Alaska.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-800 p-8 rounded-lg neon-card-yellow shadow-sm hover:shadow-md transition-shadow mb-6">
            <div className="flex items-start">
              <div className="text-4xl font-bold text-cyan-400 mr-6">04</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-white neon-text">Replace Income Streams Intelligently</h3>
                <p className="text-gray-300 mb-4">
                  Replace hours-for-dollars with systems-for-dollars.
                </p>
                <div className="bg-gray-900 p-4 rounded-lg mt-4">
                  <p className="text-sm font-semibold text-cyan-400 mb-2">Examples:</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Paid newsletter / digital community</li>
                    <li>• Affiliate content around verified tools</li>
                    <li>• Niche services built on automation frameworks</li>
                  </ul>
                  <p className="text-gray-300 text-sm mt-3">
                    <strong>Diversify early;</strong> small consistent revenue stacks beat one big paycheck.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-gray-800 p-8 rounded-lg neon-card-yellow shadow-sm hover:shadow-md transition-shadow mb-6">
            <div className="flex items-start">
              <div className="text-4xl font-bold text-cyan-400 mr-6">05</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-white neon-text">Protect Your Freedom</h3>
                <p className="text-gray-300 mb-4">
                  Freedom leaks through obligations.
                </p>
                <div className="bg-gray-900 p-4 rounded-lg mt-4">
                  <p className="text-sm font-semibold text-cyan-400 mb-2">Protect It:</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Keep financial overhead low</li>
                    <li>• Keep data portable (no single-vendor trap)</li>
                    <li>• Maintain a "six-month freedom fund"</li>
                    <li>• Keep building skills that scale, not tasks that expire</li>
                  </ul>
                  <p className="text-gray-300 text-sm mt-3 font-semibold">
                    <strong className="text-white">End result:</strong> Time sovereignty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outro */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900 p-8 rounded-lg neon-card-yellow">
            <p className="text-2xl text-gray-200 leading-relaxed mb-4">
              Work was supposed to serve life. Somewhere along the way, it swapped places.
            </p>
            <p className="text-2xl text-white font-bold">
              Time to reverse it.
            </p>
            <p className="text-xl text-cyan-400 mt-6 font-semibold">
              Welcome to Turn CEO.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Automation for humans, not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white neon-text-strong">
            Why This Playbook Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-xl mb-2 text-white neon-text">Actionable</h3>
              <p className="text-gray-300">
                No theory. Every step includes templates, tools, and real examples.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-xl mb-2 text-white neon-text">Tested</h3>
              <p className="text-gray-300">
                Used by knowledge workers, freelancers, and side-hustlers to reclaim 10-20 hours/week.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🆓</div>
              <h3 className="font-bold text-xl mb-2 text-white neon-text">Free</h3>
              <p className="text-gray-300">
                Seriously. No upsells, no paywalls. This is the full playbook.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white neon-text-strong">
            Ready to Get Your Time Back?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Download the free WorkFree Blueprint and start automating today.
          </p>
          
          <div className="bg-gray-900 p-8 rounded-lg neon-card-yellow">
            <EmailCapture 
              placeholder="Your email"
              buttonText="Send Me the Playbook"
            />
            <p className="text-sm text-gray-500 mt-3">
              Join 1,000+ people who've already automated their way to freedom.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
