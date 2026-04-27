'use client'

import { useState } from 'react'

type FaqItem = {
  question: string
  answer: string
}

type FaqAccordionProps = {
  items: readonly FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:gap-5">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <article
            key={item.question}
            className="overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-out hover:border-accent/35 hover:shadow-md hover:shadow-accent/5"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
            >
              <h2 className="text-base font-bold text-gray-900 sm:text-lg">{item.question}</h2>
              <span
                className={`shrink-0 text-accent transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div id={`faq-panel-${index}`} className="border-t border-gray-100 px-5 pb-5 sm:px-6 sm:pb-6">
                <p className="pt-3 text-sm leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            )}
          </article>
        )
      })}
    </div>
  )
}
