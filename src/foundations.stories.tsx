import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Foundations/Tokens',
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj;

const colors = [
  ['--rh-ds-color-bg', 'Background'],
  ['--rh-ds-color-text', 'Text'],
  ['--rh-ds-color-accent', 'Accent'],
  ['--rh-ds-color-mid', 'Mid'],
  ['--rh-ds-color-muted', 'Muted'],
  ['--rh-ds-color-subtle', 'Subtle'],
] as const;

const spacing = [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40] as const;

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 16 }}>
      {colors.map(([token, label]) => (
        <div key={token}>
          <div
            style={{
              height: 72,
              borderRadius: 8,
              border: '1px solid var(--rh-ds-color-subtle)',
              background: `var(${token})`,
            }}
          />
          <div style={{ fontFamily: 'var(--rh-ds-font-mono)', fontSize: 12, marginTop: 8 }}>{label}</div>
          <div style={{ fontFamily: 'var(--rh-ds-font-mono)', fontSize: 11, opacity: 0.6 }}>{token}</div>
        </div>
      ))}
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {spacing.map(n => (
        <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontFamily: 'var(--rh-ds-font-mono)', fontSize: 12, width: 90 }}>
            --rh-ds-space-{n}
          </div>
          <div style={{ height: 16, width: `var(--rh-ds-space-${n})`, background: 'var(--rh-ds-color-accent)' }} />
        </div>
      ))}
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ fontFamily: 'var(--rh-ds-font-sans)', fontSize: 32, fontWeight: 900 }}>
          Sans — var(--rh-ds-font-sans)
        </div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--rh-ds-font-mono)', fontSize: 20 }}>
          Mono — var(--rh-ds-font-mono)
        </div>
      </div>
    </div>
  ),
};

export const Motion: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'var(--rh-ds-font-mono)', fontSize: 13 }}>
      <p>--rh-ds-duration-fast: 200ms</p>
      <p>--rh-ds-duration-normal: 400ms</p>
      <p>--rh-ds-duration-slow: 600ms</p>
      <p>--rh-ds-ease-spring: cubic-bezier(0.16, 1, 0.3, 1)</p>
      <p>--rh-ds-ease-out: cubic-bezier(0, 0, 0.2, 1)</p>
    </div>
  ),
};
