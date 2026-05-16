import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, fn } from 'storybook/test';
import { TrialBanner } from './trial-banner';

const meta = {
  component: TrialBanner,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div className="w-full border rounded overflow-hidden">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TrialBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

const futureDate = (days: number) => new Date(Date.now() + days * 24 * 60 * 60 * 1000);

export const ManyDaysLeft: Story = {
  args: {
    trialEndsAt: futureDate(12),
    onDismiss: fn(),
  },
};

export const OneWeekLeft: Story = {
  args: {
    trialEndsAt: futureDate(7),
    onDismiss: fn(),
  },
};

export const ThreeDaysLeft: Story = {
  args: {
    trialEndsAt: futureDate(3),
    onDismiss: fn(),
  },
};

export const OneDayLeft: Story = {
  args: {
    trialEndsAt: futureDate(1),
    onDismiss: fn(),
  },
};

export const Dismissible: Story = {
  args: {
    trialEndsAt: futureDate(5),
    onDismiss: fn(),
  },
  play: async ({ canvas, userEvent, args }) => {
    const dismissBtn = canvas.getByRole('button', { name: /fechar/i });
    await expect(dismissBtn).toBeVisible();
    await userEvent.click(dismissBtn);
    await expect(args.onDismiss).toHaveBeenCalledOnce();
  },
};
