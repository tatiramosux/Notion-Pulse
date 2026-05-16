import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Alert, AlertDescription, AlertTitle } from './alert';
import { Terminal, AlertCircle, CheckCircle2, Info } from 'lucide-react';

const meta = {
  component: Alert,
  tags: ['ai-generated'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export const TrialExpired: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Trial Expirado</AlertTitle>
      <AlertDescription>
        Seu período de trial de 14 dias acabou. Faça upgrade para continuar acessando todos os recursos.
      </AlertDescription>
    </Alert>
  ),
};

export const TrialActive: Story = {
  render: () => (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>7 dias restantes no trial</AlertTitle>
      <AlertDescription>
        Aproveite todos os recursos gratuitamente. Faça upgrade a qualquer momento.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert className="border-green-500 text-green-700 [&>svg]:text-green-700">
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>Proposta enviada!</AlertTitle>
      <AlertDescription>
        O cliente receberá a proposta por email em instantes.
      </AlertDescription>
    </Alert>
  ),
};
