import { Box, useTheme } from '@mui/material'
import bgMobile from '../images/bg-main-mobile.png'
import cardBack from '../images/bg-card-back.png'
import cardFront from '../images/bg-card-front.png'
import cardLogo from '../images/card-logo.svg'
import { useFormContext } from '../context/FormContext'
import { useEffect } from 'react'

interface FormValues {
  name: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string
}

interface HeaderProps{
  valuesForm: FormValues
}

const Header = ({ valuesForm }:HeaderProps) => {
  const theme = useTheme()
  const formContext = useFormContext()
  console.log('Render')
  useEffect(() => {
    console.log( "Values", formContext.values)

  },[formContext.values.name])

  return (
    <Box sx={{ maxWidth: '100%', position: 'relative', mb: '3.5rem', fontFamily: 'Space Grotesk' }}>
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
          <Box component="img" src={cardBack} sx={{ width: '100%', display: 'block' }} />
          <Box component="span" 
            color={theme.colors.white} 
            sx={{ position: 'relative', top: '-86px', right: '-203px', fontSize: '1rem'}}>
              000
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
            sx={{ width: '100%', display: 'block', boxShadow: '7px 4px 60px gray' }} 
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
              0000 0000 0000 0000
            </Box>
          <Box 
            sx={{ display: 'flex', margin: '0 0.9rem', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 'bolder', textTransform: 'uppercase'}}>
            <Box color={theme.colors.white} 
              sx={{ position: 'relative',top: '-91px'}}>
                Jane AppleSeed
            </Box>
            <Box color={theme.colors.white} 
              sx={{ position: 'relative',top: '-91px' }}>
                00/00
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header;

/*
<Box sx={{ 
        marginRight: '20%',
        marginLeft: '5%',
        position: 'absolute',
        top: '120px',
        maxWidth: '266px',
        zIndex: '1'
      }}>
        <Box component="img" src={cardFront} sx={{ width: '100%' }} />
      </Box>
      <Box sx={{ 
        marginLeft: '20%',
        marginRight: '5%',
        position: 'absolute',
        top: '30px',
        maxWidth: '266px'
      }}>
        <Box component="img" src={cardBack} sx={{ width: '100%' }} />
      </Box>



*/