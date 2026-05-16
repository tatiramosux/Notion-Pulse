import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { Button } from './button';
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';

const meta = {
  component: Button,
  tags: ['ai-generated'],
  parameters: { backgrounds: { default: 'carbrain-navy' } },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary CTA — neon lime pill. Used for "Get an Offer Now". */
export const Primary: Story = {
  args: { children: 'Get an Offer Now', variant: 'default', size: 'lg' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /get an offer now/i });
    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();
  },
};

/** Asserts the pill border-radius from globals.css override is applied. */
export const CssCheck: Story = {
  args: { children: 'Get an Offer Now', variant: 'default' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /get an offer now/i });
    await expect(getComputedStyle(button).borderRadius).toBe('9999px');
  },
};

/** Back button — electric cyan pill, used in step navigation. */
export const BackButton: Story = {
  args: {
    children: (<><ArrowLeft className="mr-2 h-4 w-4" /> Back</>) as React.ReactNode,
    variant: 'secondary',
  },
};

/** Yes / No option buttons — outline, dark bg, white border. */
export const OptionYes: Story = {
  args: { children: 'Yes', variant: 'outline', size: 'lg' },
};

export const OptionNo: Story = {
  args: { children: 'No', variant: 'outline', size: 'lg' },
};

/** Ghost — minimal, used for "Have your VIN number?" */
export const Ghost: Story = {
  args: { children: 'Have your VIN number?', variant: 'ghost' },
};

export const Link: Story = {
  args: { children: 'smarter', variant: 'link' },
};

export const WithTrailingArrow: Story = {
  args: {
    children: (<>Next <ArrowRight className="ml-2 h-4 w-4" /></>) as React.ReactNode,
    variant: 'default',
  },
};

export const Loading: Story = {
  args: {
    children: (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Getting your offer…</>) as React.ReactNode,
    variant: 'default',
    disabled: true,
  },
};

export const Disabled: Story = {
  args: { children: 'Get an Offer Now', disabled: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: /get an offer now/i })).toBeDisabled();
  },
};

/** Step navigation — Back (cyan) + Next (lime) side by side. */
export const StepNavigation: Story = {
  render: () => (
    <div className="flex items-center justify-between w-full max-w-2xl">
      <Button variant="secondary">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <Button variant="default">
        Next <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  ),
};
