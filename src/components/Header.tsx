import { Box, useTheme } from '@mui/material'
import { bgCardBack, bgCardFront, cardLogo } from '../images'
import { FormValues } from '../types/FormValues'
import { setCVC, setCardNumber, setCardName, setCardExpDate } from '../helpers/CardInfoFormat'
import HeaderComp from '../MUIComponents/Header'

interface HeaderProps {
  valuesForm: FormValues
}

const Header = ({ valuesForm }:HeaderProps) => {
  const theme = useTheme()
  const { name, cardNumber, month, year, cvc } = valuesForm
  console.log('Render', valuesForm)
 
  return (
    <HeaderComp style={{ backgroundSize: 'cover' }}>
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          m: '0 auto',
          padding: '0 1rem',
          maxWidth: theme.containerWidth.maxWidth,
          minWidth: theme.containerWidth.minWidth,
          [ theme.breakpoints.up('mainWidthBreakpoint') ]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }
        }}
      >
        <Box sx={{ 
          top: '30px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-end',
          [ theme.breakpoints.up('mainWidthBreakpoint') ]: {
            order: '1',
          }
        }}>
          <Box component="img" src={bgCardBack} sx={{ maxWidth: '266px', display: 'block' }} />
          <Box component="span" 
            color={theme.colors.white} 
            sx={{ position: 'absolute', top: '59px', right: '30px', fontSize: '1rem'}}>
              {setCVC(cvc)}
          </Box>
        </Box>
        <Box sx={{ 
          maxWidth: '266px',
          zIndex: '1',
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-start',
          top: '-32px'
        }}>
          <Box component="img" src={bgCardFront} 
            sx={{ maxWidth: '266px', display: 'block', boxShadow: '7px 4px 60px gray' }} 
          />
          <Box component="img" 
            src={cardLogo} 
            sx={{ 
              position: 'absolute', 
              display: 'block',
              top: '22px', 
              width: '19%', 
              left: '17px' }}
            />
          <Box color={theme.colors.white} 
            sx={{ position: 'absolute', top: '83px', left: '18px', letterSpacing: '0.1rem', pb: '0.5rem' }}>
              {setCardNumber(cardNumber)}
            </Box>
          <Box 
            sx={{ 
              width: '100%',
              position: 'absolute', 
              bottom: '12px', 
              display: 'flex', 
              p: '0 0.9rem', 
              justifyContent: 'space-between', 
              fontSize: '0.7rem', 
              fontWeight: 'bolder', 
              textTransform: 'uppercase'
            }}
          >
            <Box color={theme.colors.white} >
              { setCardName(name) }
            </Box>
            <Box color={theme.colors.white} >
              { setCardExpDate(month, year) }
            </Box>
          </Box>
        </Box>
      </Box>
    </HeaderComp>
  )
}

export default Header;