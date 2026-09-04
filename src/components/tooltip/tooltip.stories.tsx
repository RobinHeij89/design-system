import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './tooltip';
import { Button } from '../button/button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Sides: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 48, padding: 48 }}>
      <Tooltip content="Top tooltip" side="top">
        <Button variant="secondary" size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button variant="secondary" size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <Button variant="secondary" size="sm">Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <Button variant="secondary" size="sm">Right</Button>
      </Tooltip>
    </div>
  ),
};
