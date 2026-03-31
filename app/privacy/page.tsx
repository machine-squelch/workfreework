import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - WorkFreeWork',
  description: 'Our commitment to your privacy and data protection.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">Last updated: March 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-gray-300">
              At WorkFreeWork, we believe in privacy as a fundamental right. We collect minimal 
              data, use privacy-friendly analytics, and never sell your information.
            </p>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">What We Collect</h2>
            <ul className="space-y-2 text-gray-300">
              <li><strong>Email address:</strong> When you subscribe to our newsletter or download the playbook.</li>
              <li><strong>Anonymous analytics:</strong> Basic page views and traffic sources via privacy-friendly tools (no cookies, no tracking).</li>
              <li><strong>Optional information:</strong> Any details you choose to share in community forums or surveys.</li>
            </ul>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">What We Don't Do</h2>
            <ul className="space-y-2 text-gray-300">
              <li>❌ We don't sell your data</li>
              <li>❌ We don't use invasive tracking cookies</li>
              <li>❌ We don't share your email with third parties</li>
              <li>❌ We don't use your data for advertising</li>
            </ul>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
            <p className="text-gray-300 mb-4">We use your email address to:</p>
            <ul className="space-y-2 text-gray-300">
              <li>Send you the newsletter (if subscribed)</li>
              <li>Deliver the free playbook and resources</li>
              <li>Notify you of community updates (if you're a member)</li>
            </ul>
            <p className="text-gray-300 mt-4">
              You can unsubscribe at any time with one click.
            </p>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-gray-300 mb-4">We use these trusted services:</p>
            <ul className="space-y-2 text-gray-300">
              <li><strong>ConvertKit:</strong> Email newsletter management (GDPR compliant)</li>
              <li><strong>Plausible Analytics:</strong> Privacy-friendly website analytics (no cookies)</li>
              <li><strong>Vercel:</strong> Website hosting</li>
            </ul>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-gray-300 mb-4">You have the right to:</p>
            <ul className="space-y-2 text-gray-300">
              <li>Access your data</li>
              <li>Request data deletion</li>
              <li>Export your data</li>
              <li>Unsubscribe from emails</li>
              <li>Opt out of analytics</li>
            </ul>
            <p className="text-gray-300 mt-4">
              To exercise these rights, contact us at{' '}
              <a href="mailto:privacy@workfreework.com" className="text-white hover:underline">
                privacy@workfreework.com
              </a>
            </p>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-gray-300">
              Questions about privacy?{' '}
              <a href="mailto:privacy@workfreework.com" className="text-white hover:underline">
                privacy@workfreework.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

