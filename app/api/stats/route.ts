import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory stats (will reset on deployment)
// In production, use Redis or database
const stats = {
  totalGenerations: 0,
  generationsByType: {} as Record<string, number>,
  uniqueIPs: new Set<string>(),
  lastUpdated: new Date().toISOString(),
};

export async function POST(request: NextRequest) {
  try {
    const { type, action } = await request.json();
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    if (action === 'generate' && type) {
      stats.totalGenerations++;
      stats.generationsByType[type] = (stats.generationsByType[type] || 0) + 1;
      stats.uniqueIPs.add(ip);
      stats.lastUpdated = new Date().toISOString();
      
      return NextResponse.json({ 
        success: true,
        stats: {
          totalGenerations: stats.totalGenerations,
          generationsByType: stats.generationsByType,
          uniqueVisitors: stats.uniqueIPs.size,
        }
      });
    }
    
    return NextResponse.json({ success: false, error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({
    totalGenerations: stats.totalGenerations,
    generationsByType: stats.generationsByType,
    uniqueVisitors: stats.uniqueIPs.size,
    lastUpdated: stats.lastUpdated,
  });
}
