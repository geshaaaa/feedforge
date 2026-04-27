'use client'

const logos = [
  { name: 'Back in the Saddle', text: 'Back in the Saddle' },
  { name: 'Catalog Favorites', text: 'Catalog Favorites' },
  { name: 'Chadwicks', text: 'Chadwicks' },
  { name: 'Country Store Catalog', text: 'Country Store Catalog' },
  { name: 'Expressions', text: 'Expressions' },
  { name: 'In the Company of Dogs', text: 'In the Company of Dogs' },
  { name: "Magellan's", text: "Magellan's" },
  { name: "Nature's Jewelry", text: "Nature's Jewelry" },
  { name: 'North Style', text: 'North Style' },
  { name: 'Potpourri Gifts', text: 'Potpourri Gifts' },
  { name: 'Pyramid Collection', text: 'Pyramid Collection' },
  { name: 'Sagefinds', text: 'Sagefinds' },
  { name: 'Serengeti Fashions', text: 'Serengeti Fashions' },
  { name: 'The Stitchery', text: 'The Stitchery' },
  { name: 'Whatever Works', text: 'Whatever Works' },
  { name: 'Young Explorers', text: 'Young Explorers' },
]

// Duplicate logos for seamless infinite scroll
const duplicatedLogos = [...logos, ...logos, ...logos]

export default function LogoCarousel() {
  return (
    <section className="min-w-0 overflow-x-hidden border-t border-gray-200 bg-white py-6">
      <div className="relative mx-auto w-full min-w-0 max-w-4xl px-4 sm:px-6">
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 md:px-12 lg:px-16"
            >
              <span className="whitespace-nowrap text-base font-semibold text-gray-900 sm:text-lg">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

