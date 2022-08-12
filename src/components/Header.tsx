import { Box, useTheme } from '@mui/material'
import bgMobile from '../images/bg-main-mobile.png'
import cardBack from '../images/bg-card-back.png'
import cardFront from '../images/bg-card-front.png'
import cardLogo from '../images/card-logo.svg'
import { FormValues } from '../types/FormValues'
import { setCVC, setCardNumber, setCardName, setCardExpDate } from '../helpers/CardInfoFormat'

interface HeaderProps {
  valuesForm: FormValues
}

const Header = ({ valuesForm }:HeaderProps) => {
  const theme = useTheme()
  const { name, cardNumber, month, year, cvc } = valuesForm
  console.log('Render', valuesForm)
 
  return (
    <Box sx={{ maxWidth: '100%', position: 'relative', fontFamily: 'Space Grotesk', mb: '5.2rem' }}>
      <Box 
        component="img" 
        src={bgMobile} 
        className='backgroundMobile' 
        sx={{ maxWidth: '100%', display: 'block' }} 
      />
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          margin: 'auto',
          padding: '0 1rem'
        }}
      >
        <Box sx={{ 
          top: '30px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <Box component="img" src={cardBack} sx={{ maxWidth: '266px', display: 'block' }} />
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
          <Box component="img" src={cardFront} 
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
    </Box>
  )
}

export default Header;
/*
<Box sx={{ maxWidth: '100%', position: 'relative', fontFamily: 'Space Grotesk', mb: '5.2rem' }}>
      <Box 
        component="img" 
        src={bgMobile} 
        className='backgroundMobile' 
        sx={{ maxWidth: '100%', display: 'block' }} 
      />
      <Box
        sx={{
          position: 'absolute',
          minWidth: '293px',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          margin: 'auto'
        }}
      >
        <Box sx={{ 
          marginLeft: 'auto',
          marginRight: '5%',
          top: '30px',
          maxWidth: '266px',
          position: 'relative'
        }}>
          <Box component="img" src={cardBack} sx={{ maxWidth: '100%', display: 'block' }} />
          <Box component="span" 
            color={theme.colors.white} 
            sx={{ position: 'relative', top: '-86px', right: '-203px', fontSize: '1rem'}}>
              {setCVC(cvc)}
          </Box>
        </Box>
        <Box sx={{ 
          marginRight: 'auto',
          marginLeft: '4%',
          maxWidth: '266px',
          zIndex: '1',
          position: 'relative',
          top: '-55px'
        }}>
          <Box component="img" src={cardFront} 
            sx={{ maxWidth: '100%', display: 'block', boxShadow: '7px 4px 60px gray' }} 
          />
          <Box component="img" 
            src={cardLogo} 
            sx={{ 
              position: 'relative', 
              display: 'block',
              top: '-131px', 
              width: '19%', 
              left: '19px' }}
            />
          <Box color={theme.colors.white} 
            sx={{ position: 'relative', top: '-96px', left: '19px', letterSpacing: '0.1rem', pb: '0.5rem' }}>
              {setCardNumber(cardNumber)}
            </Box>
          <Box 
            sx={{ display: 'flex', margin: '0 0.9rem', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 'bolder', textTransform: 'uppercase'}}>
            <Box color={theme.colors.white} 
              sx={{ position: 'relative',top: '-91px'}}>
                { setCardName(name) }
            </Box>
            <Box color={theme.colors.white} 
              sx={{ position: 'relative',top: '-91px' }}>
                { setCardExpDate(month, year) }
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    */