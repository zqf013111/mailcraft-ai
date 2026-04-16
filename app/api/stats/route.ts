import { NextRequest, NextResponse } from 'next/server';

// In-memory stats storage
const stats = {
  totalVisits: 0,
  totalGenerations: 0,
  totalSubscriptions: 0,
  totalFeedbacks: 0,
  bySource: {} as Record<string, number>,
  byCampaign: {} as Record<string, number>,
  byContent: {} as Record<string, number>,
  dailyStats: [] as Array<{
    date: string;
    visits: number;
    generations: number;
  }>,
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const action = searchParams.get('action');
  
  if (action === 'track') {
    const source = searchParams.get('source') || 'direct';
    const campaign = searchParams.get('campaign') || 'none';
    const content = searchParams.get('content') || 'none';
    const type = searchParams.get('type') || 'visit';
    
    if (type === 'visit') {
      stats.totalVisits++;
      stats.bySource[source] = (stats.bySource[source] || 0) + 1;
      stats.byCampaign[campaign] = (stats.byCampaign[campaign] || 0) + 1;
      if (content !== 'none') {
        stats.byContent[content] = (stats.byContent[content] || 0) + 1;
      }
    } else if (type === 'generate') {
      stats.totalGenerations++;
    } else if (type === 'subscribe') {
      stats.totalSubscriptions++;
    } else if (type === 'feedback') {
      stats.totalFeedbacks++;
    }
    
    return NextResponse.json({ success: true });
  }
  
  // Return all stats
  const conversionRate = stats.totalVisits > 0 
    ? ((stats.totalGenerations / stats.totalVisits) * 100).toFixed(2)
    : '0';
  
  return NextResponse.json({
    ...stats,
    conversionRate: `${conversionRate}%`,
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { type, source, campaign, content } = body;
  
  if (type === 'visit') {
    stats.totalVisits++;
    if (source) stats.bySource[source] = (stats.bySource[source] || 0) + 1;
    if (campaign) stats.byCampaign[campaign] = (stats.byCampaign[campaign] || 0) + 1;
    if (content) stats.byContent[content] = (stats.byContent[content] || 0) + 1;
  } else if (type === 'generate') {
    stats.totalGenerations++;
  } else if (type === 'subscribe') {
    stats.totalSubscriptions++;
  } else if (type === 'feedback') {
    stats.totalFeedbacks++;
  }
  
  return NextResponse.json({ success: true });
}