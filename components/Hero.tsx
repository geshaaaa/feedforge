'use client'

import DashboardCards from './DashboardCards'

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column - Value Proposition */}
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal">
              Build Knowledgeable AI
            </span>
          </div>
          
          <h1 className="mb-8 font-serif text-3xl font-bold leading-tight text-gray-900 lg:text-4xl xl:text-5xl">
            The vector database for{' '}
            <span className="text-teal">scale in production</span>
          </h1>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="relative border border-teal bg-teal px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-dark">
              {/* Corner markers */}
              <span className="absolute -left-1 -top-1 h-2 w-2 border-l-2 border-t-2 border-teal"></span>
              <span className="absolute -right-1 -top-1 h-2 w-2 border-r-2 border-t-2 border-teal"></span>
              <span className="absolute -left-1 -bottom-1 h-2 w-2 border-l-2 border-b-2 border-teal"></span>
              <span className="absolute -right-1 -bottom-1 h-2 w-2 border-r-2 border-b-2 border-teal"></span>
              <span className="relative">Start Building</span>
            </button>
            <button className="relative border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              {/* Corner markers */}
              <span className="absolute -left-1 -top-1 h-2 w-2 border-l-2 border-t-2 border-gray-900"></span>
              <span className="absolute -right-1 -top-1 h-2 w-2 border-r-2 border-t-2 border-gray-900"></span>
              <span className="absolute -left-1 -bottom-1 h-2 w-2 border-l-2 border-b-2 border-gray-900"></span>
              <span className="absolute -right-1 -bottom-1 h-2 w-2 border-r-2 border-b-2 border-gray-900"></span>
              <span className="relative">Get a Demo</span>
            </button>
          </div>
        </div>

        {/* Right Column - Dashboard Cards */}
        <div className="flex items-center justify-center">
          <DashboardCards />
        </div>
      </div>
    </section>
  )
}

