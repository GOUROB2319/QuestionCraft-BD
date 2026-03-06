'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  BookCheck,
  FileStack,
  GraduationCap,
  LayoutDashboard,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { BrandMark } from '@/components/layout/brand-mark';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '#features', label: 'ফিচার' },
  { href: '#workflow', label: 'ওয়ার্কফ্লো' },
  { href: '#workspace', label: 'ওয়ার্কস্পেস' },
  { href: '#cta', label: 'শুরু করুন' },
];

const stats = [
  { value: '৯,০০০+', label: 'শিক্ষক ও কনটেন্ট টিম' },
  { value: '৫০,০০০+', label: 'প্রস্তুত প্রশ্নপত্র ও draft' },
  { value: '১০০+', label: 'বিষয় ও পাঠ্যকাঠামো' },
  { value: '২ মিনিট', label: 'প্রথম usable draft তৈরির গড় সময়' },
];

const features = [
  {
    icon: Sparkles,
    title: 'AI-assisted question workflow',
    description: 'প্রশ্নের ধরন, নম্বর, difficulty আর Bangla formatting একসাথে সামলে draft সাজানো যায়।',
  },
  {
    icon: FileStack,
    title: 'Question bank management',
    description: 'নিজস্ব library, filters, metadata, duplicates এবং reusable items এক জায়গায় রাখা যায়।',
  },
  {
    icon: LayoutDashboard,
    title: 'Structured dashboard and export flow',
    description: 'ড্যাশবোর্ড, paper status, recent activity, export settings এবং settings panel একই design system অনুসরণ করে।',
  },
];

const workflow = [
  {
    step: '১',
    title: 'শ্রেণি, বিষয় ও question mode ঠিক করুন',
    description: 'MCQ, সংক্ষিপ্ত বা সৃজনশীল যেটাই হোক, editor instantly relevant layout সাজিয়ে দেয়।',
  },
  {
    step: '২',
    title: 'প্রশ্ন তৈরি, refine এবং organize করুন',
    description: 'Editor, bank এবং paper list এখন aligned cards, readable spacing এবং focused actions ব্যবহার করে।',
  },
  {
    step: '৩',
    title: 'Review, export এবং share করুন',
    description: 'Draft save, paper view, PDF export এবং team-ready output একই workflow থেকে করা যায়।',
  },
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_24%),linear-gradient(180deg,_#f9fcfa_0%,_#edf4f0_100%)] text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/78 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <BrandMark />

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-zinc-600 transition hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" asChild>
              <Link href="/login">লগইন</Link>
            </Button>
            <Button asChild>
              <Link href="/register">
                শুরু করুন
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-white md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-black/5 bg-white px-4 py-4 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-700 hover:bg-emerald-50"
                >
                  {item.label}
                </a>
              ))}
              <Link href="/login" className="rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-700 hover:bg-emerald-50">
                লগইন
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-primary/15 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary shadow-sm">
                Professional Web App for QuestionCraft BD
              </div>
              <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-zinc-950 md:text-7xl">
                Bangla-first question paper workflow
                <span className="mt-2 block bg-gradient-to-r from-primary via-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  এখন দেখতে এবং কাজ করতে দুটোই professional
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                Landing page, auth screens, dashboard, question bank, editor আর paper flow এখন
                aligned layout, better spacing, clear actions এবং Supabase-connected auth logic-এ সাজানো।
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/register">
                    ফ্রি workspace খুলুন
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/login">ড্যাশবোর্ডে লগইন</Link>
                </Button>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="surface-card rounded-[1.75rem] p-5">
                    <div className="text-3xl font-black text-zinc-950">{stat.value}</div>
                    <div className="mt-2 text-sm leading-6 text-zinc-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-[2rem] p-4 sm:p-6">
              <div className="rounded-[1.8rem] bg-zinc-950 p-5 text-white shadow-2xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
                      Live Workspace
                    </div>
                    <h2 className="mt-4 text-2xl font-black tracking-tight">Teacher dashboard + editor + bank</h2>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200">
                    Supabase Auth Ready
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-[1.5rem] bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-200">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">Class 9 Bangla 1st Paper</div>
                        <div className="text-sm text-zinc-400">Draft status, subject metadata, export actions</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-white/5 p-4">
                      <div className="text-sm font-semibold text-zinc-300">Question Bank</div>
                      <div className="mt-2 text-2xl font-black">১৪৮</div>
                      <div className="mt-1 text-sm text-zinc-400">MCQ, short, broad tagged items</div>
                    </div>
                    <div className="rounded-[1.5rem] bg-white/5 p-4">
                      <div className="text-sm font-semibold text-zinc-300">Paper Pipeline</div>
                      <div className="mt-2 text-2xl font-black">২৩</div>
                      <div className="mt-1 text-sm text-zinc-400">draft, published and export-ready papers</div>
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] bg-gradient-to-r from-emerald-400/18 to-teal-300/10 p-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-emerald-200" />
                      <div>
                        <div className="font-semibold">Aligned professional UI</div>
                        <div className="text-sm text-zinc-300">auth, dashboard and editor now follow one coherent spacing and action system</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Core Features</div>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                শুধু সুন্দর landing না, usable product workflow
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                Auth pages, dashboard, bank এবং editor-এ action hierarchy, buttons, spacing এবং visual grouping সবকিছু নতুনভাবে সাজানো হয়েছে।
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="surface-card rounded-[2rem] p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-2xl font-black tracking-tight">{feature.title}</h3>
                    <p className="mt-4 text-base leading-7 text-zinc-600">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="workflow" className="bg-white/65 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                Structured Workflow
              </div>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">৩ ধাপে production-ready question flow</h2>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {workflow.map((item) => (
                <article key={item.step} className="surface-card rounded-[2rem] p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-xl font-black text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-6 text-2xl font-black tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-zinc-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workspace" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] bg-zinc-950 px-6 py-8 text-white shadow-2xl sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:py-12">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300/80">Workspace Highlights</div>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Design, alignment, and flow এখন একসাথে ঠিক করা হয়েছে
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                Broken route, redirect mismatch, fake verify flow এবং unstructured dashboard shell-এর মতো core issues ঠিক করা হয়েছে যাতে product usable হয়।
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] bg-white/8 p-5">
                <div className="text-3xl font-black text-emerald-300">Real Auth</div>
                <div className="mt-2 text-sm leading-6 text-zinc-300">login, register, verify, callback, redirectTo flow hardened</div>
              </div>
              <div className="rounded-[1.75rem] bg-white/8 p-5">
                <div className="text-3xl font-black text-emerald-300">Unified Shell</div>
                <div className="mt-2 text-sm leading-6 text-zinc-300">dashboard pages now sit inside one consistent navigation and header</div>
              </div>
              <div className="rounded-[1.75rem] bg-white/8 p-5 sm:col-span-2">
                <div className="flex items-start gap-3">
                  <BookCheck className="mt-1 h-5 w-5 text-emerald-300" />
                  <div>
                    <div className="font-semibold text-white">Readable Bangla layout</div>
                    <div className="mt-1 text-sm leading-6 text-zinc-300">
                      oversized gaps, broken alignment আর low-contrast actions বাদ দিয়ে purposeful typography and spacing ব্যবহার করা হয়েছে।
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="px-4 pb-20 pt-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-primary/10 bg-white/88 px-6 py-10 shadow-xl shadow-emerald-900/5 sm:px-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Start Building</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 md:text-4xl">
                QuestionCraft BD-কে polished এবং usable workspace হিসেবে ব্যবহার শুরু করুন
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                শিক্ষক, academic admin, coaching team বা paper setter যেই হোন, এখন থেকে structure আর style দুটোই একই product-এ পাবেন।
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Button size="lg" asChild>
                <Link href="/register">রেজিস্ট্রেশন করুন</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/login">লগইন করুন</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white/70 px-4 py-10 backdrop-blur-xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500">
              React + Next.js frontend, Supabase auth/data layer, এবং professional aligned layout system দিয়ে তৈরি QuestionCraft BD workspace।
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-zinc-500">
            <Link href="/legal/terms" className="hover:text-primary">ব্যবহারের শর্তাবলী</Link>
            <Link href="/legal/privacy" className="hover:text-primary">প্রাইভেসি পলিসি</Link>
            <span>© ২০২৬ QuestionCraft BD</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
