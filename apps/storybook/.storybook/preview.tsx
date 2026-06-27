import { useEffect } from 'react';
import type { Preview } from '@storybook/react-vite';

import { ThemeProvider } from '@romanbakurov/vellira-web';

import '@romanbakurov/vellira-web/styles';
import '@romanbakurov/vellira-assets/styles';
import '@romanbakurov/vellira-tokens/css';

const withTheme: Preview['decorators'][number] = (Story, context) => {
  const theme = context.globals.theme ?? 'light';

  useEffect(() => {
    document.documentElement.dataset.velliraTheme = theme;

    return () => {
      delete document.documentElement.dataset.velliraTheme;
    };
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Vellira theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        showName: true,
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'high-contrast', title: 'High Contrast' },
        ],
      },
    },
  },

  decorators: [withTheme],

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default preview;
