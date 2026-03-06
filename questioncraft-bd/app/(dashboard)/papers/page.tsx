'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search, Filter, BookOpen, Layers, Edit2,
  MoreVertical, Edit, FileText, Trash2, CheckCircle, FilePlus, Share2, Eye, Download, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/app-store';
import { createClient } from '@/lib/supabase';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { ExportModal } from '@/components/papers/export-modal';

export default function MyPapersPage() {
  const language = useAppStore((state) => state.language);
  const supabase = createClient();

  const [papers, setPapers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Stats
  const [stats, setStats] = useState({
    total: 0,
    draft: 0,
    published: 0
  });

  // Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<{ id: string; title: string } | null>(null);
  const itemsPerPage = 8;

  const t = {
    bn: {
      title: 'আমার প্রশ্নপত্র',
      subtitle: 'আপনার তৈরি সকল প্রশ্নপত্র এক জায়গায় সংরক্ষিত',
      search: 'প্রশ্নপত্র খুঁজুন...',
      stats: {
        total: 'মোট প্রশ্নপত্র',
        draft: 'খসড়া প্রশ্নপত্র',
        published: 'প্রকাশিত প্রশ্নপত্র',
        pending: 'অপেক্ষমাণ'
      },
      tabs: {
        all: 'সব প্রশ্নপত্র',
        published: 'প্রকাশিত',
        draft: 'খসড়া',
        archived: 'আর্কাইভকৃত'
      },
      table: {
        name: 'প্রশ্নপত্রের নাম',
        subject: 'বিষয়',
        class: 'শ্রেণী',
        date: 'তারিখ',
        status: 'স্ট্যাটাস',
        actions: 'অ্যাকশন'
      },
      empty: {
        title: 'আপনার কোনো প্রশ্নপত্র নেই',
        desc: 'এখনই আপনার প্রথম প্রশ্নপত্র তৈরি করুন AI এর সাহায্যে',
        action: 'প্রশ্নপত্র তৈরি শুরু করুন'
      },
      pagination: {
        showing: 'দেখাচ্ছে',
        of: 'এর মধ্যে',
        results: 'ফলাফল'
      }
    },
    en: {
      title: 'My Papers',
      subtitle: 'All your customized question papers in one place',
      search: 'Search papers...',
      stats: {
        total: 'Total Papers',
        draft: 'Draft Papers',
        published: 'Published Papers',
        pending: 'pending'
      },
      tabs: {
        all: 'All Papers',
        published: 'Published',
        draft: 'Drafts',
        archived: 'Archived'
      },
      table: {
        name: 'Paper Name',
        subject: 'Subject',
        class: 'Class',
        date: 'Date',
        status: 'Status',
        actions: 'Actions'
      },
      empty: {
        title: 'You have no question papers',
        desc: 'Generate your first engaging exam paper instantly with AI',
        action: 'Start Creating Papers'
      },
      pagination: {
        showing: 'Showing',
        of: 'of',
        results: 'results'
      }
    }
  }[language];

  // Fetch data
  useEffect(() => {
    async function fetchPapers() {
      setIsLoading(true);
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        let query = supabase
          .from('papers')
          .select('*, question_paper_association(count)')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (filterType !== 'all') {
          query = query.eq('status', filterType);
        }

        if (searchQuery) {
          query = query.ilike('title', `%${searchQuery}%`);
        }

        const { data, error } = await query;

        if (error) throw error;

        const resultData: any[] = data || [];

        // Calculate stats only on initial load or clear
        if (filterType === 'all' && !searchQuery) {
          setStats({
            total: resultData.length,
            draft: resultData.filter(p => p.status === 'draft').length,
            published: resultData.filter(p => p.status === 'published').length
          });
        }

        setPapers(resultData);
      } catch (error) {
        console.error('Error fetching papers:', error);
      } finally {
        setIsLoading(false);
      }
    }

    const timer = setTimeout(() => {
      fetchPapers();
    }, 300);

    return () => clearTimeout(timer);
  }, [filterType, searchQuery]);

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from('papers').delete().eq('id', id);
      if (error) throw error;

      setPapers(papers.filter(p => p.id !== id));
      toast.success(language === 'bn' ? 'প্রশ্নপত্র মুছে ফেলা হয়েছে' : 'Paper deleted successfully');
    } catch (error) {
      toast.error('Failed to delete paper');
    }
  };

  // Pagination
  const totalPages = Math.ceil(papers.length / itemsPerPage);
  const currentPapers = papers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            {language === 'bn' ? 'প্রকাশিত' : 'Published'}
          </span>
        );
      case 'draft':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            <Edit2 className="w-3 h-3 mr-1" />
            {language === 'bn' ? 'খসড়া' : 'Draft'}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800">
            <Layers className="w-3 h-3 mr-1" />
            {status}
          </span>
        );
    }
  };

  const getSubjectColor = (subject: string) => {
    if (!subject) return 'bg-zinc-100 text-zinc-700';
    if (subject.toLowerCase().includes('phys')) return 'bg-blue-100 text-blue-700 border-blue-200';
    if (subject.toLowerCase().includes('math')) return 'bg-purple-100 text-purple-700 border-purple-200';
    if (subject.toLowerCase().includes('eng')) return 'bg-orange-100 text-orange-700 border-orange-200';
    if (subject.toLowerCase().includes('chem')) return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    return 'bg-zinc-100 text-zinc-700 border-zinc-200';
  };

  const getLetterIcon = (subject: string) => {
    if (!subject) return 'P';
    return subject.charAt(0).toUpperCase();
  };

  return (
    <div className="flex-1 space-y-8 max-w-7xl mx-auto w-full pb-10">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
            <FileText className="w-8 h-8 text-primary" />
            {t.title}
          </h1>
          <p className="text-zinc-500 mt-2">{t.subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" className="h-10 w-10">
            <Filter className="w-4 h-4" />
          </Button>
          <Button className="bg-primary hover:bg-primary-600 h-10 shadow-md" asChild>
            <Link href="/questions/create">
            <FilePlus className="w-4 h-4 mr-2" />
            Create New Paper
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-zinc-500 mb-2">{t.stats.total}</p>
              <h3 className="text-4xl font-bold text-zinc-900">{stats.total}</h3>
            </div>
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
              <Layers className="w-6 h-6 text-emerald-500" />
            </div>
          </div>
          <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-md">+12%</span>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-zinc-500 mb-2">{t.stats.draft}</p>
              <h3 className="text-4xl font-bold text-zinc-900">{stats.draft}</h3>
              {stats.draft > 0 && <p className="text-xs font-semibold text-amber-600 mt-1">{stats.draft} {t.stats.pending}</p>}
            </div>
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
              <Edit2 className="w-6 h-6 text-amber-500" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-zinc-500 mb-2">{t.stats.published}</p>
              <h3 className="text-4xl font-bold text-zinc-900">{stats.published}</h3>
            </div>
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-emerald-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="border-b border-zinc-200">
        <div className="flex gap-8">
          {['all', 'published', 'draft', 'archived'].map((tab) => (
            <button
              key={tab}
              onClick={() => { setFilterType(tab); setCurrentPage(1); }}
              className={cn(
                "pb-4 text-sm font-medium transition-colors relative",
                filterType === tab ? "text-primary" : "text-zinc-500 hover:text-zinc-700"
              )}
            >
              {t.tabs[tab as keyof typeof t.tabs]}
              {filterType === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-8">
        {/* Main Table Content */}
        <div className="flex-1 bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col">

          {/* Table Header/Toolbar */}
          <div className="p-4 border-b border-zinc-200 bg-zinc-50/50 flex justify-between items-center">
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 h-9 text-sm bg-white border border-zinc-200 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-zinc-500 uppercase bg-zinc-50/80 border-b border-zinc-200">
                <tr>
                  <th className="px-6 py-4 font-semibold w-12"></th>
                  <th className="px-6 py-4 font-semibold">{t.table.name}</th>
                  <th className="px-6 py-4 font-semibold">{t.table.subject}</th>
                  <th className="px-6 py-4 font-semibold">{t.table.class}</th>
                  <th className="px-6 py-4 font-semibold">{t.table.date}</th>
                  <th className="px-6 py-4 font-semibold">{t.table.status}</th>
                  <th className="px-6 py-4 font-semibold text-right">{t.table.actions}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-6 py-4"><div className="w-8 h-8 rounded-full bg-zinc-200" /></td>
                      <td className="px-6 py-4"><div className="h-4 bg-zinc-200 rounded w-3/4 mb-2" /><div className="h-3 bg-zinc-100 rounded w-1/4" /></td>
                      <td className="px-6 py-4"><div className="h-5 bg-zinc-200 rounded-full w-20" /></td>
                      <td className="px-6 py-4"><div className="h-5 bg-zinc-200 rounded-full w-16" /></td>
                      <td className="px-6 py-4"><div className="h-4 bg-zinc-200 rounded w-24" /></td>
                      <td className="px-6 py-4"><div className="h-5 bg-zinc-200 rounded-full w-20" /></td>
                      <td className="px-6 py-4"><div className="h-8 bg-zinc-200 rounded w-full" /></td>
                    </tr>
                  ))
                ) : currentPapers.length > 0 ? (
                  currentPapers.map((paper) => (
                    <tr key={paper.id} className="hover:bg-zinc-50/80 transition-colors group">
                      <td className="px-6 py-4">
                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border", getSubjectColor(paper.subject))}>
                          {getLetterIcon(paper.subject)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-zinc-900 font-serif text-base">{paper.title}</div>
                        <div className="text-zinc-500 text-xs mt-1 flex items-center gap-1">
                          <Layers className="w-3 h-3" />
                          {paper.question_paper_association?.[0]?.count || 0} Questions
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={cn("px-2.5 py-1 rounded-full text-xs font-semibold border", getSubjectColor(paper.subject))}>
                          {paper.subject || 'Uncategorized'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold border bg-emerald-50 text-emerald-700 border-emerald-200">
                          {paper.class_level || 'General'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-zinc-500">
                        {format(new Date(paper.created_at), 'MMM dd, yyyy')}
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(paper.status || 'draft')}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100" asChild>
                            <Link href="/questions/create"><Eye className="w-4 h-4" /></Link>
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-primary hover:bg-primary/10" asChild>
                            <Link href="/questions/create"><Edit className="w-4 h-4" /></Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-zinc-400 hover:text-blue-600 hover:bg-blue-50"
                            onClick={() => {
                              setSelectedPaper({ id: paper.id, title: paper.title });
                              setIsExportModalOpen(true);
                            }}
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-emerald-600 hover:bg-emerald-50"><Share2 className="w-4 h-4" /></Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete(paper.id)}><Trash2 className="w-4 h-4" /></Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mb-4">
                          <FileText className="w-8 h-8 text-zinc-300" />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 mb-1">{t.empty.title}</h3>
                        <p className="text-zinc-500 text-sm max-w-sm mb-6">{t.empty.desc}</p>
                        <Button className="bg-primary hover:bg-primary-600" asChild>
                          <Link href="/questions/create">
                          <FilePlus className="w-4 h-4 mr-2" />
                          {t.empty.action}
                          </Link>
                        </Button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          {totalPages > 1 && (
            <div className="px-6 py-4 border-t border-zinc-200 bg-zinc-50/50 flex items-center justify-between">
              <p className="text-sm text-zinc-500">
                {t.pagination.showing} <span className="font-medium text-zinc-900">{(currentPage - 1) * itemsPerPage + 1}</span> - <span className="font-medium text-zinc-900">{Math.min(currentPage * itemsPerPage, papers.length)}</span> {t.pagination.of} <span className="font-medium text-zinc-900">{papers.length}</span> papers
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i}
                    variant={currentPage === i + 1 ? "primary" : "outline"}
                    size="sm"
                    className={currentPage === i + 1 ? "bg-primary text-white" : ""}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}
                <Button variant="outline" size="sm" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Optional Right Sidebar (as per design) */}
        <div className="hidden xl:flex flex-col w-80 shrink-0 gap-6">

          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
            <h3 className="font-bold text-zinc-900 flex items-center gap-2 mb-6">
              Recent Activity
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4 relative">
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center z-10">
                  <Download className="w-4 h-4 text-blue-600" />
                </div>
                <div className="absolute top-8 left-4 bottom-[-24px] w-px bg-zinc-200" />
                <div>
                  <p className="text-sm font-medium text-zinc-900 leading-snug">PDF exported: Physics Midterm</p>
                  <p className="text-xs text-zinc-500 mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center z-10">
                  <Edit2 className="w-4 h-4 text-amber-600" />
                </div>
                <div className="absolute top-8 left-4 bottom-[-24px] w-px bg-zinc-200" />
                <div>
                  <p className="text-sm font-medium text-zinc-900 leading-snug">Draft saved: Math Final</p>
                  <p className="text-xs text-zinc-500 mt-1">5 hours ago</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center z-10">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900 leading-snug">Published: Chemistry Quiz</p>
                  <p className="text-xs text-zinc-500 mt-1">Yesterday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary relative overflow-hidden to-emerald-700 text-white rounded-2xl shadow-sm p-6">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">সময় বাঁচান</h3>
            <p className="text-sm text-emerald-50 mb-6">AI ব্যবহার করে ৫ মিনিটে প্রশ্নপত্র তৈরি করুন</p>
            <Button className="w-full bg-white text-emerald-700 hover:bg-emerald-50 shadow-md">
              Try Now &rarr;
            </Button>
          </div>

        </div>

      </div>

      {selectedPaper && (
        <ExportModal
          isOpen={isExportModalOpen}
          onClose={() => setIsExportModalOpen(false)}
          paperId={selectedPaper.id}
          paperTitle={selectedPaper.title}
        />
      )}

    </div>
  );
}
