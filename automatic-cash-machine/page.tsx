/**
 * Copyright (c) 2025 Thinkazoo LLC
 * 
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Automatic Cash Machine - $47
 * 
 * This is Layer 1: Knowledge
 * All content from the money app will be integrated here as the $47 product.
 * 
 * This includes:
 * - Essays & Dispatches
 * - The Playbook
 * - Tools + Templates
 * - Community access
 * - Newsletter
 * - All educational content from WorkFreeWork
 */

'use client';

import Link from 'next/link';
import { InteractiveCard } from '@/components/InteractiveCard';
import { StaggerGrid } from '@/components/StaggerGrid';

export default function AutomaticCashMachinePage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero */}
      <section className="py-20 px-4 border-b-4 border-white fluoro-edge--hotwhite">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 neon-text-strong">
            WorkFreeWork
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-6 max-w-4xl mx-auto font-semibold">
            Everything you need to ditch your job. Fuck those guys.
          </p>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're not helping them get rich anymore. We're helping you escape.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Automation for humans, not the other way around. Reclaim your time. Build your own income. 
            Design a life that doesn't revolve around someone else's calendar.
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link 
              href="/automatic-cash-machine/playbook"
              className="btn-glass px-6 py-3"
              data-btn="glass"
            >
              The Playbook
            </Link>
            <Link 
              href="/automatic-cash-machine/essays"
              className="btn-glass px-6 py-3"
              data-btn="glass"
            >
              Essays & Dispatches
            </Link>
            <Link 
              href="/automatic-cash-machine/tools"
              className="btn-glass px-6 py-3"
              data-btn="glass"
            >
              Tools & Templates
            </Link>
            <Link 
              href="/automatic-cash-machine/community"
              className="btn-glass px-6 py-3"
              data-btn="glass"
            >
              The Collective
            </Link>
            <Link 
              href="/business-builder"
              className="btn-glass--neon px-6 py-3"
              data-btn="glass"
            >
              Build Your Business →
            </Link>
          </div>

          <div className="text-3xl font-bold text-purple-400 mb-4">$47</div>
          <p className="text-sm text-gray-500 mb-8">Layer 1: Knowledge — The foundation for everything else</p>
          
          <Link 
            href="/checkout?tier=automatic-cash-machine"
            className="btn-glass--neon text-lg px-12 py-5"
            data-btn="glass"
          >
            Enter the Ecosystem
          </Link>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 neon-text-strong">
            What's Inside
          </h2>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* The Playbook */}
            <InteractiveCard delay={0} color="purple" href="/automatic-cash-machine/playbook">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-2xl font-bold mb-3 text-white">The Playbook</h3>
              <p className="text-gray-300 mb-4">
                Practical systems to replace jobs with projects. Automate what can be automated. 
                Monetize what can't. Keep your time, not your boss's calendar.
              </p>
              <span className="text-gray-200 hover:text-white font-semibold neon-text inline-block">
                Get the Playbook →
              </span>
            </InteractiveCard>

            {/* Tools + Templates */}
            <InteractiveCard delay={0.1} color="purple" href="/automatic-cash-machine/tools">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Tools + Templates</h3>
              <p className="text-gray-300 mb-4">
                Real setups, not theory. Scripts, workflows, and blueprints tested by creators 
                who replaced their day jobs with small, autonomous income stacks.
              </p>
              <span className="text-gray-200 hover:text-white font-semibold neon-text inline-block">
                Browse Tools →
              </span>
            </InteractiveCard>

            {/* Essays & Dispatches */}
            <InteractiveCard delay={0.2} color="purple" href="/automatic-cash-machine/essays">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Essays & Dispatches</h3>
              <p className="text-gray-300 mb-4">
                Sharp takes on the post-work economy. Economics, psychology, and culture — 
                stripped of MBA jargon and self-help fluff.
              </p>
              <span className="text-gray-200 hover:text-white font-semibold neon-text inline-block">
                Read Essays →
              </span>
            </InteractiveCard>

            {/* The Collective */}
            <InteractiveCard delay={0.3} color="purple" href="/automatic-cash-machine/community">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3 text-white">The Collective</h3>
              <p className="text-gray-300 mb-4">
                A digital co-op for free humans. Collaborate, share automations, and help 
                each other escape the hamster wheel with actual tech and accountability.
              </p>
              <span className="text-gray-200 hover:text-white font-semibold neon-text inline-block">
                Join the Collective →
              </span>
            </InteractiveCard>
          </StaggerGrid>

          {/* How We Save / Make You Money */}
          <div className="bg-gray-900 p-8 rounded-2xl neon-card-purple shadow-2xl mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">The Math:</h3>
            <div className="space-y-4 text-lg text-gray-200 text-center">
              <p className="text-xl">20 hours × $25/hour = $500/week = $2,000/month</p>
              <p className="text-xl">+ $1,000–$5,000 new income</p>
            </div>
            <div className="mt-8 p-6 rounded-xl neon-card-purple bg-purple-900/30">
              <p className="text-4xl font-bold text-green-400 mb-2 text-center">= $3,000–$7,000/month total value</p>
              <p className="text-xl font-semibold text-white text-center">We turn AI from a threat into your personal money machine.</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/checkout?tier=automatic-cash-machine"
              className="btn-glass--neon text-lg px-12 py-5"
              data-btn="glass"
            >
              Enter the Ecosystem - $47
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

