import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material';
import { iconCompleate } from '../images'

const Compleated = ( ) => {
  const theme = useTheme()

  const style = {
    display: 'flex',
    alignItems: 'center',
    margin: '0 1.5rem',
    paddingTop: '4.3rem',
    flexDirection: 'column',
  }
  
  return (
    <Box sx={style}>
      <Box component='img' src={iconCompleate} />
      <Box component='p' sx={{
        textTransform: 'uppercase', letterSpacing: '0.3rem', fontWeight: 'bold', fontSize: '1.4rem', m: '0', mt: '2rem', p: '0px'
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
          padding: '0.5rem',
          mt: '1rem',
          textTransform: 'none',
          fontWeight: 'bold'
        }}>
        Countinue
      </Button>
    </Box>
  )
}

export default Compleated