export type Plan = 'FREE' | 'TRIAL' | 'PRO';

export interface User {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  plan: Plan;
  trialEndsAt: Date | null;
  stripeCurrentPeriodEnd: Date | null;
}

export function isTrialActive(user: Pick<User, 'plan' | 'trialEndsAt'>): boolean {
  return user.plan === 'TRIAL' && !!user.trialEndsAt && new Date(user.trialEndsAt) > new Date();
}

export function isSubscribed(user: Pick<User, 'plan' | 'stripeCurrentPeriodEnd'>): boolean {
  return user.plan === 'PRO' && !!user.stripeCurrentPeriodEnd && new Date(user.stripeCurrentPeriodEnd) > new Date();
}

export function hasAccess(user: Pick<User, 'plan' | 'trialEndsAt' | 'stripeCurrentPeriodEnd'>): boolean {
  return isTrialActive(user) || isSubscribed(user);
}

export function daysLeftInTrial(user: Pick<User, 'trialEndsAt'>): number {
  if (!user.trialEndsAt) return 0;
  const diff = new Date(user.trialEndsAt).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export const PLAN_LIMITS = {
  FREE: {
    proposals: 3,
    leads: 20,
    musicians: 2,
    events: 5,
  },
  TRIAL: {
    proposals: Infinity,
    leads: Infinity,
    musicians: Infinity,
    events: Infinity,
  },
  PRO: {
    proposals: Infinity,
    leads: Infinity,
    musicians: Infinity,
    events: Infinity,
  },
} as const;
