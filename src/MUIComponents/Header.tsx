import { styled } from '@mui/material/styles'
import { bgMainMobile, bgMainDesktop } from '../images'

const Header = styled('div')(({ theme }) => ({
  maxWidth: '100%', 
  position: 'relative', 
  fontFamily: 'Space Grotesk', 
  height: '240px',
  backgroundImage: `url(${ bgMainMobile })`,
  [ theme.breakpoints.up('mainWidthBreakpoint') ]: {
    backgroundImage: `url(${ bgMainDesktop })`,
    flexGrow: '1',
    height: '100vh',
    maxWidth: '352px',
    marginRight: '6rem'
  }
}
));

export default Header