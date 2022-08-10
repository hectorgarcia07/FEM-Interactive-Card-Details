import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Theme {
    gradiant: {
      start: string;
      end: string;
    };
    size: {
      fontSize: string;
      weight: string;
    };
    colors: {
      error: string;
      white: string;
      LightGrayishViolet: string;
      DarkGrayishViolet: string;
      VeryDarkViolet: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    gradiant?: {
      start: string;
      end: string;
    };
    size?: {
      fontSize: string;
      weight: string;
    };
    colors?: {
      error: string;
      white: string;
      LightGrayishViolet: string;
      DarkGrayishViolet: string;
      VeryDarkViolet: string;
    };
  }
}

const theme = createTheme({
  gradiant: {
    start: 'hsl(249, 99%, 64%)',
    end: 'hsl(278, 94%, 30%)'
  },
  size: {
    fontSize: '18px',
    weight: '500'
  },
  colors: {
    error: 'hsl(0, 100%, 66%)',
    white: 'hsl(0, 0%, 100%)',
    LightGrayishViolet:' hsl(270, 3%, 87%)',
    DarkGrayishViolet: 'hsl(279, 6%, 55%)',
    VeryDarkViolet: 'hsl(278, 68%, 11%)',
  },

});

export default theme