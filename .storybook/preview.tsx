import React, { useEffect } from 'react';
import type { Preview, Decorator } from '@storybook/react-vite';
import '../src/tokens.css';
import '../src/animations.css';

const WithTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? 'light';
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div
      style={{
        background: 'var(--rh-ds-color-bg)',
        color: 'var(--rh-ds-color-text)',
        fontFamily: 'var(--rh-ds-font-sans)',
        minHeight: '100vh',
        padding: 'var(--rh-ds-space-8)',
      }}
    >
      <Story />
    </div>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    backgrounds: { disable: true },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [WithTheme],
};

export default preview;
