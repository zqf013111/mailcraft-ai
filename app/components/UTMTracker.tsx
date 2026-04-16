'use client';

import { useEffect } from 'react';

export default function UTMTracker() {
  useEffect(() => {
    // Track visit with UTM parameters
    const trackVisit = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source') || 'direct';
      const utmCampaign = urlParams.get('utm_campaign') || 'none';
      
      try {
        await fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'visit',
            source: utmSource,
            campaign: utmCampaign,
          }),
        });
      } catch (e) {
        // Silent fail for tracking
      }
    };
    
    trackVisit();
  }, []);
  
  return null;
}