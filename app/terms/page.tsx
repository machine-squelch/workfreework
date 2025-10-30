import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - WorkFreeWork',
  description: 'Terms of service and user agreement for WorkFreeWork.',
}

export default function TermsPage() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-6 text-white">Terms of Service</h1>
        <p className="text-gray-400 mb-12">Last updated: January 2025</p>

        <div className="space-y-8">
          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Agreement to Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing WorkFreeWork ("the Site"), you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree, do not use this Site.
            </p>
            <p className="text-gray-300">
              These terms apply to all visitors, users, and others who access or use the Site.
            </p>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              All content on this Site, including text, graphics, logos, and software, is the property 
              of Thinkazoo LLC and protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-300">
              You may not reproduce, distribute, modify, or create derivative works without explicit 
              written permission from Thinkazoo LLC.
            </p>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Membership & Subscriptions</h2>
            <div className="space-y-3 text-gray-300">
              <p><strong>Billing:</strong> Subscriptions are billed monthly. You authorize us to charge your payment method.</p>
              <p><strong>Cancellation:</strong> You may cancel anytime. No refunds for partial months.</p>
              <p><strong>Money-Back Guarantee:</strong> First month refundable if requested within 30 days.</p>
              <p><strong>Price Changes:</strong> We reserve the right to modify prices with 30 days notice.</p>
              <p><strong>Access:</strong> We reserve the right to terminate access for violations of these terms.</p>
            </div>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">User Conduct</h2>
            <p className="text-gray-300 mb-4">You agree not to:</p>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Use the Site for any unlawful purpose</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Distribute spam or malicious content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Share member-only content publicly without permission</li>
              <li>Resell or redistribute our content or tools</li>
            </ul>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Disclaimer of Warranties</h2>
            <p className="text-gray-300 mb-4">
              THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED.
            </p>
            <p className="text-gray-300">
              Thinkazoo LLC does not warrant that the Site will be uninterrupted, error-free, 
              or free of viruses or other harmful components.
            </p>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Limitation of Liability</h2>
            <p className="text-gray-300">
              IN NO EVENT SHALL THINKAZOO LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SITE.
            </p>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Indemnification</h2>
            <p className="text-gray-300">
              You agree to indemnify and hold harmless Thinkazoo LLC from any claims, damages, 
              or expenses arising from your use of the Site or violation of these Terms.
            </p>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Third-Party Links</h2>
            <p className="text-gray-300">
              The Site may contain links to third-party websites. We are not responsible for the 
              content or practices of these external sites.
            </p>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Modifications to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. Changes will be effective 
              immediately upon posting. Continued use of the Site constitutes acceptance of modified Terms.
            </p>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These Terms shall be governed by the laws of the State of California, United States, 
              without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-300">
              Any disputes shall be resolved in the courts of Alameda County, California.
            </p>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
            <p className="text-gray-300">
              For questions about these Terms, contact us at:{' '}
              <a href="mailto:adam@workfreework.com" className="text-white hover:underline">
                adam@workfreework.com
              </a>
            </p>
            <p className="text-gray-300 mt-4">
              <strong>Thinkazoo LLC</strong><br />
              Pleasanton, California
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

