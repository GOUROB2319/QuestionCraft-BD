'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import {
    Printer,
    Download,
    Edit3,
    ChevronLeft,
    School,
    FileText,
    Calendar,
    Clock,
    CheckCircle2,
    Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Mock data for preview
const paperData = {
    institution: "ঢাকা রেসিডেনসিয়াল মডেল কলেজ",
    examName: "অর্ধবার্ষিক পরীক্ষা - ২০২৪",
    subject: "বাংলা ২য় পত্র",
    classLevel: "নবম শ্রেণি",
    totalMarks: 100,
    duration: "৩ ঘণ্টা",
    date: "১৫ মে, ২০২৪",
    sections: [
        {
            title: "ক-বিভাগ: বহুনির্বাচনি প্রশ্ন (MCQ)",
            instructions: "সঠিক উত্তরটি খাতায় লেখ। প্রতিটি প্রশ্নের মান ১।",
            questions: [
                { id: 1, text: "বাংলা ভাষার মূল উৎস কোনটি?", options: ["প্রাকৃত", "সংস্কৃত", "বৈদিক", "হিন্দি"], marks: 1 },
                { id: 2, text: "কোন্‌টি মৌলিক শব্দ?", options: ["গোলাপ", "গায়ক", "হরিণ", "মহাজনী"], marks: 1 },
                { id: 3, text: "শব্দের ক্ষুদ্রতম অংশকে কী বলা হয়?", options: ["অক্ষর", "ধ্বনি", "শব্দ", "বাক্য"], marks: 1 },
            ]
        },
        {
            title: "খ-বিভাগ: সংক্ষিপ্ত প্রশ্ন",
            instructions: "যেকোনো ৫টি প্রশ্নের উত্তর দাও। প্রতিটি প্রশ্নের মান ৫।",
            questions: [
                { id: 4, text: "সন্ধি ও সমাসের মধ্যে মৌলিক পার্থক্য আলোচনা কর।", marks: 5 },
                { id: 5, text: "ণ-ত্ব বিধানের পাঁচটি নিয়ম উদাহরণসহ লেখ।", marks: 5 },
                { id: 6, text: "শব্দ ও পদের মধ্যে পার্থক্য কী?", marks: 5 },
            ]
        },
        {
            title: "গ-বিভাগ: রচনামূলক প্রশ্ন",
            instructions: "যেকোনো ২টি প্রশ্নের উত্তর দাও। প্রতিটি প্রশ্নের মান ১০।",
            questions: [
                { id: 7, text: "তোমার দেখা একটি গ্রাম্য মেলার বর্ণনা দিয়ে বন্ধুর কাছে একটি পত্র লেখ।", marks: 10 },
                { id: 8, text: "ভাব-সম্প্রসারণ কর: 'স্বদেশের উপকারে নাই যার মন, কে বলে মানুষ তারে পশু সেই জন' ।", marks: 10 },
            ]
        }
    ]
};

function PreviewContent() {
    return (
        <div className="min-h-screen bg-slate-50 pb-20 print:bg-white print:pb-0">
            {/* Action Bar - Hidden on Print */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 px-6 mb-8 print:hidden shadow-sm">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="text-slate-500 hover:text-primary" asChild>
                            <Link href="/questions/create">
                                <ChevronLeft className="h-4 w-4 mr-1" />
                                ফিরে যান
                            </Link>
                        </Button>
                        <div className="h-4 w-px bg-slate-200 hidden sm:block" />
                        <h1 className="text-sm font-black text-primary hidden sm:block">প্রশ্নপত্র প্রিভিউ</h1>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="border-slate-200 text-slate-600 hover:text-primary" onClick={() => window.print()}>
                            <Printer className="h-4 w-4 mr-2" />
                            প্রিন্ট
                        </Button>
                        <Button variant="outline" size="sm" className="border-slate-200 text-slate-600 hover:text-primary">
                            <Download className="h-4 w-4 mr-2" />
                            PDF
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                            <Edit3 className="h-4 w-4 mr-2" />
                            সম্পাদনা
                        </Button>
                    </div>
                </div>
            </div>

            {/* A4 Page Container */}
            <div className="max-w-[210mm] mx-auto bg-white shadow-2xl shadow-slate-200/50 print:shadow-none print:mx-0 p-[20mm] sm:p-[25mm] rounded-xl print:rounded-none min-h-[297mm]">
                {/* Exam Header */}
                <div className="text-center border-b-2 border-primary pb-8 mb-10 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-16 bg-white p-4 rounded-full border border-slate-100 shadow-sm print:hidden">
                        <School className="h-10 w-10 text-primary" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
                        {paperData.institution}
                    </h2>
                    <div className="text-lg font-bold text-slate-700 mb-4">{paperData.examName}</div>

                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm font-black text-slate-500 uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-accent" />
                            বিষয়: {paperData.subject}
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-accent" />
                            শ্রেণি: {paperData.classLevel}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-accent" />
                            তারিখ: {paperData.date}
                        </div>
                    </div>

                    <div className="flex justify-between items-end mt-8 border-t border-slate-100 pt-4">
                        <div className="flex items-center gap-2 text-xs font-black text-slate-400">
                            <Clock className="h-4 w-4" />
                            সময়: {paperData.duration}
                        </div>
                        <div className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-black shadow-lg shadow-blue-50">
                            পূর্ণমান: {paperData.totalMarks}
                        </div>
                    </div>
                </div>

                {/* Question Sections */}
                <div className="space-y-12">
                    {paperData.sections.map((section, sIndex) => (
                        <div key={sIndex} className="space-y-6">
                            <div className="flex items-center justify-between gap-4 border-l-4 border-accent pl-4">
                                <h3 className="text-lg font-black text-primary">{section.title}</h3>
                            </div>
                            <p className="text-sm font-bold text-slate-500 italic ml-5">
                                [নির্দেশনা: {section.instructions}]
                            </p>

                            <div className="space-y-8 ml-5">
                                {section.questions.map((q, qIndex) => (
                                    <div key={q.id} className="relative">
                                        <div className="flex justify-between items-start gap-6">
                                            <div className="flex-1">
                                                <span className="font-black text-primary mr-3">{qIndex + 1}.</span>
                                                <span className="text-slate-800 font-bold leading-relaxed">{q.text}</span>

                                                {'options' in q && q.options && (
                                                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 ml-6">
                                                        {q.options.map((opt, i) => (
                                                            <div key={i} className="text-sm font-bold text-slate-600">
                                                                ({['ক', 'খ', 'গ', 'ঘ'][i]}) {opt}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="font-black text-slate-900 tabular-nums border-b border-dotted border-slate-300">
                                                {q.marks}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Postscript */}
                <div className="mt-20 pt-10 border-t border-slate-100 text-center">
                    <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                        <Sparkles className="h-3 w-3" />
                        Generated by QuestionCraft BD
                    </div>
                </div>
            </div>

            {/* Mobile Print Help - Hidden on Print */}
            <div className="max-w-4xl mx-auto mt-8 px-6 print:hidden">
                <div className="bg-amber-50 border border-amber-100 p-6 rounded-[2rem] flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                        <Printer className="h-5 w-5" />
                    </div>
                    <div>
                        <h4 className="text-amber-900 font-black">প্রিন্ট করার পরামর্শ</h4>
                        <p className="text-amber-700 text-sm mt-1 leading-relaxed">
                            সঠিকভাবে প্রিন্ট করার জন্য আপনার ব্রাউজারের প্রিন্ট সেটিংস থেকে "Background Graphics" সিলেক্ট করুন এবং "Margins" হিসেবে "None" বা "Default" সেট করুন।
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function PreviewPage() {
    return (
        <Suspense fallback={<div>Loading preview...</div>}>
            <PreviewContent />
        </Suspense>
    );
}
