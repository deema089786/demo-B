import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { theme } from '@demo-b/ui-design-system';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initialize, mswLoader } from 'msw-storybook-addon';

import './global.css';
import { MemoryRouter } from 'react-router-dom';

/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize();

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  loaders: [
    mswLoader, // 👈 Add the MSW loader to all stories
  ],
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        main: theme,
        // todo add more
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
    (Story) => (
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </MemoryRouter>
    ),
  ],
};

export default preview;

export const decorators = [];
