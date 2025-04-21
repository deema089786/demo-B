import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const theme = createTheme({
  cssVariables: true,
  spacing: 8,
  shape: {
    borderRadius: 16,
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#000c12',
      paper: '#0f1917',
    },
    primary: {
      main: '#bdf3e8', // Primary 500
      contrastText: '#233c37',
    },
    secondary: {
      main: '#f48bb3', // Secondary 500
      contrastText: '#301b23',
    },

    // text: {
    //   primary: '#ffffff',
    //   secondary: '#acacac',
    //   disabled: '#675d5d',
    // },
    // primary: {
    //   main: '#e6e6e6',
    // },
    // secondary: {
    //   main: '#19857b',
    // },
    // background: {
    //   default: '#161719',
    //   paper: '#3c313c',
    // },
    error: {
      main: red.A400,
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
