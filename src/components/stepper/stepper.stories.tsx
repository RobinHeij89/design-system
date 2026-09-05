import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper } from './stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    steps: [
      { title: 'Register on Woonnet Rijnmond', description: 'Inschrijfduur only accrues after registration.' },
      { title: 'Set up saved-search alerts', description: 'Barendrecht + radius, your rent ceiling, e-mail on new match.' },
      { title: 'Set a second alert on the nieuwbouw filter', description: 'Runs your purchase search in parallel, no extra effort.' },
    ],
  },
};
