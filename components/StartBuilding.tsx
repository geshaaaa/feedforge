'use client'

import { useState } from 'react'

export default function StartBuilding() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('')
    setStatusType('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const result = await response.json()

      if (!response.ok) {
        setStatusType('error')
        setStatusMessage(result.message || 'Could not subscribe. Please try again.')
        return
      }

      setStatusType('success')
      setStatusMessage('Subscribed successfully.')
      setEmail('')
    } catch (error) {
      console.error('Subscribe submit failed', error)
      setStatusType('error')
      setStatusMessage('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="border-t border-gray-200 bg-white">
      {/* Top Section - Hero-like */}
      <div className="mx-auto max-w-7xl min-w-0 px-4 py-4 sm:px-6 lg:py-6">
        <div className="grid min-w-0 gap-3 lg:grid-cols-2 lg:items-center lg:gap-4">
          {/* Left Column */}
          <div className="min-w-0">
            <h2 className="mb-1 text-balance text-base font-bold leading-tight text-gray-900 sm:text-lg lg:text-xl">
              See your AI Readiness Score … Free
            </h2>
            <p className="text-xs text-gray-600">
              Start optimizing your product feed today. Create your first index for free, then pay as you go when you're ready to scale.
            </p>
          </div>

          {/* Right Column - Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <button className="bg-accent px-5 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#070066]">
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
        <div className="mx-auto max-w-7xl min-w-0 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <h3 className="shrink-0 text-center text-sm font-semibold text-gray-900 sm:text-left">
              Subscribe to FeedForge
            </h3>
            <form
              onSubmit={handleSubscribe}
              className="flex min-w-0 w-full max-w-md flex-col gap-0 sm:w-auto sm:flex-row sm:gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="min-w-0 flex-1 border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:border-r-0"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full shrink-0 border border-t-0 border-accent bg-accent px-6 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#070066] sm:w-auto sm:border-l-0 sm:border-t sm:border-accent"
              >
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </button>
            </form>
          </div>
          {statusMessage ? (
            <p className={`mt-2 text-center text-sm ${statusType === 'error' ? 'text-red-600' : 'text-green-600'}`}>
              {statusMessage}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

