'use client'

const teamTypes = [
  {
    icon: (
      <svg className="h-8 w-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Brands & retailers',
    description: 'Stop losing sales to competitors. Increase revenue across Google, Meta, Amazon, and AI search without hiring more staff.',
    bullets: [
      'More customers find your products when they search',
      'Better ad performance with less manual work',
      'Products show up in AI shopping results automatically',
    ],
  },
  {
    icon: (
      <svg className="h-8 w-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Agencies & feed managers',
    description: 'Deliver better results for clients faster. Automate feed work so you can take on more clients and show better ROI.',
    bullets: [
      'Manage all client catalogs from one dashboard',
      'Fewer disapprovals and faster problem resolution',
      'Onboard new clients faster with automation',
    ],
  },
  {
    icon: (
      <svg className="h-8 w-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Marketplaces & platforms',
    description: 'Give merchants better product listings automatically. Improve search quality without scaling your support team.',
    bullets: [
      'Automatically clean and standardize product data',
      'Faster merchant onboarding with better quality',
      'Less manual review work, happier merchants',
    ],
  },
]

export default function BuiltForTeams() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Header */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-teal"></div>
          <span className="text-sm font-medium text-teal">Designed for Teams</span>
        </div>
        
        <h2 className="mb-4 text-center font-serif text-4xl font-bold text-gray-900 lg:text-5xl">
          Built for teams who live in product data
        </h2>
        
        <p className="mx-auto mb-12 max-w-2xl text-center text-base text-gray-600">
          Your team shouldn't spend hours fixing feeds. FeedForge automates data quality work so your products perform better everywhere. Get time back to focus on growing revenue.
        </p>

        {/* Large Container with Grid */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {teamTypes.map((team, index) => (
              <div key={index} className="relative">
                {/* Vertical line separator (not on last item) */}
                {index < teamTypes.length - 1 && (
                  <div className="absolute right-0 top-0 hidden h-full w-px bg-gray-200 md:block" />
                )}
                
                <div className="pr-8 md:pr-8">
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    {team.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-center text-xl font-bold text-gray-900">
                    {team.title}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="space-y-3">
                    {team.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal"></span>
                        <span className="text-sm text-gray-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

