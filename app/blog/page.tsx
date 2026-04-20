'use client';

const posts = [
  {
    slug: 'why-outlook-breaks-email-html',
    title: 'Why Your Email HTML Breaks in Outlook (And How to Fix It)',
    excerpt: "Outlook uses Word's rendering engine. GPT-generated modern CSS fails. Table layouts fix this.",
    date: '2026-04-20',
    readTime: '5 min',
  },
  {
    slug: 'table-layout-email-html-guide',
    title: "Email Developer's Guide to Table Layouts in 2026",
    excerpt: 'Nested tables, VML conditionals, MSO fixes — email-safe HTML reference.',
    date: '2026-04-20',
    readTime: '8 min',
  },
  {
    slug: 'email-html-checklist',
    title: 'Production Email Checklist: 20 Points Before You Send',
    excerpt: 'Outlook, Gmail, Apple Mail, iOS — verification steps that actually work.',
    date: '2026-04-20',
    readTime: '4 min',
  },
];

export default function BlogPage() {
  return (
    <main style={{ maxWidth: '896px', margin: '0 auto', padding: '64px 24px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '16px' }}>
        Email HTML Development Blog
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '48px' }}>
        Guides and reference for building emails that work in Outlook, Gmail, Apple Mail.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {posts.map((post) => (
          <article key={post.slug} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', gap: '12px', fontSize: '0.875rem', color: '#64748b', marginBottom: '8px' }}>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime} read</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '8px' }}>{post.title}</h2>
            <p style={{ color: '#475569', marginBottom: '12px' }}>{post.excerpt}</p>
            <span style={{ color: '#2563eb', fontWeight: '500' }}>Read more →</span>
          </article>
        ))}
      </div>
    </main>
  );
}
