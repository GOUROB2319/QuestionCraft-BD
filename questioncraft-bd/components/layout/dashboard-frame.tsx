'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { useMemo, useState, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  Bell,
  ChevronDown,
  FileStack,
  Home,
  LogOut,
  Menu,
  PenSquare,
  Search,
  Settings,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandMark } from '@/components/layout/brand-mark';
import { createClient } from '@/lib/supabase';
import { cn } from '@/lib/utils';

interface DashboardFrameProps {
  children: ReactNode;
}

const navItems = [
  { href: '/dashboard', label: 'ড্যাশবোর্ড', icon: Home },
  { href: '/questions/create', label: 'প্রশ্ন সম্পাদক', icon: PenSquare },
  { href: '/questions/bank', label: 'প্রশ্ন ব্যাংক', icon: FileStack },
  { href: '/papers', label: 'প্রশ্নপত্র', icon: Sparkles },
  { href: '/settings', label: 'সেটিংস', icon: Settings },
];

export function DashboardFrame({ children }: DashboardFrameProps) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const [isPending, startTransition] = useTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    startTransition(async () => {
      await supabase.auth.signOut();
      router.replace('/login');
      router.refresh();
    });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_24%),linear-gradient(180deg,_#f8fcfa_0%,_#edf4f0_100%)]">
      <div className="mx-auto flex min-h-screen max-w-[1680px]">
        <aside className="hidden w-[292px] shrink-0 border-r border-black/5 bg-white/80 px-5 py-6 backdrop-blur-xl lg:flex lg:flex-col">
          <BrandMark />
          <div className="mt-10 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all',
                    active
                      ? 'bg-zinc-950 text-white shadow-lg shadow-zinc-950/10'
                      : 'text-zinc-600 hover:bg-emerald-50 hover:text-zinc-950'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto rounded-[1.75rem] bg-zinc-950 p-5 text-white">
            <div className="text-sm font-semibold text-emerald-200">QuestionCraft Pro Flow</div>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              AI সহ editor, bank, paper export আর settings এখন একই workflow-এর মধ্যে।
            </p>
            <Button variant="secondary" className="mt-5 w-full bg-white text-zinc-950 hover:bg-zinc-100" onClick={handleSignOut} disabled={isPending}>
              <LogOut className="h-4 w-4" />
              সাইন আউট
            </Button>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-40 border-b border-black/5 bg-white/75 backdrop-blur-xl">
            <div className="flex items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-white text-zinc-700 lg:hidden"
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-label="Open navigation"
              >
                <Menu className="h-5 w-5" />
              </button>

              <div className="relative hidden max-w-xl flex-1 md:block">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="পৃষ্ঠা, প্রশ্ন বা বিষয় খুঁজুন"
                  className="h-12 w-full rounded-2xl border border-black/5 bg-white px-11 text-sm text-zinc-700 outline-none ring-0 transition focus:border-primary/30 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"
                />
              </div>

              <div className="ml-auto flex items-center gap-3">
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-white text-zinc-600"
                  aria-label="Notifications"
                >
                  <Bell className="h-4 w-4" />
                </button>
                <div className="hidden items-center gap-3 rounded-2xl border border-black/5 bg-white px-3 py-2 sm:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-sm font-bold text-primary">
                    QC
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-zinc-900">Teacher Workspace</div>
                    <div className="truncate text-xs text-zinc-500">questioncraft.bd</div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-zinc-400" />
                </div>
              </div>
            </div>

            {isMenuOpen && (
              <div className="border-t border-black/5 bg-white px-4 py-4 lg:hidden">
                <div className="grid gap-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold',
                          active ? 'bg-zinc-950 text-white' : 'text-zinc-700 hover:bg-emerald-50'
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    );
                  })}
                  <Button variant="outline" className="mt-2 justify-start" onClick={handleSignOut} disabled={isPending}>
                    <LogOut className="h-4 w-4" />
                    সাইন আউট
                  </Button>
                </div>
              </div>
            )}
          </header>

          <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
