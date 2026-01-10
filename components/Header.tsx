'use client'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center bg-accent">
            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <span className="font-serif text-lg font-semibold text-gray-900">FeedForge</span>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent">
            Product
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent">
            Docs
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent">
            Customers
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent">
            Resources
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent">
            Pricing
          </a>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center">
          <button className="flex h-10 w-10 items-center justify-center border border-r-0 border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="flex h-10 w-10 items-center justify-center border border-r-0 border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <a href="#" className="flex h-10 items-center border border-r-0 border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
            Contact
          </a>
          <button className="flex h-10 items-center border border-r-0 border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            Log in
          </button>
          <button className="flex h-10 items-center border border-l-0 border-accent bg-accent px-4 text-sm font-medium text-white transition-colors hover:bg-[#070066]">
            Sign up
          </button>
        </div>
      </div>
    </header>
  )
}

