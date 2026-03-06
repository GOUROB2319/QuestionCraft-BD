'use client';

import Link from 'next/link';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/app-store';

export function HeroSection() {
    const language = useAppStore((state) => state.language);

    const t = {
        bn: {
            badge: 'AI চালিত স্মার্ট প্রশ্নপত্র তৈরির প্ল্যাটফর্ম',
            headline: 'স্মার্ট প্রশ্নপত্র তৈরি করুন AI এর সাহায্যে',
            subheadline:
                'বাংলাদেশী শিক্ষকদের জন্য বিশেষভাবে ডিজাইন করা AI প্রযুক্তি ব্যবহার করে মিনিটে তৈরি করুন NCTB কারিকুলাম অনুযায়ী প্রশ্নপত্র। সম্পূর্ণ বিনামূল্যে!',
            primaryBtn: 'এখনই শুরু করুন',
            secondaryBtn: 'ডেমো দেখুন',
        },
        en: {
            badge: 'AI-Powered Smart Question Paper Platform',
            headline: 'Create Smart Question Papers with AI',
            subheadline:
                'Designed specifically for Bangladeshi teachers. Generate NCTB curriculum-aligned question papers in minutes using advanced AI technology. Completely free!',
            primaryBtn: 'Start Now',
            secondaryBtn: 'Watch Demo',
        },
    }[language];

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px]" />

                {/* Subtle grid pattern for texture */}
                <div className="absolute inset-0 bg-[url('/grid-mask.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.2]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-700 dark:text-primary-400 font-medium text-sm mb-8 ring-1 ring-primary/20 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Sparkles className="h-4 w-4" />
                        <span>{t.badge}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.15] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
                        {language === 'bn' ? (
                            <>
                                স্মার্ট প্রশ্নপত্র তৈরি করুন <br className="hidden md:block" />
                                <span className="gradient-text">AI এর সাহায্যে</span>
                            </>
                        ) : (
                            <>
                                Create Smart Question Papers <br className="hidden md:block" />
                                with <span className="gradient-text">Power of AI</span>
                            </>
                        )}
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                        {t.subheadline}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
                        <Link href="/register" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all gap-2 group">
                                {t.primaryBtn}
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="#demo" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-background/50 backdrop-blur-sm hover:bg-secondary/10 gap-2 border-2">
                                <Play className="h-4 w-4 fill-current" />
                                {t.secondaryBtn}
                            </Button>
                        </Link>
                    </div>

                    {/* Trusted by subtle text */}
                    <p className="mt-12 text-sm font-medium text-muted-foreground/80 animate-in fade-in duration-1000 delay-700">
                        {language === 'bn' ? 'বিশ্বস্ত: ৯০০০+ বাংলাদেশী শিক্ষক' : 'Trusted by 9000+ Bangladeshi teachers'}
                    </p>
                </div>

                {/* Browser Mockup / Dashboard Preview */}
                <div className="mt-16 lg:mt-24 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-700">
                    <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/10 dark:ring-white/5">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="mx-auto bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-primary/20 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                </div>
                                app.questioncraft.bd
                            </div>
                        </div>
                        <div className="aspect-[16/9] bg-gradient-to-br from-muted/50 to-background flex items-center justify-center relative shadow-[inset_0_0_100px_rgba(0,0,0,0.02)]">
                            {/* Decorative placeholder for dashboard preview */}
                            <div className="absolute inset-0 flex">
                                {/* Sidebar mock */}
                                <div className="hidden md:block w-48 border-r border-border bg-muted/20 p-4 space-y-3">
                                    <div className="h-6 w-24 bg-primary/20 rounded mb-8"></div>
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-4 w-full bg-foreground/5 rounded"></div>)}
                                </div>
                                {/* Main content mock */}
                                <div className="flex-1 p-6 md:p-8 space-y-6">
                                    <div className="flex justify-between items-center mb-8">
                                        <div className="h-8 w-48 bg-foreground/10 rounded"></div>
                                        <div className="h-8 w-24 bg-primary rounded"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {[1, 2, 3].map(i => <div key={i} className="h-24 bg-card border border-border shadow-sm rounded-xl"></div>)}
                                    </div>
                                    <div className="h-48 w-full bg-card border border-border shadow-sm rounded-xl mt-6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
