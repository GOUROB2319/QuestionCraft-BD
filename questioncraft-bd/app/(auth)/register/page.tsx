'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Eye, EyeOff, LockKeyhole, Mail, UserRound, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { BrandMark } from '@/components/layout/brand-mark';
import { createClient } from '@/lib/supabase';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'পূর্ণ নাম লিখুন।' }),
  email: z.string().email({ message: 'সঠিক ইমেইল ঠিকানা লিখুন।' }),
  role: z.enum(['teacher', 'admin']),
  password: z.string().min(8, { message: 'কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড দিন।' }),
  confirmPassword: z.string().min(1, { message: 'পাসওয়ার্ড নিশ্চিত করুন।' }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "শর্তাবলী মেনে নেওয়া আবশ্যক।",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "পাসওয়ার্ড ম্যাচ করেনি।",
  path: ["confirmPassword"],
});

export default function RegisterPage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      role: 'teacher',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.fullName,
            role: values.role,
          },
          emailRedirectTo: `${window.location.origin}/api/auth/callback?next=/dashboard`,
        },
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      if (data.session) {
        toast.success('অ্যাকাউন্ট তৈরি হয়েছে।');
        router.replace('/dashboard');
        router.refresh();
        return;
      }

      toast.success('ভেরিফিকেশন ইমেইল পাঠানো হয়েছে।');
      router.replace(`/verify?email=${encodeURIComponent(values.email)}`);
    } catch {
      setAuthError('অ্যাকাউন্ট তৈরি করা যায়নি।');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/[0.02] -z-10" />

      <div className="w-full max-w-[480px] space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col items-center text-center">
          <BrandMark href="/" />
          <h2 className="mt-8 text-3xl font-black tracking-tight text-primary">নতুন অ্যাকাউন্ট তৈরি করুন</h2>
          <p className="mt-2 text-sm text-slate-500 font-medium">আপনার তথ্য দিয়ে প্রফেশনাল মেম্বার হয়ে যান</p>
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
              <label className="text-sm font-bold text-slate-700 ml-1">পূর্ণ নাম</label>
              <div className="relative">
                <UserRound className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  {...form.register('fullName')}
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all font-medium"
                  placeholder="মোঃ কামরুল হাসান"
                />
              </div>
              {form.formState.errors.fullName && <p className="text-xs font-bold text-red-500 ml-1 mt-1">{form.formState.errors.fullName.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">ইমেইল ঠিকানা</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  {...form.register('email')}
                  type="email"
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all font-medium"
                  placeholder="teacher@example.com"
                />
              </div>
              {form.formState.errors.email && <p className="text-xs font-bold text-red-500 ml-1 mt-1">{form.formState.errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">ব্যবহারকারীর ধরণ</label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`flex items-center justify-center gap-2 h-12 rounded-xl border-2 cursor-pointer transition-all ${form.watch('role') === 'teacher' ? 'border-accent bg-accent/5 text-accent shadow-sm' : 'border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-600'}`}>
                  <input type="radio" {...form.register('role')} value="teacher" className="hidden" />
                  <span className="text-sm font-bold">শিক্ষক</span>
                </label>
                <label className={`flex items-center justify-center gap-2 h-12 rounded-xl border-2 cursor-pointer transition-all ${form.watch('role') === 'admin' ? 'border-accent bg-accent/5 text-accent shadow-sm' : 'border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-600'}`}>
                  <input type="radio" {...form.register('role')} value="admin" className="hidden" />
                  <span className="text-sm font-bold">প্রশাসক</span>
                </label>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">পাসওয়ার্ড</label>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    {...form.register('password')}
                    type={showPassword ? 'text' : 'password'}
                    className="w-full h-12 pl-12 pr-12 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all font-medium"
                    placeholder="••••••••"
                  />
                </div>
                {form.formState.errors.password && <p className="text-xs font-bold text-red-500 ml-1 mt-1">{form.formState.errors.password.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">কনফার্ম পাসওয়ার্ড</label>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    {...form.register('confirmPassword')}
                    type={showPassword ? 'text' : 'password'}
                    className="w-full h-12 pl-12 pr-12 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all font-medium"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {form.formState.errors.confirmPassword && <p className="text-xs font-bold text-red-500 ml-1 mt-1">{form.formState.errors.confirmPassword.message}</p>}
              </div>
              <div className="flex items-center space-x-2 ml-1">
                <input
                  id="acceptTerms"
                  type="checkbox"
                  {...form.register('acceptTerms')}
                  className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <label htmlFor="acceptTerms" className="text-sm font-medium text-slate-600">
                  আমি <Link href="/legal/terms" className="text-primary hover:underline">শর্তাবলী</Link> এবং <Link href="/legal/privacy" className="text-primary hover:underline">প্রাইভেসি পলিসি</Link> মেনে নিচ্ছি।
                </label>
              </div>
              {form.formState.errors.acceptTerms && <p className="text-xs font-bold text-red-500 ml-1 mt-1">{form.formState.errors.acceptTerms.message}</p>}

              <Button type="submit" size="xl" className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 rounded-xl h-12 text-base transition-all hover:-translate-y-0.5 mt-2" disabled={isLoading}>
                {isLoading ? 'অ্যাকাউন্ট তৈরি হচ্ছে...' : 'নিবন্ধন করুন'}
              </Button>
          </form>

          <p className="mt-8 text-center text-sm font-medium text-slate-600">
            ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
            <Link href="/login" className="font-black text-primary hover:text-accent transition-colors">
              লগইন করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
