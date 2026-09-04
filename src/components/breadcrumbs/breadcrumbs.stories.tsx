import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from './breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: { layout: 'centered' },
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Works', href: '#' },
      { label: 'Heineken' },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};
