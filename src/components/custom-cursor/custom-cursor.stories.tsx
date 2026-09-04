import type { Meta, StoryObj } from '@storybook/react-vite';
import { CustomCursor } from './custom-cursor';

const meta: Meta<typeof CustomCursor> = {
  title: 'Components/CustomCursor',
  component: CustomCursor,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Move your mouse over the canvas below. It grows into an arrow over links/buttons, shows "HI" over `[data-cursor="photo"]`, and outlines any `[data-cursor="brand"]` element it passes over. Only active on fine-pointer (mouse) devices.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof CustomCursor>;

export const Playground: Story = {
  render: () => (
    <div style={{ cursor: 'none' }}>
      <style>{'[data-cursor-demo] * { cursor: none; }'}</style>
      <div
        data-cursor-demo
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          alignItems: 'flex-start',
          padding: 48,
        }}
      >
        <a href="#" onClick={e => e.preventDefault()}>A regular link (nav state)</a>
        <button type="button">A button (nav state)</button>
        <div
          data-cursor="photo"
          style={{
            width: 160,
            height: 160,
            borderRadius: 8,
            background: 'var(--rh-ds-color-mid)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          photo (hover for "HI")
        </div>
        <div
          data-cursor="brand"
          style={{
            width: 200,
            height: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px dashed var(--rh-ds-color-subtle)',
          }}
        >
          brand (hover to outline)
        </div>
      </div>
      <CustomCursor />
    </div>
  ),
};
