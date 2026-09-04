import type { Meta, StoryObj } from '@storybook/react-vite';
import { DisplayHeading } from './display-heading';

const meta: Meta<typeof DisplayHeading> = {
  title: 'Typography/DisplayHeading',
  component: DisplayHeading,
  parameters: { layout: 'padded' },
  argTypes: { size: { control: 'select', options: ['lg', 'xl'] } },
};
export default meta;

type Story = StoryObj<typeof DisplayHeading>;

export const XL: Story = {
  args: { size: 'xl', children: <>Selected<br /><em>Clients</em></> },
};

export const LG: Story = {
  args: { size: 'lg', children: <>Get in<br />touch.<em> And work together.</em></> },
};
