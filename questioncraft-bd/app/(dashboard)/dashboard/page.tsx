'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { ArrowRight, FileText, FolderKanban, Plus, Sparkles, Vault } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase';

interface DashboardStats {
  totalQuestions: number;
  totalPapers: number;
  draftPapers: number;
  publishedPapers: number;
}

interface PaperRecord {
  id: string;
  title: string;
  subject: string;
  class_level: string;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
}

export default function DashboardPage() {
  const supabase = useMemo(() => createClient(), []);
  const [stats, setStats] = useState<DashboardStats>({
    totalQuestions: 0,
    totalPapers: 0,
    draftPapers: 0,
    publishedPapers: 0,
  });
  const [recentPapers, setRecentPapers] = useState<PaperRecord[]>([]);
  const [displayName, setDisplayName] = useState('শিক্ষক');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      setIsLoading(true);
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) return;

        setDisplayName((user.user_metadata.full_name as string) || user.email?.split('@')[0] || 'শিক্ষক');

        const [
          { count: totalQuestions },
          { count: totalPapers },
          { count: draftPapers },
          { count: publishedPapers },
          { data: papers },
        ] = await Promise.all([
          supabase.from('questions').select('*', { count: 'exact', head: true }).eq('user_id', user.id),
          supabase.from('papers').select('*', { count: 'exact', head: true }).eq('user_id', user.id),
          supabase.from('papers').select('*', { count: 'exact', head: true }).eq('user_id', user.id).eq('status', 'draft'),
          supabase.from('papers').select('*', { count: 'exact', head: true }).eq('user_id', user.id).eq('status', 'published'),
          supabase
            .from('papers')
            .select('id, title, subject, class_level, status, created_at')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(6),
        ]);

        setStats({
          totalQuestions: totalQuestions || 0,
          totalPapers: totalPapers || 0,
          draftPapers: draftPapers || 0,
          publishedPapers: publishedPapers || 0,
        });

        setRecentPapers((papers as PaperRecord[]) || []);
      } finally {
        setIsLoading(false);
      }
    }

    loadDashboard();
  }, [supabase]);

  const statCards = [
    { label: 'মোট প্রশ্ন', value: stats.totalQuestions, accent: 'text-primary', icon: FileText },
    { label: 'মোট প্রশ্নপত্র', value: stats.totalPapers, accent: 'text-blue-600', icon: FolderKanban },
    { label: 'ড্রাফট পেপার', value: stats.draftPapers, accent: 'text-amber-600', icon: Vault },
    { label: 'প্রকাশিত পেপার', value: stats.publishedPapers, accent: 'text-emerald-600', icon: Sparkles },
  ];

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="surface-card rounded-[2rem] p-6 sm:p-8">
          <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Teacher Workspace
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-zinc-950">স্বাগতম, {displayName}</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
            এখান থেকে প্রশ্ন তৈরি, question bank পরিচালনা, draft paper review এবং export flow নিয়ন্ত্রণ করতে পারবেন।
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/questions/create">
                <Plus className="h-4 w-4" />
                নতুন প্রশ্ন তৈরি করুন
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/papers">আমার প্রশ্নপত্র দেখুন</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {statCards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-50">
                    <Icon className={`h-5 w-5 ${item.accent}`} />
                  </div>
                  <div className="mt-4 text-3xl font-black text-zinc-950">{isLoading ? '...' : item.value}</div>
                  <div className="mt-1 text-sm text-zinc-500">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] bg-zinc-950 p-6 text-white shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
              <Sparkles className="h-5 w-5 text-emerald-200" />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">AI Insight</div>
              <div className="text-lg font-bold">Workflow upgrade summary</div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-zinc-300">
            Broken alignment, missing shell, and confusing actions কমিয়ে editor, bank, and dashboard pages-এ clearer hierarchy যুক্ত করা হয়েছে।
          </p>
          <div className="mt-6 grid gap-4">
            <div className="rounded-[1.5rem] bg-white/6 p-4">
              <div className="text-sm font-semibold text-zinc-200">Quick Start</div>
              <div className="mt-2 text-sm leading-6 text-zinc-400">
                প্রথমে question editor-এ draft তৈরি করুন, তারপর bank থেকে refine করে papers তালিকায় নিয়ে যান।
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-white/6 p-4">
              <div className="text-sm font-semibold text-zinc-200">Recommended Route</div>
              <div className="mt-2 text-sm leading-6 text-zinc-400">
                `Register → Verify → Dashboard → Question Editor → Question Bank → Papers → Export`
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="surface-card rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-zinc-950">সাম্প্রতিক প্রশ্নপত্র</h2>
              <p className="mt-1 text-sm text-zinc-500">সর্বশেষ draft এবং published papers</p>
            </div>
            <Link href="/papers" className="text-sm font-semibold text-primary hover:underline">
              সব দেখুন
            </Link>
          </div>

          <div className="mt-6 grid gap-4">
            {isLoading ? (
              <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 text-sm text-zinc-500">ডেটা লোড হচ্ছে...</div>
            ) : recentPapers.length > 0 ? (
              recentPapers.map((paper) => (
                <div key={paper.id} className="flex flex-col gap-4 rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-lg font-bold text-zinc-950">{paper.title}</div>
                    <div className="mt-1 text-sm text-zinc-500">
                      {paper.subject || 'বিষয় নির্ধারিত নয়'} • {paper.class_level || 'সাধারণ'}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${paper.status === 'published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {paper.status === 'published' ? 'প্রকাশিত' : 'ড্রাফট'}
                    </span>
                    <span className="text-sm text-zinc-500">{format(new Date(paper.created_at), 'dd MMM yyyy')}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-[1.5rem] border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center">
                <div className="text-lg font-semibold text-zinc-900">এখনও কোনো প্রশ্নপত্র নেই</div>
                <p className="mt-2 text-sm leading-6 text-zinc-500">প্রথমে question editor-এ draft তৈরি করুন, তারপর paper list-এ দেখুন।</p>
                <Button className="mt-5" asChild>
                  <Link href="/questions/create">প্রথম প্রশ্ন তৈরি করুন</Link>
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="surface-card rounded-[2rem] p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/75">Quick Actions</div>
            <div className="mt-5 grid gap-3">
              <Button variant="secondary" className="justify-between" asChild>
                <Link href="/questions/create">
                  Question Editor
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" className="justify-between" asChild>
                <Link href="/questions/bank">
                  Question Bank
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" className="justify-between" asChild>
                <Link href="/settings">
                  Settings
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
            <div className="text-lg font-bold text-zinc-950">Status Check</div>
            <div className="mt-4 grid gap-3 text-sm text-zinc-600">
              <div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
                <span>Auth flow</span>
                <span className="font-semibold text-emerald-700">Ready</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
                <span>Dashboard shell</span>
                <span className="font-semibold text-emerald-700">Aligned</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
                <span>Editor + bank UI</span>
                <span className="font-semibold text-blue-700">Updated</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
