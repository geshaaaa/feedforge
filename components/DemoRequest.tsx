'use client'

import { useState } from 'react'

export default function DemoRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Form */}
          <div>
            <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900 lg:text-4xl">
              Request a Demo
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 transition-colors focus:border-gray-900 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 transition-colors focus:border-gray-900 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-900">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 transition-colors focus:border-gray-900 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 transition-colors focus:border-gray-900 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-gray-900 bg-gray-900 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-gray-800"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded bg-gray-100">
                <svg className="h-3 w-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
                Get Started
              </span>
            </div>

            <h3 className="mb-4 font-serif text-2xl font-bold text-gray-900 lg:text-3xl">
              See Feedforge in action
            </h3>

            <p className="mb-6 text-base text-gray-600">
              Schedule a personalized demo to see how Feedforge can transform your commerce experience. Our team will show you how our AI-powered platform can drive growth and optimize your revenue channels.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                  <svg className="h-4 w-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-gray-900">Personalized walkthrough</h4>
                  <p className="text-sm text-gray-600">See how Feedforge works for your specific use case</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                  <svg className="h-4 w-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-gray-900">Expert guidance</h4>
                  <p className="text-sm text-gray-600">Get answers to your questions from our team</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                  <svg className="h-4 w-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-gray-900">No commitment</h4>
                  <p className="text-sm text-gray-600">Explore our platform with no strings attached</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

