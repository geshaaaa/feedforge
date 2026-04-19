import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StartBuilding from '@/components/StartBuilding'

export const metadata: Metadata = {
  title: 'Pricing · FeedForge',
  description: 'Plans for optimizing product feeds with AI across every channel.',
}

function FeatureCheck() {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent text-accent"
      aria-hidden
    >
      <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
}

/** Solid accent circle with white check — Starter workloads section */
function SolidAccentCheck() {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent"
      aria-hidden
    >
      <svg className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
}

const starterWorkloads = [
  {
    title: 'Recommendation engine',
    contextLabel: 'Given an e-commerce site with:',
    inputs: ['50K products', '10KB metadata per product', 'Using 1024 dimensions embeddings'],
    outputs: ['~ 44K recommendations per day', '~ 2K product updates per day'],
  },
  {
    title: 'Semantic search',
    contextLabel: 'Given a knowledge base of:',
    inputs: ['~ 30K documents', '20KB document size on average', 'Using 1024 dimensions embeddings'],
    outputs: ['~ 15k searches per day', '~ 660 document updates per day'],
  },
  {
    title: 'Forum answering bot (RAG)',
    contextLabel: 'Given a user forum with:',
    inputs: ['~ 10 categories', '5KB post size on average', 'Using 1024 dimensions embeddings'],
    outputs: ['~ 130K category-scoped chats per day', '~ 3K messages indexed per day'],
  },
] as const

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
            <div className="mb-4 flex justify-center">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
                • Pricing
              </span>
            </div>
            <h1 className="mb-4 text-center text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
              Plans that scale with your{' '}
              <span className="text-accent">catalog</span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-gray-600 lg:text-base">
              Start free, then scale with pay-as-you-go pricing. Every tier includes FeedForge AI for
              titles, descriptions, and channel-ready feeds.
            </p>

            {/* Three-column pricing table */}
            <div className="mx-auto mt-12 max-w-6xl lg:mt-16">
              <div className="grid grid-cols-1 divide-y divide-gray-200 border border-gray-200 bg-white lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                {/* Starter */}
                <div className="flex flex-col px-6 py-8 sm:px-8 sm:py-10 lg:py-12">
                  <h2 className="text-2xl font-bold text-gray-900">Starter</h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    For trying out FeedForge and small catalogs.
                  </p>
                  <button
                    type="button"
                    className="mt-6 w-full border border-gray-900 bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50"
                  >
                    Start for Free
                  </button>
                  <div className="mt-6">
                    <p className="text-3xl font-bold text-accent lg:text-4xl">Free</p>
                    <button
                      type="button"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                    >
                      View included usage
                      <ChevronDownIcon className="text-accent" />
                    </button>
                  </div>
                  <hr className="my-8 border-gray-200" />
                  <ul className="flex flex-col gap-4 text-sm leading-snug text-gray-800">
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Core feed connections &amp; channel exports</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>AI title &amp; description suggestions</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>AI Readiness preview (limited SKUs)</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Dashboard metrics &amp; health overview</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Community support &amp; docs</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="mt-8 inline-flex items-center gap-1 self-start text-sm font-medium text-accent hover:underline"
                  >
                    See example Starter workloads
                    <ChevronDownIcon className="text-accent" />
                  </button>
                </div>

                {/* Standard — highlighted */}
                <div className="relative flex flex-col bg-white px-6 py-8 sm:px-8 sm:py-10 lg:py-12">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-2xl font-bold text-gray-900">Standard</h2>
                    <span className="border border-gray-300 bg-gray-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-900">
                      Popular
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    For production feeds at any scale.
                  </p>
                  <button
                    type="button"
                    className="mt-6 w-full border border-accent bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#070066]"
                  >
                    Start Free Trial
                  </button>
                  <div className="mt-6">
                    <p className="text-2xl font-bold leading-tight text-accent sm:text-3xl lg:text-4xl">
                      $50/month min. usage
                    </p>
                    <p className="mt-2 text-xs text-gray-500">3 week trial includes $300 credits</p>
                  </div>
                  <hr className="my-8 border-gray-200" />
                  <ul className="flex flex-col gap-4 text-sm leading-snug text-gray-800">
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Pay-as-you-go beyond minimums</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Unlimited channels &amp; scheduled syncs</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Full AI Readiness Score &amp; remediation</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Import from sheets, PIM, and object storage</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Multiple projects, environments, and users</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>SAML SSO &amp; API key RBAC</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Backup &amp; restore for feed versions</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Prometheus / webhook metrics</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>HIPAA add-on available</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>
                        Includes free support;{' '}
                        <span className="font-medium text-accent">Developer</span> or{' '}
                        <span className="font-medium text-accent">Pro support</span> add-ons for SLAs
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Enterprise */}
                <div className="flex flex-col px-6 py-8 sm:px-8 sm:py-10 lg:py-12">
                  <h2 className="text-2xl font-bold text-gray-900">Enterprise</h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    For mission-critical commerce and AI search programs.
                  </p>
                  <div className="mt-6 grid grid-cols-1 gap-2 min-[400px]:grid-cols-2">
                    <button
                      type="button"
                      className="w-full bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                    >
                      Get Started
                    </button>
                    <button
                      type="button"
                      className="w-full border border-gray-900 bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50"
                    >
                      Request Trial
                    </button>
                  </div>
                  <div className="mt-6">
                    <p className="text-2xl font-bold leading-tight text-accent sm:text-3xl lg:text-4xl">
                      $500/month min. usage
                    </p>
                  </div>
                  <hr className="my-8 border-gray-200" />
                  <ul className="flex flex-col gap-4 text-sm leading-snug text-gray-800">
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Everything in Standard</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>99.95% uptime SLA</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Private networking &amp; VPC options</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Customer-managed encryption keys</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Audit logs &amp; retention policies</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Service accounts &amp; admin APIs</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>HIPAA &amp; compliance packages</span>
                    </li>
                    <li className="flex gap-3">
                      <FeatureCheck />
                      <span>Pro support included</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What you can build — Starter plan examples */}
            <div className="mx-auto mt-16 max-w-6xl lg:mt-24">
              <h2 className="mb-6 text-left text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                What you can build on the Starter plan
              </h2>
              <div className="border border-gray-200 bg-white">
                <div className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                  {starterWorkloads.map((col) => (
                    <div key={col.title} className="flex flex-col px-6 py-8 sm:px-8 sm:py-10">
                      <h3 className="text-base font-bold text-gray-900 sm:text-lg">{col.title}</h3>
                      <p className="mt-4 text-sm text-gray-600">{col.contextLabel}</p>
                      <ul className="mt-3 flex flex-col gap-3 text-sm text-gray-800">
                        {col.inputs.map((line) => (
                          <li key={line} className="flex gap-3">
                            <SolidAccentCheck />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                      <hr className="my-6 border-gray-200" />
                      <p className="text-xs font-medium text-gray-600">Starter plan gives you:</p>
                      <ul className="mt-3 flex flex-col gap-3 text-sm text-gray-800">
                        {col.outputs.map((line) => (
                          <li key={line} className="flex gap-3">
                            <SolidAccentCheck />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 max-w-6xl text-left text-[11px] leading-relaxed text-gray-500">
                <span className="font-semibold text-gray-600">Disclaimer:</span> Examples are illustrative
                only, not quotes or binding offers. Database usage only; excludes Inference
                (embeddings/reranking) and Assistant usage, as well as initial data import. Subject to
                change.
              </p>
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-gray-500">
              Minimums and credits are examples for layout; final pricing is set in your order form.
              Taxes may apply. Enterprise agreements include custom terms and onboarding.
            </p>
          </div>

          <StartBuilding />
        </section>
      </main>
      <Footer />
    </div>
  )
}
