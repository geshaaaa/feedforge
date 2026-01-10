'use client'

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Market Impact',
    subtitle: 'Dominance Tracker',
    highlighted: true,
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Customer Intent',
    subtitle: 'Search to Sold',
    highlighted: false,
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Global Reach',
    subtitle: 'Omnichannel Sync',
    highlighted: false,
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
    title: 'Data Foundation',
    subtitle: 'Smart Structure',
    highlighted: false,
  },
]

export default function ComplexTechnology() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Header */}
        <div className="mb-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-gray-100">
              <svg className="h-3 w-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-accent">
              Next Generation Commerce
            </span>
          </div>
          
          <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Complex technology,{' '}
            <span className="text-accent">simple growth.</span>
          </h2>
          
          <p className="text-base text-gray-600">
            Our platform handles the complexity of AI search so you can focus on selling.
          </p>
        </div>

        {/* 4 Rectangles in Horizontal Line */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative border bg-white p-4 transition-all duration-300 ${
                feature.highlighted
                  ? 'border-accent shadow-sm'
                  : 'border-gray-200 hover:border-accent hover:shadow-md'
              }`}
            >
              <div className="flex flex-col">
                {/* Icon */}
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center transition-colors duration-300 ${
                    feature.highlighted
                      ? 'bg-accent text-white'
                      : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white'
                  }`}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="mb-1 text-base font-bold text-accent">
                  {feature.title}
                </h3>

                {/* Subtitle */}
                <p className="mb-2 text-sm text-gray-600">
                  {feature.subtitle}
                </p>

                {/* Progress Bar / Underline for highlighted feature */}
                {feature.highlighted && (
                  <div className="h-0.5 w-2/3 bg-accent transition-all duration-300 group-hover:w-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

