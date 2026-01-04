'use client'

import { ReactNode } from 'react'

interface StaggerGridProps {
  children: ReactNode
  className?: string
}

export function StaggerGrid({ children, className = '' }: StaggerGridProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default StaggerGrid
