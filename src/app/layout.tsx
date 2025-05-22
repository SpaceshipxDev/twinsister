import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'A Message from the Shire',
  description: 'From Frodo to Aragorn, on the road to Mordor',
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