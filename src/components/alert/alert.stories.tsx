import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: { layout: 'padded' },
  args: { children: 'This is what the alert body copy looks like.' },
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'error', 'warning'] },
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = { args: { variant: 'info', title: 'Heads up' } };
export const Success: Story = { args: { variant: 'success', title: 'Saved' } };
export const ErrorVariant: Story = { args: { variant: 'error', title: 'Something went wrong' }, name: 'Error' };
export const Warning: Story = { args: { variant: 'warning', title: 'Careful' } };
export const Dismissible: Story = { args: { variant: 'info', title: 'Dismiss me', onDismiss: () => {} } };
