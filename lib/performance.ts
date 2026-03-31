/**
 * Performance Monitoring Utilities
 * Tracks Core Web Vitals for 2026 standards
 */

export function reportWebVitals(metric: any) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]', metric)
  }

  // Send to analytics in production
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    // Send to Plausible (custom events)
    if ((window as any).plausible) {
      (window as any).plausible('Web Vitals', {
        props: {
          metric: metric.name,
          value: Math.round(metric.value),
          rating: metric.rating,
        }
      })
    }

    // Track specific metrics
    switch (metric.name) {
      case 'FCP': // First Contentful Paint
        trackMetric('FCP', metric.value, metric.rating)
        break
      case 'LCP': // Largest Contentful Paint
        trackMetric('LCP', metric.value, metric.rating)
        break
      case 'CLS': // Cumulative Layout Shift
        trackMetric('CLS', metric.value, metric.rating)
        break
      case 'FID': // First Input Delay
        trackMetric('FID', metric.value, metric.rating)
        break
      case 'INP': // Interaction to Next Paint (new in 2024+)
        trackMetric('INP', metric.value, metric.rating)
        break
      case 'TTFB': // Time to First Byte
        trackMetric('TTFB', metric.value, metric.rating)
        break
    }
  }
}

function trackMetric(name: string, value: number, rating: string) {
  // Track performance thresholds
  const thresholds = {
    LCP: { good: 2500, poor: 4000 },
    FID: { good: 100, poor: 300 },
    CLS: { good: 0.1, poor: 0.25 },
    INP: { good: 200, poor: 500 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 },
  }

  const threshold = thresholds[name as keyof typeof thresholds]
  if (!threshold) return

  let status = 'good'
  if (value > threshold.poor) status = 'poor'
  else if (value > threshold.good) status = 'needs-improvement'

  console.log(`[Performance] ${name}: ${Math.round(value)}ms - ${status}`)
}

/**
 * Lazy load images for better performance
 */
export function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          const src = img.getAttribute('data-src')
          if (src) {
            img.src = src
            img.removeAttribute('data-src')
            observer.unobserve(img)
          }
        }
      })
    })

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img)
    })
  }
}

/**
 * Preload critical resources
 */
export function preloadCriticalAssets() {
  // Preload hero images
  const heroImages = ['/wfw-logo-rwb.png', '/may-z.png']

  heroImages.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  })
}

/**
 * Track page load performance
 */
export function trackPageLoad() {
  if (typeof window === 'undefined') return

  window.addEventListener('load', () => {
    const perfData = window.performance.timing
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
    const connectTime = perfData.responseEnd - perfData.requestStart
    const renderTime = perfData.domComplete - perfData.domLoading

    if ((window as any).plausible) {
      (window as any).plausible('Page Load', {
        props: {
          loadTime: Math.round(pageLoadTime),
          connectTime: Math.round(connectTime),
          renderTime: Math.round(renderTime),
        }
      })
    }

    console.log('[Page Performance]', {
      total: Math.round(pageLoadTime),
      connect: Math.round(connectTime),
      render: Math.round(renderTime),
    })
  })
}
