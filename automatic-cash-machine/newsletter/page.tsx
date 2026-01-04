/**
 * Copyright (c) 2025 Thinkazoo LLC
 * 
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

import { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Newsletter - Turn CEO',
  description: 'One email a week that makes you question employment. Practical automation ideas, essays, and tools for living free from wage dependence.',
  openGraph: {
    title: 'Newsletter - Turn CEO',
    description: 'One email a week that makes you question employment. Practical automation ideas, essays, and tools.',
    url: 'https://turnceo.com/automatic-cash-machine/newsletter',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newsletter - Turn CEO',
    description: 'One email a week that makes you question employment.',
  },
}

export default function NewsletterPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/automatic-cash-machine"
            className="text-gray-400 hover:text-white mb-6 inline-block text-sm"
          >
            ← Back to Automatic Cash Machine
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white neon-text-strong">
            "One Email a Week That Makes You Question Employment."
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            Practical automation ideas, essays, and tools for living free from wage dependence.
          </p>
          <p className="text-base text-cyan-400 mb-10">
            Part of the $47 Automatic Cash Machine
          </p>
          
          <div className="bg-gray-800 p-8 rounded-lg max-w-2xl mx-auto">
            <EmailCapture 
              placeholder="Your email"
              buttonText="Subscribe Now"
            />
            <p className="text-sm text-gray-400 mt-3">
              Free forever. Unsubscribe anytime. No spam, no BS.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            What You'll Get Every Week
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-lg neon-card-blue shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-white">
                🎯 One Practical Automation Tip
              </h3>
              <p className="text-gray-300">
                A tool, workflow, or AI prompt you can implement immediately to save time. 
                No fluff, no theory — just things that actually work.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg neon-card-blue shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-white">
                ✍️ Weekly Essay or Analysis
              </h3>
              <p className="text-gray-300">
                Sharp takes on automation, economics, policy, and the future of work. 
                Think pieces stripped of MBA jargon and self-help nonsense.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg neon-card-blue shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-white">
                📊 Real Case Studies
              </h3>
              <p className="text-gray-300">
                Stories from people who automated their jobs, built alternative income, 
                or escaped the 9-to-5 — with actual numbers and tactics.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg neon-card-blue shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-white">
                🛠️ Curated Tools & Resources
              </h3>
              <p className="text-gray-300">
                New automation tools, templates, and resources we've tested and recommend. 
                Plus exclusive templates for subscribers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Issue */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Sample Issue: What to Expect
          </h2>
          
          <div className="bg-gray-900 p-8 rounded-lg">
            <div className="mb-6">
              <span className="text-sm text-gray-500">Issue #12 • March 2025</span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-white">
                "The $1,000/Month Automation Audit (And How to Do Your Own)"
              </h3>
            </div>
            
            <div className="prose text-gray-300 space-y-4">
              <p>
                <strong>This Week's Automation:</strong> A customer service rep automated 60% 
                of support tickets using GPT-4 + Zapier. She now works 3 days a week at full pay. 
                Here's the exact setup...
              </p>
              <p>
                <strong>Essay:</strong> "Why your manager fears automation more than you should" — 
                a look at who really benefits when work disappears.
              </p>
              <p>
                <strong>Tool of the Week:</strong> Make.com's new AI text parser. 
                We tested it on 500 emails. Results inside.
              </p>
              <p>
                <strong>Template:</strong> Download the "Support Ticket Automation Playbook" 
                (subscribers only).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            What Subscribers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg neon-card-blue">
              <p className="text-gray-300 mb-4 italic">
                "Finally, automation advice that doesn't feel like a LinkedIn post. 
                I've saved 8 hours a week using tactics from this newsletter."
              </p>
              <p className="font-semibold text-white">— Sarah M., Product Manager</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg neon-card-blue">
              <p className="text-gray-300 mb-4 italic">
                "Best email I get all week. Sharp, funny, and actually useful. 
                The tool recommendations alone are worth it."
              </p>
              <p className="font-semibold text-white">— David K., Freelance Developer</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg neon-card-blue">
              <p className="text-gray-300 mb-4 italic">
                "I was skeptical about 'automation content' but this is different. 
                Real case studies, real numbers, real tools."
              </p>
              <p className="font-semibold text-white">— Jamie L., Marketing Consultant</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg neon-card-blue">
              <p className="text-gray-300 mb-4 italic">
                "If you're tired of hustle culture and want actual freedom, 
                this newsletter is your roadmap."
              </p>
              <p className="font-semibold text-white">— Alex R., Writer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Automate Your Way to Freedom?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join 1,000+ people getting weekly tactics to reclaim their time.
          </p>
          
          <div className="bg-gray-900 p-8 rounded-lg neon-card-blue">
            <EmailCapture 
              placeholder="Your email"
              buttonText="Subscribe Free"
            />
            <p className="text-sm text-gray-500 mt-3">
              Plus: instant access to the free Automatic Cash Machine Playbook (PDF).
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

