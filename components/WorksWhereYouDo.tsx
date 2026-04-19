'use client'

const integrationLogos = [
  'AWS',
  'Azure',
  'Google Cloud',
  'OpenAI',
  'LangChain',
  'Cohere',
  'Anthropic',
  'Hugging Face',
]

const enterpriseFeatures = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secure',
    description: 'Encryption at rest and in transit, private networking, and more.',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Reliable',
    description: 'Uptime SLAs, support SLAs, and observability for mission-critical applications.',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Compliant',
    description: 'SOC 2, GDPR, ISO 27001, and HIPAA certified.',
  },
]

export default function WorksWhereYouDo() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...integrationLogos, ...integrationLogos, ...integrationLogos]

  return (
    <section className="overflow-x-hidden border-t border-gray-200 bg-white">
      <div className="mx-auto w-full min-w-0 max-w-none px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16 xl:px-14">
        <div className="relative grid w-full min-w-0 grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start lg:gap-x-12 lg:gap-y-0 xl:gap-x-16">
          {/* Vertical Separator Line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-200 lg:block" aria-hidden />
          
          {/* Left Column - Works where you do */}
          <div className="min-w-0">
            <h2 className="mb-3 text-balance text-xl font-bold text-accent sm:text-2xl lg:text-3xl">
              Works where you do
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              Use FeedForge with your favorite cloud provider, data sources, models, and frameworks.
            </p>
            <button className="mb-6 border border-accent bg-white px-4 py-2 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-white">
              Explore Integrations
            </button>
            
            {/* Two Rows of Moving Logo Carousel */}
            <div className="space-y-2">
              {/* First Row - Moving Right */}
              <div className="overflow-hidden rounded-sm">
                <div className="flex w-max animate-scroll whitespace-nowrap">
                  {duplicatedLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="shrink-0 px-2 sm:px-3"
                    >
                      <div className="flex h-10 items-center justify-center whitespace-nowrap border border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-600 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent sm:px-4">
                        {logo}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Second Row - Moving Left */}
              <div className="overflow-hidden rounded-sm">
                <div className="flex w-max animate-scroll-reverse whitespace-nowrap">
                  {duplicatedLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="shrink-0 px-2 sm:px-3"
                    >
                      <div className="flex h-10 items-center justify-center whitespace-nowrap border border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-600 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent sm:px-4">
                        {logo}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enterprise-ready AI */}
          <div className="min-w-0">
            <h2 className="mb-3 text-balance text-xl font-bold text-accent sm:text-2xl lg:text-3xl">
              Enterprise-ready AI
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              Meet security and operational requirements to bring AI products to market faster.
            </p>
            <button className="mb-6 border border-accent bg-white px-4 py-2 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-white">
              View Security
            </button>

            {/* Features — fill column width on large screens */}
            <div className="grid w-full min-w-0 grid-cols-1 gap-3 md:grid-cols-3 md:gap-3 lg:min-h-[7rem]">
              {enterpriseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group flex min-h-[7rem] w-full flex-col items-center justify-center border border-gray-200 bg-white p-3 text-center transition-all duration-300 hover:border-accent hover:shadow-md sm:min-h-[7.5rem]"
                >
                  <div className="mb-2 flex h-5 w-5 items-center justify-center text-accent transition-colors group-hover:text-accent">
                    {feature.icon}
                  </div>
                  <h3 className="mb-1 text-xs font-bold text-accent">{feature.title}</h3>
                  <p className="text-[10px] leading-tight text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

