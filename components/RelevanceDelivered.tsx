'use client'

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Embeddings',
    description: 'Choose from our leading hosted models or bring your own vectors.',
    underlined: 'hosted models',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Optimized recall',
    description: 'Benchmark leading algorithms maximize recall with low latency.',
    underlined: 'maximize recall with low latency',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
    title: 'Filters',
    description: 'Retrieve only the vectors that match your metadata filters.',
    underlined: 'metadata filters',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    title: 'Full-text search',
    description: 'Get an exact keyword match with sparse indexes when semantic search isn\'t enough.',
    underlined: 'sparse indexes',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Rerankers',
    description: 'Add an extra layer of precision with rerankers to boost the most relevant matches.',
    underlined: 'rerankers',
  },
]

export default function RelevanceDelivered() {
  const renderDescription = (description: string, underlined: string) => {
    const parts = description.split(underlined)
    return (
      <>
        {parts[0]}
        <span className="underline decoration-gray-900 underline-offset-2">{underlined}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
            SEARCH
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Relevance, delivered
          </h2>
          <p className="text-lg text-gray-600">
            Advanced retrieval capabilities for precise search across dynamic datasets.
          </p>
        </div>

        {/* Grid of Feature Cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group aspect-square rounded-lg border border-gray-200 bg-white p-4 transition-all duration-500 ease-in-out hover:border-gray-500 hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-600 transition-all duration-500 group-hover:border-gray-500 group-hover:bg-gray-100 group-hover:text-gray-900">
                <div className="h-5 w-5">{feature.icon}</div>
              </div>
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-600">
                {renderDescription(feature.description, feature.underlined)}
              </p>
            </div>
          ))}

          {/* Call to Action Card */}
          <div className="group aspect-square rounded-lg border border-gray-200 bg-white p-4 transition-all duration-500 ease-in-out hover:border-gray-500 hover:shadow-md hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            <div className="mb-3">
              <p className="text-xs leading-relaxed text-gray-600">
                Learn how to achieve <strong className="font-semibold text-gray-900">best-in-class relevance</strong> with cascading retrieval
              </p>
            </div>
            <button className="mt-3 rounded-md border border-gray-900 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white">
              View sample code
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

