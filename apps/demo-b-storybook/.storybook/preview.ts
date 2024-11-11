import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { theme } from '@demo-b/demo-b-design-system';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
};

export default preview;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      main: theme,
      // todo add more
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
