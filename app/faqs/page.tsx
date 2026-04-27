import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FaqAccordion from './FaqAccordion'

export const metadata: Metadata = {
  title: 'FAQs · FeedForge',
  description: 'Answers to common questions about FeedForge setup, pricing, and support.',
}

const faqItems = [
  {
    question: 'How quickly can we get FeedForge live?',
    answer:
      'Most teams connect their first catalog and channel in under a day. You can import from sheets, PIM exports, or object storage and publish with validation checks.',
  },
  {
    question: 'Does FeedForge support multiple sales channels?',
    answer:
      'Yes. You can manage one source catalog and publish channel-ready feeds for platforms like Google Shopping, Meta, and marketplaces from a single workflow.',
  },
  {
    question: 'What does the AI Readiness Score include?',
    answer:
      'The score evaluates title quality, attribute completeness, taxonomy alignment, and content consistency so your products perform better in ads and AI-driven discovery.',
  },
  {
    question: 'Can multiple team members work in the same workspace?',
    answer:
      'Absolutely. Teams can collaborate with shared projects, review feed changes, and manage roles so merchandising, marketing, and ops can work together.',
  },
  {
    question: 'Do you offer a free trial?',
    answer:
      'Yes. The Standard plan includes a free trial period so you can validate impact before scaling. Enterprise onboarding and custom terms are also available.',
  },
  {
    question: 'What support options are available?',
    answer:
      'Every plan includes core support. Higher tiers add faster response targets and advanced onboarding guidance for large or complex catalogs.',
  },
] as const

export default function FaqsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <div className="mb-4 flex justify-center">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
                • FAQs
              </span>
            </div>
            <h1 className="mb-4 text-center text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
              Frequently asked questions about <span className="text-accent">FeedForge</span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-gray-600 lg:text-base">
              Quick answers about setup, channels, pricing, and day-to-day usage.
            </p>

            <FaqAccordion items={faqItems} />

            <div className="mx-auto mt-20 max-w-3xl overflow-hidden rounded-xl border border-accent/25 bg-gradient-to-br from-accent/[0.07] via-white to-accent/[0.04] px-8 py-12 text-center shadow-sm transition-shadow duration-500 hover:shadow-lg hover:shadow-accent/10 md:px-12">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Still have questions? <span className="text-accent">Talk to our team</span>
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-gray-600">
                We can help you choose a plan, map your catalog workflow, and get your first channel
                live faster.
              </p>
              <Link
                href="/pricing"
                className="mt-8 inline-flex items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#070066] hover:shadow-md hover:shadow-accent/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
