'use client'

import { useState } from 'react'

export default function StartBuilding() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribing with email:', email)
    setEmail('')
  }

  return (
    <section className="border-t border-gray-200 bg-white">
      {/* Top Section - Hero-like */}
      <div className="mx-auto max-w-7xl px-6 py-4 lg:py-6">
        <div className="grid gap-3 lg:grid-cols-2 lg:items-center lg:gap-4">
          {/* Left Column */}
          <div>
            <h2 className="mb-1 text-xl font-bold leading-tight text-gray-900 lg:text-2xl">
              Start building knowledgeable AI today
            </h2>
            <p className="text-xs text-gray-600">
              Create your first index for free, then pay as you go when you're ready to scale.
            </p>
          </div>

          {/* Right Column - Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <button className="bg-accent px-5 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#000fd9]">
              Start Building
            </button>
            <button className="border border-accent bg-white px-5 py-2 text-sm font-medium text-accent transition-colors duration-300 hover:bg-accent hover:text-white">
              Get a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Subscription */}
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <h3 className="text-sm font-semibold text-gray-900">
              Subscribe to FeedForge
            </h3>
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="flex-1 border border-r-0 border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
              <button
                type="submit"
                className="border border-l-0 border-accent bg-accent px-6 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#000fd9]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

