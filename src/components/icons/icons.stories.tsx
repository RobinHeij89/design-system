import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, type IconId } from './icons';

const iconIds: IconId[] = ['check', 'info', 'error', 'warning', 'close', 'arrow-left', 'arrow-right'];

const meta: Meta<typeof Icon> = {
  title: 'Components/Icons',
  component: Icon,
  parameters: { layout: 'centered' },
  args: { id: 'check', style: { width: 24, height: 24 } },
  argTypes: {
    id: { control: 'select', options: iconIds },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const AllIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {iconIds.map((id) => (
        <div key={id} style={{ display: 'grid', gap: 8, justifyItems: 'center' }}>
          <Icon {...args} id={id} />
          <span>{id}</span>
        </div>
      ))}
    </div>
  ),
};
