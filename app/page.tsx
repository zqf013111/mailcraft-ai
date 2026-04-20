'use client';

import { useState } from 'react';
import { Sparkles, Copy, Check, Download, Mail, Code, Eye, Loader2 } from 'lucide-react';
import ShareButtons from './components/ShareButtons';
import EmailCapture from './components/EmailCapture';
import FeedbackWidget from './components/FeedbackWidget';
import LaunchOffer from './components/LaunchOffer';

const EMAIL_TYPES = [
  { value: 'newsletter', label: 'Newsletter', icon: '📧', example: 'A weekly newsletter from our tech blog. Include a header with our logo, featured article spotlight with thumbnail, 3 quick tips section, and footer with unsubscribe link. Brand colors: dark blue and white.' },
  { value: 'promotional', label: 'Promotional', icon: '🎯', example: 'A promotional email for our summer sale. Include a hero banner with 30% off headline, product grid with 4 items, customer testimonial, and prominent CTA button. Brand colors are blue and white.' },
  { value: 'welcome', label: 'Welcome Email', icon: '👋', example: 'A welcome email for new users who just signed up. Include warm greeting, 3-step getting started guide, featured feature highlights, and a support contact link. Brand colors: teal and white.' },
  { value: 'transactional', label: 'Transactional', icon: '📋', example: 'An order confirmation email after a purchase. Include order number and date, itemized product list with images, shipping address, delivery estimate, and track order button. Clean and minimal style.' },
  { value: 'event', label: 'Event Invitation', icon: '📅', example: 'An invitation to our upcoming webinar on AI tools. Include event title and date/time, speaker bio with headshot placeholder, agenda with 3 sessions, and RSVP button. Professional purple theme.' },
];

export default function Home() {
  const [description, setDescription] = useState('');
  const [emailType, setEmailType] = useState('newsletter');
  const [generatedHTML, setGeneratedHTML] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!description.trim()) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, emailType }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate email');
      }
      
      setGeneratedHTML(data.html);
      
      // Track generation stat
      fetch('/api/stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: emailType, action: 'generate' }),
      }).catch(() => {});
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedHTML);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `email-${emailType}-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">MailCraft AI</span>
          </div>
          <div className="flex items-center gap-4">
            <ShareButtons 
              url={`https://github-repo-eta.vercel.app?utm_source=share&utm
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Input */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">
                Generate Email HTML
              </h1>
              <p className="text-slate-600">
                Describe your email in plain English. Get production-ready HTML that works everywhere.
              </p>
            </div>

            {/* Email Type Selector */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Email Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {EMAIL_TYPES.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setEmailType(type.value)}
                    className={`px-4 py-3 rounded-lg border text-left transition-all ${
                      emailType === type.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <span className="mr-2">{type.icon}</span>
                    <span className="text-sm font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Description Input */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Describe Your Email
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={EMAIL_TYPES.find(t => t.value === emailType)?.example || 'Describe your email in plain English...'}
                className="w-full h-40 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isLoading || !description.trim()}
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Email HTML
                </>
              )}
            </button>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Tips */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">💡 Pro Tips</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Include your brand colors and logo preferences</li>
                <li>• Mention specific sections you need (header, footer, CTA)</li>
                <li>• Describe your target audience for tone matching</li>
                <li>• Generated HTML works in Outlook, Gmail, Apple Mail</li>
              </ul>
            </div>

            {/* Email Capture */}
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-3">📧 Get Product Updates</h3>
              <EmailCapture />
            </div>
          </div>

          {/* Right Panel - Output */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            {generatedHTML ? (
              <>
                {/* Tabs */}
                <div className="flex border-b border-slate-200">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`flex-1 py-3 px-4 text-sm font-medium flex items-center justify-center gap-2 ${
                      activeTab === 'preview'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`flex-1 py-3 px-4 text-sm font-medium flex items-center justify-center gap-2 ${
                      activeTab === 'code'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Code className="w-4 h-4" />
                    HTML Code
                  </button>
                </div>

                {/* Content */}
                <div className="h-[500px] overflow-hidden flex flex-col">
                  {activeTab === 'preview' ? (
                    <div className="flex-1 bg-slate-100 p-4 overflow-auto">
                      <div className="mx-auto max-w-[600px]">
                        <iframe
                          srcDoc={generatedHTML}
                          className="w-full bg-white shadow-sm"
                          style={{ minHeight: '450px', border: 'none' }}
                          sandbox="allow-same-origin"
                          title="Email Preview"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 overflow-auto">
                      <pre className="p-4 text-sm font-mono text-slate-800 bg-slate-50 overflow-x-auto whitespace-pre-wrap">
                        {generatedHTML}
                      </pre>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="p-4 border-t border-slate-200 flex gap-3">
                  <button
                    onClick={handleCopy}
                    className="flex-1 py-2 px-4 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy HTML
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </>
            ) : (
              <div className="h-[600px] flex flex-col items-center justify-center text-slate-400 p-8">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <p className="text-lg font-medium text-slate-600 mb-2">Your email preview will appear here</p>
                <p className="text-sm text-center max-w-sm">
                  Describe your email on the left and click "Generate" to create HTML that works in Outlook, Gmail, and Apple Mail.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-900">MailCraft AI</span>
            </div>
            <p className="text-sm text-slate-500">
              Made for email developers who are tired of Outlook compatibility issues
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/yourusername/mailcraft-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/mailcraftai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Feedback Widget */}
      <FeedbackWidget />
      
      {/* Launch Offer Popup */}
      <LaunchOffer />
    </main>
  );
}
