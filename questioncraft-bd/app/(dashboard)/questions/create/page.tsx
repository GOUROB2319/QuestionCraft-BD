'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Save,
  Trash2,
  Eye,
  FileText,
  Layout,
  Sparkles,
  ClipboardCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  Printer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type Step = 1 | 2 | 3;
type QuestionType = 'MCQ' | 'Short' | 'Descriptive' | 'Creative';

interface Question {
  id: string;
  type: QuestionType;
  text: string;
  marks: number;
}

interface PaperInfo {
  subject: string;
  classLevel: string;
  examType: string;
  totalMarks: string;
  duration: string;
}

const CLASS_LEVELS = [
  'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
  'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
  'SSC', 'HSC'
];

const EXAM_TYPES = ['অর্ধবার্ষিক', 'বার্ষিক', 'টেস্ট', 'মডেল টেস্ট', 'সাপ্তাহিক'];

export default function QuestionCreatePage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [info, setInfo] = useState<PaperInfo>({
    subject: '',
    classLevel: 'Class 9',
    examType: 'অর্ধবার্ষিক',
    totalMarks: '100',
    duration: '৩ ঘণ্টা',
  });
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentType, setCurrentType] = useState<QuestionType>('MCQ');
  const [newQuestionText, setNewQuestionText] = useState('');
  const [newQuestionMarks, setNewQuestionMarks] = useState<number>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalAddedMarks = useMemo(() =>
    questions.reduce((acc, q) => acc + q.marks, 0),
    [questions]);

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!info.subject.trim()) newErrors.subject = 'বিষয়ের নাম আবশ্যক';
    if (!info.totalMarks || parseInt(info.totalMarks) <= 0) newErrors.totalMarks = 'সঠিক নম্বর দিন';
    if (!info.duration.trim()) newErrors.duration = 'সময়সীমা আবশ্যক';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) setStep(2);
      else toast.error('দয়া করে সঠিক তথ্য প্রদান করুন।');
    } else if (step === 2) {
      if (questions.length === 0) {
        toast.error('অন্তত একটি প্রশ্ন যোগ করুন।');
      } else {
        setStep(3);
      }
    }
  };

  const addQuestion = () => {
    if (!newQuestionText.trim()) {
      toast.error('প্রশ্নের বিবরণ লিখুন।');
      return;
    }
    const question: Question = {
      id: Math.random().toString(36).substring(7),
      type: currentType,
      text: newQuestionText,
      marks: newQuestionMarks || 1,
    };
    setQuestions([...questions, question]);
    setNewQuestionText('');
    toast.success('প্রশ্ন যোগ করা হয়েছে।');
  };

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
    toast.info('প্রশ্ন সরিয়ে ফেলা হয়েছে।');
  };

  const handleSave = (status: 'draft' | 'published') => {
    toast.success(status === 'draft' ? 'ড্রাফট হিসেবে রাখা হয়েছে।' : 'প্রশ্নপত্র সম্পন্ন হয়েছে!');
    router.push('/dashboard');
  };

  const containerVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20 selection:bg-primary/10 selection:text-primary">
      {/* Header & Improved Progress Indicator */}
      <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">নতুন <span className="text-primary">প্রশ্নপত্র</span> তৈরি</h1>
            <p className="text-slate-500 mt-2 font-medium text-lg">সহজ ৩টি ধাপে আপনার প্রশ্নপত্র প্রস্তুত করুন</p>
          </div>

          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={cn(
                  "h-12 w-12 rounded-2xl flex items-center justify-center font-black transition-all duration-500",
                  step === s ? "bg-primary text-white scale-110 shadow-xl shadow-primary/30" :
                    step > s ? "bg-emerald-500 text-white shadow-lg shadow-emerald-100" : "bg-slate-100 text-slate-400"
                )}>
                  {step > s ? <CheckCircle2 className="h-6 w-6" /> : s}
                </div>
                {s < 3 && (
                  <div className="mx-2 flex items-center">
                    <div className={cn("h-1.5 w-8 rounded-full transition-colors duration-500", step > s ? "bg-emerald-500" : "bg-slate-100")} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content with Animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="grid gap-8"
        >
          {step === 1 && (
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-10">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">ধাপ ১: সাধারণ তথ্যসমূহ</h2>
                  <p className="text-slate-400 font-medium">পরীক্ষার বেসিক প্রোফাইল সেটআপ করুন</p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Subject Name */}
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-700 ml-1 flex items-center gap-2 uppercase tracking-wider">
                    বিষয়ের নাম {errors.subject && <AlertCircle className="h-4 w-4 text-red-500" />}
                  </label>
                  <input
                    className={cn(
                      "w-full h-14 px-6 rounded-2xl border bg-slate-50 transition-all outline-none font-bold text-slate-700",
                      errors.subject ? "border-red-200 bg-red-50/30 focus:border-red-500" : "border-slate-100 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                    )}
                    placeholder="যেমন: বাংলা ২য় পত্র"
                    value={info.subject}
                    onChange={e => {
                      setInfo({ ...info, subject: e.target.value });
                      if (errors.subject) setErrors(prev => {
                        const n = { ...prev }; delete n.subject; return n;
                      });
                    }}
                  />
                  {errors.subject && <p className="text-xs font-bold text-red-500 ml-1">{errors.subject}</p>}
                </div>

                {/* Class Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-700 ml-1 uppercase tracking-wider">শ্রেণি নির্বাচন করুন</label>
                  <div className="relative">
                    <select
                      className="w-full h-14 px-6 rounded-2xl border border-slate-100 bg-slate-50 transition-all outline-none font-bold text-slate-700 appearance-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                      value={info.classLevel}
                      onChange={e => setInfo({ ...info, classLevel: e.target.value })}
                    >
                      {CLASS_LEVELS.map(lvl => <option key={lvl} value={lvl}>{lvl}</option>)}
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronRight className="h-5 w-5 rotate-90 text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* Exam Type */}
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-700 ml-1 uppercase tracking-wider">পরীক্ষার ধরণ</label>
                  <div className="flex flex-wrap gap-2">
                    {EXAM_TYPES.map(type => (
                      <button
                        key={type}
                        onClick={() => setInfo({ ...info, examType: type })}
                        className={cn(
                          "px-6 py-3 rounded-xl text-sm font-black transition-all",
                          info.examType === type
                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                            : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Marks & Duration */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-700 ml-1 flex items-center gap-2 uppercase tracking-wider">
                      মোট নম্বর {errors.totalMarks && <AlertCircle className="h-4 w-4 text-red-500" />}
                    </label>
                    <input
                      type="number"
                      className={cn(
                        "w-full h-14 px-6 rounded-2xl border bg-slate-50 font-black text-slate-700 outline-none transition-all",
                        errors.totalMarks ? "border-red-200 bg-red-50" : "border-slate-100 focus:border-accent focus:bg-white"
                      )}
                      value={info.totalMarks}
                      onChange={e => setInfo({ ...info, totalMarks: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-700 ml-1 uppercase tracking-wider">সময়সীমা</label>
                    <input
                      className="w-full h-14 px-6 rounded-2xl border border-slate-100 bg-slate-50 font-bold text-slate-700 outline-none transition-all focus:border-accent focus:bg-white"
                      value={info.duration}
                      placeholder="৩ ঘণ্টা"
                      onChange={e => setInfo({ ...info, duration: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-8 lg:grid-cols-3 items-start">
              {/* Question Editor */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      <Layout className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-slate-900 tracking-tight">ধাপ ২: প্রশ্ন ব্যাংক</h2>
                      <p className="text-slate-400 font-medium">নিচের প্যানেল থেকে প্রশ্ন যোগ করুন</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 p-2 bg-slate-50 rounded-[1.5rem] border border-slate-100 shadow-inner">
                    {['MCQ', 'Short', 'Descriptive', 'Creative'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setCurrentType(type as QuestionType)}
                        className={cn(
                          "flex-1 px-4 py-3 rounded-2xl text-[13px] font-black transition-all",
                          currentType === type
                            ? "bg-white text-primary shadow-lg shadow-slate-200 ring-2 ring-primary/5"
                            : "text-slate-500 hover:text-primary"
                        )}
                      >
                        {type === 'MCQ' ? 'বহুনির্বাচনি' : type === 'Short' ? 'সংক্ষিপ্ত' : type === 'Descriptive' ? 'রচনামূলক' : 'সৃজনশীল'}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-700 ml-1 uppercase tracking-wider">প্রশ্নের বিবরণ (বাংলা)</label>
                      <textarea
                        className="w-full min-h-[200px] p-6 rounded-[2rem] border border-slate-100 bg-slate-50 font-medium text-lg text-slate-800 outline-none focus:border-accent focus:bg-white focus:ring-8 focus:ring-accent/5 transition-all leading-relaxed resize-none"
                        placeholder="এখানে প্রশ্নের মূল অংশ টাইপ করুন..."
                        value={newQuestionText}
                        onChange={e => setNewQuestionText(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                      <div className="w-full sm:w-48 space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">নম্বর</label>
                        <input
                          type="number"
                          className="w-full h-14 px-6 rounded-2xl border border-slate-100 bg-slate-50 font-black text-primary outline-none focus:bg-white transition-all shadow-sm"
                          value={newQuestionMarks}
                          onChange={e => setNewQuestionMarks(parseInt(e.target.value) || 0)}
                        />
                      </div>
                      <Button
                        onClick={addQuestion}
                        size="xl"
                        className="w-full flex-1 h-14 bg-primary hover:bg-primary/95 text-white font-black rounded-2xl shadow-xl shadow-primary/20 group"
                      >
                        <Plus className="h-5 w-5 mr-3 group-hover:rotate-90 transition-transform" />
                        প্রশ্ন তালিকায় যোগ করুন
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Added Questions List */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between px-2">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">যুক্ত করা হয়েছে ({questions.length})</h3>
                    <div className="text-sm font-bold text-slate-400">সর্বমোট {totalAddedMarks} নম্বর</div>
                  </div>

                  {questions.length === 0 ? (
                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[3rem] p-20 text-center text-slate-400">
                      <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm ring-8 ring-white/50">
                        <ClipboardCheck className="h-10 w-10 opacity-30" />
                      </div>
                      <p className="font-black text-xl text-slate-300">এখনো কোনো প্রশ্ন যোগ করা হয়নি</p>
                      <p className="text-sm font-medium mt-2">আপনার প্রথম প্রশ্নটি উপরে টাইপ করে যোগ করুন</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {questions.map((q, i) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          key={q.id}
                          className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-start gap-6 group hover:border-accent/40 transition-all hover:shadow-xl hover:shadow-slate-200/50"
                        >
                          <div className="h-10 w-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center text-sm font-black shrink-0 group-hover:bg-primary group-hover:text-white transition-colors shadow-inner">
                            {i + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-[10px] font-black uppercase tracking-widest text-[#1E3A5F] bg-[#1E3A5F]/5 px-3 py-1 rounded-full">
                                {q.type}
                              </span>
                              <span className="text-xs font-black text-accent bg-accent/10 px-3 py-1 rounded-full">{q.marks} নম্বর</span>
                            </div>
                            <p className="text-slate-700 font-bold leading-relaxed text-lg">{q.text}</p>
                          </div>
                          <button
                            onClick={() => removeQuestion(q.id)}
                            className="h-12 w-12 rounded-2xl text-slate-300 hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 className="h-6 w-6" />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar Info/Stats */}
              <div className="space-y-8 sticky top-24">
                <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-2xl shadow-primary/30 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                        <Sparkles className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-black">স্মার্ট এসিস্ট</h3>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      আপনার বিষয়ের ওপর ভিত্তি করে AI ব্যবহার করে আরও দ্রুত প্রশ্ন তৈরি করতে চান?
                    </p>
                    <Button variant="secondary" className="w-full bg-accent hover:bg-accent/90 text-white font-black h-14 rounded-2xl shadow-lg shadow-accent/20 transition-transform active:scale-95">
                      AI দিয়ে তৈরি করুন
                    </Button>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <ClipboardCheck className="h-4 w-4" /> প্রশ্নপত্রের সামারি
                  </h3>

                  <div className="space-y-5">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-slate-400">মোট প্রশ্ন</div>
                        <div className="text-2xl font-black text-slate-900">{questions.length}টি</div>
                      </div>
                      <div className="space-y-1 text-right">
                        <div className="text-xs font-bold text-slate-400">সর্বমোট নম্বর</div>
                        <div className="text-2xl font-black text-slate-900">{totalAddedMarks}<span className="text-slate-300 text-lg">/{info.totalMarks}</span></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px] font-black uppercase text-slate-500 tracking-tighter">
                        <span>বর্তমান অগ্রগতি</span>
                        <span>{Math.round((totalAddedMarks / parseInt(info.totalMarks)) * 100)}%</span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner p-0.5">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-700 shadow-sm",
                            totalAddedMarks > parseInt(info.totalMarks) ? "bg-red-500" : "bg-emerald-500"
                          )}
                          style={{ width: `${Math.min(100, (totalAddedMarks / parseInt(info.totalMarks)) * 100)}%` }}
                        />
                      </div>
                      {totalAddedMarks > parseInt(info.totalMarks) && (
                        <p className="text-[10px] font-bold text-red-500">সাবধান: আপনি নির্ধারিত নম্বর অতিক্রম করেছেন!</p>
                      )}
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-400">শ্রেণি:</span>
                      <span className="text-slate-700">{info.classLevel}</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-400">পরীক্ষা:</span>
                      <span className="text-slate-700">{info.examType}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white p-8 sm:p-12 rounded-[3rem] border border-slate-100 shadow-sm space-y-12">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Eye className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">ধাপ ৩: প্রিভিউ</h2>
                    <p className="text-slate-400 font-medium">আপনার চূড়ান্ত প্রশ্নপত্রটি একবার দেখে নিন</p>
                  </div>
                </div>
                <Button onClick={() => window.print()} variant="outline" className="border-slate-200 h-14 px-8 rounded-2xl font-black text-slate-700 hover:bg-slate-50 group">
                  <Printer className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  প্রিন্ট প্রিভিউ
                </Button>
              </div>

              <div className="bg-slate-50 p-6 sm:p-12 rounded-[2.5rem] border border-slate-100 max-w-4xl mx-auto shadow-inner overflow-hidden">
                <div className="bg-white p-12 sm:p-20 shadow-2xl min-h-[800px] border border-slate-100 relative print:shadow-none print:border-none print:p-0">
                  {/* Formal Paper Header */}
                  <div className="text-center border-b-[3px] border-slate-900 pb-10 mb-12 relative">
                    <div className="text-3xl font-black tracking-tight mb-4 uppercase">প্রতিষ্ঠান বা স্কুলের নাম</div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-slate-800">{info.examType} পরীক্ষা - ২০২৪</h4>
                      <div className="flex justify-center flex-wrap gap-x-8 gap-y-2 text-sm font-black text-slate-600 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><FileText className="h-4 w-4" /> বিষয়: {info.subject}</span>
                        <span className="flex items-center gap-2"><Layout className="h-4 w-4" /> শ্রেণি: {info.classLevel}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-8 px-2">
                      <div className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-lg text-xs font-black tracking-[0.2em]">
                        <Clock className="h-4 w-4" /> {info.duration}
                      </div>
                      <div className="bg-slate-100 px-5 py-2 rounded-lg text-slate-900 text-xs font-black tracking-[0.2em] border border-slate-200">
                        পূর্ণমান: {info.totalMarks}
                      </div>
                    </div>
                  </div>

                  {/* Questions Section */}
                  <div className="space-y-10">
                    {questions.length === 0 ? (
                      <div className="text-center py-20 text-slate-300 italic font-medium">কোনো প্রশ্ন যোগ করা হয়নি।</div>
                    ) : (
                      <div className="space-y-10">
                        <div className="text-center">
                          <span className="px-6 py-2 border-2 border-slate-900 font-black text-sm uppercase tracking-[0.3em]">নিচের সব প্রশ্নের উত্তর দাও</span>
                        </div>

                        <div className="space-y-8">
                          {questions.map((q, i) => (
                            <div key={q.id} className="flex justify-between gap-8 group">
                              <div className="flex gap-6">
                                <span className="font-black text-lg text-slate-900 tabular-nums">{i + 1}.</span>
                                <div className="space-y-2">
                                  <p className="text-lg font-bold text-slate-800 leading-relaxed pt-0.5">{q.text}</p>
                                  <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{q.type}</div>
                                </div>
                              </div>
                              <div className="pt-0.5">
                                <span className="font-black tabular-nums text-slate-900 border-b-2 border-slate-200 px-1">{q.marks}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Page Footer Deco */}
                  <div className="absolute bottom-12 left-12 right-12 flex justify-between border-t border-slate-100 pt-6 text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] print:hidden">
                    <span>QuestionCraft BD</span>
                    <span>Page 01</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Footer Navigation Hub */}
      <footer className="fixed bottom-0 left-0 right-0 sm:left-[280px] bg-white/70 backdrop-blur-xl border-t border-slate-100 z-50 px-4 py-4 sm:px-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => setStep(s => Math.max(1, s - 1) as Step)}
            className={cn("h-14 px-6 sm:px-10 text-slate-600 font-bold rounded-2xl hover:bg-slate-50", step === 1 && "invisible")}
          >
            <ChevronLeft className="h-5 w-5 mr-3" />
            পূর্ববর্তী ধাপ
          </Button>

          <Button
            variant="outline"
            className="hidden sm:flex h-14 px-8 border-slate-200 text-slate-500 font-bold rounded-2xl bg-white shadow-sm hover:bg-slate-50 transition-all"
            onClick={() => handleSave('draft')}
          >
            <Save className="h-5 w-5 mr-3" />
            খসড়া হিসেবে সেভ করুন
          </Button>

          {step < 3 ? (
            <Button
              onClick={handleNext}
              className="h-14 px-10 sm:px-16 bg-primary hover:bg-primary/95 text-white font-black rounded-2xl shadow-2xl shadow-primary/30 active:scale-95 transition-all group"
            >
              পরবর্তী ধাপ
              <ChevronRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : (
            <Button
              onClick={() => handleSave('published')}
              className="h-14 px-12 sm:px-20 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-2xl shadow-emerald-200 active:scale-95 transition-all"
            >
              প্রশ্নপত্র সম্পন্ন করুন
            </Button>
          )}
        </div>
    </div>
      </footer >
    </div >
  );
}
