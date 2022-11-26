import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0066FF',
      text: "#252525",
      dark: '#59585B',
      light: '#EFF5FF',
      
    },
    white: {
      main: '#FFFFFF',
      back: '#EFF5FF'
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
  typography: {
    fontFamily: `"Ubuntu", "sans-serif", "Arial"`,
    fontWeightRegular: 400,
    fontWeightBold: 500,
    fontWeightLight: 600,
  }
});

export default theme