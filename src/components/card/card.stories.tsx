import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'padded' },
  args: { children: 'Any content — a list row, a result card, a settings block.' },
  argTypes: {
    as: { control: false },
    done: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: { children: 'Any content — a list row, a result card, a settings block.' },
};
export const Done: Story = {
  args: { done: true, children: 'Dimmed once the item is marked complete — content stays, just de-emphasized.' },
};
export const AsArticle: Story = {
  args: { as: 'article', children: 'Use as="article" for a self-contained item inside a list of cards.' },
};
