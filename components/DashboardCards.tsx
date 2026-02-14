'use client'

import { useState, useEffect } from 'react'

interface DataPoint {
  name: string
  value: number
  timestamp: number
}

export default function DashboardCards() {
  const [data, setData] = useState<DataPoint[]>([])
  const [isAnimating, setIsAnimating] = useState(true)

  // Generate initial data
  useEffect(() => {
    const initialData: DataPoint[] = []
    const now = Date.now()
    for (let i = 11; i >= 0; i--) {
      initialData.push({
        name: new Date(now - i * 60000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        value: Math.floor(Math.random() * 80) + 20,
        timestamp: now - i * 60000,
      })
    }
    setData(initialData)
  }, [])

  // Live data updates every 2 seconds
  useEffect(() => {
    if (!isAnimating) return

    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData]
        // Remove oldest point
        newData.shift()
        // Add new point with slight variation
        const lastValue = prevData[prevData.length - 1]?.value || 50
        const newValue = Math.max(20, Math.min(100, lastValue + (Math.random() - 0.5) * 10))
        newData.push({
          name: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          value: Math.floor(newValue),
          timestamp: Date.now(),
        })
        return newData
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [isAnimating])

  // Calculate stats
  const currentValue = data[data.length - 1]?.value || 0
  const previousValue = data[data.length - 2]?.value || 0
  const change = currentValue - previousValue
  const changePercent = previousValue > 0 ? ((change / previousValue) * 100).toFixed(1) : '0.0'

  // Find max value for scaling
  const maxValue = Math.max(...data.map((d) => d.value), 100)

  return (
    <div className="w-full max-w-2xl border border-gray-200 bg-white p-6 shadow-lg">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Live Performance Metrics</h3>
          <p className="mt-0.5 text-xs text-gray-500">Real-time data updates</p>
        </div>
        <div className="flex items-center gap-2">
          {/* Live indicator */}
          <div className="flex items-center gap-1.5">
            <div className="relative">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <div className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-green-500 opacity-75"></div>
            </div>
            <span className="text-xs font-medium text-gray-600">Live</span>
          </div>
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="rounded border border-gray-300 bg-white px-2 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            {isAnimating ? 'Pause' : 'Resume'}
          </button>
        </div>
      </div>

      {/* Current Stats */}
      <div className="mb-6 grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
        <div>
          <div className="text-xs text-gray-500">Current Value</div>
          <div className="mt-1 text-2xl font-bold text-accent">{currentValue}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Change</div>
          <div className={`mt-1 text-xl font-bold ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? '+' : ''}
            {change.toFixed(1)}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Change %</div>
          <div className={`mt-1 text-xl font-bold ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? '+' : ''}
            {changePercent}%
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="relative h-64 w-full">
        <svg className="h-full w-full" viewBox="0 0 800 200" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((y) => (
            <line
              key={y}
              x1="0"
              y1={200 - (y / 100) * 200}
              x2="800"
              y2={200 - (y / 100) * 200}
              stroke="#e5e7eb"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          ))}

          {/* Area fill with gradient */}
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#090088" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#090088" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Area path */}
          {data.length > 0 && (
            <path
              d={`M 0,200 ${data
                .map(
                  (point, index) =>
                    `L ${(index / (data.length - 1)) * 800},${200 - (point.value / maxValue) * 200}`
                )
                .join(' ')} L 800,200 Z`}
              fill="url(#areaGradient)"
              className="transition-all duration-1000 ease-out"
            />
          )}

          {/* Line path */}
          {data.length > 0 && (
            <path
              d={`M ${data
                .map(
                  (point, index) =>
                    `${(index / (data.length - 1)) * 800},${200 - (point.value / maxValue) * 200}`
                )
                .join(' L ')}`}
              fill="none"
              stroke="#090088"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-1000 ease-out"
            />
          )}

          {/* Data points */}
          {data.map((point, index) => {
            const x = (index / (data.length - 1)) * 800
            const y = 200 - (point.value / maxValue) * 200
            return (
              <g key={index}>
                {/* Glow effect */}
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill="#090088"
                  opacity="0.3"
                  className="animate-pulse"
                />
                {/* Main point */}
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#090088"
                  className="transition-all duration-1000 ease-out"
                />
                {/* Value label on hover */}
                <text
                  x={x}
                  y={y - 15}
                  textAnchor="middle"
                  className="text-xs font-semibold fill-gray-700 opacity-0 hover:opacity-100 transition-opacity"
                >
                  {point.value}
                </text>
              </g>
            )
          })}
        </svg>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 flex h-full flex-col justify-between py-2 text-xs text-gray-500">
          <span>{maxValue}</span>
          <span>{Math.floor(maxValue * 0.75)}</span>
          <span>{Math.floor(maxValue * 0.5)}</span>
          <span>{Math.floor(maxValue * 0.25)}</span>
          <span>0</span>
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 flex w-full justify-between px-2 text-xs text-gray-500">
          {data.filter((_, i) => i % 3 === 0 || i === data.length - 1).map((point, index) => (
            <span key={index}>{point.name}</span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-accent"></div>
          <span>Performance Score</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-accent/30"></div>
          <span>Trend Area</span>
        </div>
      </div>
    </div>
  )
}
