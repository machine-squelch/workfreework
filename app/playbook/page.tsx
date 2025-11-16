import { Metadata } from 'next'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'The WorkFree Playbook - Free 5-Step Guide',
  description: 'Reclaim 20+ hours per week with this free playbook: automate busywork, build alternative income, and design a life beyond the 9-to-5.',
  openGraph: {
    title: 'The WorkFree Playbook - Free 5-Step Guide',
    description: 'Reclaim 20+ hours per week: automate busywork, build alternative income, design a life beyond the 9-to-5.',
    url: 'https://workfreework.com/playbook',
    images: ['/wfw-logo-rwb.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The WorkFree Playbook - Free 5-Step Guide',
    description: 'Reclaim 20+ hours per week: automate busywork, build alternative income, design a life beyond the 9-to-5.',
  },
}

export default function PlaybookPage() {
  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-800 to-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white neon-text-strong">
            The WorkFree Blueprint
          </h1>
          <p className="text-2xl text-gray-200 mb-8">
            5 steps to reclaim 20+ hours/week and build real income without clock-punching.
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            A practical, no-BS guide to automating the boring stuff, monetizing your skills, 
            and designing a life that doesn't revolve around someone else's calendar.
          </p>
          
          <div className="bg-gray-900 p-8 rounded-lg border-4 border-pink-400 neon-border--pink neon-backglow--pink shadow-lg max-w-2xl mx-auto">
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

      {/* What's Inside */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white neon-text-strong">
            What's Inside the Playbook
          </h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-gray-900 p-8 rounded-lg border-4 border-pink-400 neon-border--pink neon-backglow--pink shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="text-4xl font-bold text-white/40 mr-6">01</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white neon-text">Audit: Where Your Time Actually Goes</h3>
                  <p className="text-gray-300">
                    Map your week, identify repetitive tasks, and spot automation opportunities. 
                    Includes a timesheet template and measurement framework.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-900 p-8 rounded-lg border-4 border-pink-400 neon-border--pink neon-backglow--pink shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="text-4xl font-bold text-white/40 mr-6">02</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white neon-text">Automate: 8 Tools & Prompts for Top Tasks</h3>
                  <p className="text-gray-300">
                    Curated automation tools for email, scheduling, data entry, content creation, 
                    and more. Plus ready-to-use AI prompts that actually work.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-900 p-8 rounded-lg border-4 border-pink-400 neon-border--pink neon-backglow--pink shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="text-4xl font-bold text-white/40 mr-6">03</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white neon-text">Protect: Data, Privacy & Vendor Lock-in</h3>
                  <p className="text-gray-300">
                    A checklist for protecting your data when using automation tools. Avoid vendor lock-in, 
                    maintain control, and stay secure.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-900 p-8 rounded-lg border-4 border-pink-400 neon-border--pink neon-backglow--pink shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="text-4xl font-bold text-white/40 mr-6">04</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white neon-text">Replace: Alternative Income & Micro-Offers</h3>
                  <p className="text-gray-300">
                    How to build alternative income streams in 30 days. Micro-offers, digital products, 
                    and side projects that don't require venture capital.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-gray-900 p-8 rounded-lg border-4 border-pink-400 neon-border--pink neon-backglow--pink shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="text-4xl font-bold text-white/40 mr-6">05</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white neon-text">Scale: Productize Your Automation</h3>
                  <p className="text-gray-300">
                    Turn your automations into services others will pay for. Templates, workflows, 
                    and case studies for building a productized service business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white neon-text-strong">
            Why This Playbook Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-xl mb-2 text-white neon-text">Actionable</h3>
              <p className="text-gray-600">
                No theory. Every step includes templates, tools, and real examples.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-xl mb-2 text-white neon-text">Tested</h3>
              <p className="text-gray-600">
                Used by knowledge workers, freelancers, and side-hustlers to reclaim 10-20 hours/week.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🆓</div>
              <h3 className="font-bold text-xl mb-2 text-white neon-text">Free</h3>
              <p className="text-gray-600">
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
          
          <div className="bg-gray-900 p-8 rounded-lg border-4 border-pink-400 neon-border--pink neon-backglow--pink">
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

