import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Products · FeedForge',
  description: 'FeedForge products are coming soon.',
}

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="mb-4 flex justify-center">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
                • Products
              </span>
            </div>
            <h1 className="mb-4 text-center text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
              <span className="text-accent">Coming soon</span>
            </h1>
            <p className="mx-auto max-w-md text-center text-sm leading-relaxed text-gray-600 lg:text-base">
              We&apos;re building something new. Check back soon, or explore the rest of the site in
              the meantime.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex border border-accent bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#070066] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Back to home
              </Link>
              <Link
                href="/pricing"
                className="inline-flex border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:border-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                View pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
