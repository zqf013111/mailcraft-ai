'use client';

import { Twitter, Linkedin, Link2, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  url?: string;
  title?: string;
}

export default function ShareButtons({ 
  url = 'https://mailcraft-ai.vercel.app',
  title = 'MailCraft AI - Generate Outlook-safe email HTML in seconds'
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);
  
  const twitterUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-slate-500">Share:</span>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4 text-slate-700" />
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4 text-slate-700" />
      </a>
      <button
        onClick={handleCopy}
        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
        aria-label="Copy link"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-600" />
        ) : (
          <Link2 className="w-4 h-4 text-slate-700" />
        )}
      </button>
    </div>
  );
}