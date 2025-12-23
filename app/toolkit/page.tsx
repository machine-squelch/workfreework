import { Metadata } from 'next'
import ToolkitGallery from '@/components/toolkit/ToolkitGallery'
import { getPublishedResources, getFeaturedResources } from '@/lib/toolkit-data'

export const metadata: Metadata = {
  title: 'The Automator\'s Toolkit | WorkFreeWork',
  description: 'Curated library of automation scripts, templates, and guides to help you work less and earn more. Free resources for building automated income streams.',
  keywords: ['automation', 'scripts', 'templates', 'workflows', 'passive income', 'automation tools'],
  openGraph: {
    title: 'The Automator\'s Toolkit | WorkFreeWork',
    description: 'Curated library of automation scripts, templates, and guides to help you work less and earn more.',
    type: 'website',
    url: 'https://workfreework.com/toolkit',
    images: [
      {
        url: 'https://workfreework.com/og-toolkit.png',
        width: 1200,
        height: 630,
        alt: 'The Automator\'s Toolkit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Automator\'s Toolkit | WorkFreeWork',
    description: 'Curated library of automation scripts, templates, and guides.',
    images: ['https://workfreework.com/og-toolkit.png'],
  },
}

export default function ToolkitPage() {
  const allResources = getPublishedResources()
  const featuredResources = getFeaturedResources()

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'The Automator\'s Toolkit',
    description: 'Curated library of automation scripts, templates, and guides',
    url: 'https://workfreework.com/toolkit',
    publisher: {
      '@type': 'Organization',
      name: 'WorkFreeWork',
      url: 'https://workfreework.com',
    },
    hasPart: allResources.map((resource) => ({
      '@type': 'SoftwareApplication',
      name: resource.title,
      description: resource.description,
      applicationCategory: resource.category,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: resource.ratingCount > 0 ? {
        '@type': 'AggregateRating',
        ratingValue: resource.rating,
        ratingCount: resource.ratingCount,
      } : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-black border-b-4 border-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              The Automator's Toolkit
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Scripts, templates, and guides to automate your way to freedom.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Stop trading time for money. Start building systems that work while you sleep.
            </p>
          </div>
        </section>

        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <section className="py-12 px-4 bg-gray-800 border-b-4 border-gray-700">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white">Featured Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredResources.map((resource) => (
                  <a
                    key={resource.id}
                    href={`/toolkit/${resource.slug}`}
                    className="block p-6 bg-gray-900 border-2 border-gray-700 hover:border-white transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 text-xs font-semibold bg-white text-black">
                        {resource.category}
                      </span>
                      <span className="text-yellow-400">★ {resource.rating.toFixed(1)}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gray-300">
                      {resource.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{resource.difficulty}</span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Gallery with Filters */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <ToolkitGallery initialResources={allResources} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-black border-t-4 border-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Want More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Members get access to premium automation blueprints, 1-on-1 coaching, and our private community.
            </p>
            <a
              href="/#membership"
              className="inline-block px-8 py-4 bg-white text-black font-bold hover:bg-gray-200 transition-all"
            >
              View Membership Options
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
