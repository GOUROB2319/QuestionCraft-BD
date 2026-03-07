'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandMark } from '@/components/layout/brand-mark';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Sparkles,
    title: 'AI দিয়ে প্রশ্ন তৈরি',
    description: 'NCTB কারিকুলাম অনুযায়ী কৃত্রিম বুদ্ধিমত্তা ব্যবহার করে কয়েক সেকেন্ডে মানসম্মত প্রশ্ন তৈরি করুন।',
  },
  {
    icon: GraduationCap,
    title: 'বাংলায় সম্পূর্ণ সাপোর্ট',
    description: 'ইউনিকোড বাংলা ফন্ট এবং গাণিতিক সমীকরণ সহ সব ধরণের বাংলা কন্টেন্ট নিরবচ্ছিন্নভাবে ব্যবহার করুন।',
  },
  {
    icon: ShieldCheck,
    title: 'সরকারি ফরম্যাট',
    description: 'মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ডের নির্ধারিত স্ট্যান্ডার্ড ফরম্যাটে প্রশ্নপত্র প্রিন্ট ও ডাউনলোড করুন।',
  },
];

const workflowSteps = [
  {
    title: "বিষয়ের তথ্য যুক্ত করুন",
    description: "শ্রেণি, বিষয় এবং প্রশ্নের ধরণ নির্বাচন করুন আমাদের লাইব্রেরি থেকে।"
  },
  {
    title: "প্রশ্নের ড্রাফট তৈরি",
    description: "AI ব্যবহার করে বা ব্যাংক থেকে বাছাইকৃত প্রশ্ন সরাসরি আপনার ড্রাফটে যুক্ত করুন।"
  },
  {
    title: "প্রিভিউ এবং এক্সপোর্ট",
    description: "সবকিছু ঠিক থাকলে সরাসরি PDF হিসেবে ডাউনলোড বা প্রিন্ট করুন।"
  }
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-primary/10 selection:text-primary">
      {/* Sticky Navbar */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <BrandMark />

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="font-bold text-primary hover:bg-primary/5 hidden sm:flex" asChild>
              <Link href="/login">লগইন</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-md transition-transform hover:scale-105 rounded-xl px-6" asChild>
              <Link href="/register">একাউন্ট তৈরি করুন</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-x-clip pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 pb-18 pt-12 sm:px-6 sm:pb-20 lg:px-8 lg:pt-24">
          {/* Decorative gradients */}
          <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute right-0 top-1/4 -z-10 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-accent/10 blur-[80px]" />

          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-bold text-accent sm:mb-8 sm:px-5 sm:text-sm"
            >
              <Sparkles className="h-4 w-4" />
              <span>স্মার্ট এডুকেশন এখন হাতের নাগালে</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto max-w-4xl text-[2.75rem] font-black tracking-tight text-primary leading-[1.08] sm:text-5xl sm:leading-[1.1] lg:text-[4.5rem] lg:leading-[1.05]"
            >
              পরীক্ষার প্রশ্নপত্র তৈরি করুন <br className="hidden sm:block" />
              <span className="text-accent italic">সহজেই</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 font-medium sm:mt-8 sm:text-lg lg:text-xl"
            >
              বাংলাদেশের শিক্ষকদের জন্য ডিজাইন করা সম্পূর্ণ আধুনিক প্ল্যাটফর্ম।
              NCTB কারিকুলাম অনুসরণ করে কয়েক মিনিটে নির্ভুল প্রশ্নপত্র প্রস্তুত করুন।
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row"
            >
              <Button size="xl" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 text-lg h-14 px-8 rounded-xl" asChild>
                <Link href="/register">
                  শুরু করুন
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="w-full sm:w-auto border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1 text-lg h-14 px-8 rounded-xl" asChild>
                <Link href="#features">আরও জানুন</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 sm:py-32 relative z-10">
          <div className="absolute inset-0 bg-white -skew-y-3 origin-top-left -z-10 border-y border-slate-100/50 shadow-sm" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl">কেন QuestionCraft BD?</h2>
              <p className="mt-4 text-lg text-slate-600 font-medium">শিক্ষকদের মূল্যবান সময় বাঁচাতে আমাদের রয়েছে বিশেষায়িত সব ফিচার।</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group rounded-[2rem] border border-slate-100 bg-slate-50/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-100 text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-white group-hover:border-primary mb-6">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="leading-relaxed text-slate-600 font-medium">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className="py-24 sm:py-32 bg-slate-50 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-black text-primary sm:text-4xl mb-6">কীভাবে কাজ করে?</h2>
                <p className="text-lg text-slate-600 mb-12 font-medium">মাত্র ৩টি সহজ ধাপে আপনার সম্পূর্ণ প্রশ্নপত্র প্রস্তুত হয়ে যাবে ডাউনলোডের জন্য।</p>

                <div className="space-y-10">
                  {workflowSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="flex gap-6 group"
                    >
                      <div className="flex flex-col items-center">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-white text-xl font-black shadow-lg shadow-accent/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                          {index + 1}
                        </div>
                        {index < workflowSteps.length - 1 && (
                          <div className="w-0.5 h-full bg-slate-200 mt-4 group-hover:bg-accent/40 transition-colors" />
                        )}
                      </div>
                      <div className="pb-8 pt-2 space-y-2">
                        <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{step.title}</h4>
                        <p className="text-slate-600 leading-relaxed font-medium">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual representation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative lg:ml-auto w-full max-w-md mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[3rem] transform rotate-3 scale-105 -z-10 transition-transform duration-500 hover:rotate-6" />
                <div className="rounded-[2.5rem] bg-white p-3 shadow-2xl shadow-primary/10 border border-slate-100">
                  <div className="rounded-[2rem] bg-slate-50 border border-slate-100 p-6 flex flex-col gap-5 h-[400px]">
                    <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                      </div>
                      <div className="flex-1 h-6 bg-white rounded-md border border-slate-200 flex items-center px-3">
                        <div className="w-2/3 h-2 bg-slate-200 rounded-full" />
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center space-y-4">
                      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 fill-mode-both">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
                      </div>
                      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both">
                        <FileText className="w-6 h-6 text-accent" />
                        <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
                      </div>
                      <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 mt-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both">
                        <div className="h-2 w-full bg-primary/20 rounded-full mb-3" />
                        <div className="h-2 w-5/6 bg-primary/20 rounded-full mb-3" />
                        <div className="h-2 w-4/6 bg-primary/20 rounded-full" />
                      </div>
                    </div>

                    <Button variant="accent" className="w-full text-white shadow-md rounded-xl h-12 font-bold animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 fill-mode-both">
                      <Download className="w-4 h-4 mr-2" />
                      PDF ডাউনলোড
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <BrandMark />
            <p className="text-sm text-slate-500 font-medium text-center">
              © ২০২৬ QuestionCraft BD. সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex gap-6 text-sm font-bold text-slate-600">
              <Link href="/legal/terms" className="hover:text-primary transition-colors">শর্তাবলী</Link>
              <Link href="/legal/privacy" className="hover:text-primary transition-colors">প্রাইভেসি</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
