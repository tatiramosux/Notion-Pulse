import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { EmptyState } from './empty-state';
import { Button } from '@/components/ui/button';
import { Users, FileText, Calendar, Music, Inbox } from 'lucide-react';

const meta = {
  component: EmptyState,
  tags: ['ai-generated'],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoLeads: Story = {
  args: {
    icon: Users,
    title: 'Nenhum lead ainda',
    description: 'Quando clientes entrarem em contato, seus leads aparecerão aqui.',
    action: <Button>Adicionar lead manualmente</Button>,
  },
};

export const NoProposals: Story = {
  args: {
    icon: FileText,
    title: 'Nenhuma proposta enviada',
    description: 'Crie sua primeira proposta profissional e envie automaticamente para seus clientes.',
    action: <Button>Criar proposta</Button>,
  },
};

export const NoEvents: Story = {
  args: {
    icon: Calendar,
    title: 'Agenda vazia',
    description: 'Seus eventos confirmados aparecerão aqui. Feche seu primeiro evento para começar.',
  },
};

export const NoMusicians: Story = {
  args: {
    icon: Music,
    title: 'Nenhum músico cadastrado',
    description: 'Adicione os músicos da sua banda para gerenciar disponibilidade e cachês.',
    action: <Button variant="outline">Adicionar músico</Button>,
  },
};

export const InboxEmpty: Story = {
  args: {
    icon: Inbox,
    title: 'Tudo em dia!',
    description: 'Não há follow-ups pendentes no momento. Você está em dia com seus leads.',
  },
};
