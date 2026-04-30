import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us · FeedForge',
  description: 'Get in touch with the FeedForge team to discuss your catalog, channels, and onboarding plan.',
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
                Let&apos;s talk about your <span className="text-accent">product feeds</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 lg:text-base">
                Share your catalog size, channels, and current workflow. Our team will reach out with
                recommendations and next steps.
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
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
