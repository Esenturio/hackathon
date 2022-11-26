import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#187A94',
      border: "#EDEDED",
      back: "#C4C4C4"
    },
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