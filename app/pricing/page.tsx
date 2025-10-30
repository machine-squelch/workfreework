import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing - WorkFreeWork',
  description: 'Choose your path to work freedom. From free resources to intensive transformation programs.',
  openGraph: {
    title: 'Pricing - WorkFreeWork',
    description: 'Choose your path to work freedom. From free resources to intensive transformation programs.',
    url: 'https://workfreework.com/pricing',
    images: ['/wfw-logo-rwb.png'],
  },
}

export default function PricingPage() {
  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Choose Your Path to Freedom
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Unsubscribe from work. Subscribe to being.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Three ways to escape the corporate leash and design a life with real autonomy.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Free Agent */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Free Agent</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold text-white">$0</span>
                  <span className="text-gray-400 ml-2">/forever</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Start your journey to work freedom
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Weekly newsletter</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Public essays & analysis</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Free 5-step playbook</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Tool recommendations</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <span className="mr-2">✗</span>
                  <span>Community access</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <span className="mr-2">✗</span>
                  <span>Exclusive resources</span>
                </li>
              </ul>

              <Link
                href="/newsletter"
                className="w-full text-center block"
                data-btn="glass"
              >
                Get Started Free
              </Link>
            </div>

            {/* The Collective - POPULAR */}
            <div className="bg-gray-900 p-8 rounded-lg border-2 border-white shadow-2xl transform lg:scale-105 flex flex-col relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">The Collective</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold text-white">$15</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Unsubscribe from work. Subscribe to freedom.
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Private Discord access</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Weekly automation playbooks</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Exclusive templates & scripts</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Weekly co-working sessions</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Member skill shares</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Voice memos & dispatches</span>
                </li>
              </ul>

              <Link
                href="/api/checkout?tier=collective"
                className="w-full text-center block"
                data-btn="glass"
              >
                Join The Collective
              </Link>
              
              <p className="text-xs text-gray-500 text-center mt-3">
                First 100 members get lifetime 20% discount
              </p>
            </div>

            {/* WorkFree Accelerator */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Accelerator</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold text-white">$200</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Reprogram your OS for a post-labor world
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Everything in Collective</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>6-week transformation cohort</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Personal automation audit</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Weekly group coaching</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Custom income playbooks</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Accountability pod (4-6 people)</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Direct Slack access to instructor</span>
                </li>
              </ul>

              <Link
                href="/api/checkout?tier=accelerator"
                className="w-full text-center block"
                data-btn="glass"
              >
                Apply for Accelerator
              </Link>
              
              <p className="text-xs text-gray-500 text-center mt-3">
                Limited to 20 members per cohort
              </p>
            </div>

            {/* Founding Patron */}
            <div className="bg-black p-8 rounded-lg border border-gray-700 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Founding Patron</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold text-white">$100</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400 text-sm">
                  You're funding evolution, not buying content
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Everything in Accelerator</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Monthly 1-on-1 strategy call</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Listed as Founding Patron on site</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Early access to all content</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Private Telegram channel</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Input on content roadmap</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-white mr-2">✓</span>
                  <span>Founding member status (forever)</span>
                </li>
              </ul>

              <Link
                href="/api/checkout?tier=patron"
                className="w-full text-center block"
                data-btn="glass"
              >
                Become a Patron
              </Link>
              
              <p className="text-xs text-gray-500 text-center mt-3">
                Limited to 10 founding members
              </p>
            </div>

          </div>

          {/* Comparison Note */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-gray-400 text-lg">
              Not sure which tier? <Link href="/contact" className="text-white hover:underline">Email us</Link> and we'll help you decide.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-xl text-white mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-300">
                Yes. Cancel anytime, no questions asked. No dark patterns, no retention tricks.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-xl text-white mb-2">
                What if I'm not satisfied?
              </h3>
              <p className="text-gray-300">
                First month money-back guarantee. If The Collective isn't for you, we'll refund you.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-xl text-white mb-2">
                When does the Accelerator cohort start?
              </h3>
              <p className="text-gray-300">
                New cohorts launch quarterly (March, June, September, December). 
                Join waitlist and we'll notify you 2 weeks before launch.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-xl text-white mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-300">
                All major credit cards, debit cards, and digital wallets via Stripe. 
                Secure, encrypted, and we never see your card details.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-xl text-white mb-2">
                Is there a student/hardship discount?
              </h3>
              <p className="text-gray-300">
                Yes. We believe in accessibility. Email us at adam@workfreework.com 
                with your situation and we'll work something out.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-xl text-white mb-2">
                What if I'm already working on automation?
              </h3>
              <p className="text-gray-300">
                Perfect. The Collective is peer-driven. Share your setups, get feedback, 
                and help others. You'll level up faster together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Escape the Hamster Wheel?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join 1,000+ people designing lives with more autonomy and less busywork.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              data-btn="glass"
            >
              Start with Free Newsletter
            </Link>
            <Link
              href="/api/checkout?tier=collective"
              data-btn="glass"
            >
              Join The Collective - $15/mo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

