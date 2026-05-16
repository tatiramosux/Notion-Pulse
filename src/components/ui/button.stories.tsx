import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { Button } from './button';
import { Mail, Loader2, ArrowRight } from 'lucide-react';

const meta = {
  component: Button,
  tags: ['ai-generated'],
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

export const Default: Story = {
  args: { children: 'Button' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /button/i });
    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();
  },
};

export const CssCheck: Story = {
  args: { children: 'Check CSS', variant: 'default' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /check css/i });
    const styles = getComputedStyle(button);
    await expect(styles.display).not.toBe('');
  },
};

export const Destructive: Story = {
  args: { children: 'Delete', variant: 'destructive' },
};

export const Outline: Story = {
  args: { children: 'Cancel', variant: 'outline' },
};

export const Secondary: Story = {
  args: { children: 'Secondary', variant: 'secondary' },
};

export const Ghost: Story = {
  args: { children: 'Ghost', variant: 'ghost' },
};

export const Link: Story = {
  args: { children: 'Link style', variant: 'link' },
};

export const Small: Story = {
  args: { children: 'Small', size: 'sm' },
};

export const Large: Story = {
  args: { children: 'Large', size: 'lg' },
};

export const WithIcon: Story = {
  args: { children: (<><Mail className="mr-2 h-4 w-4" /> Login with Email</>) as React.ReactNode },
};

export const Loading: Story = {
  args: {
    children: (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</>) as React.ReactNode,
    disabled: true,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: (<>Next <ArrowRight className="ml-2 h-4 w-4" /></>) as React.ReactNode,
  },
};

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /disabled/i });
    await expect(button).toBeDisabled();
  },
};
