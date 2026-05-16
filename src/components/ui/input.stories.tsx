import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { Input } from './input';
import { Label } from './label';
import { Button } from './button';

const meta = {
  component: Input,
  tags: ['ai-generated'],
  parameters: { backgrounds: { default: 'carbrain-navy' } },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Zip code — white pill input on dark navy surface (from hero form). */
export const ZipCode: Story = {
  args: {
    placeholder: 'Enter your zip',
    className: 'bg-white text-[#071C3A] border-transparent placeholder:text-[#7FA5CC]',
    'aria-label': 'zip code',
  },
};

/** Mileage input with unit suffix — from step 2 form. */
export const MileageWithSuffix: Story = {
  render: () => (
    <div className="relative max-w-lg">
      <Input
        placeholder="e.g. 85,000"
        className="bg-white text-[#071C3A] border-transparent pr-16 placeholder:text-[#7FA5CC]"
        aria-label="mileage"
      />
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#071C3A]">MI</span>
    </div>
  ),
};

/** White label + input on dark bg (generic form field). */
export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 max-w-xs">
      <Label htmlFor="zip" className="text-xs font-bold uppercase tracking-widest text-white">
        ZIP CODE
      </Label>
      <Input
        id="zip"
        placeholder="Enter your zip"
        className="bg-white text-[#071C3A] border-transparent placeholder:text-[#7FA5CC]"
      />
    </div>
  ),
};

/** Inline hero form — ZIP | YEAR | MAKE | MODEL | TRIM in one pill row. */
export const HeroInlineForm: Story = {
  render: () => (
    <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden max-w-3xl w-full divide-x divide-gray-200">
      {[
        { label: 'ZIP CODE', placeholder: 'Enter your zip', flex: 1.2 },
        { label: 'YEAR', placeholder: '', flex: 1 },
        { label: 'MAKE', placeholder: '', flex: 1 },
        { label: 'MODEL', placeholder: '', flex: 1 },
        { label: 'TRIM', placeholder: '', flex: 1 },
      ].map(({ label, placeholder }) => (
        <div key={label} className="flex-1 px-4 py-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#071C3A]">{label}</p>
          {placeholder ? (
            <p className="text-xs text-[#7FA5CC] mt-0.5">{placeholder}</p>
          ) : (
            <div className="flex items-center justify-between mt-0.5">
              <span className="text-xs text-[#071C3A]/30">Select</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1l5 5 5-5" stroke="#00C8FF" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Not available',
    disabled: true,
    'aria-label': 'disabled input',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('textbox')).toBeDisabled();
  },
};

export const TypeInteraction: Story = {
  args: {
    placeholder: 'Enter your zip code',
    className: 'bg-white text-[#071C3A] border-transparent',
    'aria-label': 'zip input',
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole('textbox');
    await userEvent.type(input, '33060', { delay: 50 });
    await expect(input).toHaveValue('33060');
  },
};
