import { Metadata } from 'next';
import { Check, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MailCraft AI vs Alternatives - Email HTML Generator Comparison',
  description: 'Compare MailCraft AI with other email HTML generators. See why developers choose us for Outlook-compatible email HTML.',
};

const features = [
  {
    name: 'Outlook Compatible',
    mailcraft: true,
    beefree: true,
    stripo: true,
    chamaileon: true,
    handwritten: 'Maybe',
  },
  {
    name: 'AI-Powered Generation',
    mailcraft: true,
    beefree: false,
    stripo: false,
    chamaileon: false,
    handwritten: false,
  },
  {
    name: 'Text-to-HTML',
    mailcraft: true,
    beefree: false,
    stripo: false,
    chamaileon: false,
    handwritten: false,
  },
  {
    name: 'Free Tier',
    mailcraft: true,
    beefree: true,
    stripo: true,
    chamaileon: false,
    handwritten: true,
  },
  {
    name: 'No Signup Required',
    mailcraft: true,
    beefree: false,
    stripo: false,
    chamaileon: false,
    handwritten: true,
  },
  {
    name: 'Open Source',
    mailcraft: true,
    beefree: false,
    stripo: false,
    chamaileon: false,
    handwritten: true,
  },
  {
    name: 'Drag & Drop Editor',
    mailcraft: false,
    beefree: true,
    stripo: true,
    chamaileon: true,
    handwritten: false,
  },
  {
    name: 'Template Gallery',
    mailcraft: false,
    beefree: true,
    stripo: true,
    chamaileon: true,
    handwritten: false,
  },
];

const pricing = [
  {
    name: 'MailCraft AI',
    price: 'Free',
    description: 'MVP - All features free during validation',
    highlight: true,
  },
  {
    name: 'BeeFree',
    price: '$15/mo',
    description: 'Starter plan',
    highlight: false,
  },
  {
    name: 'Stripo',
    price: '$15/mo',
    description: 'Basic plan',
    highlight: false,
  },
  {
    name: 'Chamaileon',
    price: '$25/mo',
    description: 'Starter plan',
    highlight: false,
  },
  {
    name: 'Hand-coded',
    price: '$50-100/hr',
    description: 'Developer time',
    highlight: false,
  },
];

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-900">MailCraft AI</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            ← Back to App
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Why Choose MailCraft AI?
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Compare MailCraft AI with other email HTML generators. 
            See why developers choose us for Outlook-compatible email HTML.
          </p>
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-blue-600 bg-blue-50">
                    MailCraft AI
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-700">BeeFree</th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-700">Stripo</th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-700">Chamaileon</th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-700">Hand-coded</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={feature.name} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="py-4 px-6 font-medium text-slate-900">{feature.name}</td>
                    <td className="py-4 px-6 text-center bg-blue-50/50">
                      {typeof feature.mailcraft === 'boolean' ? (
                        feature.mailcraft ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600">{feature.mailcraft}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof feature.beefree === 'boolean' ? (
                        feature.beefree ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600">{feature.beefree}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof feature.stripo === 'boolean' ? (
                        feature.stripo ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600">{feature.stripo}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof feature.chamaileon === 'boolean' ? (
                        feature.chamaileon ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600">{feature.chamaileon}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof feature.handwritten === 'boolean' ? (
                        feature.handwritten ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600">{feature.handwritten}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 ${
                plan.highlight
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <h3 className="font-semibold text-slate-900 mb-2">{plan.name}</h3>
              <div className="text-2xl font-bold text-slate-900 mb-1">{plan.price}</div>
              <p className="text-sm text-slate-500">{plan.description}</p>
              {plan.highlight && (
                <div className="mt-4 inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  Best Value
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              When to Choose MailCraft AI
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span className="text-slate-700">You need email HTML fast without learning drag-and-drop editors</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span className="text-slate-700">Outlook compatibility is critical for your audience</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span className="text-slate-700">You want to skip the email template setup process</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span className="text-slate-700">You're comfortable with basic HTML customization</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              When to Choose Alternatives
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-slate-400 mt-0.5" />
                <span className="text-slate-700">You need a visual drag-and-drop editor</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-slate-400 mt-0.5" />
                <span className="text-slate-700">You want a large template gallery to choose from</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-slate-400 mt-0.5" />
                <span className="text-slate-700">You need advanced collaboration features</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-slate-400 mt-0.5" />
                <span className="text-slate-700">You have very specific brand requirements</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to try MailCraft AI?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Generate your first Outlook-compatible email HTML in seconds. 
            No signup required, completely free.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Try It Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500">
            Comparison data based on publicly available information as of April 2026.
            Features and pricing may change. Please verify with each provider.
          </p>
        </div>
      </footer>
    </main>
  );
}
