'use client'

const stats = [
  {
    value: '243%',
    category: 'PERPLEXITY GROWTH',
    details: '3.8M to 1.3B visits in 2024',
    icon: (
      <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    value: '60%',
    category: 'ZERO-CLICK SEARCHES',
    details: 'Answers without visiting sites',
    icon: (
      <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    value: '800M',
    category: 'CHATGPT WEEKLY USERS',
    details: 'Doubled from 400M in Feb 2025',
    icon: (
      <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

export default function SearchChanging() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left Column - Heading and Description */}
          <div>
            <div className="mb-4 flex items-center justify-center lg:justify-start">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
                • MARKET SHIFT DETECTED
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl xl:text-6xl">
              Search is Changing.{' '}
              <span className="text-gray-900">Irreversibly Fast.</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Customer behavior is outpacing your marketing stack. AI-powered discovery is fundamentally reshaping how the world finds your products.
            </p>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="flex flex-row items-center justify-center gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative flex aspect-square w-48 items-center justify-center rounded-full border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-900 hover:shadow-md hover:-translate-y-1"
              >
                <div className="absolute right-6 top-6 z-10">
                  <div className="h-6 w-6 text-gray-900">{stat.icon}</div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 text-2xl font-bold text-gray-900 lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-900">
                    {stat.category}
                  </div>
                  <div className="text-xs leading-tight text-gray-600">
                    {stat.details}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simulation Mode Section */}
        <div className="mt-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start mb-8">
            {/* Legacy Keyword Strategy Container */}
            <div className="flex h-full flex-col border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <div className="mb-2 text-xs text-gray-500">SIMULATION MODE</div>
                <div className="flex items-center gap-3">
                  <span className="bg-gray-100 border border-gray-300 px-3 py-1 text-xs font-medium text-gray-900">
                    THE CHALLENGE
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">Legacy Keyword Strategy</h3>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 text-lg font-bold text-gray-900">
                  Your Strategy Is Losing Revenue Every Day.
                </h4>
                <p className="text-sm text-gray-600">
                  Old feed tools optimize for keywords, not conversations. When customers ask AI assistants natural questions, your products get left behind.
                </p>
              </div>

              {/* System Status */}
              <div className="mb-4 flex items-center gap-2 transition-all duration-300 hover:opacity-80 cursor-pointer">
                <svg className="h-5 w-5 text-gray-900 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <div className="text-xs text-gray-500 transition-colors duration-300">SYSTEM STATUS</div>
                  <div className="text-sm font-bold text-gray-900 transition-colors duration-300">AT RISK</div>
                </div>
                <div className="ml-auto flex items-end gap-1">
                  <div className="h-8 w-2 bg-gray-900 transition-all duration-300"></div>
                  <div className="h-6 w-2 bg-gray-900 transition-all duration-300"></div>
                  <div className="h-4 w-2 bg-gray-900 transition-all duration-300"></div>
                  <div className="h-3 w-2 bg-gray-900 transition-all duration-300"></div>
                  <div className="h-2 w-2 bg-gray-900 transition-all duration-300"></div>
                </div>
              </div>

              {/* Legacy Cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex flex-col items-center justify-between border border-gray-200 bg-gray-50 p-3 text-center">
                  <div className="mb-2 text-xl font-bold text-gray-900">46%</div>
                  <div className="mb-2 text-xs text-gray-700">Revenue drop when AI search appears</div>
                  <svg className="h-4 w-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="flex flex-col items-center justify-between border border-gray-200 bg-gray-50 p-3 text-center">
                  <div className="mb-2 text-xl font-bold text-gray-900">77%</div>
                  <div className="mb-2 text-xs text-gray-700">Customers use AI for discovery</div>
                  <svg className="h-4 w-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="flex flex-col items-center justify-between border border-gray-200 bg-gray-50 p-3 text-center">
                  <div className="mb-2 text-xl font-bold text-gray-900">90M+</div>
                  <div className="mb-2 text-xs text-gray-700">Will rely on AI search by 2027</div>
                  <svg className="h-4 w-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* AI-Native Optimization Container */}
            <div className="flex h-full flex-col border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <div className="mb-2 text-xs text-gray-500">SIMULATION MODE</div>
                <div className="flex items-center gap-3">
                  <span className="bg-gray-100 border border-gray-300 px-3 py-1 text-xs font-medium text-gray-900">
                    THE SOLUTION
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">AI-Native Optimization</h3>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 text-lg font-bold text-gray-900">
                  Future-Proof Your Revenue Stream
                </h4>
                <p className="text-sm text-gray-600">
                  FeedForge optimizes your product data for conversational context. We ensure your products are the answer when AI asks.
                </p>
              </div>

              {/* System Status */}
              <div className="mb-4 flex items-center gap-2 transition-all duration-300 hover:opacity-80 cursor-pointer">
                <svg className="h-5 w-5 text-gray-900 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="text-xs text-gray-500 transition-colors duration-300">SYSTEM STATUS</div>
                  <div className="text-sm font-bold text-gray-900 transition-colors duration-300">OPTIMIZED</div>
                </div>
                <div className="ml-auto">
                  <svg className="h-5 w-5 text-gray-900 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>

              {/* AI-Native Cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex flex-col items-center border border-gray-200 bg-white p-3 text-center">
                  <svg className="mb-2 h-5 w-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="mb-1 text-sm font-semibold text-gray-900">AI-Native Platform</div>
                  <div className="text-xs text-gray-600">Built for conversational search</div>
                </div>
                <div className="flex flex-col items-center border border-gray-200 bg-white p-3 text-center">
                  <svg className="mb-2 h-5 w-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="mb-1 text-sm font-semibold text-gray-900">Omnichannel Performance</div>
                  <div className="text-xs text-gray-600">Managed from one central dashboard</div>
                </div>
                <div className="flex flex-col items-center border border-gray-200 bg-white p-3 text-center">
                  <svg className="mb-2 h-5 w-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div className="mb-1 text-sm font-semibold text-gray-900">Real-time Adaptation</div>
                  <div className="text-xs text-gray-600">Automatically adjusts feed structure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

