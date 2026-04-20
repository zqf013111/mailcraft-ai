import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import UTMTracker from './components/UTMTracker';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MailCraft AI - Email HTML Generator',
    description: 'Describe emails in English. Get HTML that works in Outlook and Gmail.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <UTMTracker />
        <Analytics />
      </body>
    </html>
  );
}
