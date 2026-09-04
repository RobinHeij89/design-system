import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [activeId, setActiveId] = useState('overview');
    return (
      <Tabs
        activeId={activeId}
        onChange={setActiveId}
        tabs={[
          { id: 'overview', label: 'Overview', content: 'Overview content goes here.' },
          { id: 'clients', label: 'Clients', content: 'A list of clients goes here.' },
          { id: 'disabled', label: 'Archived', content: 'Archived content.', disabled: true },
        ]}
      />
    );
  },
};
