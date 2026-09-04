import type { Meta, StoryObj } from '@storybook/react-vite';
import { Marquee } from './marquee';

const meta: Meta<typeof Marquee> = {
  title: 'Components/Marquee',
  component: Marquee,
  parameters: { layout: 'fullscreen' },
  args: {
    text: 'Available for work · Starting September 2026 · ',
    repeat: 6,
    speed: 32,
    ariaLabel: 'Availability notice',
  },
  argTypes: {
    speed: { control: { type: 'range', min: 5, max: 60, step: 1 } },
    repeat: { control: { type: 'range', min: 1, max: 12, step: 1 } },
  },
};
export default meta;

type Story = StoryObj<typeof Marquee>;

export const Default: Story = {};

export const CustomStyle: Story = {
  args: {
    text: 'CUSTOM STYLE VIA className • ',
    className: undefined,
  },
  render: (args) => (
    <>
      <style>{'.rh-demo-marquee { background: #F8E119; color: #231F20; padding: 8px 0; }'}</style>
      <Marquee {...args} className="rh-demo-marquee" />
    </>
  ),
};
