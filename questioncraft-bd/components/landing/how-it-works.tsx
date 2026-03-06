'use client';

import { useAppStore } from '@/store/app-store';
import { Layers, Settings, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HowItWorks() {
    const language = useAppStore((state) => state.language);

    const t = {
        bn: {
            title: 'মাত্র ৩টি ধাপে তৈরি করুন মানসম্মত প্রশ্নপত্র',
            steps: [
                {
                    title: 'শ্রেণী ও বিষয় নির্বাচন',
                    desc: 'আমাদের বিস্তৃত ডাটাবেজ থেকে আপনার কাঙ্ক্ষিত শ্রেণী এবং নির্দিষ্ট বিষয়টি বেছে নিন।',
                    icon: Layers,
                },
                {
                    title: 'কাস্টমাইজেশন করুন',
                    desc: 'প্রশ্নের ধরণ (MCQ, সৃজনশীল), অধ্যায় এবং কঠিনতার মাত্রা আপনার প্রয়োজন অনুযায়ী নির্ধারণ করুন।',
                    icon: Settings,
                },
                {
                    title: 'তৈরি ও ডাউনলোড',
                    desc: '\'Generate\' বাটনে ক্লিক করার সাথে সাথেই AI আপনার জন্য নির্ভুল প্রশ্নপত্র তৈরি করবে যা সরাসরি PDF হিসেবে ডাউনলোড করতে পারবেন।',
                    icon: FileDown,
                },
            ]
        },
        en: {
            title: 'Create Quality Question Papers in 3 Steps',
            steps: [
                {
                    title: 'Select Class & Subject',
                    desc: 'Choose your desired class and specific subject from our extensive database.',
                    icon: Layers,
                },
                {
                    title: 'Customize Needs',
                    desc: 'Set question types (MCQ, Creative), chapters, and difficulty levels according to your requirements.',
                    icon: Settings,
                },
                {
                    title: 'Generate & Download',
                    desc: 'Click \'Generate\' and AI will create an accurate question paper you can instantly download as PDF.',
                    icon: FileDown,
                },
            ]
        }
    }[language];

    return (
        <section id="how-it-works" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        {t.title}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side: Browser Mockup illustrating the process */}
                    <div className="relative order-2 lg:order-1 h-[400px] lg:h-[500px]">
                        {/* Decorative colored blobs behind the image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-3xl -z-10" />

                        {/* Main App Illustration Mock */}
                        <div className="absolute inset-0 border border-border rounded-2xl bg-card shadow-xl overflow-hidden flex flex-col">
                            {/* Browser Header */}
                            <div className="h-10 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>

                            {/* Steps Visual Layout */}
                            <div className="flex-1 p-6 flex flex-col gap-4 relative">
                                {/* Step 1 Visual */}
                                <div className="w-full max-w-[70%] bg-muted/40 rounded-lg p-4 border border-border/50 animate-pulse duration-1000">
                                    <div className="h-4 w-24 bg-primary/20 rounded mb-2"></div>
                                    <div className="h-3 w-48 bg-foreground/10 rounded"></div>
                                </div>

                                {/* Step 2 Visual */}
                                <div className="w-full max-w-[80%] ml-auto bg-primary/5 rounded-lg p-4 border border-primary/20">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="h-4 w-32 bg-primary/40 rounded"></div>
                                        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                                            <Settings className="h-5 w-5 text-primary" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="h-6 rounded bg-primary/20"></div>
                                        <div className="h-6 rounded bg-primary/20"></div>
                                        <div className="h-6 rounded bg-primary/20"></div>
                                    </div>
                                </div>

                                {/* Step 3 Visual */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-card shadow-lg rounded-lg p-4 border border-border flex items-center justify-between">
                                    <div>
                                        <div className="h-4 w-32 bg-foreground/80 rounded mb-1"></div>
                                        <div className="h-3 w-20 bg-muted-foreground/50 rounded"></div>
                                    </div>
                                    <Button size="sm" className="gap-2 bg-gradient-to-r from-primary to-primary-600">
                                        <FileDown className="h-4 w-4" /> Download PDF
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Steps content */}
                    <div className="flex flex-col gap-8 order-1 lg:order-2">
                        {t.steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="flex gap-4 group">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center border-2 border-transparent group-hover:border-primary group-hover:bg-primary/5 transition-colors relative z-10">
                                            <Icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                        {/* Vertical line connecting steps */}
                                        {index !== t.steps.length - 1 && (
                                            <div className="w-0.5 h-full bg-border mx-auto -mt-2 group-hover:bg-primary/30 transition-colors"></div>
                                        )}
                                    </div>
                                    <div className="pb-8">
                                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {index + 1}. {step.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
