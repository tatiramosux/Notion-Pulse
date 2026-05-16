import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { PaywallGate } from './paywall-gate';

const meta = {
  component: PaywallGate,
  tags: ['ai-generated'],
} satisfies Meta<typeof PaywallGate>;

export default meta;
type Story = StoryObj<typeof meta>;

const freeUser = {
  plan: 'FREE' as const,
  trialEndsAt: null,
  stripeCurrentPeriodEnd: null,
};

const trialUser = {
  plan: 'TRIAL' as const,
  trialEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  stripeCurrentPeriodEnd: null,
};

const proUser = {
  plan: 'PRO' as const,
  trialEndsAt: null,
  stripeCurrentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
};

export const BlockedFreeUser: Story = {
  args: {
    user: freeUser,
    feature: 'orçamentos automáticos',
    children: <div>Protected content</div>,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Acesso bloqueado')).toBeVisible();
    await expect(canvas.getByRole('link', { name: /fazer upgrade/i })).toBeVisible();
  },
};

export const TrialUserAccess: Story = {
  args: {
    user: trialUser,
    feature: 'orçamentos automáticos',
    children: <div className="p-4 border rounded">Protected content — visible in trial</div>,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Protected content — visible in trial')).toBeVisible();
  },
};

export const ProUserAccess: Story = {
  args: {
    user: proUser,
    feature: 'orçamentos automáticos',
    children: <div className="p-4 border rounded">Protected content — visible for PRO</div>,
  },
};

export const CustomDescription: Story = {
  args: {
    user: freeUser,
    description: 'O CRM visual está disponível apenas no plano PRO. Gerencie seus leads de forma profissional.',
    children: <div>CRM content</div>,
  },
};
