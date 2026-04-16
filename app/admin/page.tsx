'use client';

import { useEffect, useState } from 'react';
import { RefreshCw, Users, MousePointer, Mail, MessageSquare, TrendingUp } from 'lucide-react';

interface Stats {
  totalVisits: number;
  totalGenerations: number;
  totalSubscriptions: number;
  totalFeedbacks: number;
  conversionRate: string;
  bySource: Record<string, number>;
  byCampaign: Record<string, number>;
  byContent: Record<string, number>;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats');
      const data = await response.json();
      setStats(data);
      setLastUpdate(new Date());
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    // Refresh every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex items-center gap-2 text-slate-500">
          <RefreshCw className="w-5 h-5 animate-spin" />
          Loading stats...
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-500">Failed to load stats</p>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Visits',
      value: stats.totalVisits,
      icon: Users,
      color: 'blue',
    },
    {
      title: 'Email Generations',
      value: stats.totalGenerations,
      icon: MousePointer,
      color: 'green',
    },
    {
      title: 'Email Subscribers',
      value: stats.totalSubscriptions,
      icon: Mail,
      color: 'purple',
    },
    {
      title: 'Feedback Received',
      value: stats.totalFeedbacks,
      icon: MessageSquare,
      color: 'orange',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900">MailCraft AI Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </span>
            <button
              onClick={fetchStats}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <RefreshCw className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Conversion Rate */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-blue-100 text-sm">Conversion Rate</p>
              <p className="text-3xl font-bold">{stats.conversionRate}</p>
              <p className="text-blue-100 text-sm mt-1">
                Generations / Visits
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl border border-slate-200 p-6"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-${card.color}-100 rounded-lg flex items-center justify-center`}>
                  <card.icon className={`w-6 h-6 text-${card.color}-600`} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">{card.title}</p>
                  <p className="text-2xl font-bold text-slate-900">{card.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Traffic Sources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Traffic by Source</h2>
            {Object.entries(stats.bySource).length === 0 ? (
              <p className="text-slate-500 text-center py-8">No data yet</p>
            ) : (
              <div className="space-y-3">
                {Object.entries(stats.bySource)
                  .sort((a, b) => b[1] - a[1])
                  .map(([source, count]) => (
                    <div key={source} className="flex items-center justify-between">
                      <span className="text-slate-700 capitalize">{source}</span>
                      <div className="flex items-center gap-4">
                        <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600 rounded-full"
                            style={{
                              width: `${(count / stats.totalVisits) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="text-slate-900 font-medium w-8 text-right">
                          {count}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Traffic by Content</h2>
            {Object.entries(stats.byContent).length === 0 ? (
              <p className="text-slate-500 text-center py-8">No data yet</p>
            ) : (
              <div className="space-y-3">
                {Object.entries(stats.byContent)
                  .sort((a, b) => b[1] - a[1])
                  .map(([content, count]) => (
                    <div key={content} className="flex items-center justify-between">
                      <span className="text-slate-700">{content}</span>
                      <span className="text-slate-900 font-medium">{count}</span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* 48 Hour Sprint Progress */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mt-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">48 Hour Sprint Progress</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-700">Visitor Goal (50)</span>
                <span className="text-slate-900 font-medium">
                  {Math.min(stats.totalVisits, 50)} / 50
                </span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all"
                  style={{ width: `${Math.min((stats.totalVisits / 50) * 100, 100)}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-700">Generation Goal (20)</span>
                <span className="text-slate-900 font-medium">
                  {Math.min(stats.totalGenerations, 20)} / 20
                </span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-600 rounded-full transition-all"
                  style={{ width: `${Math.min((stats.totalGenerations / 20) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}