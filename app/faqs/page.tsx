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
    question: 'What is FeedForge?',
    answer:
      'FeedForge is an AI-powered product feed management platform that helps eCommerce businesses import, optimize, validate, and export product feeds from a single dashboard.',
  },
  {
    question: 'How does FeedForge improve product feed quality?',
    answer:
      'FeedForge improves feed quality through automated field mapping, validation checks, and AI enrichment for product titles, descriptions, and categories.',
  },
  {
    question: 'Which platforms and data sources can I import from?',
    answer:
      'You can import product data into FeedForge using CSV upload, Shopify integration, SFTP/FTP, and HTTPS pull endpoints.',
  },
  {
    question: 'Does FeedForge support Shopify product feed integration?',
    answer:
      'Yes. FeedForge supports Shopify OAuth connection and direct Shopify product import workflows for faster catalog onboarding.',
  },
  {
    question: 'Can I upload CSV files for product feed management?',
    answer:
      'Yes. FeedForge supports CSV-based product feed upload and processing, followed by mapping, validation, and enrichment steps.',
  },
  {
    question: 'What is AI product feed enrichment?',
    answer:
      'AI product feed enrichment uses machine learning to enhance product attributes like titles, descriptions, and categories to make listings more accurate and channel-ready.',
  },
  {
    question: 'Can I review AI-generated feed changes before publishing?',
    answer:
      'Yes. FeedForge provides review workflows where you can accept, reject, or modify AI-generated feed suggestions before export.',
  },
  {
    question: 'How does product feed validation work in FeedForge?',
    answer:
      'FeedForge runs validation rules on mapped feed data, highlights row-level errors, and provides health scores and issue history so teams can resolve problems quickly.',
  },
  {
    question: 'What export formats does FeedForge support?',
    answer:
      'FeedForge supports export in common formats such as CSV and JSON, including Google Merchant-style feed exports.',
  },
  {
    question: 'Can FeedForge deliver feeds automatically to external systems?',
    answer:
      'Yes. FeedForge supports automated feed delivery via SFTP, FTP, and HTTPS push, with transfer job tracking for visibility.',
  },
  {
    question: 'Is FeedForge suitable for agencies and multi-brand teams?',
    answer:
      'Yes. FeedForge supports organization onboarding, team collaboration, workspace-level settings, and role-based admin workflows.',
  },
  {
    question: 'Does FeedForge offer product feed APIs?',
    answer:
      'Yes. FeedForge provides API endpoints for authentication, feed creation, import, validation, enrichment, export, and admin operations.',
  },
  {
    question: 'Is FeedForge secure for production use?',
    answer:
      'FeedForge is designed with secure authentication and production hardening practices to support reliable and secure feed operations.',
  },
  {
    question: 'Can I track feed processing and transfer status?',
    answer:
      'Yes. FeedForge includes status tracking for feed jobs, validation runs, enrichment runs, and transfer jobs so teams can monitor every stage.',
  },
  {
    question: 'Why choose FeedForge for eCommerce feed management?',
    answer:
      'FeedForge combines AI enrichment, automated validation, flexible import/export options, and team-ready workflows to reduce manual effort and improve product feed performance.',
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
              Frequently Asked Questions About <span className="text-accent">FeedForge</span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-gray-600 lg:text-base">
              Quick answers about setup, channels, pricing, and day-to-day usage.
            </p>

            <FaqAccordion items={faqItems} />

            <div className="mx-auto mt-20 max-w-4xl overflow-hidden rounded-xl border border-accent/25 bg-gradient-to-br from-accent/[0.07] via-white to-accent/[0.04] px-8 py-12 text-center shadow-sm transition-shadow duration-500 hover:shadow-lg hover:shadow-accent/10 md:px-12">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Ready to Scale Your <span className="text-accent">Product Feeds</span>?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600">
                Book a guided demo to see how FeedForge can improve feed quality, reduce manual
                work, and automate delivery across your channels.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-gray-700 sm:gap-3">
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1">Import in Minutes</span>
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1">AI Enrichment</span>
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1">Automated Delivery</span>
              </div>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/#request-demo"
                  className="inline-flex items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#070066] hover:shadow-md hover:shadow-accent/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Request a Demo
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
