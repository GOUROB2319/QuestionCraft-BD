'use client';

import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Clock3, MailCheck, RefreshCcw, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';
import { AuthShell } from '@/components/layout/auth-shell';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase';
import { useAppStore } from '@/store/app-store';

function VerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const language = useAppStore((state) => state.language);
  const supabase = useMemo(() => createClient(), []);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const email = searchParams.get('email') || '';
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const t = language === 'bn'
    ? {
        eyebrow: 'Account Verification',
        title: 'ইমেইল যাচাই সম্পন্ন করে workspace অ্যাক্টিভ করুন',
        description: 'যদি OTP flow সক্রিয় থাকে তবে নিচের কোড ব্যবহার করুন, না হলে আপনার inbox-এর confirmation link দিয়ে যাচাই করুন।',
        sideNote: 'Secure onboarding',
        features: [
          { title: 'Email confirmation ready', description: 'Supabase email confirm flow-এর জন্য verification page now reflects the real flow.' },
          { title: 'Resend support', description: 'নতুন code বা confirmation email পুনরায় পাঠানো যাবে।' },
          { title: 'Redirect-safe flow', description: 'যাচাই সফল হলে dashboard-এ সঠিক redirect হবে।' },
        ],
        heading: 'অ্যাকাউন্ট যাচাই করুন',
        subheading: 'আমরা আপনার ইমেইলে ৬ সংখ্যার কোড বা confirmation link পাঠিয়েছি',
        submit: 'যাচাই সম্পন্ন করুন',
        loading: 'যাচাই হচ্ছে...',
        resend: 'আবার পাঠান',
        timer: 'পুনরায় পাঠাতে বাকি',
        back: 'লগইনে ফিরে যান',
        footer: (
          <span className="text-zinc-500">যদি link-based confirmation সক্রিয় থাকে, inbox থেকে confirmation link-এ ক্লিক করুন।</span>
        ),
      }
    : {
        eyebrow: 'Account Verification',
        title: 'Verify your email and activate the workspace',
        description: 'Use the OTP below if your Supabase project is configured for email OTP; otherwise confirm using the email link.',
        sideNote: 'Secure onboarding',
        features: [
          { title: 'Email confirmation ready', description: 'The verification page now reflects the real Supabase confirmation flow.' },
          { title: 'Resend support', description: 'You can resend the code or confirmation email from the same screen.' },
          { title: 'Redirect-safe flow', description: 'Successful verification redirects cleanly into the dashboard.' },
        ],
        heading: 'Verify your account',
        subheading: 'We sent a 6-digit code or confirmation link to your email',
        submit: 'Complete Verification',
        loading: 'Verifying...',
        resend: 'Resend',
        timer: 'Resend available in',
        back: 'Back to login',
        footer: (
          <span className="text-zinc-500">If link-based confirmation is enabled, use the link from your inbox to finish verification.</span>
        ),
      };

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = window.setTimeout(() => setTimeLeft((value) => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

  function updateOtp(index: number, value: string) {
    if (value && !/^\d$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  }

  function onKeyDown(index: number, event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  function onPaste(event: React.ClipboardEvent<HTMLDivElement>) {
    const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;
    event.preventDefault();
    const next = pasted.split('');
    while (next.length < 6) next.push('');
    setOtp(next);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const token = otp.join('');
    if (!email) {
      toast.error(language === 'bn' ? 'ইমেইল ঠিকানা পাওয়া যায়নি।' : 'Email address is missing.');
      return;
    }
    if (token.length !== 6) {
      toast.error(language === 'bn' ? '৬ সংখ্যার কোড লিখুন।' : 'Enter the 6-digit code.');
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: 'signup',
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success(language === 'bn' ? 'অ্যাকাউন্ট যাচাই সম্পন্ন হয়েছে।' : 'Account verified.');
      router.replace('/dashboard');
      router.refresh();
    } catch {
      toast.error(language === 'bn' ? 'যাচাই সম্পন্ন করা যায়নি।' : 'Verification failed.');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleResend() {
    if (!email) {
      toast.error(language === 'bn' ? 'ইমেইল ঠিকানা পাওয়া যায়নি।' : 'Email address is missing.');
      return;
    }
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/api/auth/callback?next=/dashboard`,
        },
      });

      if (error) {
        throw error;
      }

      setTimeLeft(120);
      toast.success(language === 'bn' ? 'নতুন verification email পাঠানো হয়েছে।' : 'A new verification email was sent.');
    } catch (error: unknown) {
      toast.error(error instanceof Error ? error.message : 'Unable to resend email.');
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
        <Link href="/login" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900">
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>
      </div>

      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <MailCheck className="h-8 w-8" />
        </div>
        <h2 className="mt-6 text-3xl font-black tracking-tight text-zinc-950">{t.heading}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-500">{t.subheading}</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          <ShieldCheck className="h-3.5 w-3.5" />
          {email || 'teacher@example.com'}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="flex justify-center gap-2 sm:gap-3" onPaste={onPaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(element) => { inputRefs.current[index] = element; }}
              value={digit}
              maxLength={1}
              inputMode="numeric"
              onChange={(event) => updateOtp(index, event.target.value)}
              onKeyDown={(event) => onKeyDown(index, event)}
              className="h-14 w-11 rounded-2xl border border-black/8 bg-white text-center text-xl font-bold text-zinc-900 outline-none transition focus:border-primary focus:shadow-[0_0_0_4px_rgba(16,185,129,0.12)] sm:h-16 sm:w-12"
            />
          ))}
        </div>

        <Button type="submit" size="lg" className="mt-8 w-full" disabled={isLoading}>
          {isLoading ? t.loading : t.submit}
        </Button>
      </form>

      <div className="mt-7 rounded-[1.5rem] bg-zinc-50 px-5 py-4 text-sm text-zinc-600">
        <div className="flex items-center justify-center gap-2 font-semibold text-zinc-700">
          <Clock3 className="h-4 w-4 text-primary" />
          {timeLeft > 0 ? `${t.timer} ${formatTime(timeLeft)}` : t.resend}
        </div>
        <div className="mt-3 text-center">
          <button
            type="button"
            onClick={handleResend}
            disabled={timeLeft > 0}
            className="inline-flex items-center gap-2 font-semibold text-primary disabled:cursor-not-allowed disabled:text-zinc-400"
          >
            <RefreshCcw className="h-4 w-4" />
            {t.resend}
          </button>
        </div>
      </div>
    </AuthShell>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <VerifyContent />
    </Suspense>
  );
}
