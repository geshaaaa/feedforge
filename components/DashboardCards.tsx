'use client'

export default function DashboardCards() {
  return (
    <div className="w-full max-w-sm grid grid-cols-2 gap-2">
      {/* Card 1: Search Visibility */}
      <div className="aspect-square border border-gray-200 bg-white p-2 shadow-sm overflow-hidden transition-all duration-300 hover:border-teal hover:shadow-md hover:-translate-y-1">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-xs font-semibold text-gray-900">Search Visibility</h3>
          <a href="#" className="text-[10px] text-gray-500 hover:text-teal">
            Analysis &gt;
          </a>
        </div>
        <div className="relative mb-1 flex items-center justify-center">
          <svg className="h-20 w-20" viewBox="0 0 100 100">
            {/* Background arc */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
              strokeDasharray="251.2"
              strokeDashoffset="0"
              transform="rotate(-90 50 50)"
            />
            {/* Progress arc - 85% filled */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#069494"
              strokeWidth="8"
              strokeDasharray="251.2"
              strokeDashoffset="37.68"
              transform="rotate(-90 50 50)"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-base font-bold text-teal">+27%</div>
            <div className="mt-1 text-[10px] font-medium text-teal">Optimization Lift</div>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-gray-600 mb-1">
          <span>Low</span>
          <span>High</span>
        </div>
        <div className="flex items-center justify-between border-t border-gray-100 pt-1 text-[10px] text-gray-600">
          <span>32 Channels</span>
          <span className="text-teal">Active</span>
        </div>
      </div>

      {/* Card 2: Active Channels */}
      <div className="aspect-square border border-gray-200 bg-white p-2 shadow-sm overflow-hidden transition-all duration-300 hover:border-teal hover:shadow-md hover:-translate-y-1">
        <div className="mb-1 flex items-start justify-between">
          <div>
            <div className="mb-1 flex h-6 w-6 items-center justify-center bg-teal/10">
              <svg className="h-3 w-3 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <h3 className="text-xs font-semibold text-gray-900">Active Channels</h3>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <text x="12" y="16" textAnchor="middle" fontSize="10" fill="white">i</text>
            </svg>
          </button>
        </div>
        <div className="mb-1 text-2xl font-bold text-gray-900">32</div>
        <div className="flex items-center gap-1">
          <span className="bg-teal/20 px-1.5 py-0.5 text-[10px] font-medium text-teal">
            +12%
          </span>
          <span className="text-[10px] text-gray-500">new this month</span>
        </div>
      </div>

      {/* Card 3: Processed SKUs */}
      <div className="aspect-square border border-gray-200 bg-white p-2 shadow-sm overflow-hidden transition-all duration-300 hover:border-teal hover:shadow-md hover:-translate-y-1">
        <div className="mb-1 flex items-start justify-between">
          <div>
            <div className="mb-1 flex h-6 w-6 items-center justify-center bg-teal/10">
              <svg className="h-3 w-3 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-xs font-semibold text-gray-900">Processed SKUs</h3>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <text x="12" y="16" textAnchor="middle" fontSize="10" fill="white">i</text>
            </svg>
          </button>
        </div>
        <div className="mb-1 text-2xl font-bold text-gray-900">1.2M</div>
        <div className="flex items-center gap-1">
          <span className="bg-teal/20 px-1.5 py-0.5 text-[10px] font-medium text-teal">
            +8%
          </span>
          <span className="text-[10px] text-gray-500">vs last week</span>
        </div>
      </div>

      {/* Card 4: AI Readiness */}
      <div className="aspect-square border border-gray-200 bg-white p-2 shadow-sm overflow-hidden transition-all duration-300 hover:border-teal hover:shadow-md hover:-translate-y-1">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-xs font-semibold text-gray-900">AI Readiness</h3>
          <a href="#" className="text-[10px] text-gray-500 hover:text-teal">
            Details &gt;
          </a>
        </div>
        <div className="relative mb-1 flex items-center justify-center">
          <svg className="h-20 w-20" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="6"
              strokeDasharray="12 6"
            />
            {/* Progress arc - 82% filled */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#069494"
              strokeWidth="6"
              strokeDasharray="251.2"
              strokeDashoffset="45.216"
              transform="rotate(-90 50 50)"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="mb-0.5 flex h-6 w-6 items-center justify-center">
              <svg className="h-4 w-4 text-teal" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-base font-bold text-gray-900">82</span>
              <span className="text-xs text-gray-500">/100</span>
            </div>
            <div className="mt-1 text-[10px] text-gray-500">Live Beta Score</div>
          </div>
        </div>
      </div>
    </div>
  )
}

