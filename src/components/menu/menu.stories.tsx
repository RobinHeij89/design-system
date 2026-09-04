import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './menu';
import { Button } from '../button/button';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <Menu
      trigger={<Button variant="secondary" size="sm">Actions ▾</Button>}
      items={[
        { label: 'Edit', onSelect: () => {} },
        { label: 'Duplicate', onSelect: () => {} },
        { label: 'Delete', onSelect: () => {}, disabled: true },
      ]}
    />
  ),
};
