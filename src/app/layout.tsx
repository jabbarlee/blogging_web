'use client'

import { inter } from './ui/fonts'
import Link from 'next/link'
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
