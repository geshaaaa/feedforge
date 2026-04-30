import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us · FeedForge',
  description:
    'Contact the FeedForge team for help with onboarding, feed quality, channel delivery, and scale planning.',
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
            <div>
              <div className="mb-4">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
                  • Contact Us
                </span>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
                Let&apos;s Improve Your <span className="text-accent">Product Feeds</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 lg:text-base">
                Tell us about your catalog, channels, and current workflow. We&apos;ll follow up with
                practical recommendations, implementation guidance, and clear next steps.
              </p>

              <div className="mt-8 space-y-4 text-sm text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">Email:</span> hello@feedforge.com
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Sales:</span> +1 (555) 123-4567
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Support hours:</span> Monday to Friday,
                  9:00 AM to 6:00 PM
                </p>
              </div>
            </div>

            <div className="border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <form className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-gray-900">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-accent"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-accent"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-900">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-accent"
                    placeholder="Acme Commerce"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">
                    What Would You Like Help With?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-y border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-accent"
                    placeholder="Share your channels, catalog size, feed issues, and goals."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border border-accent bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#070066]"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
