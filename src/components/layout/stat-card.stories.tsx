import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StatCard } from './stat-card';
import { Users, FileText, Calendar, TrendingUp, DollarSign, Music } from 'lucide-react';

const meta = {
  component: StatCard,
  tags: ['ai-generated'],
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Leads: Story = {
  args: {
    title: 'Total de Leads',
    value: '48',
    icon: Users,
    trend: { value: 12, label: 'vs. mês passado' },
  },
};

export const Proposals: Story = {
  args: {
    title: 'Propostas Enviadas',
    value: '23',
    icon: FileText,
    trend: { value: 8, label: 'vs. mês passado' },
  },
};

export const Events: Story = {
  args: {
    title: 'Eventos Agendados',
    value: '7',
    icon: Calendar,
    description: 'Próximos 30 dias',
  },
};

export const Revenue: Story = {
  args: {
    title: 'Receita do Mês',
    value: 'R$ 18.500',
    icon: DollarSign,
    trend: { value: 24, label: 'vs. mês passado' },
  },
};

export const NegativeTrend: Story = {
  args: {
    title: 'Taxa de Conversão',
    value: '32%',
    icon: TrendingUp,
    trend: { value: -5, label: 'vs. mês passado' },
  },
};

export const DashboardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <StatCard title="Total de Leads" value="48" icon={Users} trend={{ value: 12, label: 'vs. mês passado' }} />
      <StatCard title="Propostas" value="23" icon={FileText} trend={{ value: 8, label: 'vs. mês passado' }} />
      <StatCard title="Músicos" value="12" icon={Music} description="Na sua banda" />
      <StatCard title="Receita" value="R$ 18.500" icon={DollarSign} trend={{ value: 24, label: 'vs. mês passado' }} />
    </div>
  ),
};
