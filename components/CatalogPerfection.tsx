'use client'

import { useState } from 'react'

export default function CatalogPerfection() {
  const [activeTab, setActiveTab] = useState<'examples' | 'try'>('examples')
  const [productTitle, setProductTitle] = useState('')
  const [description, setDescription] = useState('')

  const exampleData = {
    rawTitle: 'Blue Shirt L',
    rawDescription: 'Cotton shirt blue color.',
    optimizedTitle: 'Premium Oxford Cotton Button-Down Shirt | Navy Blue | Slim Fit Large',
    optimizedDescription: 'Elevate your formal wardrobe with this 100% organic cotton Oxford shirt. Features moisture-wicking fabric, reinforced stitching, and a modern slim fit.',
    tags: ["MEN'S FASHION", 'FORMAL WEAR', 'SUMMER COLLECTION', 'SUSTAINABLE'],
  }

  const handleGenerate = () => {
    // This would typically call an API
    console.log('Generating AI feed...')
  }

  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 font-serif text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              instant catalog perfection
            </h2>
            
            <p className="mb-6 text-sm leading-relaxed text-gray-700">
              Don't let poor data kill your ads. Our built-in AI (powered by Google Gemini) automatically rewrites titles, fixes descriptions, and tags products for maximum visibility.
            </p>

            {/* Why it matters card */}
            <div className="group border border-gray-200 bg-gray-50 p-6 transition-all duration-700 ease-in-out hover:border-gray-900 hover:shadow-xl hover:-translate-y-1">
              <h3 className="mb-3 text-base font-semibold text-gray-900">Why it matters</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">35% higher click-through rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Better matching for "near me" searches</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Automatic attribute filling</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-2xl border border-gray-200 bg-white shadow-sm transition-all duration-700 ease-in-out hover:border-gray-400 hover:shadow-2xl hover:-translate-y-1">
              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('examples')}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-colors duration-300 ${
                    activeTab === 'examples'
                      ? 'border-b-2 border-gray-900 text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  EXAMPLES
                </button>
                <button
                  onClick={() => setActiveTab('try')}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-colors duration-300 ${
                    activeTab === 'try'
                      ? 'border-b-2 border-gray-900 text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  TRY YOUR PRODUCT
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'examples' ? (
                  <div className="space-y-6">
                    {/* Raw Data Input */}
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                        RAW DATA INPUT
                      </label>
                      <div className="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all duration-500 hover:border-gray-300 hover:bg-gray-100">
                        <div>
                          <div className="mb-1 text-xs font-medium text-gray-600">Title</div>
                          <div className="text-sm text-gray-900">{exampleData.rawTitle}</div>
                        </div>
                        <div>
                          <div className="mb-1 text-xs font-medium text-gray-600">Description</div>
                          <div className="text-sm text-gray-900">{exampleData.rawDescription}</div>
                        </div>
                      </div>
                    </div>

                    {/* AI Optimized Output */}
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <svg className="h-4 w-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <label className="text-xs font-semibold uppercase tracking-wider text-gray-900">
                          AI OPTIMIZED OUTPUT
                        </label>
                      </div>
                      <div className="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all duration-500 hover:border-gray-300 hover:bg-gray-100 hover:shadow-md">
                        <div>
                          <div className="mb-2 font-serif text-lg font-bold text-gray-900">
                            {exampleData.optimizedTitle}
                          </div>
                          <div className="mb-4 text-sm leading-relaxed text-gray-700">
                            {exampleData.optimizedDescription}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exampleData.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-105 cursor-default"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                        YOUR PRODUCT DATA
                      </label>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-700">
                            Product Title
                          </label>
                          <input
                            type="text"
                            value={productTitle}
                            onChange={(e) => setProductTitle(e.target.value)}
                            placeholder="e.g. leather boots black"
                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-300 hover:border-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                          />
                        </div>
                        
                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-700">
                            Description (Optional)
                          </label>
                          <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Short description..."
                            rows={4}
                            className="w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-300 hover:border-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleGenerate}
                      className="group flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      GENERATE AI FEED
                    </button>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span>Enter product details to see the magic.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

