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
    cardWidth: {
      minWidth: string;
      breakpointWidth: string;
    };
    cardBack: {
      mobile: {
        top: string;
        right: string;
        fontSize: string;
      },
      desktop: {
        top: string;
        right: string;
        fontSize: string;
      }
    };
    cardFront: {
      mobile: {
        cardNumber: {
          top: string; left: string; letterSpacing: string; pb: string;
        },
        cardName: {
          bottom: string; 
          display:string;
          p: string; 
          fontSize: string;
        }
      },
      desktop: {
        cardNumber: {
          top: string; left: string; letterSpacing: string; pb: string; fontSize: string;
        },
        cardName: {
          bottom: string; 
          display: string; 
          p: string; 
          fontSize: string;
          letterSpacing: string;
        },
        cardPosition: {
          top: string;
          left: string;
          width: string;
        }
      }
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
    cardWidth: {
      minWidth: string;
      breakpointWidth: string;
    };
    cardBack: {
      mobile: {
        top: string;
        right: string;
        fontSize: string;
      },
      desktop: {
        top: string;
        right: string;
        fontSize: string;
      }
    };
    cardFront: {
      mobile: {
        cardNumber: {
          top: string; left: string; letterSpacing: string; pb: string; 
        },
        cardName: {
          bottom: string; 
          display:string;
          p: string; 
          fontSize: string;
        }
      },
      desktop: {
        cardNumber: {
          top: string; left: string; letterSpacing: string; pb: string; fontSize: string;
        },
        cardName: {
          bottom: string; 
          display: string; 
          p: string; 
          fontSize: string;
          letterSpacing: string;
        },
        cardPosition: {
          top: string;
          left: string;
          width: string;
        }
      }
    }
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
      mainWidthBreakpoint: 1014
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
  },
  cardWidth: {
    minWidth: '266px',
    breakpointWidth: '325px'
  },
  cardBack: {
    mobile: {
      top: '59px', 
      right: '30px', 
      fontSize: '1rem'
    },
    desktop: {
      top: '72px', 
      right: '37px', 
      fontSize: '1.2rem'
    }
  },
  cardFront: {
    mobile: {
      cardNumber: {
        top: '83px', left: '18px', letterSpacing: '0.1rem', pb: '0.5rem'
      },
      cardName: {
        bottom: '12px', 
        display: 'flex', 
        p: '0 0.9rem', 
        fontSize: '0.7rem', 
      }
    },
    desktop: {
      cardNumber: {
        top: '106px', left: '22px', letterSpacing: '0.1rem', pb: '0.5rem', fontSize: '1.3rem'
      },
      cardName: {
        bottom: '12px', 
        display: 'flex', 
        p: '0 1.2rem', 
        fontSize: '0.6rem', 
        letterSpacing: '1px'
      },
      cardPosition: {
        top: '-19px',
        left: '-56px',
        width: '325px'
      }
    }
  }
});

export default theme