import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@demo-b/ui-design-system';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@capacitor-community/safe-area';
import { setupWorker } from 'msw/browser';
import { allHandler } from '@demo-b/data-msw-handlers';

import App from './app/app';
export const mocksWorker = setupWorker(...[...allHandler]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const start = async () => {
  if (import.meta.env.VITE_MOCK_SERVER_ENABLED === 'true') {
    await mocksWorker.start();
  }
  root.render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </StrictMode>,
  );
};

start();
