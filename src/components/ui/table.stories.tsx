import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './table';
import { Badge } from './badge';
import { Button } from './button';

const meta = {
  component: Table,
  tags: ['ai-generated'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const leads = [
  { name: 'João Silva', email: 'joao@email.com', eventType: 'Casamento', date: '2024-12-20', status: 'Novo', heatScore: 92 },
  { name: 'Maria Souza', email: 'maria@email.com', eventType: 'Formatura', date: '2024-11-15', status: 'Em negociação', heatScore: 78 },
  { name: 'Carlos Lima', email: 'carlos@email.com', eventType: 'Corporativo', date: '2024-10-30', status: 'Proposta enviada', heatScore: 65 },
  { name: 'Ana Paula', email: 'ana@email.com', eventType: 'Festa 15 anos', date: '2025-01-10', status: 'Fechado', heatScore: 100 },
];

const statusVariant = (status: string) => {
  if (status === 'Fechado') return 'default';
  if (status === 'Novo') return 'secondary';
  if (status === 'Proposta enviada') return 'outline';
  return 'secondary';
};

export const LeadsTable: Story = {
  render: () => (
    <Table>
      <TableCaption>Lista de leads recentes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Evento</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Heat Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leads.map((lead) => (
          <TableRow key={lead.email}>
            <TableCell className="font-medium">{lead.name}</TableCell>
            <TableCell>{lead.email}</TableCell>
            <TableCell>{lead.eventType}</TableCell>
            <TableCell>{lead.date}</TableCell>
            <TableCell>
              <Badge variant={statusVariant(lead.status)}>{lead.status}</Badge>
            </TableCell>
            <TableCell className="text-right">{lead.heatScore}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total de leads</TableCell>
          <TableCell className="text-right">{leads.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const InvoicesTable: Story = {
  render: () => (
    <Table>
      <TableCaption>Histórico de pagamentos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { invoice: 'INV-001', status: 'Paid', method: 'PIX', amount: 'R$ 2.500,00' },
          { invoice: 'INV-002', status: 'Pending', method: 'Boleto', amount: 'R$ 1.800,00' },
          { invoice: 'INV-003', status: 'Paid', method: 'Cartão', amount: 'R$ 3.200,00' },
        ].map((row) => (
          <TableRow key={row.invoice}>
            <TableCell className="font-medium">{row.invoice}</TableCell>
            <TableCell>
              <Badge variant={row.status === 'Paid' ? 'default' : 'secondary'}>{row.status}</Badge>
            </TableCell>
            <TableCell>{row.method}</TableCell>
            <TableCell className="text-right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
