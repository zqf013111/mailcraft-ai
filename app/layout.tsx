import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import UTMTracker from './components/UTMTracker'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MailCraft AI - Outlook-Safe Email HTML Generator',
  description: 'Generate production-ready email HTML that works perfectly in Outlook, Gmail, and Apple Mail. No more compatibility nightmares.',
  keywords: ['email HTML', 'Outlook compatible', 'email generator', 'HTML email', 'email template'],
  openGraph: {
    title: 'MailCraft AI - Outlook-Safe Email HTML Generator',
    description: 'Generate production-ready email HTML that works perfectly in Outlook',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <UTMTracker />
        <Analytics />
      </body>
    </html>
  )
}
