import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stat, StatRow } from './stat';

const meta: Meta<typeof Stat> = {
  title: 'Components/Stat',
  component: Stat,
  parameters: { layout: 'padded' },
  args: { label: 'Purchase ceiling', value: '€300,000' },
};
export default meta;

type Story = StoryObj<typeof Stat>;

export const Default: Story = {};

export const Row: Story = {
  render: () => (
    <StatRow>
      <Stat label="Equity after sale" value="≈ €65,000" />
      <Stat label="Purchase ceiling" value="€300,000" />
      <Stat label="Bridge target" value="1–2 yr rental" />
    </StatRow>
  ),
};
