'use client'

import { useEffect, useState } from 'react'

const stats = [
  {
    label: 'ROI INCREASE',
    value: 60,
    suffix: '%',
    prefix: '+',
    description: 'Faster feed issue remediation',
  },
  {
    label: 'TIME SAVED',
    value: 25,
    suffix: ' pts',
    prefix: '+',
    description: 'Avg. AI Search Readiness lift',
  },
  {
    label: 'GLOBAL REACH',
    value: 30,
    suffix: '+',
    prefix: '',
    description: 'Channels & AI endpoints',
  },
]

export default function StatsBanner() {
  const [countedValues, setCountedValues] = useState([0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    stats.forEach((stat, index) => {
      let currentStep = 0
      const increment = stat.value / steps

      const timer = setInterval(() => {
        currentStep++
        const currentValue = Math.min(Math.floor(increment * currentStep), stat.value)

        setCountedValues((prev) => {
          const newValues = [...prev]
          newValues[index] = currentValue
          return newValues
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCountedValues((prev) => {
            const newValues = [...prev]
            newValues[index] = stat.value
            return newValues
          })
        }
      }, stepDuration)
    })

    setHasAnimated(true)
  }, [hasAnimated])

  return (
    <section className="min-w-0 border-t border-gray-200 bg-white">
      {/* Shared width + 3-column tracks so top and bottom dividers line up */}
      <div className="mx-auto w-full min-w-0 max-w-none px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Top Bar */}
        <div className="border-b border-gray-200 bg-gray-50 py-4 lg:py-5">
          <div className="grid grid-cols-1 divide-y divide-gray-200 text-center md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="break-words px-3 py-3 text-xs font-medium leading-snug text-gray-600 sm:px-4 sm:text-sm md:py-2 md:px-5 lg:px-6">
              TRUSTED BY 500+ MERCHANTS
            </div>
            <div className="break-words px-3 py-3 text-xs font-medium leading-snug text-gray-600 sm:px-4 sm:text-sm md:py-2 md:px-5 lg:px-6">
              $4.2B PROCESSED ANNUALLY
            </div>
            <div className="break-words px-3 py-3 text-xs font-medium leading-snug text-gray-600 sm:px-4 sm:text-sm md:py-2 md:px-5 lg:px-6">
              150+ CHANNELS
            </div>
          </div>
        </div>

        {/* Main stats — same grid as top row */}
        <div className="border-b border-gray-200 py-10 lg:py-16">
          <div className="grid grid-cols-1 divide-y divide-gray-200 text-center md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="px-3 py-8 sm:px-4 md:px-5 md:py-6 lg:px-8 lg:py-8"
              >
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {stat.label}
                </div>
                <div className="mb-2 text-3xl font-bold tabular-nums text-gray-900 sm:text-4xl lg:text-5xl">
                  {stat.prefix}
                  {countedValues[index]}
                  {stat.suffix}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

