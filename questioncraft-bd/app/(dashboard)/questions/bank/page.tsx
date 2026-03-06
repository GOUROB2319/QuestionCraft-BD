'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { Database, Plus, Search, SlidersHorizontal, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase';
import { cn } from '@/lib/utils';

type QuestionRow = {
  id: string;
  title: string;
  type: 'mcq' | 'short' | 'broad';
  subject: string;
  class_level: string;
  difficulty: 'easy' | 'medium' | 'hard';
  marks: number;
  content: {
    question?: string;
    stem?: string;
  };
  created_at: string;
};

const typeFilters = [
  { value: 'all', label: 'সব' },
  { value: 'mcq', label: 'MCQ' },
  { value: 'short', label: 'সংক্ষিপ্ত' },
  { value: 'broad', label: 'সৃজনশীল' },
];

export default function QuestionBankPage() {
  const supabase = useMemo(() => createClient(), []);
  const [questions, setQuestions] = useState<QuestionRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'mcq' | 'short' | 'broad'>('all');

  useEffect(() => {
    async function loadQuestions() {
      setIsLoading(true);
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) return;

        let query = supabase
          .from('questions')
          .select('id, title, type, subject, class_level, difficulty, marks, content, created_at')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (filterType !== 'all') {
          query = query.eq('type', filterType);
        }

        if (searchQuery) {
          query = query.or(`title.ilike.%${searchQuery}%,subject.ilike.%${searchQuery}%`);
        }

        const { data } = await query;
        setQuestions((data as QuestionRow[]) || []);
      } finally {
        setIsLoading(false);
      }
    }

    const timer = window.setTimeout(loadQuestions, 250);
    return () => window.clearTimeout(timer);
  }, [filterType, searchQuery, supabase]);

  async function handleDelete(id: string) {
    const { error } = await supabase.from('questions').delete().eq('id', id);
    if (error) {
      toast.error(error.message);
      return;
    }
    setQuestions((items) => items.filter((item) => item.id !== id));
    toast.success('প্রশ্ন মুছে ফেলা হয়েছে।');
  }

  const stats = {
    total: questions.length,
    mcq: questions.filter((item) => item.type === 'mcq').length,
    short: questions.filter((item) => item.type === 'short').length,
    broad: questions.filter((item) => item.type === 'broad').length,
  };

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/75">Question Bank</div>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-zinc-950">প্রশ্ন ব্যাংক ম্যানেজমেন্ট</h1>
          <p className="mt-2 text-base leading-7 text-zinc-600">
            Personal library থেকে প্রশ্ন খুঁজুন, filter করুন, এবং editor flow-এ ফেরত যান।
          </p>
        </div>
        <Button size="lg" asChild>
          <Link href="/questions/create">
            <Plus className="h-4 w-4" />
            নতুন প্রশ্ন তৈরি করুন
          </Link>
        </Button>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'মোট প্রশ্ন', value: stats.total },
          { label: 'MCQ', value: stats.mcq },
          { label: 'সংক্ষিপ্ত', value: stats.short },
          { label: 'সৃজনশীল', value: stats.broad },
        ].map((item) => (
          <div key={item.label} className="surface-card rounded-[1.75rem] p-5">
            <div className="text-sm font-semibold text-zinc-500">{item.label}</div>
            <div className="mt-3 text-3xl font-black text-zinc-950">{isLoading ? '...' : item.value}</div>
          </div>
        ))}
      </section>

      <section className="surface-card rounded-[2rem] p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative max-w-xl flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="প্রশ্ন, বিষয় বা ট্যাগ দিয়ে খুঁজুন"
              className="h-12 w-full rounded-2xl border border-black/5 bg-white px-11 text-sm outline-none transition focus:border-primary/30 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-black/5 bg-white px-3 py-2 text-sm font-semibold text-zinc-600">
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </div>
            {typeFilters.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setFilterType(item.value as typeof filterType)}
                className={cn(
                  'rounded-2xl px-4 py-2 text-sm font-semibold transition',
                  filterType === item.value ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-600 hover:bg-emerald-50'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          {isLoading ? (
            <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 text-sm text-zinc-500 xl:col-span-2">ডেটা লোড হচ্ছে...</div>
          ) : questions.length > 0 ? (
            questions.map((question) => (
              <article key={question.id} className="rounded-[1.75rem] border border-black/5 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      {question.type}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {question.difficulty}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-black/5 text-zinc-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                    onClick={() => handleDelete(question.id)}
                    aria-label="Delete question"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <h2 className="mt-5 text-xl font-bold leading-8 text-zinc-950">
                  {question.title || question.content?.question || question.content?.stem || 'শিরোনামহীন প্রশ্ন'}
                </h2>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                  <span>{question.subject || 'বিষয় নির্ধারিত নয়'}</span>
                  <span>•</span>
                  <span>{question.class_level || 'General'}</span>
                  <span>•</span>
                  <span>{question.marks || 1} নম্বর</span>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4 border-t border-black/5 pt-4">
                  <div className="text-sm text-zinc-500">{format(new Date(question.created_at), 'dd MMM yyyy')}</div>
                  <Button variant="secondary" asChild>
                    <Link href={`/questions/create?questionId=${question.id}`}>
                      Editor-এ খুলুন
                      <Database className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))
          ) : (
            <div className="xl:col-span-2">
              <div className="rounded-[1.75rem] border border-dashed border-zinc-300 bg-zinc-50 px-6 py-12 text-center">
                <div className="text-xl font-semibold text-zinc-900">কোনো প্রশ্ন পাওয়া যায়নি</div>
                <p className="mt-2 text-sm leading-6 text-zinc-500">ফিল্টার বা সার্চ পরিবর্তন করুন, অথবা নতুন প্রশ্ন তৈরি করুন।</p>
                <Button className="mt-5" asChild>
                  <Link href="/questions/create">নতুন প্রশ্ন তৈরি করুন</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
