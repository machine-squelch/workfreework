import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press & Media Kit - WorkFreeWork',
  description: 'Media resources, brand assets, and press information for WorkFreeWork.',
  openGraph: {
    title: 'Press & Media Kit - WorkFreeWork',
    description: 'Media resources, brand assets, and press information for WorkFreeWork.',
    url: 'https://workfreework.com/press',
    images: ['/wfw-logo-rwb.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press & Media Kit - WorkFreeWork',
    description: 'Media resources, brand assets, and press information for WorkFreeWork.',
  },
}

export default function PressPage() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Press & Media Kit
        </h1>
        <p className="text-2xl text-gray-300 mb-16">
          Media resources, brand information, and contact details for press inquiries.
        </p>

        {/* About WorkFreeWork */}
        <section className="bg-gray-900 p-8 rounded-lg border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold mb-4">About WorkFreeWork</h2>
          <div className="prose prose-lg text-gray-300 space-y-4">
            <p>
              <strong>WorkFreeWork</strong> is a media site and community exploring how AI automation 
              is reshaping work, the social and economic fallout, and practical paths for people to 
              adapt through skills, policy advocacy, and creative projects.
            </p>
            <p>
              We combine sharp analysis, practical automation tools, and community support to help 
              knowledge workers transition from traditional employment to more autonomous, fulfilling 
              ways of earning a living.
            </p>
            <p>
              <strong>Mission:</strong> Help people design lives with more autonomy, less busywork, 
              and real freedom through automation and post-work strategies.
            </p>
          </div>
        </section>

        {/* Key Information */}
        <section className="bg-gray-900 p-8 rounded-lg border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">Founded</h3>
              <p className="text-gray-300">2025</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">Creator</h3>
              <p className="text-gray-300">Thinkazoo</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">Location</h3>
              <p className="text-gray-300">Remote / Digital-First</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">Website</h3>
              <p className="text-gray-300">workfreework.com</p>
            </div>
          </div>
        </section>

        {/* Founder Bio */}
        <section className="bg-gray-900 p-8 rounded-lg border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold mb-4">Founder Bio</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              <strong>Thinkazoo</strong> is a builder, writer, and automation enthusiast who believes 
              the best use of technology is giving people their time back. With a background in 
              [technology/product/design], they've spent years testing automation tools, studying 
              post-work economics, and building systems that prioritize human autonomy over productivity theater.
            </p>
            <p>
              WorkFreeWork combines their research, real-world experiments, and a healthy dose of 
              sarcasm about late-stage capitalism into a practical playbook for life after the 9-to-5.
            </p>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="bg-gray-900 p-8 rounded-lg border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold mb-6">Brand Assets</h2>
          
          <div className="space-y-4">
            <div className="border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Logo</h3>
              <p className="text-gray-600 mb-3">
                High-resolution logo files in various formats.
              </p>
              <button className="text-black hover:text-black font-semibold">
                Download Logo Package →
              </button>
            </div>
            
            <div className="border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Brand Colors</h3>
              <div className="flex space-x-4 mt-3">
                <div>
                  <div className="w-20 h-20 bg-black rounded mb-2"></div>
                  <p className="text-sm font-mono">#A6FF00</p>
                  <p className="text-xs text-gray-600">Toxic Green</p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-wfw-gray-dark rounded mb-2"></div>
                  <p className="text-sm font-mono">#FF3B3F</p>
                  <p className="text-xs text-gray-600">Accent Red</p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-gray-800 rounded mb-2 border border-gray-300"></div>
                  <p className="text-sm font-mono">#F5F5F0</p>
                  <p className="text-xs text-gray-600">Bone Gray</p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-black rounded mb-2"></div>
                  <p className="text-sm font-mono">#000000</p>
                  <p className="text-xs text-gray-600">Black</p>
                </div>
              </div>
            </div>
            
            <div className="border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Typography</h3>
              <p className="text-gray-600">
                Primary Font: <strong>Space Grotesk</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gray-900 p-8 rounded-lg border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold mb-6">Current Stats</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-black mb-2">1,000+</p>
              <p className="text-gray-600">Newsletter Subscribers</p>
            </div>
            
            <div className="text-center">
              <p className="text-4xl font-bold text-black mb-2">50+</p>
              <p className="text-gray-600">Published Essays</p>
            </div>
            
            <div className="text-center">
              <p className="text-4xl font-bold text-black mb-2">20+</p>
              <p className="text-gray-600">Free Tools & Templates</p>
            </div>
          </div>
        </section>

        {/* Press Quotes */}
        <section className="bg-gray-900 p-8 rounded-lg border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold mb-6">Sample Press Quotes</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6">
              <p className="text-lg text-gray-300 italic mb-2">
                "WorkFreeWork cuts through the hustle-culture noise with practical automation 
                advice and thoughtful economic analysis."
              </p>
              <p className="text-sm text-gray-500">— [Media Outlet]</p>
            </div>
            
            <div className="border-l-4 border-black pl-6">
              <p className="text-lg text-gray-300 italic mb-2">
                "A refreshingly honest take on the future of work, stripped of MBA jargon 
                and self-help fluff."
              </p>
              <p className="text-sm text-gray-500">— [Media Outlet]</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-black text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Press Contact</h2>
          <div className="space-y-3">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:press@workfreework.com" className="text-black hover:underline">
                press@workfreework.com
              </a>
            </p>
            <p>
              <strong>Response Time:</strong> Within 48 hours
            </p>
            <p className="text-gray-400 mt-6">
              For general inquiries, partnerships, or speaking opportunities, 
              please use{' '}
              <a href="mailto:hello@workfreework.com" className="text-black hover:underline">
                hello@workfreework.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

