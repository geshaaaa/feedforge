import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pricing · FeedForge',
  description: 'Plans for optimizing product feeds with AI across every channel.',
}

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    detail: 'Get started with core feed tools',
    features: ['First index free', 'Basic AI suggestions', 'Email support'],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: 'Custom',
    detail: 'For scaling brands and agencies',
    features: ['Unlimited channels', 'AI Readiness Score', 'Priority support', 'API access'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    detail: 'Security, SLAs, and dedicated support',
    features: ['SSO & compliance', 'Dedicated CSM', 'Custom integrations', 'Volume pricing'],
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
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
              Start free, then pay as you grow. Every plan includes FeedForge AI optimization
              for titles, descriptions, and channel-ready feeds.
            </p>

            <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col border p-6 shadow-sm transition-shadow duration-300 hover:shadow-md ${
                    plan.highlighted
                      ? 'border-accent bg-accent/[0.03] ring-1 ring-accent/20'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <h2 className="text-lg font-bold text-gray-900">{plan.name}</h2>
                  <p className="mt-1 text-2xl font-bold text-accent">{plan.price}</p>
                  <p className="mt-2 text-sm text-gray-600">{plan.detail}</p>
                  <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-gray-700">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={`mt-8 w-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                      plan.highlighted
                        ? 'border-accent bg-accent text-white hover:bg-[#070066]'
                        : 'border-gray-300 bg-white text-gray-900 hover:border-gray-900'
                    }`}
                  >
                    {plan.name === 'Starter' ? 'Start free' : 'Contact sales'}
                  </button>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-12 max-w-2xl text-center text-xs text-gray-500">
              Taxes may apply. Enterprise agreements include custom terms and onboarding.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
