'use client'

import DashboardCards from './DashboardCards'

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl min-w-0 px-4 py-10 sm:px-6 sm:py-12 lg:py-16">
      <div className="grid min-w-0 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column - Value Proposition */}
        <div className="flex min-w-0 flex-col justify-center">
          <div className="mb-4">
            <span className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-[0.6875rem] font-medium text-gray-900 sm:text-xs">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900"></span>
              <span className="min-w-0 text-pretty">
                AI-powered product feeds for every channel
              </span>
            </span>
          </div>
          
          <h1 className="mb-4 text-balance text-xl font-bold leading-tight text-gray-900 sm:text-2xl lg:text-3xl xl:text-4xl">
            Your product feed, <span className="text-accent">AI optimized</span>
          </h1>

          <p className="mb-8 text-pretty text-sm text-gray-600 sm:text-base">
            Transform your product catalog into high-performing listings across Google, Meta, and every marketplace — including the AI-powered channels reshaping how customers discover products.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#request-demo"
              className="relative inline-flex border border-accent bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#070066]"
            >
              {/* Corner markers */}
              <span className="absolute -left-1 -top-1 h-2 w-2 border-l-2 border-t-2 border-gray-900"></span>
              <span className="absolute -right-1 -top-1 h-2 w-2 border-r-2 border-t-2 border-gray-900"></span>
              <span className="absolute -left-1 -bottom-1 h-2 w-2 border-l-2 border-b-2 border-gray-900"></span>
              <span className="absolute -right-1 -bottom-1 h-2 w-2 border-r-2 border-b-2 border-gray-900"></span>
              <span className="relative">Request a Demo</span>
            </a>
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
        <div className="flex min-w-0 items-center justify-center">
          <DashboardCards />
        </div>
      </div>
    </section>
  )
}

