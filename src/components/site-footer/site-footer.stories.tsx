import type { Meta, StoryObj } from '@storybook/react-vite';
import { SiteFooter } from './site-footer';

const LOGO =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="none" stroke="black" stroke-width="2"/><text x="20" y="26" text-anchor="middle" font-size="18" font-family="sans-serif">R</text></svg>',
  );

const meta: Meta<typeof SiteFooter> = {
  title: 'Components/SiteFooter',
  component: SiteFooter,
  parameters: { layout: 'fullscreen' },
  args: {
    href: '#',
    logoSrc: LOGO,
    logoAlt: 'Logo',
    siteName: 'ROBIN',
    copyright: '© 2026 — example.com',
  },
};
export default meta;

type Story = StoryObj<typeof SiteFooter>;

export const Default: Story = {};
