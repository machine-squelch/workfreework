import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - WorkFreeWork',
  description: 'Get in touch with the WorkFreeWork team.',
}

export default function ContactPage() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-2xl text-gray-700 mb-12">
          We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* General Inquiries */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-2xl font-bold mb-3">General Inquiries</h2>
            <p className="text-gray-400 mb-4">
              Questions, feedback, or just want to say hi?
            </p>
            <a 
              href="mailto:hello@workfreework.com"
              className="text-black hover:text-black font-semibold text-lg"
            >
              hello@workfreework.com
            </a>
          </div>

          {/* Press */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <div className="text-4xl mb-4">📰</div>
            <h2 className="text-2xl font-bold mb-3">Press & Media</h2>
            <p className="text-gray-400 mb-4">
              Interview requests, media inquiries, and press kit access.
            </p>
            <a 
              href="mailto:press@workfreework.com"
              className="text-black hover:text-black font-semibold text-lg"
            >
              press@workfreework.com
            </a>
          </div>

          {/* Partnerships */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <div className="text-4xl mb-4">🤝</div>
            <h2 className="text-2xl font-bold mb-3">Partnerships</h2>
            <p className="text-gray-400 mb-4">
              Interested in collaborating, sponsorships, or affiliate opportunities?
            </p>
            <a 
              href="mailto:partnerships@workfreework.com"
              className="text-black hover:text-black font-semibold text-lg"
            >
              partnerships@workfreework.com
            </a>
          </div>

          {/* Community */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <div className="text-4xl mb-4">🎭</div>
            <h2 className="text-2xl font-bold mb-3">Community Support</h2>
            <p className="text-gray-400 mb-4">
              Questions about membership, community access, or technical issues?
            </p>
            <a 
              href="mailto:support@workfreework.com"
              className="text-black hover:text-black font-semibold text-lg"
            >
              support@workfreework.com
            </a>
          </div>
        </div>

        {/* Response Time */}
        <div className="bg-black p-8 rounded-lg mt-8 text-center">
          <p className="text-black text-lg">
            <strong>Response Time:</strong> We typically respond within 48 hours. 
            No automated replies, no chatbots—just real humans.
          </p>
        </div>
      </div>
    </div>
  )
}

