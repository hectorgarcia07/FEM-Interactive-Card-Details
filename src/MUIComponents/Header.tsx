import { styled } from '@mui/material/styles'
import { bgMainMobile, bgMainDesktop } from '../images'

const Header = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  maxWidth: '100%', 
  position: 'relative', 
  fontFamily: 'Space Grotesk', 
  height: theme.header.mobile.height,
  backgroundImage: `url(${ bgMainMobile })`,
  [ theme.breakpoints.up('mainWidthBreakpoint') ]: {
    backgroundImage: `url(${ bgMainDesktop })`,
    flexGrow: '1',
    height: theme.header.desktop.height,
    maxWidth: '352px',
    marginRight: '6rem'
  }
}
));

export default Header