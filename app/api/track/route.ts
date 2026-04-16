import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory tracking (will reset on deploy, but good for MVP)
const stats = {
  visits: 0,
  generations: 0,
  bySource: {} as Record<string, number>,
  byCampaign: {} as Record<string, number>,
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const action = searchParams.get('action');
  const source = searchParams.get('utm_source') || 'direct';
  const campaign = searchParams.get('utm_campaign') || 'none';
  
  if (action === 'visit') {
    stats.visits++;
    stats.bySource[source] = (stats.bySource[source] || 0) + 1;
    stats.byCampaign[campaign] = (stats.byCampaign[campaign] || 0) + 1;
  } else if (action === 'generate') {
    stats.generations++;
  }
  
  return NextResponse.json({ 
    success: true, 
    stats: {
      ...stats,
      conversionRate: stats.visits > 0 ? ((stats.generations / stats.visits) * 100).toFixed(2) + '%' : '0%'
    }
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { action, source, campaign } = body;
  
  if (action === 'visit') {
    stats.visits++;
    if (source) stats.bySource[source] = (stats.bySource[source] || 0) + 1;
    if (campaign) stats.byCampaign[campaign] = (stats.byCampaign[campaign] || 0) + 1;
  } else if (action === 'generate') {
    stats.generations++;
  }
  
  return NextResponse.json({ success: true });
}