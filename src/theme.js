import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0066FF',
      text: "#252525",
      dark: '#59585B',
      light: '#ffffff',
    },
    white: {
      main: '#FFFFFF'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      psm: 730,
      md: 992,
      // sc: 992,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme