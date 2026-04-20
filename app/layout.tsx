import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import UTMTracker from './components/UTMTracker'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MailCraft AI - Generate Outlook/Gmail Compatible Email HTML from Text',
  description: 'Describe your email in plain English. Get production-ready HTML that works in Outlook 2016/2019/365, Gmail, Apple Mail, iOS Mail. No table debugging needed. Free to use.',
  keywords: ['email HTML generator', 'Outlook compatible email', 'email template generator', 'HTML email maker', 'email HTML code', 'email development', 'email HTML Outlook fix', 'responsive email template'],
  openGraph: {
    title: 'MailCraft AI - Generate Outlook-Safe Email HTML from Plain Text',
    description: 'Describe your email layout in plain English. Get code that actually works in Outlook, Gmail, and Apple Mail.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Describe any email → Get Outlook-safe HTML in seconds',
    description: 'Stop debugging VML and table layouts. Describe what you want, get code that works everywhere.',
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
