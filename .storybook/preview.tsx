import type { Preview } from '@storybook/nextjs-vite';
import '../src/app/globals.css';
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize({ onUnhandledRequest: 'bypass' });

const preview: Preview = {
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: 'Nunito Sans, system-ui, sans-serif',
          background: '#071C3A',
          minHeight: '100vh',
          padding: '2rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'carbrain-navy',
      values: [
        { name: 'carbrain-navy', value: '#071C3A' },
        { name: 'carbrain-navy-light', value: '#0D2850' },
        { name: 'carbrain-light-blue', value: '#CCF0FF' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;