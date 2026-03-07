'use client';

import { Suspense, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Eye, EyeOff, Mail, LockKeyhole, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { BrandMark } from '@/components/layout/brand-mark';
import { createClient } from '@/lib/supabase';

const formSchema = z.object({
  email: z.string().email({ message: 'সঠিক ইমেইল ঠিকানা লিখুন।' }),
  password: z.string().min(1, { message: 'পাসওয়ার্ড লিখুন।' }),
});

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = useMemo(() => createClient(), []);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const redirectTo = searchParams.get('redirectTo') || '/dashboard';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAuthError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      toast.success('সফলভাবে লগইন হয়েছে।');
      router.replace(redirectTo);
      router.refresh();
    } catch {
      setAuthError('লগইন সম্পন্ন করা যায়নি।');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/[0.02] -z-10" />

      <div className="w-full max-w-[420px] space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col items-center text-center">
          <BrandMark href="/" />
          <h2 className="mt-8 text-3xl font-black tracking-tight text-primary">লগইন করুন</h2>
          <p className="mt-2 text-sm text-slate-500 font-medium">আপনার একাউন্টে প্রবেশ করে প্রোডাক্টিভিটি বৃদ্ধি করুন</p>
        </div>

        <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-2xl shadow-primary/5 border border-slate-100">
          {authError && (
            <div className="mb-6 flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-600 border border-red-100">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p className="font-medium">{authError}</p>
            </div>
          )}

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">ইমেইল ঠিকানা</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  {...form.register('email')}
                  type="email"
                  placeholder="teacher@example.com"
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all font-medium"
                />
              </div>
              {form.formState.errors.email && <p className="text-xs font-bold text-red-500 ml-1 mt-1">{form.formState.errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between mx-1">
                <label className="text-sm font-bold text-slate-700">পাসওয়ার্ড</label>
                <Link href="/verify" className="text-xs font-bold text-primary hover:text-accent transition-colors">
                  পাসওয়ার্ড ভুলে গেছেন?
                </Link>
              </div>
              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  {...form.register('password')}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full h-12 pl-12 pr-12 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all font-medium"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {form.formState.errors.password && <p className="text-xs font-bold text-red-500 ml-1 mt-1">{form.formState.errors.password.message}</p>}
            </div>

            <Button type="submit" size="xl" className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 rounded-xl h-12 text-base transition-all hover:-translate-y-0.5" disabled={isLoading}>
              {isLoading ? 'লগইন হচ্ছে...' : 'লগইন করুন'}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm font-medium text-slate-600">
            নতুন ব্যবহারকারী?{' '}
            <Link href="/register" className="font-black text-primary hover:text-accent transition-colors">
              নতুন অ্যাকাউন্ট তৈরি করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <LoginContent />
    </Suspense>
  );
}
