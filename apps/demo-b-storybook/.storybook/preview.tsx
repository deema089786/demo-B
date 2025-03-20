import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { theme } from '@demo-b/demo-b-design-system';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './global.css';

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
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
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default preview;

export const decorators = [];
