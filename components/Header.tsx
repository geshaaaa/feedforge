'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('feedforge-theme')
    const isDark = stored === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    setDark(isDark)
  }, [])

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('feedforge-theme', next ? 'dark' : 'light')
    setDark(next)
  }

  return (
    <header className="relative z-40 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl min-w-0 items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          aria-label="FeedForge home"
        >
          <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-accent">
            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <span className="font-vector truncate text-base font-semibold text-gray-900 sm:text-lg">FeedForge</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex nav-family">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent">
            Product
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent">
            Docs
          </a>
          <Link href="/customers" className="text-sm font-medium text-gray-700 hover:text-accent">
            Customers
          </Link>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent">
            Resources
          </a>
          <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-accent">
            Pricing
          </Link>
        </nav>

        {/* Right side actions — desktop */}
        <div className="hidden items-center md:flex">
          <button className="flex h-10 w-10 items-center justify-center border border-r-0 border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center border border-r-0 border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
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

        {/* Mobile: compact actions + menu */}
        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <button className="flex h-10 w-10 items-center justify-center border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
          <button className="flex h-10 items-center border border-accent bg-accent px-3 text-xs font-medium text-white transition-colors hover:bg-[#070066] sm:px-4 sm:text-sm">
            Sign up
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-50"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-3 nav-family">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent" onClick={() => setMenuOpen(false)}>
              Product
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent" onClick={() => setMenuOpen(false)}>
              Docs
            </a>
            <Link href="/customers" className="text-sm font-medium text-gray-700 hover:text-accent" onClick={() => setMenuOpen(false)}>
              Customers
            </Link>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent" onClick={() => setMenuOpen(false)}>
              Resources
            </a>
            <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-accent" onClick={() => setMenuOpen(false)}>
              Pricing
            </Link>
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4">
            <a
              href="#"
              className="flex h-10 items-center justify-center border border-gray-300 bg-white text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <button
              type="button"
              className="flex h-10 items-center justify-center border border-gray-300 bg-white text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              Log in
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

