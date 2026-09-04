import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Radio name="plan" label="Free" defaultChecked />
      <Radio name="plan" label="Pro" />
      <Radio name="plan" label="Enterprise" disabled />
    </div>
  ),
};
