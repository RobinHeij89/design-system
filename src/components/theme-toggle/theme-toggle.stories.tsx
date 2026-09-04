import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeToggle } from './theme-toggle';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Interactive: Story = {
  render: () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    return (
      <ThemeToggle theme={theme} onToggle={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))} />
    );
  },
};

export const Light: Story = {
  args: { theme: 'light', onToggle: () => {} },
};

export const Dark: Story = {
  args: { theme: 'dark', onToggle: () => {} },
};
