import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const theme = createTheme({
  cssVariables: true,
  spacing: 8,
  shape: {
    borderRadius: 16,
  },
  palette: {
    text: {
      primary: '#ffffff',
      secondary: '#acacac',
      disabled: '#675d5d',
    },
    primary: {
      main: '#e6e6e6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#161719',
      paper: '#3c313c',
    },
  },
  typography: {
    fontFamily: 'Lexend',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 10000,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10000,
        },
      },
    },
  },
});
