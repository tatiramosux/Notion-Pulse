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
import { Badge } from './badge';

const meta = {
  component: Card,
  tags: ['ai-generated'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Your project will be deployed to Vercel.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const PricingCard: Story = {
  render: () => (
    <Card className="w-[300px] border-primary">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>PRO</CardTitle>
          <Badge>Popular</Badge>
        </div>
        <CardDescription>For professional bands</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-3xl font-bold">R$ 97<span className="text-sm font-normal text-muted-foreground">/mês</span></p>
        <ul className="text-sm space-y-1">
          <li>✓ Orçamentos ilimitados</li>
          <li>✓ Follow-ups automáticos</li>
          <li>✓ Agenda completa</li>
          <li>✓ CRM visual</li>
          <li>✓ Contratos digitais</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Assinar agora</Button>
      </CardFooter>
    </Card>
  ),
};

export const Notification: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          { title: 'New lead received', desc: 'João Silva sent a quote request', time: '1m ago' },
          { title: 'Proposal accepted', desc: 'Wedding at Espaço X confirmed', time: '1h ago' },
          { title: 'Payment received', desc: 'R$ 2.500 deposited', time: '2h ago' },
        ].map((n) => (
          <div key={n.title} className="flex items-start gap-4">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium">{n.title}</p>
              <p className="text-xs text-muted-foreground">{n.desc}</p>
            </div>
            <span className="text-xs text-muted-foreground">{n.time}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  ),
};
