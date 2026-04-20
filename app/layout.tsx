import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import UTMTracker from './components/UTMTracker';

const inter = Inter({ subsets: ['latin'] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MailCraft AI",
  "description": "Generate Outlook/Gmail/Apple Mail compatible email HTML from natural language descriptions.",
  "url": "https://github-repo-eta.vercel.app",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "89" },
};

export const metadata: Metadata = {
  metadataBase: new URL('https://github-repo-eta.vercel.app'),
  title: {
    default: 'MailCraft AI - Generate Outlook/Gmail/Apple Mail Compatible Email HTML from Text',
    template: '%s | MailCraft AI',
  },
  description: 'Describe your email layout in plain English. Get production-ready HTML that works in Outlook 2016/2019/365, Gmail, Apple Mail. No coding required.',
  keywords: [
    'email HTML generator', 'Outlook compatible email', 'email template maker',
    'VML fix', 'email HTML code', 'email developer tools', 'responsive email template',
    'email marketing developer', 'table layout email'
  ],
  authors: [{ name: 'MailCraft AI' }],
  creators: 'MailCraft AI',
  openGraph: {
    title: 'MailCraft AI - Describe Emails, Get HTML That Works Everywhere',
    description: 'Natural language → Outlook/Gmail/Apple Mail compatible HTML code.',
    url: 'https://github-repo-eta.vercel.app',
    siteName: 'MailCraft AI',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MailCraft AI — Email HTML Generator',
    description: 'Describe emails in English → Get code that works in Outlook.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <UTMTracker />
        <Analytics />
      </body>
    </html>
  );
}
