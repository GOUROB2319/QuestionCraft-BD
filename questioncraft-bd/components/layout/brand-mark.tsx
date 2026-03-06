import Link from 'next/link';
import { BookOpenText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BrandMarkProps {
  compact?: boolean;
  href?: string;
  className?: string;
}

export function BrandMark({ compact = false, href = '/', className }: BrandMarkProps) {
  return (
    <Link href={href} className={cn('inline-flex items-center gap-3', className)}>
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
        <BookOpenText className="h-5 w-5" />
      </div>
      {!compact && (
        <div className="min-w-0">
          <div className="truncate text-base font-black tracking-tight text-zinc-950">QuestionCraft BD</div>
          <div className="truncate text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/80">
            Smart Exam Workspace
          </div>
        </div>
      )}
    </Link>
  );
}
