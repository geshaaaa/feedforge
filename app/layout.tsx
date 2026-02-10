import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const vector = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-vector',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FeedForge - Build Knowledgeable AI',
  description: 'The vector database for scale in production',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${vector.className} ${vector.variable}`}>{children}</body>
    </html>
  )
}

