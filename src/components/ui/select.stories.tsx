import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './select';
import { Label } from './label';

const meta = {
  component: Select,
  tags: ['ai-generated'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const EventType: Story = {
  render: () => (
    <div className="space-y-2">
      <Label>Tipo de evento</Label>
      <Select>
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Selecione o tipo" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Festas</SelectLabel>
            <SelectItem value="wedding">Casamento</SelectItem>
            <SelectItem value="birthday">Aniversário</SelectItem>
            <SelectItem value="debutante">15 Anos</SelectItem>
            <SelectItem value="graduation">Formatura</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Corporativo</SelectLabel>
            <SelectItem value="corporate">Evento Corporativo</SelectItem>
            <SelectItem value="conference">Conferência</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const PlanSelect: Story = {
  render: () => (
    <div className="space-y-2">
      <Label>Plano</Label>
      <Select defaultValue="pro">
        <SelectTrigger className="w-[200px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="free">Free</SelectItem>
          <SelectItem value="trial">Trial (14 dias)</SelectItem>
          <SelectItem value="pro">PRO — R$ 97/mês</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
