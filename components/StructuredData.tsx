/**
 * Structured Data Component for SEO and AI Optimization
 * Provides Schema.org markup for better search engine understanding
 */

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WorkFreeWork",
    "url": "https://workfreework.com",
    "logo": "https://workfreework.com/wfw-logo-rwb.png",
    "description": "A manual for life after jobs — automation, autonomy, and meaning without the corporate leash",
    "sameAs": [
      "https://twitter.com/workfreework",
      "https://twitter.com/thinkazoo"
    ],
    "founder": {
      "@type": "Person",
      "name": "Thinkazoo"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WorkFreeWork",
    "url": "https://workfreework.com",
    "description": "Design Your Life When AI Eats Your Task List - Automation, autonomy, and meaning without the corporate leash",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://workfreework.com/essays?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "WorkFreeWork Automation Tools",
    "applicationCategory": "ProductivityApplication",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "497",
      "offerCount": "3"
    },
    "description": "Automation tools, templates, and playbooks for building autonomous income systems",
    "operatingSystem": "Web-based",
    "url": "https://workfreework.com/tools"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ArticleSchemaProps {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author: string
  url: string
  imageUrl: string
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  url,
  imageUrl
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "WorkFreeWork",
      "logo": {
        "@type": "ImageObject",
        "url": "https://workfreework.com/wfw-logo-rwb.png"
      }
    },
    "image": imageUrl,
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
