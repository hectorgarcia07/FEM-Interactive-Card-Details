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
    font: {
      font: string;
    };
    root:{
      maxWidth: string;
      minWidth: string; 
      display: string; 
      flexDirection: string;    
    };
    containerWidth: {
      minWidth: string;
      maxWidth: string;
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
    font?: {
      font: string;
    };
    root?: {
      maxWidth: string; 
      minWidth: string;
      display: string;      
      flexDirection: string;
    };
    containerWidth: {
      minWidth: string;
      maxWidth: string;
    };
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    mainWidthBreakpoint: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mainWidthBreakpoint: 730
    },
  },
  gradiant: {
    start: 'hsl(249, 99%, 64%)',
    end: 'hsl(278, 94%, 30%)'
  },
  size: {
    fontSize: '18px',
    weight: '500',
  },
  colors: {
    error: 'hsl(0, 100%, 66%)',
    white: 'hsl(0, 0%, 100%)',
    LightGrayishViolet:' hsl(270, 3%, 87%)',
    DarkGrayishViolet: 'hsl(279, 6%, 55%)',
    VeryDarkViolet: 'hsl(278, 68%, 11%)',
  },
  font: {
    font: 'Space Grotesk, sans-serif'
  },
  root: {
    maxWidth: '375px', 
    minWidth: '298px',
    display: 'flex',      
    flexDirection: 'column'
  },
  containerWidth: {
    minWidth: '298px',
    maxWidth: '375px', 
  }
});

export default theme