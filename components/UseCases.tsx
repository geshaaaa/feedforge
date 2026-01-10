'use client'

const useCases = [
  {
    label: 'RECOMMENDATIONS',
    company: 'Gong',
    description: 'Gong uses Pinecone to power their recommendation engine, delivering personalized insights to sales teams at scale.',
    hasButton: true,
  },
  {
    label: 'SEARCH',
    company: 'Vanguard',
    description: 'Vanguard leverages Pinecone for semantic search, enabling customers to find relevant financial information instantly.',
    hasButton: true,
  },
  {
    label: 'AGENTS',
    company: 'Inkeep',
    description: 'Inkeep builds intelligent agents with Pinecone, providing context-aware assistance to users across platforms.',
    hasButton: false,
  },
  {
    label: 'RAG',
    company: 'New Relic',
    description: 'New Relic implements RAG with Pinecone to enhance their observability platform with intelligent document retrieval.',
    hasButton: false,
  },
]

export default function UseCases() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
          Trusted in production
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          The world's most innovative companies are already in production with FeedForge.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-8 transition-all duration-700 ease-in-out hover:border-gray-900 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-900">
                USE CASE: {useCase.label}
              </span>
            </div>

            <div className="mb-6">
              <div className="mb-4 text-2xl font-bold text-gray-900">
                {useCase.company}
              </div>
            </div>

            <p className="mb-6 text-gray-700 leading-relaxed">
              {useCase.description.split(' ').map((word, i) => {
                // Bold certain key phrases
                const boldWords = ['Pinecone', 'FeedForge', 'recommendation', 'semantic', 'intelligent', 'RAG']
                const shouldBold = boldWords.some(boldWord => 
                  word.toLowerCase().includes(boldWord.toLowerCase())
                )
                return shouldBold ? (
                  <strong key={i} className="font-semibold text-gray-900">
                    {word}{' '}
                  </strong>
                ) : (
                  <span key={i}>{word} </span>
                )
              })}
            </p>

            {useCase.hasButton && (
              <button className="rounded-md border border-accent bg-white px-4 py-2 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-white">
                Read case study
              </button>
            )}

            {/* Subtle background effect on hover */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900/0 to-gray-900/0 transition-all duration-700 ease-in-out group-hover:from-gray-900/5 group-hover:to-gray-900/0" />
            
            {/* Border glow effect on hover */}
            <div className="absolute inset-0 -z-10 rounded-lg opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
              <div className="absolute inset-0 rounded-lg bg-gray-900/10 blur-xl" />
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

