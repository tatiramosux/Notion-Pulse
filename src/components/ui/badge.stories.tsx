import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from './badge';

const meta = {
  component: Badge,
  tags: ['ai-generated'],
  parameters: { backgrounds: { default: 'carbrain-navy' } },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Lime — primary plan badge / status confirmado */
export const Default: Story = {
  args: { children: 'Guaranteed', variant: 'default' },
};

/** Cyan — step label / section label */
export const Secondary: Story = {
  args: { children: 'Ownership', variant: 'secondary' },
};

export const Destructive: Story = {
  args: { children: 'Expired', variant: 'destructive' },
};

export const Outline: Story = {
  args: { children: 'Pending', variant: 'outline' },
};

export const StepLabel: Story = {
  args: { children: 'Step 2 of 10', variant: 'secondary' },
};

export const SectionLabel: Story = {
  args: { children: 'Ownership', variant: 'outline' },
};
