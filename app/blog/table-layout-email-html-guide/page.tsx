import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Email Developer's Guide to Table Layouts in 2026",
  description:
    'Complete reference for nested tables, VML conditionals, MSO fixes, and email-safe HTML. Build emails that work in every client.',
  keywords: [
    'email table layout',
    'nested tables email',
    'VML email',
    'MSO conditional comments',
    'email HTML tables',
    'Outlook table layout',
    'email developer guide',
  ],
  openGraph: {
    title: "Email Developer's Guide to Table Layouts in 2026",
    description: 'The complete reference for email-safe HTML table layouts.',
    type: 'article',
    publishedTime: '2026-04-20',
    authors: ['MailCraft AI'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: "Email Developer's Guide to Table Layouts in 2026",
  description: 'Complete reference for nested tables, VML conditionals, MSO fixes.',
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
    '@id': 'https://github-repo-eta.vercel.app/blog/table-layout-email-html-guide',
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
              <span>8 min read</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '700', lineHeight: '1.2' }}>
              Email Developer's Guide to Table Layouts in 2026
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
              Email HTML is one of the few places in modern web development where tables are not
              just acceptable—they're required. This guide covers everything you need to know about
              building bulletproof email layouts with tables.
            </p>

            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginTop: '40px',
                marginBottom: '16px',
              }}
            >
              Why Tables Are Still King
            </h2>

            <p style={{ marginBottom: '24px' }}>
              Despite CSS Grid and Flexbox revolutionizing web layout, email clients remain stuck
              in the past. Outlook's Word rendering engine, Gmail's aggressive CSS stripping, and
              the sheer variety of mobile clients make tables the only reliable layout mechanism.
            </p>

            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginTop: '40px',
                marginBottom: '16px',
              }}
            >
              Basic Table Structure
            </h2>

            <p style={{ marginBottom: '24px' }}>
              Every email starts with a wrapper table that centers your content and sets the
              background color. Here's the foundation:
            </p>

            <pre
              style={{
                backgroundColor: '#f1f5f9',
                padding: '20px',
                borderRadius: '8px',
                overflow: 'auto',
                fontSize: '0.875rem',
                lineHeight: '1.6',
              }}
            >
{`<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td align="center" style="padding: 20px 0;">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
        <!-- Your content goes here -->
      </table>
    </td>
  </tr>
</table>`}
            </pre>

            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginTop: '40px',
                marginBottom: '16px',
              }}
            >
              Two-Column Layouts
            </h2>

            <p style={{ marginBottom: '24px' }}>
              Side-by-side content is one of the most common patterns. Use table cells with
              percentage widths, and always stack on mobile:
            </p>

            <pre
              style={{
                backgroundColor: '#f1f5f9',
                padding: '20px',
                borderRadius: '8px',
                overflow: 'auto',
                fontSize: '0.875rem',
                lineHeight: '1.6',
              }}
            >
{`<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td width="50%" valign="top" style="padding: 10px;">
      Left column content
    </td>
    <td width="50%" valign="top" style="padding: 10px;">
      Right column content
    </td>
  </tr>
</table>`}
            </pre>

            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginTop: '40px',
                marginBottom: '16px',
              }}
            >
              VML for Background Images
            </h2>

            <p style={{ marginBottom: '24px' }}>
              Outlook doesn't support CSS background images. Use VML (Vector Markup Language)
              as a fallback:
            </p>

            <pre
              style={{
                backgroundColor: '#f1f5f9',
                padding: '20px',
                borderRadius: '8px',
                overflow: 'auto',
                fontSize: '0.875rem',
                lineHeight: '1.6',
              }}
            >
{`<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:300px;">
<v:fill type="tile" src="image.jpg" />
<v:textbox inset="0,0,0,0">
<![endif]-->
  <div style="padding: 40px;">
    Content over background image
  </div>
<!--[if gte mso 9]></v:textbox></v:rect><![endif]-->`}
            </pre>

            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginTop: '40px',
                marginBottom: '16px',
              }}
            >
              MSO Conditional Comments
            </h2>

            <p style={{ marginBottom: '24px' }}>
              Target specific Outlook versions with conditional comments. This is essential for
              applying Outlook-only fixes without breaking other clients.
            </p>

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
                Skip the manual work—describe your layout in plain English and let MailCraft AI
                generate the correct table structure, VML, and MSO conditionals automatically.
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
