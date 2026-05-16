import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import { Button } from './button';
import { Progress } from './progress';

const meta = {
  component: Card,
  tags: ['ai-generated'],
  parameters: { backgrounds: { default: 'carbrain-navy' } },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/** White card floating on navy — core CarBrain pattern. */
export const VehicleForm: Story = {
  render: () => (
    <Card className="w-full max-w-md bg-white text-[#071C3A] rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-bold uppercase tracking-widest text-[#071C3A]">
          ZIP CODE
        </CardTitle>
        <CardDescription className="text-[#7FA5CC]">Enter your zip</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {['YEAR', 'MAKE', 'MODEL', 'TRIM'].map((field) => (
          <div key={field} className="flex items-center justify-between border-b border-gray-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#071C3A]">{field}</span>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M1 1l7 7 7-7" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        ))}
      </CardContent>
    </Card>
  ),
};

/** Step card — progress bar, heading in cyan, questions on white surface. */
export const StepCard: Story = {
  render: () => (
    <Card className="w-full max-w-2xl bg-white text-[#071C3A] rounded-2xl">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#00C8FF] font-bold text-lg">Step 2 of 10</span>
          <span className="text-[#00C8FF] text-sm font-semibold">Ownership</span>
        </div>
        <Progress value={20} className="h-1.5" />
        <CardTitle className="text-[#00C8FF] text-xl mt-4">
          First, let's get the basics down.
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="font-bold mb-4">Do you have a clean title in your name?</p>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" size="lg" className="border-[#071C3A] text-[#071C3A] hover:bg-[#071C3A] hover:text-white rounded-2xl h-14">
              Yes
            </Button>
            <Button variant="outline" size="lg" className="border-[#071C3A] text-[#071C3A] hover:bg-[#071C3A] hover:text-white rounded-2xl h-14">
              No
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-4">
        <Button variant="secondary" size="sm">← Back</Button>
        <Button variant="default" size="sm">Next →</Button>
      </CardFooter>
    </Card>
  ),
};

/** Offer card — white surface, large price, lime CTA. */
export const OfferCard: Story = {
  render: () => (
    <Card className="w-full max-w-sm bg-white text-[#071C3A] rounded-2xl text-center">
      <CardHeader>
        <p className="text-sm text-[#7FA5CC]">Your 2018 Honda Civic is worth…</p>
        <CardTitle className="text-4xl font-bold text-[#071C3A] my-2">$1,500.00</CardTitle>
        <CardDescription className="text-[#00C8FF] font-semibold text-sm">
          Our brain did the math, and our experts verified the check.
        </CardDescription>
        <p className="text-sm font-semibold text-[#071C3A] mt-1">
          Here is your guaranteed cash offer.
        </p>
      </CardHeader>
      <CardFooter className="flex justify-center">
        <Button variant="default" size="lg" className="w-full">Accept Your Offer!</Button>
      </CardFooter>
    </Card>
  ),
};

/** Light blue section card — "The simple path" style. */
export const FeatureCard: Story = {
  render: () => (
    <div className="bg-[#CCF0FF] rounded-2xl p-6 max-w-xs text-[#071C3A]">
      <div className="text-[#00C8FF] text-2xl font-bold mb-2">1</div>
      <h3 className="font-bold text-lg mb-2">Get Your Price.</h3>
      <p className="text-sm text-[#071C3A]/70">
        Submit your vehicle details. Our experts combine smart data with human insight to give you a real, firm offer you can count on.
      </p>
    </div>
  ),
};
