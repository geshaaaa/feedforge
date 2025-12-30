'use client'

export default function ReadyToScale() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="flex flex-col items-center text-center">
          {/* Scroll Button with Bounce */}
          <button className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-gray-900 bg-white transition-all duration-300 hover:bg-gray-50">
            <svg
              className="h-6 w-6 animate-bounce text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>

          {/* Main Heading */}
          <h2 className="mb-6 font-serif text-5xl font-bold text-gray-900 lg:text-6xl">
            ready to scale?
          </h2>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-lg text-gray-600">
            Join the highest performing merchants who trust Feedforge to automate their revenue channels.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="border border-gray-900 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-gray-900 transition-all duration-300 hover:bg-gray-50">
              START FREE 14-DAY TRIAL
            </button>
            <button className="border border-gray-900 bg-gray-900 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-gray-800">
              TALK TO SALES
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

