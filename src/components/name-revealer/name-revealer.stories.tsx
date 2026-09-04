import type { Meta, StoryObj } from '@storybook/react-vite';
import { NameRevealer } from './name-revealer';
import { useScrollReveal } from '../../hooks/use-scroll-reveal';

const RevealDemo = ({ firstName, lastName }: { firstName: string; lastName: string }) => {
  useScrollReveal();
  return <NameRevealer firstName={firstName} lastName={lastName} />;
};

const meta: Meta<typeof NameRevealer> = {
  title: 'Components/NameRevealer',
  component: NameRevealer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Staggered per-character reveal for a name/headline. Needs the `.reveal-*` CSS utilities (bundled in `style.css`) and `useScrollReveal()` running somewhere in the tree to add the `.visible` class — this story wires that up for the demo.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof NameRevealer>;

export const Default: Story = {
  render: () => <RevealDemo firstName="Robin" lastName="Heij" />,
};
