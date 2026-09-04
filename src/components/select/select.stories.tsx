import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './select';

const options = [
  { value: 'nl', label: 'Netherlands' },
  { value: 'be', label: 'Belgium' },
  { value: 'de', label: 'Germany' },
  { value: 'other', label: 'Other', disabled: true },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: { layout: 'centered' },
  args: { label: 'Country', options },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const WithError: Story = { args: { error: 'Please choose a country.' } };
