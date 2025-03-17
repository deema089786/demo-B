import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@demo-b/demo-b-design-system';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@capacitor-community/safe-area';

import App from './app/app';
import { mocksWorker } from './app/mocks';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

if (import.meta.env.VITE_MOCK_SERVER_ENABLED === 'true') {
  mocksWorker.start();
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
