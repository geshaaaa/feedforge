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
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-2 w-2 bg-gray-900"></div>
            <span className="text-sm font-medium text-accent">The Feed Management Challenge</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
            Feed Management is{' '}
            <span className="text-accent">Complex, Error-Prone, and Time-Consuming</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600">
            Legacy rule-based systems can't keep up. FeedForge uses AI to build and optimize your product feeds across Google, Meta, and the AI search platforms where your customers are increasingly discovering products.
          </p>
        </div>

        {/* Side by Side Layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Problems Section */}
          <div className="flex flex-col">
            <h3 className="mb-6 text-center text-xl font-bold text-gray-900 lg:text-left">The Operational Reality</h3>
            <div className="flex flex-col gap-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-500 hover:border-accent hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all duration-500 group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent">
                    <div className="h-6 w-6">{problem.icon}</div>
                  </div>
                  <h4 className="mb-2 text-base font-bold text-gray-900">{problem.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Solution Section */}
          <div className="flex flex-col">
            <div className="mb-6 text-center lg:text-left">
              <h3 className="mb-3 text-xl font-bold text-gray-900 lg:text-2xl">
                The <span className="text-accent">AI Solution</span>
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                FeedForge differentiates on intelligence vs. legacy rule-based systems. Our AI doesn't just automate—it optimizes for every channel, including the AI search platforms reshaping how customers discover products.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:border-accent hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center text-accent">
                    {index === 2 ? (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <h4 className="mb-2 text-base font-bold text-gray-900">{solution.title}</h4>
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
              ))}
            </div>

            {/* Key Differentiator */}
            <div className="mt-6 rounded-lg border-2 border-accent bg-accent/5 p-4 text-center transition-all duration-500 hover:bg-accent/10">
              <p className="text-xs font-semibold text-gray-900">
                <span className="text-accent">AI Search Optimization</span> — A key proof point of why our AI is more sophisticated than competitors'
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

