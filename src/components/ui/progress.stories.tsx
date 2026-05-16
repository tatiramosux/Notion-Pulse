import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Progress } from './progress';

const meta = {
  component: Progress,
  tags: ['ai-generated'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 60 },
};

export const TrialProgress: Story = {
  render: () => (
    <div className="space-y-2 w-[300px]">
      <div className="flex justify-between text-sm">
        <span>Trial progress</span>
        <span className="text-muted-foreground">7 de 14 dias</span>
      </div>
      <Progress value={50} />
    </div>
  ),
};

export const UsageLimit: Story = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Orçamentos</span>
          <span className="text-muted-foreground">8/10</span>
        </div>
        <Progress value={80} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Leads</span>
          <span className="text-muted-foreground">45/100</span>
        </div>
        <Progress value={45} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Músicos</span>
          <span className="text-muted-foreground">3/5</span>
        </div>
        <Progress value={60} />
      </div>
    </div>
  ),
};

export const Complete: Story = {
  args: { value: 100 },
};

export const Empty: Story = {
  args: { value: 0 },
};
