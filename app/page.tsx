import Hero from '@/components/Hero'
import EmailCapture from '@/components/EmailCapture'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

          {/* The Lie They Sold You */}
          <section className="py-16 px-4 bg-black text-gray-200 border-t-4 border-white border-b-4 border-white fluoro-edge fluoro-edge--pulse">
            <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Lie They Sold You</h2>
          <div className="text-lg md:text-xl space-y-4 text-gray-300 leading-relaxed">
            <p className="text-2xl font-semibold text-white">"Work gives life meaning."</p>
            <p>Yeah — if your meaning is burnout, debt, and Zoom calls that could've been emails.</p>
            <p className="text-xl font-semibold text-white">You aren't here to take notes.</p>
            <p className="text-xl font-semibold text-white">You're here to build an asset that prints revenue.</p>
            <p>WorkFreeWork is a framework that shows you how to replace labor with leverage.</p>
            <p className="text-white font-semibold">We teach you to build, automate, and profit — without selling your soul (or your sanity).</p>
          </div>
          <Link 
            href="/essays"
            className="inline-block mt-8 text-white hover:text-gray-300 font-semibold border-b-2 border-white hover:border-gray-300 transition-all"
          >
            Read "So… you want to quit capitalism?" →
          </Link>
        </div>
      </section>

          {/* How We Save / Make You Money */}
          <section className="py-20 px-4 bg-gray-800 border-t-4 border-gray-600 border-b-4 border-gray-600">
            <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 neon-text">
            How We Save / Make You Money
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            You aren't here to take notes. You're here to build an asset that prints revenue.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="bg-gray-900 p-8 rounded-lg border-2 border-gray-600 shadow-2xl">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Save Money:</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Reclaim 20+ hours a week of wasted time ($500–$2,000/month)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Replace overpriced software with free AI tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Stop paying others to do what a bot can handle</span>
                </li>
              </ul>
            </div>
            
                <div className="bg-gray-900 p-8 rounded-lg border-2 border-gray-600 shadow-2xl">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Make Money:</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>$1,000–$5,000/month from digital products & automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>$50–$200/hour teaching others what you learn</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>$500–$2,000/month in affiliate income</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>$2,000–$10,000/month with automation-as-a-service</span>
                </li>
              </ul>
            </div>
          </div>

              <div className="glass-card p-8 rounded-2xl text-center border-4 border-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">The Math:</h3>
                <div className="space-y-4 text-lg text-gray-200">
                  <p className="text-xl">20 hours × $25/hour = $500/week = $2,000/month</p>
                  <p className="text-xl">+ $1,000–$5,000 new income</p>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                  <p className="text-4xl font-bold text-green-400 mb-2">= $3,000–$7,000/month total value</p>
                  <p className="text-xl font-semibold text-white">We turn AI from a threat into your personal money machine.</p>
                </div>
              </div>
              <div className="text-center mt-12">
                <Link 
                  href="/pricing"
                  className="inline-block"
                  data-btn="glass"
                >
                  Enter the OS →
                </Link>
              </div>
        </div>
      </section>

          {/* Off-Grid AI Autonomy Teaser */}
          <section className="py-20 px-4 bg-black text-gray-200 border-t-4 border-white border-b-4 border-white fluoro-edge fluoro-edge--pulse">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Own Your AI Workforce</h2>
              <div className="text-lg md:text-xl space-y-4 text-gray-300 leading-relaxed">
                <p className="text-xl font-semibold text-white">Runs in the cloud — or portable and offline.</p>
                <p className="text-xl font-semibold text-white">Your business. Your agents. Your infrastructure.</p>
                <p className="text-gray-400">The thumb-drive agent swarm. Your nuclear weapon for autonomy.</p>
              </div>
              <Link 
                href="/tools"
                className="inline-block mt-8 text-white hover:text-gray-300 font-semibold border-b-2 border-white hover:border-gray-300 transition-all"
              >
                Enter the OS →
              </Link>
            </div>
          </section>

          {/* What You'll Find Here */}
          <section className="py-20 px-4 bg-gray-900 border-t-4 border-gray-700 border-b-4 border-gray-700">
            <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What You'll Find Here
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Playbook */}
                <div className="bg-gray-900 p-8 rounded-lg border-2 border-gray-600 shadow-2xl hover:shadow-3xl hover:border-gray-500 transition-all">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-2xl font-bold mb-3">The Playbook</h3>
              <p className="text-gray-300 mb-4">
                Practical systems to replace jobs with projects. Automate what can be automated. 
                Monetize what can't. Keep your time, not your boss's calendar.
              </p>
              <Link 
                href="/playbook"
                className="text-black hover:text-black font-semibold"
              >
                Get the Playbook →
              </Link>
            </div>

            {/* Tools + Templates */}
                <div className="bg-gray-900 p-8 rounded-lg border-2 border-gray-600 shadow-2xl hover:shadow-3xl hover:border-gray-500 transition-all">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold mb-3">Tools + Templates</h3>
              <p className="text-gray-300 mb-4">
                Real setups, not theory. Scripts, workflows, and blueprints tested by creators 
                who replaced their day jobs with small, autonomous income stacks.
              </p>
              <Link 
                href="/tools"
                className="text-black hover:text-black font-semibold"
              >
                Browse Tools →
              </Link>
            </div>

            {/* Essays & Dispatches */}
                <div className="bg-gray-900 p-8 rounded-lg border-2 border-gray-600 shadow-2xl hover:shadow-3xl hover:border-gray-500 transition-all">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold mb-3">Essays & Dispatches</h3>
              <p className="text-gray-300 mb-4">
                Sharp takes on the post-work economy. Economics, psychology, and culture — 
                stripped of MBA jargon and self-help fluff.
              </p>
              <Link 
                href="/essays"
                className="text-black hover:text-black font-semibold"
              >
                Read Essays →
              </Link>
            </div>

            {/* The Collective */}
                <div className="bg-gray-900 p-8 rounded-lg border-2 border-gray-600 shadow-2xl hover:shadow-3xl hover:border-gray-500 transition-all">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">The Collective</h3>
              <p className="text-gray-300 mb-4">
                A digital co-op for free humans. Collaborate, share automations, and help 
                each other escape the hamster wheel with actual tech and accountability.
              </p>
              <Link 
                href="/community"
                className="text-black hover:text-black font-semibold"
              >
                Join the Collective →
              </Link>
            </div>
          </div>
        </div>
      </section>

          {/* Featured Essays */}
          <section className="py-20 px-4 border-t-4 border-gray-800 border-b-4 border-gray-800">
            <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured Essays
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Deep dives into automation, economics, and life after the 9-to-5
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/essays/ai-didnt-take-your-job" className="group">
                  <div className="bg-gray-800 p-6 rounded-lg border-2 border-gray-600 hover:shadow-2xl hover:border-gray-500 transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-black transition-colors">
                  AI Didn't Take Your Job — Obsolescence Did
                </h3>
                <p className="text-gray-400 mb-3">
                  Why blaming technology misses the point, and what really happened to work.
                </p>
                <span className="text-black font-semibold">Read →</span>
              </div>
            </Link>

            <Link href="/essays/automation-is-a-human-right" className="group">
                  <div className="bg-gray-800 p-6 rounded-lg border-2 border-gray-600 hover:shadow-2xl hover:border-gray-500 transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-black transition-colors">
                  Automation Is a Human Right
                </h3>
                <p className="text-gray-400 mb-3">
                  The moral case for letting machines do the boring stuff.
                </p>
                <span className="text-black font-semibold">Read →</span>
              </div>
            </Link>

            <Link href="/essays/work-is-a-19th-century-patch" className="group">
                  <div className="bg-gray-800 p-6 rounded-lg border-2 border-gray-600 hover:shadow-2xl hover:border-gray-500 transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-black transition-colors">
                  Work Is a 19th-Century Patch File
                </h3>
                <p className="text-gray-400 mb-3">
                  Time for an upgrade. What comes after the industrial-era work model?
                </p>
                <span className="text-black font-semibold">Read →</span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/essays"
              className="inline-block"
              data-btn="glass"
            >
              Read the Library
            </Link>
          </div>
        </div>
      </section>

          {/* The Proof */}
          <section className="py-20 px-4 bg-black border-t-4 border-gray-800 border-b-4 border-gray-800">
            <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">The Proof</h2>
          <p className="text-xl text-gray-300 mb-4">
            You don't need to trust hype. Trust arithmetic.
          </p>
          <p className="text-lg text-gray-400 mb-12">
            Built for creators, founders, solopreneurs, and rebels tired of trading time for money.
          </p>
          
          <div className="space-y-8 mb-12">
                <div className="glass-card p-8 rounded-2xl text-center border-4 border-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-white">Every dollar you invest in automation multiplies:</h3>
                  <div className="space-y-4 text-lg text-gray-200">
                    <p className="text-xl">• 1 month of learning = 12 months of time saved</p>
                    <p className="text-xl">• 1 automation = 100 tasks gone forever</p>
                    <p className="text-xl">• 1 skill = infinite leverage</p>
                  </div>
                </div>
          </div>
          
          <EmailCapture 
            buttonText="Get My 20 Hours Back"
            className="max-w-xl mx-auto"
          />
        </div>
      </section>

          {/* The Closer */}
          <section className="py-20 px-4 bg-gray-800 text-gray-200 border-t-4 border-gray-600 border-b-4 border-gray-600">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Closer</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
                <p className="text-2xl font-semibold text-white">Build a company in hours, not fiscal quarters.</p>
                <p className="text-xl font-semibold text-white">No pitch decks. No gatekeepers. No permission.</p>
                <p className="text-2xl font-semibold text-white">The future isn't 9-to-5. It's 24/7 leverage.</p>
                <p>WorkFreeWork isn't about quitting — it's about evolving.</p>
                <p>You can stay in the system, or you can automate your exit.</p>
              </div>
              
              {/* May-z the Dog */}
              <div className="mb-8 flex justify-center">
                <div className="glass-card rounded-2xl p-4 border-2 border-gray-500 shadow-2xl">
                  <Image
                    src="/may-z.png"
                    alt="May-z, the WorkFreeWork mascot"
                    width={200}
                    height={200}
                    className="rounded-xl"
                  />
                </div>
              </div>
              
              <Link
                href="/pricing"
                className="inline-flex items-center text-lg"
                data-btn="glass"
              >
                Join the WorkFree Movement
              </Link>
            </div>
          </section>

          {/* Scale Engine Membership CTA */}
          <section className="py-20 px-4 bg-black text-gray-200 border-t-4 border-white border-b-4 border-white fluoro-edge fluoro-edge--pulse">
            <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Scale Engine Membership
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto font-semibold">
            Ongoing automations, new AI agents, business upgrades.
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Make membership feel like an infinite upgrade path, not a Discord group with vibes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-600 shadow-xl">
              <h3 className="font-bold text-lg mb-2 text-white">Weekly Playbooks</h3>
              <p className="text-gray-400 text-sm">Automation tactics you can implement today</p>
            </div>
                <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-600 shadow-xl">
              <h3 className="font-bold text-lg mb-2 text-white">Private Community</h3>
              <p className="text-gray-400 text-sm">Discord access with fellow freedom-seekers</p>
            </div>
                <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-600 shadow-xl">
              <h3 className="font-bold text-lg mb-2 text-white">Exclusive Tools</h3>
              <p className="text-gray-400 text-sm">Templates, scripts, and resources</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/pricing"
              className="text-lg"
              data-btn="glass"
            >
              View All Membership Tiers
            </Link>
            <Link
              href="/api/checkout?tier=collective"
              className="text-lg inline-block"
              data-btn="glass"
            >
              Claim your build slot. Autonomy starts now. →
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            Or continue with the free newsletter below ↓
          </p>
        </div>
      </section>

          {/* Newsletter Signup */}
          <section className="py-20 px-4 bg-gray-900 border-t-4 border-gray-700 border-b-4 border-gray-700">
            <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            "One Email a Week That Makes You Question Employment."
          </h2>
          <p className="text-xl text-gray-300 mb-4 font-semibold">
            Built for creators, founders, solopreneurs, and rebels tired of trading time for money.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Practical automation ideas, essays, and tools for living free from wage dependence.
          </p>
          
          <EmailCapture 
            placeholder="Your email"
            buttonText="Get the Newsletter"
            className="max-w-lg mx-auto"
          />
          <p className="text-sm text-gray-500 mt-3">
            100% free. No credit card required.
          </p>
        </div>
      </section>
    </>
  )
}

