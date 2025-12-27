'use client'

import { useEffect, useState } from 'react'

const stats = [
  {
    label: 'ROI INCREASE',
    value: 240,
    suffix: '%',
    prefix: '+',
    description: 'Average return on ad spend for clients',
  },
  {
    label: 'TIME SAVED',
    value: 30,
    suffix: 'hrs',
    prefix: '',
    description: 'Per week on manual feed adjustments',
  },
  {
    label: 'GLOBAL REACH',
    value: 100,
    suffix: '+',
    prefix: '',
    description: 'Countries supported with auto-currency',
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
    <section className="border-t border-gray-200 bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-3">
            <div className="text-sm font-medium text-gray-600">
              TRUSTED BY 500+ MERCHANTS
            </div>
            <div className="border-t border-gray-200 pt-4 text-sm font-medium text-gray-600 md:border-t-0 md:border-l md:pt-0 md:pl-4">
              $4.2B PROCESSED ANNUALLY
            </div>
            <div className="border-t border-gray-200 pt-4 text-sm font-medium text-gray-600 md:border-t-0 md:border-l md:pt-0 md:pl-4">
              150+ CHANNELS
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mx-auto max-w-7xl border-b border-gray-200 px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`border-r border-gray-200 pr-8 last:border-r-0 md:pr-8`}
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                {stat.label}
              </div>
              <div className="mb-2 font-serif text-5xl font-bold text-gray-900 lg:text-6xl">
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
    </section>
  )
}

