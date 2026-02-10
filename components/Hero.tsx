'use client'

import DashboardCards from './DashboardCards'

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column - Value Proposition */}
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-900"></span>
              AI-native feeds for search, ads & agents
            </span>
          </div>
          
          <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 lg:text-3xl xl:text-4xl">
            Revenue, <span className="text-accent">Automated</span>
          </h1>

          <p className="mb-8 text-sm text-gray-600">
            Transform your product catalog into AI-ready listings that perform
            across traditional channels (Google, Meta, marketplaces) and next-
            generation search (ChatGPT, Perplexity, AI Overviews), with measurable
            results.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="relative border border-accent bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#070066]">
              {/* Corner markers */}
              <span className="absolute -left-1 -top-1 h-2 w-2 border-l-2 border-t-2 border-gray-900"></span>
              <span className="absolute -right-1 -top-1 h-2 w-2 border-r-2 border-t-2 border-gray-900"></span>
              <span className="absolute -left-1 -bottom-1 h-2 w-2 border-l-2 border-b-2 border-gray-900"></span>
              <span className="absolute -right-1 -bottom-1 h-2 w-2 border-r-2 border-b-2 border-gray-900"></span>
              <span className="relative">Request a Demo</span>
            </button>
            <button className="relative border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              {/* Corner markers */}
              <span className="absolute -left-1 -top-1 h-2 w-2 border-l-2 border-t-2 border-gray-900"></span>
              <span className="absolute -right-1 -top-1 h-2 w-2 border-r-2 border-t-2 border-gray-900"></span>
              <span className="absolute -left-1 -bottom-1 h-2 w-2 border-l-2 border-b-2 border-gray-900"></span>
              <span className="absolute -right-1 -bottom-1 h-2 w-2 border-r-2 border-b-2 border-gray-900"></span>
              <span className="relative">Get Started</span>
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

