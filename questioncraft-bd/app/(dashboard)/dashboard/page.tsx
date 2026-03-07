'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { ArrowRight, FileText, FolderKanban, Plus, Sparkles, Vault } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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

        const { count: totalQ } = await supabase.from('questions').select('*', { count: 'exact', head: true }).eq('user_id', user.id);
        const { count: totalP } = await supabase.from('papers').select('*', { count: 'exact', head: true }).eq('user_id', user.id);
        const { count: draftP } = await supabase.from('papers').select('*', { count: 'exact', head: true }).eq('user_id', user.id).eq('status', 'draft');
        const { count: pubP } = await supabase.from('papers').select('*', { count: 'exact', head: true }).eq('user_id', user.id).eq('status', 'published');
        const { data: papers } = await supabase.from('papers').select('id, title, subject, class_level, status, created_at').eq('user_id', user.id).order('created_at', { ascending: false }).limit(5);

        setStats({
          totalQuestions: totalQ || 0,
          totalPapers: totalP || 0,
          draftPapers: draftP || 0,
          publishedPapers: pubP || 0,
        });

        setRecentPapers((papers as PaperRecord[]) || []);
      } finally {
        setIsLoading(false);
      }
    }

    loadDashboard();
  }, [supabase]);

  const statCards = [
    { label: 'মোট প্রশ্নপত্র', value: stats.totalPapers, icon: FileText, color: 'bg-blue-50 text-blue-600', ring: 'ring-blue-100' },
    { label: 'এই মাসে তৈরি', value: stats.publishedPapers, icon: Sparkles, color: 'bg-accent/10 text-accent', ring: 'ring-accent/20' },
    { label: 'মোট প্রশ্ন', value: stats.totalQuestions, icon: FolderKanban, color: 'bg-emerald-50 text-emerald-600', ring: 'ring-emerald-100' },
    { label: 'ড্রাফট', value: stats.draftPapers, icon: Vault, color: 'bg-slate-100 text-slate-600', ring: 'ring-slate-200' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-7xl space-y-8"
    >
      {/* Welcome Section */}
      <motion.section variants={itemVariants} className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-2xl font-black tracking-tight text-primary leading-tight sm:text-3xl xl:text-4xl">স্বাগতম, <span className="text-accent">{displayName}</span>!</h1>
          <p className="mt-2 text-base font-medium leading-relaxed text-slate-500 sm:text-lg">আপনার আজকের কর্মকাণ্ডের সংক্ষিপ্ত বিবরণ এখানে দেখুন।</p>
        </div>

        <Button size="xl" className="relative z-10 mt-6 h-14 w-full rounded-2xl bg-primary px-6 text-white shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:bg-primary/90 hover:shadow-primary/30 sm:px-8 lg:mt-0 lg:w-auto" asChild>
          <Link href="/questions/create">
            <Plus className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
            <span className="font-bold text-base">নতুন প্রশ্নপত্র তৈরি করুন</span>
          </Link>
        </Button>
      </motion.section>

      {/* Stats Grid */}
      <motion.section variants={itemVariants} className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {statCards.map((stat) => (
          <div key={stat.label} className="group flex flex-col justify-between rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 sm:p-7">
            <div className="flex justify-between items-start mb-6 w-full">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color} ring-4 ring-offset-2 transition-transform group-hover:scale-110 sm:h-16 sm:w-16 ${stat.ring} ring-offset-white`}>
                <stat.icon className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
            </div>
            <div>
              <div className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl xl:text-5xl">{isLoading ? '...' : stat.value}</div>
              <div className="mt-2 text-sm font-bold text-slate-500 sm:text-base">{stat.label}</div>
            </div>
          </div>
        ))}
      </motion.section>

      {/* Recent Papers Table */}
      <motion.section variants={itemVariants} className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">সাম্প্রতিক প্রশ্নপত্রসমূহ</h2>
            <p className="text-sm text-slate-500 font-medium mt-1">আপনার তৈরি শেষ ৫টি প্রশ্নপত্রের তালিকা</p>
          </div>
          <Button variant="outline" className="text-slate-700 font-bold hover:bg-slate-100 border-slate-200 rounded-xl bg-white w-full sm:w-auto shadow-sm" asChild>
            <Link href="/papers">
              সব দেখুন <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="overflow-x-auto">
          {/* Setting min-w for horizontal scroll on mobile */}
          <div className="min-w-[800px] w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-white">
                  <th className="px-6 sm:px-8 py-5 text-sm font-black text-slate-400">নাম</th>
                  <th className="px-6 sm:px-8 py-5 text-sm font-black text-slate-400">বিষয়</th>
                  <th className="px-6 sm:px-8 py-5 text-sm font-black text-slate-400">তারিখ</th>
                  <th className="px-6 sm:px-8 py-5 text-sm font-black text-slate-400">Status</th>
                  <th className="px-6 sm:px-8 py-5 text-sm font-black text-slate-400 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 bg-white">
                {isLoading ? (
                  [...Array(3)].map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan={5} className="px-6 sm:px-8 py-6"><div className="h-5 bg-slate-100 rounded-md w-full" /></td>
                    </tr>
                  ))
                ) : recentPapers.length > 0 ? (
                  recentPapers.map((paper) => (
                    <tr key={paper.id} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="px-6 sm:px-8 py-5 font-bold text-slate-900 text-base">{paper.title}</td>
                      <td className="px-6 sm:px-8 py-5">
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600">
                          {paper.subject} <span className="w-1 h-1 rounded-full bg-slate-300" /> {paper.class_level}
                        </div>
                      </td>
                      <td className="px-6 sm:px-8 py-5 text-sm font-medium text-slate-500">
                        {format(new Date(paper.created_at), 'dd MMM, yyyy')}
                      </td>
                      <td className="px-6 sm:px-8 py-5">
                        <span className={cn(
                          "inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold w-fit",
                          paper.status === 'published'
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                            : "bg-accent/10 border border-accent/20 text-accent"
                        )}>
                          <span className={cn("w-1.5 h-1.5 rounded-full mr-2", paper.status === 'published' ? "bg-emerald-500" : "bg-accent")} />
                          {paper.status === 'published' ? 'প্রকাশিত' : 'ড্রাফট'}
                        </span>
                      </td>
                      <td className="px-6 sm:px-8 py-5 text-right">
                        <Button variant="ghost" size="sm" className="rounded-xl text-primary font-bold hover:bg-primary/5 hover:text-primary transition-colors" asChild>
                          <Link href={`/papers/${paper.id}`}>বিস্তারিত</Link>
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-24 text-center">
                      <div className="flex flex-col items-center">
                        <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mb-5 ring-8 ring-slate-50/50">
                          <FileText className="h-10 w-10 text-slate-300" />
                        </div>
                        <p className="text-slate-500 font-bold text-xl">এখনও কোনো প্রশ্নপত্র তৈরি করা হয়নি</p>
                        <Button size="lg" className="mt-6 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all" asChild>
                          <Link href="/questions/create">
                            <Plus className="w-5 h-5 mr-2" />
                            প্রথমটি তৈরি করুন
                          </Link>
                        </Button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
