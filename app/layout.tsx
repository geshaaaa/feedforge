import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}

