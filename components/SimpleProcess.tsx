'use client'

const steps = [
  {
    number: 1,
    title: 'Connect',
    description: 'Connect your product data from any source—no migration headaches.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    position: 'up', // Icon above, text below
  },
  {
    number: 2,
    title: 'Analyze',
    description: 'See how ready your products are for AI search with clear scores.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    position: 'down', // Text above, icon below
  },
  {
    number: 3,
    title: 'Optimize',
    description: 'Automatically improve descriptions so customers can find you.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    position: 'up', // Icon above, text below
  },
  {
    number: 4,
    title: 'Publish',
    description: 'Send optimized feeds to all sales channels automatically.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    position: 'down', // Text above, icon below
  },
]

export default function SimpleProcess() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-2 w-2 bg-teal"></div>
            <span className="text-sm font-medium text-teal">Simple Process</span>
          </div>
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900 lg:text-5xl">
            Powerful Results, Simple Process
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600">
            Connect your data once. FeedForge automatically keeps it optimized for every sales channel. Your team gets time back to focus on strategy.
          </p>
        </div>

        {/* Timeline Process Steps */}
        <div className="relative py-20">
          {/* Horizontal Line */}
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gray-300"></div>
          
          <div className="relative grid grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {step.position === 'up' ? (
                  <>
                    {/* Icon Container Above */}
                    <div className="relative mb-8 flex flex-col items-center">
                      {/* Vertical Line */}
                      <div className="absolute top-full h-16 w-px bg-gray-300"></div>
                      {/* Icon Container */}
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-white transition-all duration-300 hover:border-teal hover:bg-teal/5">
                        <div className="text-teal transition-colors duration-300">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Node on Horizontal Line */}
                    <div className="absolute top-1/2 z-20 h-3 w-3 -translate-y-1/2 rounded-full bg-teal"></div>
                    
                    {/* Text Label Below */}
                    <div className="relative z-10 mt-8 flex flex-col items-center text-left">
                      <h3 className="mb-1 text-sm font-bold text-gray-900">{step.title}</h3>
                      <p className="text-xs text-gray-500 text-center">{step.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text Label Above */}
                    <div className="relative z-10 mb-8 flex flex-col items-center text-left">
                      <h3 className="mb-1 text-sm font-bold text-gray-900">{step.title}</h3>
                      <p className="text-xs text-gray-500 text-center">{step.description}</p>
                    </div>
                    
                    {/* Node on Horizontal Line */}
                    <div className="absolute top-1/2 z-20 h-3 w-3 -translate-y-1/2 rounded-full bg-teal"></div>
                    
                    {/* Icon Container Below */}
                    <div className="relative mt-8 flex flex-col items-center">
                      {/* Vertical Line */}
                      <div className="absolute bottom-full h-16 w-px bg-gray-300"></div>
                      {/* Icon Container */}
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-white transition-all duration-300 hover:border-teal hover:bg-teal/5">
                        <div className="text-teal transition-colors duration-300">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

