import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import UTMTracker from './components/UTMTracker';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://github-repo-eta.vercel.app'),
  title: {
    default: 'MailCraft AI - Generate Outlook/Gmail/Apple Mail Compatible Email HTML from Text',
    template: '%s | MailCraft AI',
  },
  description:
    'Describe your email layout in plain English. Get production-ready HTML that works in Outlook 2016/2019/365, Gmail, Apple Mail, iOS Mail. No coding or table debugging required.',
  keywords: [
    'email HTML generator', 'Outlook compatible email', 'email template maker',
    'VML fix', 'email HTML code', 'email developer tools',
    'responsive email template', 'email marketing developer', 'table layout email',
  ],
  openGraph: {
    title: 'MailCraft AI - Describe Emails in Plain English',
    description: 'Natural language to production-ready email HTML that works in Outlook, Gmail, Apple Mail.',
    url: 'https://github-repo-eta.vercel.app',
    siteName: 'MailCraft AI',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MailCraft AI - Email HTML Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MailCraft AI - Email HTML Generator',
    description: 'Describe emails in English. Get HTML that works in Outlook and Gmail.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MailCraft AI',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'AI-powered email HTML generator that creates Outlook, Gmail, and Apple Mail compatible email templates from plain English descriptions.',
    url: 'https://github-repo-eta.vercel.app',
    image: 'https://github-repo-eta.vercel.app/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'MailCraft AI',
      url: 'https://github-repo-eta.vercel.app',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
    },
    featureList: [
      'Natural language to email HTML conversion',
      'Outlook 2016/2019/365 compatibility',
      'Gmail and Apple Mail support',
      'VML conditional fixes',
      'Table-based layouts',
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="wH8mWsmOXuGMI1SvIC1g6owLHw-GFPHOb-IleOE6zlw"
        />
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
