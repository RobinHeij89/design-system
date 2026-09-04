import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollUnmaskImage } from './scroll-unmask-image';

const PLACEHOLDER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><rect width="400" height="600" fill="#FF4103"/><circle cx="200" cy="240" r="90" fill="white" opacity="0.3"/><rect y="420" width="400" height="180" fill="black" opacity="0.15"/></svg>',
  );

const meta: Meta<typeof ScrollUnmaskImage> = {
  title: 'Components/ScrollUnmaskImage',
  component: ScrollUnmaskImage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Scroll the canvas — the image starts slightly masked and scaled down, then opens up over the first ~65% of a viewport of scroll. Respects `prefers-reduced-motion`.',
      },
    },
  },
  args: { src: PLACEHOLDER, alt: 'Placeholder portrait' },
};
export default meta;

type Story = StoryObj<typeof ScrollUnmaskImage>;

export const Default: Story = {
  render: (args) => (
    <div style={{ height: '180vh', paddingTop: 40 }}>
      <div style={{ maxWidth: 320, margin: '0 auto' }}>
        <ScrollUnmaskImage {...args} />
      </div>
      <p style={{ textAlign: 'center', marginTop: 24, fontFamily: 'var(--rh-ds-font-mono)', fontSize: 12, opacity: 0.6 }}>
        Scroll down and back up ↕
      </p>
    </div>
  ),
};
