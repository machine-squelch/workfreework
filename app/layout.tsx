import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

const RonnyWidget = dynamic(() => import('@/components/RonnyWidget'), { ssr: false })

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','700'] })

export const metadata: Metadata = {
  title: 'WorkFreeWork - Design Your Life When AI Eats Your Task List',
  description: 'A manual for life after jobs — automation, autonomy, and meaning without the corporate leash. Practical tools, sharp analysis, and community for the post-work economy.',
  keywords: ['AI automation', 'post-work', 'automation tools', 'work freedom', 'future of work', 'UBI', 'automation playbook'],
  authors: [{ name: 'Thinkazoo' }],
  metadataBase: new URL('https://workfreework.com'),
  openGraph: {
    title: 'WorkFreeWork - Work Was a Beta Version of Living',
    description: 'The machines took the chores. Capital kept the rules. Time to rewrite both.',
    type: 'website',
    url: 'https://workfreework.com',
    siteName: 'WorkFreeWork',
    locale: 'en_US',
    images: [
      {
        url: '/wfw-logo-rwb.png',
        width: 1200,
        height: 630,
        alt: 'WorkFreeWork - A manual for life after jobs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorkFreeWork - Work Was a Beta Version of Living',
    description: 'A manual for life after jobs — automation, autonomy, and meaning without the corporate leash.',
    images: ['/wfw-logo-rwb.png'],
    creator: '@thinkazoo',
    site: '@workfreework',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="copyright" content="© 2025-2026 Thinkazoo LLC. All rights reserved." />
        <meta name="author" content="Thinkazoo" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <RonnyWidget />
      </body>
    </html>
  )
}

