'use client'

import dynamic from 'next/dynamic'

const RonnyWidget = dynamic(() => import('@/components/RonnyWidget'), { ssr: false })

export default function RonnyWidgetWrapper() {
  if (process.env.NEXT_PUBLIC_ENABLE_RONNY_WIDGET !== 'true') {
    return null
  }
  return <RonnyWidget />
}
