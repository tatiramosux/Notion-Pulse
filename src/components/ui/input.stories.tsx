import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { Input } from './input';
import { Label } from './label';

const meta = {
  component: Input,
  tags: ['ai-generated'],
  parameters: { backgrounds: { default: 'carbrain-navy' } },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/** All inputs are white by default — enforced globally via [data-slot="input"] in globals.css. */
export const Default: Story = {
  args: { placeholder: 'Enter your zip', 'aria-label': 'zip code' },
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox');
    await expect(getComputedStyle(input).backgroundColor).toBe('rgb(255, 255, 255)');
  },
};

/** ZIP code field — matches the CarBrain hero form. */
export const ZipCode: Story = {
  args: {
    placeholder: 'Enter your zip',
    'aria-label': 'zip code',
    maxLength: 5,
  },
};

/** Mileage input with MI suffix — from Step 2 of 10. */
export const MileageWithSuffix: Story = {
  render: () => (
    <div className="relative max-w-lg w-full">
      <Input placeholder="e.g. 85,000" aria-label="mileage" />
      <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-sm font-bold text-cb-navy-100">
        MI
      </span>
    </div>
  ),
};

/** Form field with uppercase label — standard CarBrain field layout. */
export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 w-full max-w-xs">
      <Label htmlFor="zip" className="text-xs font-bold uppercase tracking-widest text-white">
        ZIP CODE
      </Label>
      <Input id="zip" placeholder="Enter your zip" />
    </div>
  ),
};

/** Hero inline bar — ZIP | YEAR | MAKE | MODEL | TRIM in a single white pill. */
export const HeroInlineForm: Story = {
  render: () => (
    <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full max-w-3xl divide-x divide-cb-navy-20">
      {[
        { label: 'ZIP CODE', placeholder: 'Enter your zip' },
        { label: 'YEAR', placeholder: '' },
        { label: 'MAKE', placeholder: '' },
        { label: 'MODEL', placeholder: '' },
        { label: 'TRIM', placeholder: '' },
      ].map(({ label, placeholder }) => (
        <div key={label} className="flex-1 px-4 py-3 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-cb-navy-100">{label}</p>
          {placeholder
            ? <p className="text-xs text-cb-navy-40 mt-0.5">{placeholder}</p>
            : (
              <div className="flex items-center justify-between mt-0.5">
                <span className="text-xs text-cb-navy-30">Select</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
                  <path d="M1 1l5 5 5-5" stroke="#00C8FF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            )
          }
        </div>
      ))}
    </div>
  ),
};

/** Multiple fields on a white card surface — step form pattern. */
export const StackedOnCard: Story = {
  render: () => (
    <div className="bg-white rounded-2xl p-6 space-y-4 max-w-sm w-full">
      {['ZIP CODE', 'YEAR', 'MAKE', 'MODEL'].map((field) => (
        <div key={field} className="space-y-1.5">
          <Label className="text-xs font-bold uppercase tracking-widest text-cb-navy-100">
            {field}
          </Label>
          <Input placeholder={`Enter ${field.toLowerCase()}`} />
        </div>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: { placeholder: 'Not available', disabled: true, 'aria-label': 'disabled input' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('textbox')).toBeDisabled();
  },
};

export const TypeInteraction: Story = {
  args: { placeholder: 'Enter your zip code', 'aria-label': 'zip interaction' },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole('textbox');
    await userEvent.type(input, '33060', { delay: 50 });
    await expect(input).toHaveValue('33060');
  },
};
