'use client';

import { Suspense, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { ArrowLeft, Eye, EyeOff, Mail, LockKeyhole, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { AuthShell } from '@/components/layout/auth-shell';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase';
import { useAppStore } from '@/store/app-store';

const formSchema = z.object({
  email: z.string().email({ message: 'সঠিক ইমেইল ঠিকানা লিখুন।' }),
  password: z.string().min(1, { message: 'পাসওয়ার্ড লিখুন।' }),
  rememberMe: z.boolean().default(false).optional(),
});

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = useMemo(() => createClient(), []);
  const language = useAppStore((state) => state.language);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const redirectTo = searchParams.get('redirectTo') || '/dashboard';

  const t = language === 'bn'
    ? {
        eyebrow: 'Teacher Login',
        title: 'ফিরে আসুন এবং প্রশ্নপত্র workflow-এ কাজ চালিয়ে যান',
        description:
          'একই dashboard থেকে প্রশ্ন তৈরি, bank management, paper export এবং settings পরিচালনা করুন।',
        sideNote: 'স্মার্ট এবং নির্ভরযোগ্য workspace',
        features: [
          { title: 'সুস্পষ্ট workflow', description: 'Landing, editor, bank এবং export এখন একই visual system অনুসরণ করে।' },
          { title: 'দ্রুত প্রবেশ', description: 'ইমেইল বা Google sign-in দিয়ে দ্রুত dashboard-এ ফিরে যান।' },
          { title: 'নিরাপদ সেশন', description: 'Supabase auth session cookies ব্যবহার করে protected route access নিশ্চিত করা হয়েছে।' },
        ],
        heading: 'লগইন করুন',
        subheading: 'আপনার একাউন্টে প্রবেশ করে কাজ চালিয়ে যান',
        email: 'ইমেইল ঠিকানা',
        password: 'পাসওয়ার্ড',
        rememberMe: 'আমাকে মনে রাখুন',
        forgot: 'পাসওয়ার্ড ভুলে গেছেন?',
        submit: 'লগইন করুন',
        loading: 'লগইন হচ্ছে...',
        google: 'Google দিয়ে লগইন করুন',
        noAccount: 'এখনও অ্যাকাউন্ট নেই?',
        register: 'রেজিস্ট্রেশন করুন',
        footer: (
          <>
            <span className="text-zinc-500">প্রাইভেসি ও নিরাপত্তা জানতে </span>
            <Link href="/legal/privacy" className="font-semibold text-primary hover:underline">প্রাইভেসি পলিসি</Link>
            <span className="text-zinc-500"> দেখুন।</span>
          </>
        ),
      }
    : {
        eyebrow: 'Teacher Login',
        title: 'Return to your polished question-paper workspace',
        description:
          'Manage question creation, bank operations, paper export, and settings from one structured dashboard.',
        sideNote: 'Consistent and secure workspace',
        features: [
          { title: 'Clear workflow', description: 'Landing, editor, bank, and export now follow one visual system.' },
          { title: 'Fast access', description: 'Return to your dashboard quickly with email or Google sign-in.' },
          { title: 'Protected sessions', description: 'Supabase auth cookies keep protected routes working correctly.' },
        ],
        heading: 'Sign In',
        subheading: 'Access your account and continue working',
        email: 'Email Address',
        password: 'Password',
        rememberMe: 'Remember me',
        forgot: 'Forgot password?',
        submit: 'Sign In',
        loading: 'Signing in...',
        google: 'Continue with Google',
        noAccount: 'Need an account?',
        register: 'Register',
        footer: (
          <>
            <span className="text-zinc-500">Review the </span>
            <Link href="/legal/privacy" className="font-semibold text-primary hover:underline">privacy policy</Link>
            <span className="text-zinc-500"> for account security details.</span>
          </>
        ),
      };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '', rememberMe: false },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success(language === 'bn' ? 'সফলভাবে লগইন হয়েছে।' : 'Logged in successfully.');
      router.replace(redirectTo);
      router.refresh();
    } catch {
      toast.error(language === 'bn' ? 'লগইন সম্পন্ন করা যায়নি।' : 'Unable to complete sign-in.');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleLogin() {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/api/auth/callback?next=${encodeURIComponent(redirectTo)}`,
        },
      });

      if (error) {
        throw error;
      }
    } catch (error: unknown) {
      toast.error(error instanceof Error ? error.message : 'OAuth failed');
    }
  }

  return (
    <AuthShell
      eyebrow={t.eyebrow}
      title={t.title}
      description={t.description}
      sideNote={t.sideNote}
      features={t.features}
      footer={t.footer}
    >
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900">
          <ArrowLeft className="h-4 w-4" />
          {language === 'bn' ? 'হোমে ফিরে যান' : 'Back to home'}
        </Link>
      </div>

      <div>
        <h2 className="text-3xl font-black tracking-tight text-zinc-950">{t.heading}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-500">{t.subheading}</p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-900">{t.email}</label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              {...form.register('email')}
              type="email"
              placeholder="teacher@example.com"
              className="input-field h-12 pl-11"
            />
          </div>
          {form.formState.errors.email && <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <label className="text-sm font-semibold text-zinc-900">{t.password}</label>
            <Link href="/verify" className="text-sm font-medium text-primary hover:underline">
              {t.forgot}
            </Link>
          </div>
          <div className="relative">
            <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              {...form.register('password')}
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              className="input-field h-12 pl-11 pr-12"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-zinc-700"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {form.formState.errors.password && <p className="text-sm text-red-600">{form.formState.errors.password.message}</p>}
        </div>

        <label className="flex items-center gap-3 text-sm text-zinc-600">
          <input type="checkbox" {...form.register('rememberMe')} className="h-4 w-4 rounded border-zinc-300 accent-primary" />
          {t.rememberMe}
        </label>

        <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
          {isLoading ? t.loading : t.submit}
        </Button>
      </form>

      <div className="relative my-7">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-black/6" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">or</span>
        </div>
      </div>

      <Button variant="secondary" size="lg" className="w-full justify-center" onClick={handleGoogleLogin}>
        <Sparkles className="h-4 w-4" />
        {t.google}
      </Button>

      <p className="mt-8 text-center text-sm text-zinc-600">
        {t.noAccount}{' '}
        <Link href="/register" className="font-semibold text-primary hover:underline">
          {t.register}
        </Link>
      </p>
    </AuthShell>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <LoginContent />
    </Suspense>
  );
}
