import type { Meta, StoryObj } from '@storybook/react-vite';
import { SocialLinks, type SocialLink } from './social-links';
import { SocialIcon } from './social-icons';

const links: SocialLink[] = [
  { href: 'https://linkedin.com', ariaLabel: 'LinkedIn', icon: <SocialIcon id="linkedin" /> },
  { href: 'https://instagram.com', ariaLabel: 'Instagram', icon: <SocialIcon id="instagram" /> },
  { href: 'https://github.com', ariaLabel: 'GitHub', icon: <SocialIcon id="github" /> },
  { href: 'mailto:hello@example.com', ariaLabel: 'Email', icon: <SocialIcon id="email" /> },
];

const meta: Meta<typeof SocialLinks> = {
  title: 'Components/SocialLinks',
  component: SocialLinks,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Pass a `links` array of `{ href, ariaLabel, icon }`. `http(s)` links open in a new tab automatically.',
      },
    },
  },
  args: { links },
};
export default meta;

type Story = StoryObj<typeof SocialLinks>;

export const Default: Story = {};
