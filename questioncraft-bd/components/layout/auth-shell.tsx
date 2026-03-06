import type { ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BrandMark } from '@/components/layout/brand-mark';

interface AuthShellFeature {
  title: string;
  description: string;
}

interface AuthShellProps {
  eyebrow: string;
  title: string;
  description: string;
  sideNote: string;
  features: AuthShellFeature[];
  footer: ReactNode;
  children: ReactNode;
}

export function AuthShell({
  eyebrow,
  title,
  description,
  sideNote,
  features,
  footer,
  children,
}: AuthShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_30%),linear-gradient(180deg,_#f8fcfa_0%,_#eff6f2_100%)]">
      <div className="grid min-h-screen lg:grid-cols-[1.04fr_0.96fr]">
        <aside className="relative hidden overflow-hidden border-r border-black/5 bg-zinc-950 px-10 py-10 text-white lg:flex lg:flex-col lg:justify-between xl:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.18),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(251,191,36,0.16),_transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

          <div className="relative z-10">
            <BrandMark href="/" className="text-white [&_div:first-of-type+div>div:first-child]:text-white" />
            <div className="mt-20 max-w-xl">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                {eyebrow}
              </div>
              <h1 className="mt-7 text-5xl font-black leading-[1.02] tracking-tight">{title}</h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">{description}</p>
            </div>

            <div className="mt-12 grid gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-200">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{feature.title}</div>
                      <p className="mt-1 text-sm leading-6 text-zinc-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
            <div className="text-sm font-semibold text-emerald-200">{sideNote}</div>
            <div className="mt-2 text-sm leading-6 text-zinc-300">
              বাংলাদেশি শিক্ষক, একাডেমিক কোঅর্ডিনেটর এবং কোচিং টিমের জন্য একীভূত question workflow।
            </div>
          </div>
        </aside>

        <main className="flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
          <div className="w-full max-w-xl">
            <div className="mb-8 lg:hidden">
              <BrandMark href="/" />
            </div>
            <div className="surface-card rounded-[2rem] p-6 sm:p-8">
              {children}
              <div className="mt-8 border-t border-black/5 pt-6 text-sm text-zinc-500">{footer}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
