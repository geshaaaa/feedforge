'use client'

const problems = [
  {
    title: 'Complex',
    description: 'Managing feeds across multiple channels requires constant configuration and maintenance.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Error-Prone',
    description: 'Manual data entry and rule-based systems lead to mistakes that cost sales.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Time-Consuming',
    description: 'Your team spends hours on feed maintenance instead of strategy and growth.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const solutions = [
  {
    title: 'AI-Powered Intelligence',
    description: 'FeedForge uses AI to build and optimize your product feeds automatically, eliminating manual work.',
    highlight: 'AI to build and optimize',
  },
  {
    title: 'Multi-Channel Excellence',
    description: 'Seamlessly manage feeds across Google, Meta, and every marketplace from one platform.',
    highlight: 'Google, Meta, and every marketplace',
  },
  {
    title: 'Future-Ready Optimization',
    description: 'Your feeds are optimized for AI search platforms where your customers are increasingly discovering products.',
    highlight: 'AI search platforms',
  },
]

export default function AISolution() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
              • The Feed Management Challenge
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
            Feed Management is{' '}
            <span className="text-accent">Complex, Error-Prone, and Time-Consuming</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600">
            Legacy rule-based systems can't keep up. FeedForge uses AI to build and optimize your product feeds across Google, Meta, and the AI search platforms where your customers are increasingly discovering products.
          </p>
        </div>

        {/* Column headings */}
        <div className="grid grid-cols-1 gap-6 border-b border-gray-200 pb-6 lg:grid-cols-2 lg:gap-10">
          <h3 className="text-xl font-bold text-gray-900">Operational Challenges</h3>
          <h3 className="text-xl font-bold text-gray-900">
            <span className="text-accent">FeedForge Solution</span>
          </h3>
        </div>

        {/* Comparison cards: one container per challenge + one per solution */}
        <div className="space-y-6 lg:space-y-8">
          {problems.map((problem, index) => {
            const solution = solutions[index]
            const SolutionIcon = index === 2 ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )
            return (
              <div
                key={index}
                className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8"
              >
                {/* Challenge card */}
                <div className="group flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-md lg:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 transition-colors duration-300 group-hover:border-gray-300 group-hover:bg-white">
                    <div className="h-5 w-5 [&>svg]:h-5 [&>svg]:w-5">{problem.icon}</div>
                  </div>
                  <div className="min-w-0">
                    <h4 className="mb-1.5 text-lg font-bold text-gray-900 transition-colors group-hover:text-gray-950">
                      {problem.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">{problem.description}</p>
                  </div>
                </div>

                {/* Solution card */}
                <div className="group flex gap-4 rounded-xl border border-accent/20 bg-gradient-to-br from-white to-accent/[0.06] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-lg hover:shadow-accent/10 lg:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/20 transition-all duration-300 group-hover:bg-accent/20 group-hover:ring-accent/35">
                    {SolutionIcon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="mb-1.5 text-lg font-bold text-gray-900 transition-colors group-hover:text-accent">
                      {solution.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {solution.description.split(solution.highlight).map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="font-semibold text-accent">{solution.highlight}</span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Key differentiator strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/5 to-accent/10 px-6 py-4">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
            <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </span>
          <p className="text-sm font-semibold text-gray-900">
            <span className="text-accent">AI Search Optimization</span>
            <span className="text-gray-600"> — A key proof point of why our AI is more sophisticated than competitors.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

