'use client'

import Link from 'next/link'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: false
  href?: undefined
  variant?: 'glass' | 'ghost'
}

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  asChild?: true
  href: string
  variant?: 'glass' | 'ghost'
}

export default function Button(props: ButtonProps | AnchorProps) {
  const { asChild, href, className = '', variant = 'glass', children, ...rest } = props as any
  const base = 'btn-glass'
  const variantClass = variant === 'ghost' ? '' : ''
  const cls = `${base} ${variantClass} ${className}`.trim()

  if (asChild && href) {
    return (
      <Link href={href} className={cls} {...(rest as any)}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} {...(rest as any)}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} {...(rest as any)}>
      {children}
    </button>
  )
}


