import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getResourceBySlug, getPublishedResources } from '@/lib/toolkit-data'
import CodeBlock from '@/components/toolkit/CodeBlock'
import DownloadButton from '@/components/toolkit/DownloadButton'
import RelatedResources from '@/components/toolkit/RelatedResources'

interface ToolkitResourcePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const resources = getPublishedResources()
  return resources.map((resource) => ({
    slug: resource.slug,
  }))
}

export async function generateMetadata({ params }: ToolkitResourcePageProps): Promise<Metadata> {
  const { slug } = await params
  const resource = getResourceBySlug(slug)

  if (!resource) {
    return {
      title: 'Resource Not Found | WorkFreeWork',
    }
  }

  return {
    title: `${resource.title} | The Automator's Toolkit`,
    description: resource.description,
    keywords: [...resource.tags, resource.category, resource.difficulty, 'automation'],
    openGraph: {
      title: resource.title,
      description: resource.description,
      type: 'article',
      url: `https://workfreework.com/toolkit/${resource.slug}`,
      images: [
        {
          url: `https://workfreework.com/og-toolkit-${resource.slug}.png`,
          width: 1200,
          height: 630,
          alt: resource.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: resource.title,
      description: resource.description,
      images: [`https://workfreework.com/og-toolkit-${resource.slug}.png`],
    },
  }
}

export default async function ToolkitResourcePage({ params }: ToolkitResourcePageProps) {
  const { slug } = await params
  const resource = getResourceBySlug(slug)

  if (!resource) {
    notFound()
  }

  const difficultyColors = {
    Beginner: 'bg-green-500',
    Intermediate: 'bg-yellow-500',
    Advanced: 'bg-red-500',
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: resource.title,
    description: resource.description,
    applicationCategory: resource.category,
    author: {
      '@type': resource.author.url ? 'Person' : 'Organization',
      name: resource.author.name,
      url: resource.author.url,
    },
    datePublished: resource.dateAdded,
    aggregateRating: resource.ratingCount > 0 ? {
      '@type': 'AggregateRating',
      ratingValue: resource.rating,
      ratingCount: resource.ratingCount,
      bestRating: 5,
      worstRating: 1,
    } : undefined,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    keywords: resource.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gray-900">
        {/* Breadcrumbs */}
        <div className="bg-gray-800 border-b-2 border-gray-700 px-4 py-3">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/toolkit" className="hover:text-white">Toolkit</Link>
              <span>/</span>
              <span className="text-white">{resource.title}</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <section className="py-12 px-4 bg-black border-b-4 border-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 text-sm font-semibold bg-white text-black">
                {resource.category}
              </span>
              <span className={`px-4 py-2 text-sm font-semibold text-white ${difficultyColors[resource.difficulty]}`}>
                {resource.difficulty}
              </span>
              {resource.rating > 0 && (
                <span className="px-4 py-2 text-sm font-semibold bg-gray-800 text-yellow-400 border-2 border-gray-700">
                  ★ {resource.rating.toFixed(1)} ({resource.ratingCount} reviews)
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {resource.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              {resource.description}
            </p>

            <div className="flex flex-wrap gap-4 items-center text-sm text-gray-400">
              <span>By {resource.author.name}</span>
              <span>•</span>
              <span>{resource.downloads} downloads</span>
              <span>•</span>
              <span>Added {new Date(resource.dateAdded).toLocaleDateString()}</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Full Description */}
            {resource.fullDescription && (
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Overview</h2>
                <div className="prose prose-invert max-w-none">
                  {resource.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Download Section */}
            <div className="p-6 bg-gray-800 border-2 border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-white">Get This Resource</h3>
              <div className="flex flex-wrap gap-4">
                {resource.downloadUrl && (
                  <DownloadButton
                    resourceId={resource.id}
                    downloadUrl={resource.downloadUrl}
                    title={resource.title}
                  />
                )}
                {resource.githubUrl && (
                  <a
                    href={resource.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-900 text-white font-semibold border-2 border-gray-700 hover:border-white transition-all"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-2 text-sm bg-gray-800 text-gray-300 border border-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            {resource.prerequisites && resource.prerequisites.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Prerequisites</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {resource.prerequisites.map((prereq, index) => (
                    <li key={index}>{prereq}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Dependencies */}
            {resource.dependencies && resource.dependencies.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Dependencies</h3>
                <div className="p-4 bg-gray-800 border-2 border-gray-700">
                  <code className="text-sm text-gray-300">
                    {resource.dependencies.map((dep, index) => (
                      <div key={index}>{dep}</div>
                    ))}
                  </code>
                </div>
              </div>
            )}

            {/* Installation Steps */}
            {resource.installationSteps && resource.installationSteps.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Installation</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-300">
                  {resource.installationSteps.map((step, index) => (
                    <li key={index} className="pl-2">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Usage Examples */}
            {resource.usageExamples && resource.usageExamples.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Usage Examples</h3>
                <div className="space-y-6">
                  {resource.usageExamples.map((example, index) => (
                    <div key={index}>
                      <h4 className="text-xl font-semibold mb-3 text-white">{example.title}</h4>
                      <CodeBlock code={example.code} language={example.language} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Resources */}
            {resource.relatedResources && resource.relatedResources.length > 0 && (
              <RelatedResources resourceIds={resource.relatedResources} />
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-black border-t-4 border-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Automate Everything?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our community and get access to premium resources, coaching, and support.
            </p>
            <a
              href="/#membership"
              className="inline-block px-8 py-4 bg-white text-black font-bold hover:bg-gray-200 transition-all"
            >
              Become a Member
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
