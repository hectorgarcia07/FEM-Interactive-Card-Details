import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material';
import { iconCompleate } from '../images'

const Compleated = ( ) => {
  const theme = useTheme()

  const style = {
    display: 'flex',
    alignItems: 'center',
    margin: '0 1.5rem',
    justifyContent: 'center',
    paddingTop: '4.3rem',
    flexDirection: 'column',
    textAlign: 'center',
    [ theme.breakpoints.up('mainWidthBreakpoint') ]: {
      width: 'calc(100% - 448px)',
      justifyContent: 'center',
      maxWidth: '800px'
    }
  }
  
  return (
    <Box sx={style}>
      <Box component='img' src={iconCompleate} />
      <Box component='p' sx={{
        textTransform: 'uppercase', 
        letterSpacing: '0.3rem', 
        fontWeight: 'bold', 
        fontSize: '1.4rem', 
        m: '0', 
        mt: '2rem', 
        p: '0px'
      }} >
        Thank you!
      </Box>
      <Box component='p' sx={{
        color: theme.colors.DarkGrayishViolet, fontWeight: 'bolder', p: '0px'
      }}>
        We&#39;ve added your card details.
      </Box>
      <Button variant="contained" fullWidth 
        sx={{ 
          backgroundColor: theme.colors.VeryDarkViolet,
          padding: '0.8rem',
          mt: '1rem',
          textTransform: 'none',
          fontWeight: 'bold',
          maxWidth: '299px',
          borderRadius: '10px'
        }}>
        Countinue
      </Button>
    </Box>
  )
}

export default Compleated