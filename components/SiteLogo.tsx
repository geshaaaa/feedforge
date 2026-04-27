'use client'

import Image from 'next/image'
import Link from 'next/link'

type SiteLogoProps = {
  className?: string
  imgClassName?: string
}

export default function SiteLogo({
  className,
  imgClassName = 'h-7 w-auto sm:h-8',
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex min-w-0 shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${className ?? ''}`}
      aria-label="FeedForge home"
    >
      <Image
        src="/feedforge-logo.png"
        alt="FeedForge.AI"
        width={320}
        height={72}
        className={`${imgClassName} object-contain object-left`}
        priority
      />
    </Link>
  )
}
