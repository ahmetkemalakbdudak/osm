import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000080', // Navy blue
      light: '#1A237E',
      dark: '#000051',
    },
    secondary: {
      main: '#1A237E', // Deep blue for professionalism
      light: '#534BAE',
      dark: '#000051',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#424242',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        },
      },
    },
  },
}); 