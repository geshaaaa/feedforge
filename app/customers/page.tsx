import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Customers · FeedForge',
  description: 'How brands, agencies, and marketplaces use FeedForge for feed quality and AI search.',
}

const highlights = [
  {
    title: 'Retail & D2C',
    body: 'Higher-quality listings across Google Shopping, Meta, and marketplaces with less manual work.',
  },
  {
    title: 'Agencies',
    body: 'One dashboard for every client catalog—fewer disapprovals and faster time to live.',
  },
  {
    title: 'Marketplaces',
    body: 'Cleaner merchant data at scale so search and recommendations perform better.',
  },
]

const testimonials = [
  {
    quote:
      'Feed quality used to eat a full day every week. Now our Google and Meta feeds stay compliant without the fire drills.',
    author: 'Sarah Chen',
    role: 'Head of E‑commerce',
    company: 'Northline Apparel',
  },
  {
    quote:
      'Our clients see fewer disapprovals and faster launches. The AI Readiness view alone changed how we pitch feed work.',
    author: 'Marcus Webb',
    role: 'Director of Performance',
    company: 'Brightside Digital',
  },
  {
    quote:
      'We needed cleaner merchant data at scale. Standardized titles and attributes made on-site search noticeably better.',
    author: 'Elena Ruiz',
    role: 'VP Product',
    company: 'OpenMart',
  },
  {
    quote:
      'Finally one place to see what’s wrong with a SKU before it costs us ad spend. The team actually uses it daily.',
    author: 'James Okonkwo',
    role: 'Growth Lead',
    company: 'Field & Row',
  },
]

const marqueeItems = [...testimonials, ...testimonials]

export default function CustomersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes customer-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .customer-marquee-track {
              animation: customer-marquee 42s linear infinite;
            }
            .customer-marquee-track:hover {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .customer-marquee-track {
                animation: none;
              }
            }
          `,
        }}
      />
      <Header />
      <main className="flex-1">
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <div className="mb-4 flex justify-center">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
                • Customers
              </span>
            </div>
            <h1 className="mb-4 text-center text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
              Built for teams who ship{' '}
              <span className="text-accent">great product data</span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-gray-600 lg:text-base">
              FeedForge helps merchants and partners keep feeds accurate, complete, and ready for
              traditional ads and AI-powered discovery—without growing headcount.
            </p>

            <div className="mt-14">
              <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                Trusted by teams like yours
              </p>
              <div className="relative h-[300px] overflow-hidden md:h-[280px]">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />
                <div className="customer-marquee-track flex w-max gap-6 py-2">
                  {marqueeItems.map((t, i) => (
                    <article
                      key={`${t.author}-${i}`}
                      className="group flex h-[260px] w-[min(calc(100vw-3rem),340px)] shrink-0 flex-col justify-between border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 md:h-[240px] md:w-[360px]"
                    >
                      <p className="text-sm leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="border-t border-gray-100 pt-4 transition-colors duration-300 group-hover:border-accent/20">
                        <p className="text-sm font-bold text-gray-900">{t.author}</p>
                        <p className="text-xs text-gray-600">
                          {t.role}
                          <span className="text-accent"> · {t.company}</span>
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/35 hover:shadow-md hover:shadow-accent/5"
                >
                  <h2 className="text-base font-bold text-accent">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 transition-colors duration-300 hover:text-gray-800">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-20 max-w-3xl overflow-hidden rounded-xl border border-accent/25 bg-gradient-to-br from-accent/[0.07] via-white to-accent/[0.04] px-8 py-12 text-center shadow-sm transition-shadow duration-500 hover:shadow-lg hover:shadow-accent/10 md:px-12">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Start your journey with{' '}
                <span className="text-accent transition-colors duration-300 hover:text-[#070066]">
                  FeedForge
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-gray-600">
                Join teams who are already shipping cleaner feeds and stronger performance across
                every channel.
              </p>
              <Link
                href="/pricing"
                className="mt-8 inline-flex items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#070066] hover:shadow-md hover:shadow-accent/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Start now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
