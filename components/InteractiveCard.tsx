'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface InteractiveCardProps {
  children: ReactNode
  delay?: number
  color?: 'purple' | 'green' | 'blue' | 'orange'
  href?: string
  className?: string
}

const colorClasses: Record<string, string> = {
  purple: 'border-purple-500/50 hover:border-purple-400 hover:shadow-purple-500/20',
  green: 'border-green-500/50 hover:border-green-400 hover:shadow-green-500/20',
  blue: 'border-blue-500/50 hover:border-blue-400 hover:shadow-blue-500/20',
  orange: 'border-orange-500/50 hover:border-orange-400 hover:shadow-orange-500/20',
}

export function InteractiveCard({
  children,
  delay = 0,
  color = 'purple',
  href,
  className = '',
}: InteractiveCardProps) {
  const baseClasses = `
    bg-gray-800/80 p-8 rounded-lg border-2 
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1
    ${colorClasses[color] || colorClasses.purple}
    ${className}
  `.trim()

  const animationStyle = {
    animationDelay: `${delay}s`,
  }

  if (href) {
    return (
      <Link 
        href={href}
        className={`block ${baseClasses}`}
        style={animationStyle}
      >
        {children}
      </Link>
    )
  }

  return (
    <div className={baseClasses} style={animationStyle}>
      {children}
    </div>
  )
}

export default InteractiveCard
