'use client'

const logos = [
  { name: 'Workday', text: 'workday' },
  { name: "L'Oréal", text: "L'ORÉAL" },
  { name: 'Microsoft', text: 'Microsoft' },
  { name: 'OpenAI', text: 'OpenAI' },
  { name: 'Cohere', text: 'cohere' },
  { name: 'Asana', text: 'asana' },
  { name: 'Gojek', text: 'GO!' },
]

// Duplicate logos for seamless infinite scroll
const duplicatedLogos = [...logos, ...logos, ...logos]

export default function LogoCarousel() {
  return (
    <section className="border-t border-gray-200 bg-white py-6 overflow-hidden">
      <div className="relative mx-auto w-full max-w-4xl">
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 md:px-12 lg:px-16"
            >
              <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

