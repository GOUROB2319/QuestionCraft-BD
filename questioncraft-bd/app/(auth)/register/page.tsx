'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail, School, UserRound } from 'lucide-react';
import { toast } from 'sonner';
import { AuthShell } from '@/components/layout/auth-shell';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase';
import { useAppStore } from '@/store/app-store';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'পূর্ণ নাম লিখুন।' }),
  institution: z.string().min(2, { message: 'প্রতিষ্ঠানের নাম লিখুন।' }),
  email: z.string().email({ message: 'সঠিক ইমেইল ঠিকানা লিখুন।' }),
  password: z.string().min(8, { message: 'কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড দিন।' }),
  agreeTerms: z.boolean().refine(Boolean, { message: 'শর্তাবলীতে সম্মতি দিতে হবে।' }),
});

function getStrength(password: string) {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;
  return score;
}

export default function RegisterPage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const language = useAppStore((state) => state.language);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const t = language === 'bn'
    ? {
        eyebrow: 'Teacher Registration',
        title: 'পেশাদার question workflow শুরু করতে নতুন অ্যাকাউন্ট খুলুন',
        description:
          'স্ট্রাকচার্ড landing, dashboard, question bank এবং editor এখন একই professional system-এ যুক্ত।',
        sideNote: 'বাংলাদেশি শিক্ষা workflow-এর জন্য তৈরি',
        features: [
          { title: 'Bangla-first experience', description: 'বাংলা content, NCTB style context এবং readable spacing মাথায় রেখে layout তৈরি করা হয়েছে।' },
          { title: 'Auth + profile ready', description: 'Supabase auth, protected routes এবং user profile sync একসাথে কাজ করবে।' },
          { title: 'Scalable editor flow', description: 'Registration-এর পর সরাসরি verify বা dashboard flow অনুযায়ী onboarding চালু থাকবে।' },
        ],
        heading: 'নতুন অ্যাকাউন্ট তৈরি করুন',
        subheading: 'আপনার তথ্য দিন, আমরা workspace প্রস্তুত করে দেব',
        fullName: 'পূর্ণ নাম',
        institution: 'প্রতিষ্ঠানের নাম',
        email: 'ইমেইল ঠিকানা',
        password: 'পাসওয়ার্ড',
        terms: 'আমি শর্তাবলী এবং গোপনীয়তা নীতিতে সম্মত',
        submit: 'রেজিস্ট্রেশন সম্পন্ন করুন',
        loading: 'অ্যাকাউন্ট তৈরি হচ্ছে...',
        hasAccount: 'ইতিমধ্যে অ্যাকাউন্ট আছে?',
        login: 'লগইন করুন',
        footer: (
          <>
            <Link href="/legal/terms" className="font-semibold text-primary hover:underline">শর্তাবলী</Link>
            <span className="text-zinc-500"> এবং </span>
            <Link href="/legal/privacy" className="font-semibold text-primary hover:underline">গোপনীয়তা নীতি</Link>
            <span className="text-zinc-500"> মেনে সাইন আপ করুন।</span>
          </>
        ),
        strength: ['খুব দুর্বল', 'দুর্বল', 'মোটামুটি', 'ভালো', 'শক্তিশালী'],
      }
    : {
        eyebrow: 'Teacher Registration',
        title: 'Create a new account for a polished exam-paper workflow',
        description:
          'The structured landing, dashboard, question bank, and editor now work as one professional system.',
        sideNote: 'Built for education teams in Bangladesh',
        features: [
          { title: 'Bangla-first experience', description: 'Layouts and spacing are designed for readable Bengali content and NCTB-style workflows.' },
          { title: 'Auth + profile ready', description: 'Supabase auth, protected routes, and user profile sync now work together.' },
          { title: 'Scalable editor flow', description: 'Registration can continue into verification or direct dashboard onboarding based on auth settings.' },
        ],
        heading: 'Create a new account',
        subheading: 'Enter your details and start using the workspace',
        fullName: 'Full Name',
        institution: 'Institution Name',
        email: 'Email Address',
        password: 'Password',
        terms: 'I agree to the terms and privacy policy',
        submit: 'Create Account',
        loading: 'Creating account...',
        hasAccount: 'Already have an account?',
        login: 'Sign in',
        footer: (
          <>
            <span className="text-zinc-500">By signing up you accept the </span>
            <Link href="/legal/terms" className="font-semibold text-primary hover:underline">terms</Link>
            <span className="text-zinc-500"> and </span>
            <Link href="/legal/privacy" className="font-semibold text-primary hover:underline">privacy policy</Link>
            <span className="text-zinc-500">.</span>
          </>
        ),
        strength: ['Very weak', 'Weak', 'Fair', 'Good', 'Strong'],
      };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      institution: '',
      email: '',
      password: '',
      agreeTerms: false,
    },
  });

  const passwordValue = form.watch('password');
  const strength = getStrength(passwordValue);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.fullName,
            institution: values.institution,
            role: 'teacher',
          },
          emailRedirectTo: `${window.location.origin}/api/auth/callback?next=/dashboard`,
        },
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data.session) {
        toast.success(language === 'bn' ? 'অ্যাকাউন্ট তৈরি হয়েছে।' : 'Account created.');
        router.replace('/dashboard');
        router.refresh();
        return;
      }

      toast.success(language === 'bn' ? 'ভেরিফিকেশন ইমেইল পাঠানো হয়েছে।' : 'Verification email sent.');
      router.replace(`/verify?email=${encodeURIComponent(values.email)}`);
    } catch {
      toast.error(language === 'bn' ? 'অ্যাকাউন্ট তৈরি করা যায়নি।' : 'Could not create account.');
    } finally {
      setIsLoading(false);
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
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm font-semibold text-zinc-900">{t.fullName}</label>
            <div className="relative">
              <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input {...form.register('fullName')} className="input-field h-12 pl-11" placeholder="মোঃ কামরুল হাসান" />
            </div>
            {form.formState.errors.fullName && <p className="text-sm text-red-600">{form.formState.errors.fullName.message}</p>}
          </div>

          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm font-semibold text-zinc-900">{t.institution}</label>
            <div className="relative">
              <School className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input {...form.register('institution')} className="input-field h-12 pl-11" placeholder="ঢাকা রেসিডেনশিয়াল মডেল কলেজ" />
            </div>
            {form.formState.errors.institution && <p className="text-sm text-red-600">{form.formState.errors.institution.message}</p>}
          </div>

          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm font-semibold text-zinc-900">{t.email}</label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input {...form.register('email')} type="email" className="input-field h-12 pl-11" placeholder="teacher@example.com" />
            </div>
            {form.formState.errors.email && <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>}
          </div>

          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm font-semibold text-zinc-900">{t.password}</label>
            <div className="relative">
              <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                {...form.register('password')}
                type={showPassword ? 'text' : 'password'}
                className="input-field h-12 pl-11 pr-12"
                placeholder="কমপক্ষে ৮ অক্ষর"
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
            <div className="space-y-2">
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`h-1.5 flex-1 rounded-full ${strength >= level ? 'bg-primary' : 'bg-zinc-200'}`}
                  />
                ))}
              </div>
              <p className="text-right text-xs font-semibold text-zinc-500">{t.strength[strength]}</p>
            </div>
            {form.formState.errors.password && <p className="text-sm text-red-600">{form.formState.errors.password.message}</p>}
          </div>
        </div>

        <label className="flex items-start gap-3 text-sm leading-6 text-zinc-600">
          <input type="checkbox" {...form.register('agreeTerms')} className="mt-1 h-4 w-4 rounded border-zinc-300 accent-primary" />
          <span>{t.terms}</span>
        </label>
        {form.formState.errors.agreeTerms && <p className="text-sm text-red-600">{form.formState.errors.agreeTerms.message}</p>}

        <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
          {isLoading ? t.loading : t.submit}
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-zinc-600">
        {t.hasAccount}{' '}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          {t.login}
        </Link>
      </p>
    </AuthShell>
  );
}
