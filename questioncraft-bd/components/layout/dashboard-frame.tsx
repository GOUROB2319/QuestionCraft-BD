'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { useMemo, useState, useTransition, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  Bell,
  FileStack,
  Home,
  LogOut,
  Menu,
  PenSquare,
  Search,
  Settings,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandMark } from '@/components/layout/brand-mark';
import { createClient } from '@/lib/supabase';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface DashboardFrameProps {
  children: ReactNode;
}

interface SidebarContentProps {
  handleSignOut: () => void;
  isPending: boolean;
  pathname: string | null;
  setIsMenuOpen: (open: boolean) => void;
}

const navItems = [
  { href: '/dashboard', label: 'হোম', icon: Home },
  { href: '/questions/bank', label: 'প্রশ্ন ব্যাংক', icon: Search },
  { href: '/questions/create', label: 'প্রশ্ন তৈরি', icon: PenSquare },
  { href: '/papers', label: 'আমার প্রশ্নপত্র', icon: FileStack },
  { href: '/settings', label: 'সেটিংস', icon: Settings },
];

function SidebarContent({
  handleSignOut,
  isPending,
  pathname,
  setIsMenuOpen,
}: SidebarContentProps) {
  return (
    <div className="flex h-full flex-col px-6 py-8">
      <div className="flex items-center justify-between">
        <BrandMark />
        <button
          className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-primary xl:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="mt-12 flex-1 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname?.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                'group flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-bold transition-all duration-300',
                active
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
              )}
            >
              <Icon className={cn('h-5 w-5', active ? 'text-accent' : 'text-slate-400 group-hover:text-primary')} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="group relative mt-8 shrink-0 overflow-hidden rounded-3xl bg-primary p-6 text-white shadow-xl shadow-primary/10">
        <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-accent/20 transition-transform duration-500 group-hover:scale-150" />
        <div className="relative z-10">
          <div className="text-xs font-bold uppercase tracking-widest text-accent">প্রফেশনাল সাপোর্ট</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-200">
            যেকোনো প্রয়োজনে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।
          </p>
          <Button variant="secondary" size="sm" className="mt-5 w-full border-white/10 bg-white/10 font-bold text-white hover:bg-white/20" onClick={handleSignOut} disabled={isPending}>
            <LogOut className="mr-2 h-4 w-4" />
            লগআউট
          </Button>
        </div>
      </div>
    </div>
  );
}

export function DashboardFrame({ children }: DashboardFrameProps) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const [isPending, startTransition] = useTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayName, setDisplayName] = useState('Teacher');

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setDisplayName((user.user_metadata.full_name as string) || user.email?.split('@')[0] || 'Teacher');
      }
    }
    getUser();
  }, [supabase]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  const handleSignOut = () => {
    startTransition(async () => {
      await supabase.auth.signOut();
      router.replace('/login');
      router.refresh();
    });
  };

  const renderSidebarContent = () => (
    <>
      <div className="px-6 py-8 flex flex-col h-full">
        <div className="flex justify-between items-center">
          <BrandMark />
          <button
            className="xl:hidden p-2 text-slate-500 hover:text-primary hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-12 space-y-2 flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-bold transition-all duration-300 group',
                  active
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
                )}
              >
                <Icon className={cn('h-5 w-5', active ? 'text-accent' : 'text-slate-400 group-hover:text-primary')} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 rounded-3xl bg-primary p-6 text-white relative overflow-hidden group shrink-0 shadow-xl shadow-primary/10">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150" />
          <div className="relative z-10">
            <div className="text-xs font-bold uppercase tracking-widest text-accent">প্রফেশনাল সাপোর্ট</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-200">
              যেকোনো প্রয়োজনে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।
            </p>
            <Button variant="secondary" size="sm" className="mt-5 w-full bg-white/10 hover:bg-white/20 border-white/10 text-white font-bold" onClick={handleSignOut} disabled={isPending}>
              <LogOut className="h-4 w-4 mr-2" />
              লগআউট
            </Button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen overflow-x-clip bg-[#F8FAFC] font-sans selection:bg-primary/10 selection:text-primary">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] overflow-x-clip">
        {/* Desktop Sidebar */}
        <aside className="hidden w-[280px] shrink-0 border-r border-slate-200 bg-white xl:flex xl:flex-col shadow-sm sticky top-0 h-screen z-20">
          <div className="w-full h-full flex flex-col">
            {renderSidebarContent()}
          </div>
        </aside>

        {/* Mobile Sidebar (Drawer) */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm xl:hidden"
              />
              <motion.aside
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                className="fixed inset-y-0 left-0 z-50 w-[280px] bg-white shadow-2xl xl:hidden flex flex-col"
              >
                {renderSidebarContent()}
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        <div className="min-w-0 flex-1 overflow-x-clip flex flex-col">
          {/* Top Navbar */}
          <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
            <div className="flex h-16 min-w-0 sm:h-20 items-center justify-between px-3 sm:px-6 lg:px-8">
              <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  className="inline-flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 xl:hidden hover:border-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <Menu className="h-5 w-5" />
                </button>
                <div className="xl:hidden">
                  <BrandMark compact />
                </div>
                <div className="relative ml-4 hidden w-72 max-w-md min-w-0 lg:block">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="খুঁজুন..."
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 font-medium text-slate-700 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent focus:bg-white transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2 sm:gap-4 ml-2">
                <button
                  type="button"
                  className="relative inline-flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-slate-500 hover:text-primary hover:bg-slate-100 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 h-2 w-2 rounded-full bg-red-500 border-2 border-slate-50" />
                </button>

                <div className="flex items-center gap-3 sm:gap-4 pl-2 sm:pl-5 border-l border-slate-200">
                  <div className="hidden sm:block text-right">
                    <div className="text-sm font-bold text-slate-900">{displayName}</div>
                    <div className="text-[11px] text-primary/80 font-bold uppercase tracking-widest whitespace-nowrap bg-primary/5 px-2 py-0.5 rounded-full mt-1">
                      Verified
                    </div>
                  </div>
                  <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-2xl bg-gradient-to-br from-primary to-[#2a5082] flex items-center justify-center text-white font-black shadow-lg shadow-primary/20 ring-2 ring-white ring-offset-2 ring-offset-slate-50 transition-transform hover:scale-105">
                    {displayName.charAt(0).toUpperCase()}
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white" />
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
