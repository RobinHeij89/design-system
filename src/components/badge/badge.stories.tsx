import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'padded' },
  args: { children: 'Set up alert' },
  argTypes: {
    variant: { control: 'select', options: ['neutral', 'success', 'error', 'warning'] },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Neutral: Story = { args: { variant: 'neutral', children: 'Check weekly' } };
export const Success: Story = { args: { variant: 'success', children: 'Set up alert' } };
export const ErrorVariant: Story = { args: { variant: 'error', children: 'Likely not a fit' }, name: 'Error' };
export const Warning: Story = { args: { variant: 'warning', children: 'Slow track' } };
