/**
 * Copyright (c) 2025 Thinkazoo LLC
 * 
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Community - Turn CEO Collective',
  description: 'Join the Turn CEO Collective: a digital co-op for builders, makers, and post-work escape artists. Share automations, collaborate, and help each other thrive.',
  openGraph: {
    title: 'Community - Turn CEO Collective',
    description: 'Join the Turn CEO Collective: a digital co-op for builders, makers, and post-work escape artists.',
    url: 'https://turnceo.com/automatic-cash-machine/community',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community - Turn CEO Collective',
    description: 'Join the Turn CEO Collective: a digital co-op for builders, makers, and post-work escape artists.',
  },
}

export default function CommunityPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Link 
            href="/automatic-cash-machine"
            className="text-gray-400 hover:text-white mb-6 inline-block text-sm"
          >
            ← Back to Automatic Cash Machine
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white neon-text-strong">
            The Turn CEO Collective
          </h1>
          <p className="text-2xl text-gray-200 mb-8">
            A digital co-op for builders, makers, and post-work escape artists.
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            No hustle porn. No "mindset coaches." No spammy crypto bros. 
            Just people designing better systems and helping each other automate their way to freedom.
          </p>
          <p className="text-base text-cyan-400 mt-6">
            Part of the $47 Automatic Cash Machine
          </p>
        </div>
      </section>

      {/* What is the Collective */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            What Is the Collective?
          </h2>
          
          <div className="bg-gray-800 p-8 rounded-lg mb-8 shadow-xl neon-card-green relative">
            <p className="text-lg text-gray-300 leading-relaxed">
              The <strong className="text-white">Turn CEO Collective</strong> is a private community for people who 
              want to escape the traditional employment trap. We share automation workflows, 
              critique each other's side projects, discuss policy changes (like UBI), and hold 
              each other accountable as we build lives with more autonomy and less busywork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl neon-card-green">
              <h3 className="text-xl font-bold mb-3 text-white">🤝 Peer Support</h3>
              <p className="text-gray-300">
                Share wins, troubleshoot automation setbacks, and get honest feedback 
                from people who get it.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-xl neon-card-green">
              <h3 className="text-xl font-bold mb-3 text-white">🛠️ Shared Resources</h3>
              <p className="text-gray-300">
                Access member-exclusive templates, automation scripts, and tool databases 
                maintained by the community.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-xl neon-card-green">
              <h3 className="text-xl font-bold mb-3 text-white">💡 Weekly Co-Working</h3>
              <p className="text-gray-300">
                Virtual co-working sessions for building side projects, automating work, 
                and shipping actual products.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-xl neon-card-green">
              <h3 className="text-xl font-bold mb-3 text-white">🎓 Skill Shares</h3>
              <p className="text-gray-300">
                Monthly workshops where members teach each other: AI prompts, no-code tools, 
                micro-SaaS ideas, freelance tactics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Who's in the Collective?
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-3xl mr-4">👩‍💻</span>
              <div>
                <h3 className="font-bold text-lg mb-1 text-white">Knowledge workers automating their day jobs</h3>
                <p className="text-gray-300">
                  You've realized half your tasks could be scripted, and you'd rather build 
                  side projects than climb the corporate ladder.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-3xl mr-4">🎨</span>
              <div>
                <h3 className="font-bold text-lg mb-1 text-white">Freelancers and creators monetizing their skills</h3>
                <p className="text-gray-300">
                  You're building alternative income streams: digital products, consulting, 
                  content, or small tools.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-3xl mr-4">🔬</span>
              <div>
                <h3 className="font-bold text-lg mb-1 text-white">Policy nerds and future-watchers</h3>
                <p className="text-gray-300">
                  You follow UBI experiments, labor law changes, and want to discuss what 
                  a post-work society actually looks like.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-3xl mr-4">🚀</span>
              <div>
                <h3 className="font-bold text-lg mb-1 text-white">Builders shipping small, profitable projects</h3>
                <p className="text-gray-300">
                  You're interested in micro-SaaS, productized services, and businesses that 
                  run without full-time commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Membership Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free */}
            <div className="bg-gray-800 p-8 rounded-lg neon-card-green">
              <h3 className="text-2xl font-bold mb-2 text-white">Free</h3>
              <p className="text-4xl font-bold mb-6 text-white">$0<span className="text-lg text-gray-500">/mo</span></p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>✓ Newsletter access</li>
                <li>✓ Public essays & tools</li>
                <li>✓ Free playbook</li>
                <li className="text-gray-400">✗ Community access</li>
                <li className="text-gray-400">✗ Exclusive resources</li>
              </ul>
              <button className="w-full bg-gray-700 text-gray-300 px-6 py-3 rounded-md font-semibold">
                Current Tier
              </button>
            </div>

            {/* Member */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-2xl transform scale-105 neon-card-green transition-all hover:-translate-y-1">
              <div className="text-xs font-bold mb-2 text-black bg-yellow-400 px-2 py-1 rounded">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-2 text-white">Member</h3>
              <p className="text-4xl font-bold mb-6 text-white">$15<span className="text-lg text-gray-500">/mo</span></p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>✓ Everything in Free</li>
                <li>✓ Private Discord/Slack access</li>
                <li>✓ Exclusive templates & scripts</li>
                <li>✓ Weekly co-working sessions</li>
                <li>✓ Member skill shares</li>
              </ul>
              <button className="w-full btn-glass" data-btn="glass">
                Join Waitlist
              </button>
            </div>

            {/* Pro */}
            <div className="bg-gray-800 p-8 rounded-lg neon-card-green">
              <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
              <p className="text-4xl font-bold mb-6 text-white">$50<span className="text-lg text-gray-500">/mo</span></p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>✓ Everything in Member</li>
                <li>✓ Monthly 1-on-1 consultation</li>
                <li>✓ Custom automation audits</li>
                <li>✓ Priority support</li>
                <li>✓ Early access to tools</li>
              </ul>
              <button className="w-full btn-glass" data-btn="glass">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Rules */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Community Principles
          </h2>
          
          <div className="bg-black text-white p-8 rounded-lg neon-card-green">
            <ul className="space-y-4 text-lg text-white">
              <li><strong className="text-white">Real over performative.</strong> Share actual progress, not LinkedIn humble-brags.</li>
              <li><strong className="text-white">Help over hustle.</strong> We build each other up, not compete for clout.</li>
              <li><strong className="text-white">Tools over theory.</strong> Show your work, share your setups, teach your process.</li>
              <li><strong className="text-white">Critique capitalism, build alternatives.</strong> Complaining is fine. Building solutions is better.</li>
              <li><strong className="text-white">Humans first.</strong> Automation serves people, not the other way around.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Collective?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Sign up for the waitlist and get notified when we launch the community.
          </p>
          
          <div className="bg-gray-900 p-8 rounded-lg neon-card-green">
            <EmailCapture 
              placeholder="Your email"
              buttonText="Join the Waitlist"
            />
            <p className="text-sm text-gray-500 mt-3">
              Limited to 500 founding members. Launch: Q2 2025.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

