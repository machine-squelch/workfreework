import { Metadata } from 'next'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'About - WorkFreeWork',
  description: 'Our mission: help people design lives with more autonomy, less busywork, and real freedom through automation and practical post-work strategies.',
  openGraph: {
    title: 'About WorkFreeWork',
    description: 'Our mission: help people design lives with more autonomy, less busywork, and real freedom through automation.',
    url: 'https://workfreework.com/about',
    images: ['/wfw-logo-rwb.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About WorkFreeWork',
    description: 'Our mission: help people design lives with more autonomy, less busywork, and real freedom through automation.',
  },
}

export default function AboutPage() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white neon-text-strong">
          About WorkFreeWork
        </h1>
        <p className="text-2xl text-gray-300 mb-12">
          A manual for life after jobs — automation, autonomy, and meaning without the corporate leash.
        </p>

        {/* Mission Section */}
        <section className="bg-gray-900 p-8 rounded-lg border-4 border-purple-400 mb-8 neon-border--purple neon-backglow--purple">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <div className="prose prose-lg text-gray-300 space-y-4">
            <p>
              <strong>WorkFreeWork</strong> exists to help people reclaim their time, automate meaningless work, 
              and build lives with real autonomy — not just better productivity.
            </p>
            <p>
              We believe that AI and automation should free humans from drudgery, not just make corporations 
              more efficient. The future of work isn't "upskilling for the new economy" — it's designing 
              a life where work is optional, meaningful, or at least brief.
            </p>
            <p>
              This isn't hustle culture. This isn't lifestyle optimization. This is a playbook for living 
              in a world where the old employment contract is breaking down — and that's a good thing.
            </p>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="bg-gray-900 p-8 rounded-lg border-4 border-purple-400 mb-8 neon-border--purple neon-backglow--purple">
          <h2 className="text-3xl font-bold mb-4">Who This Is For</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start">
              <span className="text-2xl mr-3">🤖</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Knowledge workers watching AI eat their tasks</h3>
                <p>If you've ever thought "a script could do this," you're in the right place.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3">🏃</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">People tired of the rat race</h3>
                <p>You don't want another promotion. You want your weekdays back.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3">🛠️</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Builders, makers, and side-project junkies</h3>
                <p>You'd rather make things than attend meetings about making things.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3">💭</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Policy nerds and future-watchers</h3>
                <p>You're curious about UBI, automation economics, and what comes after capitalism.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-gray-900 p-8 rounded-lg border-4 border-purple-400 mb-8 neon-border--purple neon-backglow--purple">
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-xl text-white mb-2">Practical, Not Theoretical</h3>
              <p>
                We share real tools, tested workflows, and honest case studies. No buzzwords, no "thought leadership."
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-white mb-2">Critical, Not Cynical</h3>
              <p>
                We critique capitalism, productivity culture, and surveillance tech — but we also build alternatives.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-white mb-2">Human-Centered</h3>
              <p>
                Automation should serve people, not shareholders. We advocate for policies like UBI, worker 
                ownership, and right-to-disconnect laws.
              </p>
            </div>
          </div>
        </section>

        {/* About the Founder */}
        <section className="bg-black text-white p-8 rounded-lg mb-12 border-4 border-purple-400 neon-border--purple neon-backglow--purple">
          <h2 className="text-3xl font-bold mb-4">Built by Thinkazoo</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            WorkFreeWork is created by <strong className="text-white">Thinkazoo</strong>, 
            a builder, writer, and automation enthusiast who believes the best use of technology 
            is giving people their time back. This project combines research, real-world experiments, 
            and a healthy dose of sarcasm about late-stage capitalism.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-black p-8 rounded-lg text-center border-4 border-purple-400 neon-border--purple neon-backglow--purple">
          <h2 className="text-3xl font-bold mb-4 text-white neon-text">
            Ready to Escape the Hamster Wheel?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Get the free 5-step playbook and start reclaiming your time.
          </p>
          <EmailCapture 
            buttonText="Get the Playbook"
            className="max-w-lg mx-auto"
          />
        </section>
      </div>
    </div>
  )
}

