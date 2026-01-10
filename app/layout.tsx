import type { Metadata } from 'next'
import { Inter, Playfair_Display, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})
const vector = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['700'],
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
      <body className={`${inter.className} ${playfair.variable} ${vector.variable}`}>{children}</body>
    </html>
  )
}

