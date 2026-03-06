'use client';

import { useAppStore } from '@/store/app-store';
import { Bot, Edit3, BookOpenCheck, CheckCircle2 } from 'lucide-react';

export function FeaturesSection() {
    const language = useAppStore((state) => state.language);

    const t = {
        bn: {
            title: 'শিক্ষার ভবিষ্যৎ আজই শুরু করুন',
            subtitle: 'আধুনিক AI প্রযুক্তি ব্যবহার করে তৈরি এই প্ল্যাটফর্ম শিক্ষকদের জীবনকে সহজ করে তুলবে',
            features: [
                {
                    id: 1,
                    title: 'AI চালিত প্রশ্ন তৈরি',
                    desc: 'ChatGPT এবং DeepSeek AI ব্যবহার করে NCTB কারিকুলাম অনুযায়ী স্বয়ংক্রিয়ভাবে প্রশ্ন তৈরি করুন',
                    icon: Bot,
                    points: ['MCQ, CQ, সংক্ষিপ্ত প্রশ্ন', 'কঠিনতার মাত্রা নির্ধারণ'],
                    bgGradient: 'from-blue-500/10 to-indigo-500/10',
                    borderColor: 'border-blue-500/20'
                },
                {
                    id: 2,
                    title: 'কাস্টম এডিটর',
                    desc: 'প্রশ্ন সম্পাদনা, যোগ, মুছে ফেলা এবং পুনর্বিন্যাস করুন। গাণিতিক সূত্র ও টেবিল সাপোর্ট',
                    icon: Edit3,
                    points: ['Rich Text Editor', 'গাণিতিক সূত্র সাপোর্ট'],
                    bgGradient: 'from-emerald-500/10 to-teal-500/10',
                    borderColor: 'border-emerald-500/20'
                },
                {
                    id: 3,
                    title: 'বই সংগ্রহ',
                    desc: 'সমস্ত বাংলাদেশী স্কুল বইয়ের PDF ফাইল এবং নির্দিষ্ট অধ্যায় থেকে প্রশ্ন তৈরি',
                    icon: BookOpenCheck,
                    points: ['সকল শ্রেণীর বই', 'অধ্যায়ভিত্তিক অনুধাবন'],
                    bgGradient: 'from-amber-500/10 to-orange-500/10',
                    borderColor: 'border-amber-500/20'
                }
            ]
        },
        en: {
            title: 'Start the Future of Education Today',
            subtitle: 'This platform built with modern AI technology will make teachers\' lives easier',
            features: [
                {
                    id: 1,
                    title: 'AI-Powered Generation',
                    desc: 'Automatically generate questions according to NCTB curriculum using ChatGPT and DeepSeek AI',
                    icon: Bot,
                    points: ['MCQ, CQ, Short Qs', 'Difficulty level control'],
                    bgGradient: 'from-blue-500/10 to-indigo-500/10',
                    borderColor: 'border-blue-500/20'
                },
                {
                    id: 2,
                    title: 'Custom Editor',
                    desc: 'Edit, add, delete and rearrange questions. Math formulas and table support included.',
                    icon: Edit3,
                    points: ['Rich Text Editor', 'Math Formulas Support'],
                    bgGradient: 'from-emerald-500/10 to-teal-500/10',
                    borderColor: 'border-emerald-500/20'
                },
                {
                    id: 3,
                    title: 'Book Collection',
                    desc: 'PDF files of all Bangladeshi school books and question generation from specific chapters',
                    icon: BookOpenCheck,
                    points: ['Books for All Classes', 'Chapter-wise Comprehension'],
                    bgGradient: 'from-amber-500/10 to-orange-500/10',
                    borderColor: 'border-amber-500/20'
                }
            ]
        }
    }[language];

    return (
        <section id="features" className="py-24 bg-muted/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        {t.title}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {t.features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.id}
                                className={`flex flex-col p-8 rounded-3xl bg-gradient-to-br ${feature.bgGradient} border ${feature.borderColor} bg-card/50 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300 shadow-sm`}
                            >
                                <div className="w-14 h-14 rounded-2xl bg-background shadow-sm flex items-center justify-center mb-6">
                                    <Icon className="h-7 w-7 text-foreground" />
                                </div>

                                <h3 className="text-2xl font-bold text-foreground mb-4">
                                    {feature.title}
                                </h3>

                                <p className="text-muted-foreground mb-8 flex-1">
                                    {feature.desc}
                                </p>

                                <ul className="space-y-3">
                                    {feature.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium text-foreground/80">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
