import type { Meta, StoryObj } from '@storybook/react-vite';
import { Eyebrow } from './eyebrow';

const meta: Meta<typeof Eyebrow> = {
  title: 'Typography/Eyebrow',
  component: Eyebrow,
  parameters: { layout: 'centered' },
  args: { children: 'Available as' },
};
export default meta;

type Story = StoryObj<typeof Eyebrow>;

export const Default: Story = {};

export const Examples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Eyebrow>Direct</Eyebrow>
      <Eyebrow>Expertise</Eyebrow>
      <Eyebrow>09 brands</Eyebrow>
    </div>
  ),
};
