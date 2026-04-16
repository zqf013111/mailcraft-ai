'use client';

import { useState, useEffect } from 'react';
import { X, Zap, Gift, ArrowRight } from 'lucide-react';

export default function LaunchOffer() {
  const [show, setShow] = useState(false);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    // Show after 5 seconds if not claimed
    const timer = setTimeout(() => {
      const hasClaimed = localStorage.getItem('launch50_claimed');
      if (!hasClaimed) {
        setShow(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClaim = () => {
    setClaimed(true);
    localStorage.setItem('launch50_claimed', 'true');
    localStorage.setItem('launch50_code', 'LAUNCH50');
    setShow(false);
  };

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            🎉 Launch Special - 50% OFF
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Be One of the First 100 Users
          </h3>

          <p className="text-slate-600 mb-6">
            Get <span className="font-bold text-purple-600">50% OFF forever</span> on MailCraft AI Pro. 
            Lock in this price for life!
          </p>

          <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-3xl font-bold text-slate-400 line-through">$12/mo</span>
              <span className="text-4xl font-bold text-purple-600">$6/mo</span>
            </div>
            <p className="text-sm text-slate-600">Save $72/year forever</p>
          </div>

          <div className="bg-slate-900 text-white rounded-lg p-3 mb-6 flex items-center justify-center gap-3">
            <Gift className="w-5 h-5 text-purple-400" />
            <span className="font-mono text-lg font-bold">LAUNCH50</span>
            <button
              onClick={() => navigator.clipboard.writeText('LAUNCH50')}
              className="text-xs bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded transition"
            >
              Copy
            </button>
          </div>

          <button
            onClick={handleClaim}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            Claim Your Discount
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-xs text-slate-500 mt-3">
            Limited to first 100 users • Lock in price forever • Cancel anytime
          </p>

          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              ✅ Unlimited emails • ✅ All templates • ✅ Outlook optimized • ✅ Priority support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
