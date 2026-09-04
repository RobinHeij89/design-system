import type { Meta, StoryObj } from '@storybook/react-vite';
import { Lead } from './lead';

const meta: Meta<typeof Lead> = {
  title: 'Typography/Lead',
  component: Lead,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof Lead>;

export const Default: Story = {
  args: {
    children: (
      <>
        I&rsquo;m a front-end developer working where <em>design</em> meets <em>code</em> —
        turning ambitious ideas into products people actually love to use.
      </>
    ),
  },
};

export const WithStrongAndLink: Story = {
  args: {
    children: (
      <>
        <strong>Marketing website rebuild.</strong> Design system, a11y, CMS-agnostic API
        layer, testing, SEO &amp; geo — front-end development.
        <br />
        <a href="#">View here</a>
      </>
    ),
  },
};
