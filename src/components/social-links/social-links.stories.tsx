import type { Meta, StoryObj } from '@storybook/react-vite';
import { SocialLinks, type SocialLink } from './social-links';

const Placeholder = ({ label }: { label: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">{label}</text>
  </svg>
);

const links: SocialLink[] = [
  { href: 'https://linkedin.com', ariaLabel: 'LinkedIn', icon: <Placeholder label="in" /> },
  { href: 'https://instagram.com', ariaLabel: 'Instagram', icon: <Placeholder label="ig" /> },
  { href: 'mailto:hello@example.com', ariaLabel: 'Email', icon: <Placeholder label="@" /> },
];

const meta: Meta<typeof SocialLinks> = {
  title: 'Components/SocialLinks',
  component: SocialLinks,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Bring your own icons — pass a `links` array of `{ href, ariaLabel, icon }`. `http(s)` links open in a new tab automatically.',
      },
    },
  },
  args: { links },
};
export default meta;

type Story = StoryObj<typeof SocialLinks>;

export const Default: Story = {};
