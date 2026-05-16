import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { Button } from './button';
import { ArrowRight, ArrowLeft, Loader2, Phone } from 'lucide-react';

const meta = {
  component: Button,
  tags: ['ai-generated'],
  parameters: { backgrounds: { default: 'carbrain-navy' } },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg', 'icon', 'icon-sm', 'icon-lg'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: { children: 'Get an Offer Now', variant: 'default', size: 'lg' },
};

// ─── Primary (lime) — all states ──────────────────────────────────────────────

/** Rest state — neon lime, navy text, pill shape. */
export const PrimaryDefault: Story = {
  args: { children: 'Get an Offer Now', variant: 'default', size: 'lg' },
  play: async ({ canvas }) => {
    const btn = canvas.getByRole('button', { name: /get an offer now/i });
    await expect(btn).toBeVisible();
    await expect(btn).not.toBeDisabled();
    await expect(getComputedStyle(btn).borderRadius).toBe('9999px');
  },
};

export const CssCheck: Story = {
  args: { children: 'Get an Offer Now', variant: 'default', size: 'lg' },
  play: async ({ canvas }) => {
    const btn = canvas.getByRole('button', { name: /get an offer now/i });
    // Pill shape enforced globally
    await expect(getComputedStyle(btn).borderRadius).toBe('9999px');
  },
};

/** Disabled state — lime-30, muted navy text. */
export const PrimaryDisabled: Story = {
  args: { children: 'Get an Offer Now', variant: 'default', size: 'lg', disabled: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: /get an offer now/i })).toBeDisabled();
  },
};

/** Loading state — spinner + text, disabled. */
export const PrimaryLoading: Story = {
  args: {
    children: (<><Loader2 className="animate-spin" /> Getting your offer…</>) as React.ReactNode,
    variant: 'default',
    size: 'lg',
    disabled: true,
  },
};

/** Small — nav header "Get an offer". */
export const PrimarySmall: Story = {
  args: { children: 'Get an offer', variant: 'default', size: 'sm' },
};

/** With trailing arrow — step Next button. */
export const PrimaryWithArrow: Story = {
  args: {
    children: (<>Next <ArrowRight /></>) as React.ReactNode,
    variant: 'default',
    size: 'default',
  },
};

// ─── Secondary (cyan) — all states ────────────────────────────────────────────

/** Rest state — electric cyan, navy text. */
export const SecondaryDefault: Story = {
  args: {
    children: (<><ArrowLeft /> Back</>) as React.ReactNode,
    variant: 'secondary',
    size: 'default',
  },
};

/** Disabled state — cyan-20, muted navy text. */
export const SecondaryDisabled: Story = {
  args: {
    children: (<><ArrowLeft /> Back</>) as React.ReactNode,
    variant: 'secondary',
    size: 'default',
    disabled: true,
  },
};

export const SecondaryLoading: Story = {
  args: {
    children: (<><Loader2 className="animate-spin" /> Saving…</>) as React.ReactNode,
    variant: 'secondary',
    disabled: true,
  },
};

// ─── Outline — all states ─────────────────────────────────────────────────────

/** Rest state — navy bg, white border, white text. Yes / No option buttons. */
export const OutlineYes: Story = {
  args: { children: 'Yes', variant: 'outline', size: 'lg' },
};

export const OutlineNo: Story = {
  args: { children: 'No', variant: 'outline', size: 'lg' },
};

/** Disabled state — 40% opacity. */
export const OutlineDisabled: Story = {
  args: { children: 'Yes', variant: 'outline', size: 'lg', disabled: true },
};

// ─── Ghost — all states ───────────────────────────────────────────────────────

/** Rest state — transparent bg, white text. Used for "Have your VIN number?". */
export const GhostDefault: Story = {
  args: { children: 'Have your VIN number?', variant: 'ghost' },
};

export const GhostDisabled: Story = {
  args: { children: 'Have your VIN number?', variant: 'ghost', disabled: true },
};

// ─── Destructive — all states ─────────────────────────────────────────────────

export const DestructiveDefault: Story = {
  args: { children: 'Cancel offer', variant: 'destructive' },
};

export const DestructiveDisabled: Story = {
  args: { children: 'Cancel offer', variant: 'destructive', disabled: true },
};

// ─── Link — all states ────────────────────────────────────────────────────────

/** Cyan text, underline on hover. Used for inline text links. */
export const LinkDefault: Story = {
  args: { children: 'smarter', variant: 'link' },
};

export const LinkVin: Story = {
  args: { children: 'Have your VIN number?', variant: 'link' },
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const SizeShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Button variant="default" size="xs">Extra Small</Button>
      <Button variant="default" size="sm">Small — Back / Nav</Button>
      <Button variant="default" size="default">Default — Nav CTA</Button>
      <Button variant="default" size="lg">Large — Hero CTA</Button>
    </div>
  ),
};

// ─── Icon buttons ─────────────────────────────────────────────────────────────

export const IconDefault: Story = {
  args: { children: (<Phone />) as React.ReactNode, variant: 'default', size: 'icon', 'aria-label': 'call us' },
};

export const IconSecondary: Story = {
  args: { children: (<ArrowLeft />) as React.ReactNode, variant: 'secondary', size: 'icon-sm', 'aria-label': 'go back' },
};

// ─── All variants at a glance ─────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-white/50 text-xs uppercase tracking-widest font-bold">Default size</p>
      <div className="flex flex-wrap gap-3">
        <Button variant="default">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>

      <p className="text-white/50 text-xs uppercase tracking-widest font-bold pt-2">Disabled</p>
      <div className="flex flex-wrap gap-3">
        <Button variant="default" disabled>Primary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="outline" disabled>Outline</Button>
        <Button variant="ghost" disabled>Ghost</Button>
        <Button variant="destructive" disabled>Destructive</Button>
        <Button variant="link" disabled>Link</Button>
      </div>

      <p className="text-white/50 text-xs uppercase tracking-widest font-bold pt-2">Large — CTAs</p>
      <div className="flex flex-wrap gap-3">
        <Button variant="default" size="lg">Get an Offer Now</Button>
        <Button variant="secondary" size="sm"><ArrowLeft /> Back</Button>
      </div>

      <p className="text-white/50 text-xs uppercase tracking-widest font-bold pt-2">Step navigation</p>
      <div className="flex items-center justify-between max-w-2xl">
        <Button variant="secondary" size="sm"><ArrowLeft /> Back</Button>
        <Button variant="default" size="default">Next <ArrowRight /></Button>
      </div>

      <p className="text-white/50 text-xs uppercase tracking-widest font-bold pt-2">Yes / No options</p>
      <div className="grid grid-cols-2 gap-4 max-w-sm">
        <Button variant="outline" size="lg">Yes</Button>
        <Button variant="outline" size="lg">No</Button>
      </div>
    </div>
  ),
};
