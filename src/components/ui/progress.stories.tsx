import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Progress } from './progress';

const meta = {
  component: Progress,
  tags: ['ai-generated'],
  parameters: { backgrounds: { default: 'white' } },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 10 } },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Step 1 of 10 — 10% lime fill on white track. */
export const Step1: Story = {
  args: { value: 10, className: 'h-1.5' },
};

/** Step 2 of 10 — from the design screenshot. */
export const Step2: Story = {
  args: { value: 20, className: 'h-1.5' },
};

export const HalfWay: Story = {
  args: { value: 50, className: 'h-1.5' },
};

export const Complete: Story = {
  args: { value: 100, className: 'h-1.5' },
};

/** Step progress with label row — matches CarBrain step header layout. */
export const StepHeader: Story = {
  render: () => (
    <div className="space-y-2 max-w-2xl">
      <div className="flex items-center justify-between">
        <span className="text-[#00C8FF] font-bold text-lg">Step 2 of 10</span>
        <span className="text-[#00C8FF] text-sm font-semibold">Ownership</span>
      </div>
      <Progress value={20} className="h-1.5" />
    </div>
  ),
};

export const AllSteps: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((v, i) => (
        <div key={v} className="space-y-1">
          <div className="flex justify-between text-xs text-[#7FA5CC]">
            <span>Step {i + 1} of 10</span>
            <span>{v}%</span>
          </div>
          <Progress value={v} className="h-1.5" />
        </div>
      ))}
    </div>
  ),
};
