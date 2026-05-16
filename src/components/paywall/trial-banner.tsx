'use client';

import Link from 'next/link';
import { X, Zap } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { daysLeftInTrial } from '@/types';

interface TrialBannerProps {
  trialEndsAt: Date | null;
  onDismiss?: () => void;
}

export function TrialBanner({ trialEndsAt, onDismiss }: TrialBannerProps) {
  const [dismissed, setDismissed] = useState(false);
  const days = daysLeftInTrial({ trialEndsAt });

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  const urgency = days <= 3 ? 'urgent' : days <= 7 ? 'warning' : 'normal';

  return (
    <div
      data-urgency={urgency}
      className="flex items-center justify-between gap-4 px-4 py-2 text-sm
        data-[urgency=urgent]:bg-destructive data-[urgency=urgent]:text-destructive-foreground
        data-[urgency=warning]:bg-orange-500 data-[urgency=warning]:text-white
        data-[urgency=normal]:bg-primary data-[urgency=normal]:text-primary-foreground"
    >
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 shrink-0" />
        <span>
          {days === 0
            ? 'Seu trial expirou hoje!'
            : `${days} ${days === 1 ? 'dia restante' : 'dias restantes'} no seu trial.`}{' '}
          <Link href="/settings/billing" className="underline underline-offset-2 font-semibold">
            Fazer upgrade
          </Link>
        </span>
      </div>
      <button
        onClick={handleDismiss}
        aria-label="Fechar banner"
        className="shrink-0 opacity-70 hover:opacity-100 transition-opacity"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
