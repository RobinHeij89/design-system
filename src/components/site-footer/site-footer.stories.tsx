import type { Meta, StoryObj } from '@storybook/react-vite';
import { SiteFooter } from './site-footer';

const meta: Meta<typeof SiteFooter> = {
  title: 'Components/SiteFooter',
  component: SiteFooter,
  parameters: { layout: 'fullscreen' },
  args: {
    href: '#',
    siteName: 'ROBIN',
    copyright: '© 2026 — robinheij.nl',
  },
};
export default meta;

type Story = StoryObj<typeof SiteFooter>;

export const Default: Story = {};
