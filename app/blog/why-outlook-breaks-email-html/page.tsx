import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your Email HTML Breaks in Outlook (And How to Fix It)',
  description:
    "Outlook uses Word's rendering engine instead of a browser engine. Learn why your modern CSS fails in Outlook and how table layouts fix this problem.",
  keywords: [
    'Outlook email HTML',
    'Outlook rendering issues',
    'email HTML broken in Outlook',
    'Outlook Word engine',
    'fix Outlook email',
    'email template Outlook',
  ],
  openGraph: {
    title: 'Why Your Email HTML Breaks in Outlook',
    description: "The real reason modern CSS fails in Outlook and the solution that actually works.",
    type: 'article',
    publishedTime: '2026-04-20',
    authors: ['MailCraft AI'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Why Your Email HTML Breaks in Outlook (And How to Fix It)',
  description:
    "Outlook uses Word's rendering engine instead of a browser engine. Learn why your modern CSS fails.",
  author: {
    '@type': 'Organization',
    name: 'MailCraft AI',
    url: 'https://github-repo-eta.vercel.app',
  },
  publisher: {
    '@type': 'Organization',
    name: 'MailCraft AI',
    logo: {
      '@type': 'ImageObject',
      url: 'https://github-repo-eta.vercel.app/og-image.png',
    },
  },
  datePublished: '2026-04-20',
  dateModified: '2026-04-20',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://github-repo-eta.vercel.app/blog/why-outlook-breaks-email-html',
  },
};

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ maxWidth: '768px', margin: '0 auto', padding: '64px 24px' }}>
        <article>
          <header style={{ marginBottom: '48px' }}>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                fontSize: '0.875rem',
                color: '#64748b',
                marginBottom: '16px',
              }}
            >
              <span>2026-04-20</span>
              <span>·</span>
              <span>5 min read</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '700', lineHeight: '1.2' }}>
              Why Your Email HTML Breaks in Outlook (And How to Fix It)
            </h1>
          </header>

          <div
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: '#334155',
            }}
          >
            <p style={{ marginBottom: '24px' }}>
              You spent hours crafting the perfect email template. It looks stunning in Chrome,
              Firefox, and even Safari. Then you open it in Outlook and... everything is broken.
              Buttons are misaligned, fonts are wrong, and your beautiful layout is a mess.
            </p>

            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginTop: '40px',
                marginBottom: '16px',
              }}
            >
              The Root Cause: Word, Not WebKit
            </h2>

            <p style={{ marginBottom: '24px' }}>
              While Gmail, Apple Mail, and most modern clients use WebKit or similar browser
              engines to render emails,{' '}
              <strong>
                Microsoft Outlook uses Microsoft Word's rendering engine
              </strong>. Yes, the word processor. This dates back to Outlook 2007 and continues
              through Outlook 2016, 2019, and 365 today.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Word's engine was designed for printing documents, not rendering HTML. It lacks
              support for:
            </p>

            <ul
              style={{
                marginBottom: '24px',
                paddingLeft: '24px',
              }}
            >
              <li style={{ marginBottom: '12px' }}>CSS Grid and Flexbox</li>
              <li style={{ marginBottom: '12px' }}>Modern CSS selectors</li>
              <li style={{ marginBottom: '12px' }}>Custom fonts (@font-face)</li>
              <li style={{ marginBottom: '12px' }}>CSS transforms and animations</li>
              <li style={{ marginBottom: '12px' }}>Proper box model support</li>
            </ul>

            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginTop: '40px',
                marginBottom: '16px',
              }}
            >
              The Solution: Table Layouts
            </h2>

            <p style={{ marginBottom: '24px' }}>
              The only reliable way to create consistent layouts across all email clients,
              including Outlook, is to use{' '}
              <strong>HTML tables for layout</strong>. This feels like a step back to 1999, but
              it's the reality of email development in 2026.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Here's what works in Outlook:
            </p>

            <ul
              style={{
                marginBottom: '24px',
                paddingLeft: '24px',
              }}
            >
              <li style={{ marginBottom: '12px' }}>Nested tables for complex layouts</li>
              <li style={{ marginBottom: '12px' }}>Inline CSS styles (no external stylesheets)</li>
              <li style={{ marginBottom: '12px' }}>Table attributes: cellpadding, cellspacing, border</li>
              <li style={{ marginBottom: '12px' }}>VML for background images</li>
              <li style={{ marginBottom: '12px' }}>MSO conditional comments for Outlook-specific fixes</li>
            </ul>

            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginTop: '40px',
                marginBottom: '16px',
              }}
            >
              How MailCraft AI Solves This
            </h2>

            <p style={{ marginBottom: '24px' }}>
              Instead of manually writing table-based HTML, describe your email in plain English
              and let MailCraft AI generate the Outlook-compatible code for you. Our AI
              understands:
            </p>

            <ul
              style={{
                marginBottom: '24px',
                paddingLeft: '24px',
              }}
            >
              <li style={{ marginBottom: '12px' }}>When to use tables vs. divs</li>
              <li style={{ marginBottom: '12px' }}>How to structure nested tables</li>
              <li style={{ marginBottom: '12px' }}>Which CSS properties are safe</li>
              <li style={{ marginBottom: '12px' }}>When to add VML conditionals</li>
              <li style={{ marginBottom: '12px' }}>How to handle buttons in Outlook</li>
            </ul>

            <div
              style={{
                backgroundColor: '#eff6ff',
                border: '1px solid #bfdbfe',
                borderRadius: '8px',
                padding: '24px',
                marginTop: '40px',
              }}
            >
              <p style={{ margin: 0, fontWeight: '500', color: '#1e40af' }}>
                Try it now: Describe your email layout and get production-ready HTML that works
                everywhere, including Outlook.
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
