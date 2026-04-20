import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '20-Point Email Pre-Send Checklist',
  description:
    'Comprehensive checklist for testing emails across Outlook, Gmail, Apple Mail, iOS, and Android. Ensure your emails look perfect before sending.',
  keywords: [
    'email testing checklist',
    'email pre-send checklist',
    'test email HTML',
    'email client testing',
    'email QA checklist',
    'email preview checklist',
    'email compatibility test',
  ],
  openGraph: {
    title: '20-Point Email Pre-Send Checklist',
    description: 'Never send a broken email again. Complete testing checklist for all major clients.',
    type: 'article',
    publishedTime: '2026-04-20',
    authors: ['MailCraft AI'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '20-Point Email Pre-Send Checklist',
  description: 'Comprehensive checklist for testing emails across all major clients.',
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
    '@id': 'https://github-repo-eta.vercel.app/blog/email-html-checklist',
  },
};

const checklistItems = [
  { category: 'Structure', items: [
    'Doctype is set to XHTML 1.0 Transitional or HTML5',
    'HTML has lang attribute set',
    'Meta charset is UTF-8',
    'Title tag is present (for web view)',
    'Viewport meta tag for mobile scaling',
  ]},
  { category: 'Tables', items: [
    'All layouts use table-based structure',
    'Cellpadding and cellspacing are set to 0',
    'Border is set to 0 on layout tables',
    'Tables have width attribute (not just CSS)',
    'Nested tables do not exceed 3 levels deep',
  ]},
  { category: 'CSS', items: [
    'All CSS is inline (no style blocks)',
    'No CSS shorthand (use individual properties)',
    'Font-family has web-safe fallbacks',
    'No floats, flexbox, or grid used',
    'Important: padding/margin tested in Outlook',
  ]},
  { category: 'Images', items: [
    'All images have alt text',
    'Image dimensions are set (width/height)',
    'Images are hosted on HTTPS',
    'Background images have VML fallback for Outlook',
  ]},
  { category: 'Links', items: [
    'All links use absolute URLs (https://)',
    'CTA buttons are bulletproof (not just images)',
    'Unsubscribe link is present and functional',
    'Plain text version matches HTML content',
  ]},
];

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
              <span>4 min read</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '700', lineHeight: '1.2' }}>
              20-Point Email Pre-Send Checklist
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
              One broken email can damage your brand reputation, reduce engagement rates, and even
              trigger spam filters. Use this checklist every time before hitting send.
            </p>

            {checklistItems.map((section) => (
              <div key={section.category} style={{ marginBottom: '40px' }}>
                <h2
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    marginBottom: '20px',
                    color: '#0f172a',
                  }}
                >
                  {section.category}
                </h2>
                <ul style={{ paddingLeft: '0', listStyle: 'none' }}>
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '12px 0',
                        borderBottom: '1px solid #e2e8f0',
                      }}
                    >
                      <span
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '4px',
                          border: '2px solid #cbd5e1',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

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
                Pro tip: MailCraft AI generates email HTML that passes this checklist by default.
                No manual table debugging, no Outlook surprises.
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
