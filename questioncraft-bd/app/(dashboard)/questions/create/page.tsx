'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { format } from 'date-fns';
import {
  Check,
  Eye,
  LoaderCircle,
  Plus,
  Save,
  Sparkles,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase';
import { cn } from '@/lib/utils';

type QuestionType = 'mcq' | 'short' | 'broad';

interface OptionItem {
  id: string;
  text: string;
}

interface QuestionDraft {
  id?: string;
  title: string;
  type: QuestionType;
  subject: string;
  classLevel: string;
  difficulty: 'easy' | 'medium' | 'hard';
  marks: number;
  question: string;
  options: OptionItem[];
  correctAnswer: string;
  subQuestions: { label: string; text: string; marks: number }[];
}

const defaultDraft: QuestionDraft = {
  title: '',
  type: 'mcq',
  subject: 'বাংলা ১ম পত্র',
  classLevel: 'Class 9',
  difficulty: 'medium',
  marks: 1,
  question: '',
  options: [
    { id: 'A', text: '' },
    { id: 'B', text: '' },
    { id: 'C', text: '' },
    { id: 'D', text: '' },
  ],
  correctAnswer: 'A',
  subQuestions: [
    { label: 'ক', text: '', marks: 1 },
    { label: 'খ', text: '', marks: 2 },
    { label: 'গ', text: '', marks: 3 },
    { label: 'ঘ', text: '', marks: 4 },
  ],
};

function QuestionEditorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = useMemo(() => createClient(), []);
  const questionId = searchParams.get('questionId');
  const [draft, setDraft] = useState<QuestionDraft>(defaultDraft);
  const [isBusy, setIsBusy] = useState(false);
  const [isLoading, setIsLoading] = useState(Boolean(questionId));
  const [lastSavedAt, setLastSavedAt] = useState<string | null>(null);

  useEffect(() => {
    async function loadQuestion() {
      if (!questionId) return;
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('questions')
          .select('*')
          .eq('id', questionId)
          .single();

        if (error || !data) {
          toast.error('Question not found.');
          return;
        }

        const record = data as any;
        const content = (record.content || {}) as any;
        setDraft({
          id: record.id,
          title: record.title || '',
          type: record.type,
          subject: record.subject || '',
          classLevel: record.class_level || '',
          difficulty: record.difficulty || 'medium',
          marks: record.marks || 1,
          question: content.question || content.stem || '',
          options:
            content.options?.map((option: any) => ({
              id: option.id,
              text: option.text,
            })) || defaultDraft.options,
          correctAnswer: content.correct_answer || 'A',
          subQuestions:
            content.sub_questions?.map((item: any) => ({
              label: item.label,
              text: item.text,
              marks: item.marks,
            })) || defaultDraft.subQuestions,
        });
      } finally {
        setIsLoading(false);
      }
    }

    loadQuestion();
  }, [questionId, supabase]);

  function updateDraft<Key extends keyof QuestionDraft>(key: Key, value: QuestionDraft[Key]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  async function handleSave() {
    setIsBusy(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        toast.error('Please log in again.');
        router.replace('/login');
        return;
      }

      const payload = {
        user_id: user.id,
        title: draft.title || draft.question.slice(0, 60) || 'Untitled question',
        type: draft.type,
        subject: draft.subject,
        class_level: draft.classLevel,
        difficulty: draft.difficulty,
        language: 'bangla' as const,
        marks: draft.marks,
        topic: null,
        tags: [],
        content:
          draft.type === 'mcq'
            ? {
                type: 'mcq',
                question: draft.question,
                options: draft.options,
                correct_answer: draft.correctAnswer,
              }
            : draft.type === 'short'
              ? {
                  type: 'short',
                  question: draft.question,
                }
              : {
                  type: 'broad',
                  stem: draft.question,
                  sub_questions: draft.subQuestions,
                },
      };

      const questionsTable = supabase.from('questions') as any;
      const query = draft.id
        ? questionsTable.update(payload as any).eq('id', draft.id).select('id').single()
        : questionsTable.insert(payload as any).select('id').single();

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      if (!draft.id && data?.id) {
        setDraft((current) => ({ ...current, id: data.id }));
        router.replace(`/questions/create?questionId=${data.id}`);
      }

      setLastSavedAt(new Date().toISOString());
      toast.success('প্রশ্ন সংরক্ষণ হয়েছে।');
    } catch (error: unknown) {
      toast.error(error instanceof Error ? error.message : 'Save failed');
    } finally {
      setIsBusy(false);
    }
  }

  const isMcq = draft.type === 'mcq';
  const isBroad = draft.type === 'broad';

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/75">Question Editor</div>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-zinc-950">স্মার্ট প্রশ্ন সম্পাদক</h1>
          <p className="mt-2 max-w-3xl text-base leading-7 text-zinc-600">
            Question bank-এর সাথে connected editor। draft save করুন, edit mode-এ reload করুন, এবং live preview-এ output দেখুন।
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-2xl bg-white px-4 py-3 text-sm text-zinc-500 ring-1 ring-black/5">
            {lastSavedAt ? `Last saved ${format(new Date(lastSavedAt), 'dd MMM, hh:mm a')}` : 'Not saved yet'}
          </div>
          <Button size="lg" onClick={handleSave} disabled={isBusy || isLoading}>
            {isBusy ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            Save Draft
          </Button>
        </div>
      </section>

      {isLoading ? (
        <div className="surface-card rounded-[2rem] p-8 text-sm text-zinc-500">Question loading...</div>
      ) : (
        <section className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="surface-card rounded-[2rem] p-5 sm:p-6">
            <div className="flex flex-wrap gap-2">
              {[
                { value: 'mcq', label: 'MCQ' },
                { value: 'short', label: 'সংক্ষিপ্ত' },
                { value: 'broad', label: 'সৃজনশীল' },
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => updateDraft('type', item.value as QuestionType)}
                  className={cn(
                    'rounded-2xl px-4 py-2 text-sm font-semibold transition',
                    draft.type === item.value ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-600 ring-1 ring-black/5 hover:bg-emerald-50'
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-zinc-900">শিরোনাম</span>
                <input value={draft.title} onChange={(e) => updateDraft('title', e.target.value)} className="input-field h-12" placeholder="প্রশ্নের শিরোনাম" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-zinc-900">বিষয়</span>
                <input value={draft.subject} onChange={(e) => updateDraft('subject', e.target.value)} className="input-field h-12" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-zinc-900">শ্রেণি</span>
                <input value={draft.classLevel} onChange={(e) => updateDraft('classLevel', e.target.value)} className="input-field h-12" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-zinc-900">নম্বর</span>
                <input type="number" value={draft.marks} onChange={(e) => updateDraft('marks', Number(e.target.value) || 1)} className="input-field h-12" />
              </label>
            </div>

            <label className="mt-5 block space-y-2">
              <span className="text-sm font-semibold text-zinc-900">মূল প্রশ্ন</span>
              <textarea
                value={draft.question}
                onChange={(e) => updateDraft('question', e.target.value)}
                className="min-h-[180px] w-full rounded-[1.5rem] border border-black/5 bg-white p-4 text-sm leading-7 outline-none transition focus:border-primary/30 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"
                placeholder="এখানে প্রশ্ন লিখুন..."
              />
            </label>

            {isMcq && (
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-zinc-900">অপশনসমূহ</div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => updateDraft('options', [...draft.options, { id: String.fromCharCode(65 + draft.options.length), text: '' }])}
                  >
                    <Plus className="h-4 w-4" />
                    Option
                  </Button>
                </div>
                {draft.options.map((option, index) => (
                  <div key={option.id} className="flex items-center gap-3 rounded-[1.25rem] border border-black/5 bg-white p-3">
                    <button
                      type="button"
                      onClick={() => updateDraft('correctAnswer', option.id)}
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold',
                        draft.correctAnswer === option.id ? 'border-primary bg-primary text-white' : 'border-zinc-200 text-zinc-500'
                      )}
                    >
                      {draft.correctAnswer === option.id ? <Check className="h-4 w-4" /> : option.id}
                    </button>
                    <input
                      value={option.text}
                      onChange={(e) => {
                        const next = [...draft.options];
                        next[index] = { ...option, text: e.target.value };
                        updateDraft('options', next);
                      }}
                      className="input-field h-11 flex-1"
                      placeholder={`অপশন ${option.id}`}
                    />
                  </div>
                ))}
              </div>
            )}

            {isBroad && (
              <div className="mt-6 space-y-3">
                <div className="text-sm font-semibold text-zinc-900">উপ-প্রশ্নসমূহ</div>
                {draft.subQuestions.map((item, index) => (
                  <div key={item.label} className="rounded-[1.25rem] border border-black/5 bg-white p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-sm font-semibold text-primary">{item.label}</div>
                      <input
                        type="number"
                        value={item.marks}
                        onChange={(e) => {
                          const next = [...draft.subQuestions];
                          next[index] = { ...item, marks: Number(e.target.value) || 0 };
                          updateDraft('subQuestions', next);
                        }}
                        className="h-10 w-20 rounded-xl border border-black/5 px-3 text-sm outline-none"
                      />
                    </div>
                    <textarea
                      value={item.text}
                      onChange={(e) => {
                        const next = [...draft.subQuestions];
                        next[index] = { ...item, text: e.target.value };
                        updateDraft('subQuestions', next);
                      }}
                      className="mt-3 min-h-[88px] w-full rounded-[1rem] border border-black/5 p-3 text-sm leading-7 outline-none"
                      placeholder="উপ-প্রশ্ন লিখুন"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-[2rem] bg-zinc-950 p-5 text-white shadow-2xl sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Live Preview</div>
                <div className="mt-2 text-2xl font-black">Question Output</div>
              </div>
              <Eye className="h-5 w-5 text-emerald-200" />
            </div>

            <div className="mt-6 rounded-[1.75rem] bg-white p-6 text-zinc-900">
              <div className="text-center">
                <div className="text-lg font-bold">{draft.subject || 'বিষয়'}</div>
                <div className="mt-1 text-sm text-zinc-500">{draft.classLevel || 'Class'} • {draft.marks} নম্বর</div>
              </div>

              <div className="mt-8 text-base leading-8">
                <div className="font-semibold">{draft.title || 'শিরোনামহীন প্রশ্ন'}</div>
                <div className="mt-3 whitespace-pre-wrap">{draft.question || 'এখানে প্রশ্নের প্রিভিউ দেখা যাবে।'}</div>
              </div>

              {isMcq && (
                <div className="mt-6 grid gap-3">
                  {draft.options.map((option) => (
                    <div key={option.id} className={cn('rounded-[1rem] border px-4 py-3 text-sm', draft.correctAnswer === option.id ? 'border-emerald-300 bg-emerald-50' : 'border-zinc-200')}>
                      <span className="font-semibold">{option.id}.</span> {option.text || '...'}
                    </div>
                  ))}
                </div>
              )}

              {draft.type === 'short' && (
                <div className="mt-6 rounded-[1rem] border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-500">
                  এই প্রশ্নের উত্তরের জন্য আলাদা answer space ব্যবহার হবে।
                </div>
              )}

              {isBroad && (
                <div className="mt-6 space-y-3">
                  {draft.subQuestions.map((item) => (
                    <div key={item.label} className="rounded-[1rem] border border-zinc-200 px-4 py-3 text-sm">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="font-semibold">{item.label}.</span> {item.text || '...'}
                        </div>
                        <span className="font-semibold text-zinc-500">{item.marks}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 rounded-[1rem] bg-zinc-950 px-4 py-4 text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 text-emerald-300" />
                  <div>
                    Preview panel editor-এর সাথে real-time sync করা হয়েছে যাতে save-এর আগে layout দেখা যায়।
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default function QuestionEditorPage() {
  return (
    <Suspense fallback={<div className="rounded-[2rem] bg-white p-8 text-sm text-zinc-500">Loading editor...</div>}>
      <QuestionEditorContent />
    </Suspense>
  );
}
