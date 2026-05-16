import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { Input } from './input';
import { Label } from './label';
import { Button } from './button';

const meta = {
  component: Input,
  tags: ['ai-generated'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Email' },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="leandro@banda.com" />
    </div>
  ),
};

export const Password: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="password">Senha</Label>
      <Input id="password" type="password" placeholder="••••••••" />
    </div>
  ),
};

export const Disabled: Story = {
  args: { placeholder: 'Disabled input', disabled: true },
  play: async ({ canvas }) => {
    const input = canvas.getByPlaceholderText(/disabled/i);
    await expect(input).toBeDisabled();
  },
};

export const WithButton: Story = {
  render: () => (
    <div className="flex gap-2">
      <Input placeholder="nome@banda.com" type="email" />
      <Button>Subscribe</Button>
    </div>
  ),
};

export const TypeInteraction: Story = {
  args: { placeholder: 'Type here...', 'aria-label': 'text input' },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole('textbox');
    await userEvent.type(input, 'Notion Pulse', { delay: 50 });
    await expect(input).toHaveValue('Notion Pulse');
  },
};
