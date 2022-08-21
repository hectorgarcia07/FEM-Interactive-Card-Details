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
 
  return (
    <HeaderComp>
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
            justifyContent: 'center',
            left: '159px'
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
            left: '72px',
            top: '13px'
          }
        }}>
          <Box component="img" src={bgCardBack} 
            sx={{ maxWidth: theme.cardWidth.minWidth, display: 'block',
              [ theme.breakpoints.up('mainWidthBreakpoint') ]: {
                maxWidth: theme.cardWidth.breakpointWidth
              }
            }} 
          />
          <Box component="span" 
            color={theme.colors.white} 
            sx={{ position: 'absolute', 
            top: theme.cardBack.mobile.top, 
            right: theme.cardBack.mobile.right, 
            fontSize: theme.cardBack.mobile.fontSize,
            [ theme.breakpoints.up('mainWidthBreakpoint') ]: {
              top: theme.cardBack.desktop.top, 
              right: theme.cardBack.desktop.right, 
              fontSize: theme.cardBack.desktop.fontSize,
            }
          }}>
            {setCVC(cvc)}
          </Box>
        </Box>
        <Box sx={{ 
          maxWidth: theme.cardWidth.minWidth,
          zIndex: '1',
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-start',
          top: '-32px',
          [ theme.breakpoints.up('mainWidthBreakpoint') ]: {
            width: theme.cardWidth.breakpointWidth,
            maxWidth: 'none',
            top: theme.cardFront.desktop.cardPosition.top,
            left: theme.cardFront.desktop.cardPosition.left
          }
        }}>
          <Box component="img" src={bgCardFront} 
            sx={{ 
              maxWidth: theme.cardWidth.minWidth, display: 'block', boxShadow: '7px 4px 60px gray',
              [ theme.breakpoints.up('mainWidthBreakpoint') ]: {
                maxWidth: theme.cardWidth.breakpointWidth,
                boxShadow: 'none'
              }
            }} 
          />
          <Box component="img" 
            src={cardLogo} 
            sx={{ 
              position: 'absolute', 
              display: 'block',
              top: '22px', 
              width: '19%', 
              left: '17px' 
            }}
          />
          <Box color={theme.colors.white} 
            sx={{ position: 'absolute', 
            top: '83px', left: '18px', letterSpacing: '0.1rem', pb: '0.5rem',
            [ theme.breakpoints.up('mainWidthBreakpoint') ]: {
              top: theme.cardFront.desktop.cardNumber.top,
              left: theme.cardFront.desktop.cardNumber.left,
              fontSize: theme.cardFront.desktop.cardNumber.fontSize
            }
          }}>
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
              textTransform: 'uppercase',
              [ theme.breakpoints.up('mainWidthBreakpoint') ]: {
                p: '0 1.3rem'
              }
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