'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function WelcomeContent() {
  const searchParams = useSearchParams()
  const tier = searchParams.get('tier')

  const tierNames: { [key: string]: string } = {
    collective: 'The Collective',
    accelerator: 'WorkFree Accelerator',
    patron: 'Founding Patron',
  }

  const tierName = tier ? tierNames[tier] || 'WorkFreeWork' : 'WorkFreeWork'

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gray-800 p-12 rounded-lg border border-gray-700">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Welcome to {tierName}! 🎉
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            You just took the first step toward real work freedom.
          </p>

          <div className="bg-black p-6 rounded-lg border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">What Happens Next?</h2>
            <div className="text-left space-y-3 text-gray-300">
              <p>✓ <strong>Check your email</strong> - You'll receive login credentials within 5 minutes</p>
              <p>✓ <strong>Join Discord</strong> - Link in welcome email</p>
              <p>✓ <strong>Download resources</strong> - Access your member library</p>
              {tier === 'collective' && (
                <p>✓ <strong>Attend co-working</strong> - Next session details in Discord</p>
              )}
              {tier === 'accelerator' && (
                <p>✓ <strong>Schedule kickoff call</strong> - We'll reach out within 24 hours</p>
              )}
              {tier === 'patron' && (
                <p>✓ <strong>Book your 1-on-1</strong> - Calendar link in welcome email</p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="/community"
              className="block"
              data-btn="glass"
            >
              Visit Community Page
            </Link>
            
            <Link
              href="/essays"
              className="block"
              data-btn="glass"
            >
              Read Latest Essays
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Questions? Email us at{' '}
            <a href="mailto:adam@workfreework.com" className="text-white hover:underline">
              adam@workfreework.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function WelcomePage() {
  return (
    <Suspense fallback={<div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">Loading...</div>}>
      <WelcomeContent />
    </Suspense>
  )
}

