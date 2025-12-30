'use client'

const footerLinks = {
  product: [
    'Vector Database',
    'Dedicated Read Nodes',
    'Assistant',
    'Documentation',
    'Pricing',
    'Security',
    'Integrations',
  ],
  resources: [
    'Community Forum',
    'Learning Center',
    'Blog',
    'Customer Case Studies',
    'Status',
    { text: 'What is a Vector DB?', underlined: true },
    { text: 'What is RAG?', underlined: true },
  ],
  company: [
    'About',
    'Partners',
    'Careers',
    'Newsroom',
    'Contact',
  ],
  legal: [
    'Customer Terms',
    'Website Terms',
    'Privacy',
    'Cookies',
    'Cookie Preferences',
  ],
}

const socialIcons = [
  {
    name: 'Twitter/X',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    name: 'Chat',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Top Section - Logo and Social Icons */}
        <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row md:items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center bg-gray-900">
              <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <span className="font-serif text-lg font-semibold text-gray-900">FeedForge</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center md:ml-auto">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                className="flex h-8 w-8 items-center justify-center border border-r-0 border-gray-200 bg-gray-50 text-gray-600 transition-all duration-300 first:rounded-l-lg last:rounded-r-lg last:border-r hover:border-gray-900 hover:bg-gray-100 hover:text-gray-900"
                aria-label={social.name}
              >
                <div className="h-4 w-4">{social.icon}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {/* Product Column */}
          <div>
            <h3 className="mb-1 text-xs font-semibold text-gray-500">Product</h3>
            <ul className="space-y-0.5">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-xs text-gray-900 transition-colors duration-300 hover:text-gray-900"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="mb-1 text-xs font-semibold text-gray-500">Resources</h3>
            <ul className="space-y-0.5">
              {footerLinks.resources.map((link, index) => {
                const isObject = typeof link === 'object'
                const linkText = isObject ? link.text : link
                const isUnderlined = isObject && link.underlined

                return (
                  <li key={index}>
                    <a
                      href="#"
                      className={`text-xs text-gray-900 transition-colors duration-300 hover:text-gray-900 ${
                        isUnderlined ? 'underline decoration-gray-900 underline-offset-2' : ''
                      }`}
                    >
                      {linkText}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-1 text-xs font-semibold text-gray-500">Company</h3>
            <ul className="space-y-0.5">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-xs text-gray-900 transition-colors duration-300 hover:text-gray-900"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="mb-1 text-xs font-semibold text-gray-500">Legal</h3>
            <ul className="space-y-0.5">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-xs text-gray-900 transition-colors duration-300 hover:text-gray-900"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

