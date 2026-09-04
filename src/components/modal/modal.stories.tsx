import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './modal';
import { Button } from '../button/button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Confirm">
          <p>Are you sure you want to continue? This can be undone later.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          </div>
        </Modal>
      </>
    );
  },
};
