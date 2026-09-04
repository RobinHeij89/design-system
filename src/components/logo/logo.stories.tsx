import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "Robin Heij's \"RH\" monogram. Uses `currentColor`, so it follows the theme automatically — no invert filter needed.",
      },
    },
  },
  args: { size: 64 },
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
      <Logo size={24} />
      <Logo size={40} />
      <Logo size={64} />
      <Logo size={96} />
    </div>
  ),
};
