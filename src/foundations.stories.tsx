import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';

const meta: Meta = {
  title: 'Foundations/Tokens',
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj;

const Swatch = ({ token, label }: { token: string; label: string }) => (
  <div>
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
);

const Group = ({ title, children }: { title: string; children: ReactNode }) => (
  <div style={{ marginBottom: 40 }}>
    <h3 style={{ fontFamily: 'var(--rh-ds-font-sans)', fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
      {title}
    </h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 16 }}>
      {children}
    </div>
  </div>
);

export const Colors: Story = {
  render: () => (
    <div>
      <Group title="Primary / Secondary">
        <Swatch token="--rh-ds-color-primary" label="Primary" />
        <Swatch token="--rh-ds-color-secondary" label="Secondary" />
      </Group>
      <Group title="Neutral">
        <Swatch token="--rh-ds-color-bg" label="Background" />
        <Swatch token="--rh-ds-color-surface" label="Surface" />
        <Swatch token="--rh-ds-color-text" label="Text" />
        <Swatch token="--rh-ds-color-mid" label="Mid" />
        <Swatch token="--rh-ds-color-muted" label="Muted" />
        <Swatch token="--rh-ds-color-subtle" label="Subtle" />
        <Swatch token="--rh-ds-color-border" label="Border" />
      </Group>
      <Group title="Functional">
        <Swatch token="--rh-ds-color-success" label="Success" />
        <Swatch token="--rh-ds-color-error" label="Error" />
        <Swatch token="--rh-ds-color-warning" label="Warning" />
      </Group>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {(['5xl', '4xl', '3xl', '2xl', 'xl', 'lg', 'base', 'sm', 'xs'] as const).map(size => (
        <div key={size} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <span style={{ fontFamily: 'var(--rh-ds-font-mono)', fontSize: 11, opacity: 0.6, width: 160 }}>
            --rh-ds-font-size-{size}
          </span>
          <span style={{ fontFamily: 'var(--rh-ds-font-sans)', fontSize: `var(--rh-ds-font-size-${size})`, fontWeight: 700 }}>
            Robin Heij
          </span>
        </div>
      ))}
      <div style={{ marginTop: 24, fontFamily: 'var(--rh-ds-font-mono)', fontSize: 13, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <p>--rh-ds-font-weight-regular: 400</p>
        <p>--rh-ds-font-weight-medium: 500</p>
        <p>--rh-ds-font-weight-semibold: 600</p>
        <p>--rh-ds-font-weight-bold: 700</p>
        <p>--rh-ds-font-weight-black: 900</p>
        <p style={{ marginTop: 8 }}>--rh-ds-line-height-tight: 1.1 · normal: 1.4 · relaxed: 1.7</p>
      </div>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => {
    const spacing = [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {spacing.map(n => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ fontFamily: 'var(--rh-ds-font-mono)', fontSize: 12, width: 90 }}>
              --rh-ds-space-{n}
            </div>
            <div style={{ height: 16, width: `var(--rh-ds-space-${n})`, background: 'var(--rh-ds-color-primary)' }} />
          </div>
        ))}
      </div>
    );
  },
};

export const Grid: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--rh-ds-font-mono)', fontSize: 13, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <p>--rh-ds-container-max-width: 1280px</p>
      <p>--rh-ds-container-padding: 24px</p>
      <p>--rh-ds-grid-columns: 12</p>
      <p>--rh-ds-grid-gap: var(--rh-ds-space-6) (24px)</p>
      <p style={{ marginTop: 16 }}>--rh-ds-bp-sm: 640px · --rh-ds-bp-md: 1024px · --rh-ds-bp-lg: 1280px</p>
      <div
        style={{
          marginTop: 24,
          maxWidth: 'var(--rh-ds-container-max-width)',
          padding: '0 var(--rh-ds-container-padding)',
          display: 'grid',
          gridTemplateColumns: 'repeat(var(--rh-ds-grid-columns), 1fr)',
          gap: 'var(--rh-ds-grid-gap)',
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} style={{ height: 40, background: 'var(--rh-ds-color-surface)', border: '1px dashed var(--rh-ds-color-border)' }} />
        ))}
      </div>
    </div>
  ),
};

export const Radii: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      {(['sm', 'md', 'lg', 'pill'] as const).map(r => (
        <div key={r} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 80,
              height: 80,
              background: 'var(--rh-ds-color-primary)',
              borderRadius: `var(--rh-ds-radius-${r})`,
            }}
          />
          <div style={{ fontFamily: 'var(--rh-ds-font-mono)', fontSize: 12, marginTop: 8 }}>--rh-ds-radius-{r}</div>
        </div>
      ))}
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
