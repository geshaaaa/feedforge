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
        src="/images/feedforge-triangle.svg"
        alt="FeedForge logo mark"
        width={40}
        height={40}
        className={`${imgClassName} object-contain object-left dark:hidden`}
        priority
      />
      <Image
        src="/images/feedforge-triangle-white.svg"
        alt="FeedForge logo mark"
        width={40}
        height={40}
        className={`${imgClassName} hidden object-contain object-left dark:block`}
        priority
      />
      <span className="ml-2 text-base font-light uppercase tracking-[0.14em] text-[#586487] dark:text-white sm:text-lg">
        FEEDFORGE.AI
      </span>
    </Link>
  )
}
