'use client'

import { useState } from 'react'

type ContactFormData = {
  fullName: string
  email: string
  company: string
  message: string
}

const INITIAL_DATA: ContactFormData = {
  fullName: '',
  email: '',
  company: '',
  message: '',
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_DATA)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('')
    setStatusType('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json()

      if (!response.ok) {
        setStatusType('error')
        setStatusMessage(result.message || 'Could not send your message. Please try again.')
        return
      }

      setStatusType('success')
      setStatusMessage('Thanks! Your message has been sent.')
      setFormData(INITIAL_DATA)
    } catch (error) {
      console.error('Contact submit failed', error)
      setStatusType('error')
      setStatusMessage('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-gray-900">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
          required
          className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-accent"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
          Work Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          required
          className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-accent"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-900">
          Company Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
          className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-accent"
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          required
          className="w-full resize-y border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-accent"
          placeholder="Tell us about your channels, feed challenges, and goals."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full border border-accent bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#070066]"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {statusMessage ? (
        <p className={`text-sm ${statusType === 'error' ? 'text-red-600' : 'text-green-600'}`}>
          {statusMessage}
        </p>
      ) : null}
    </form>
  )
}
