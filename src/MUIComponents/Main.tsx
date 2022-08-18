import { styled } from '@mui/material/styles'

const Main = styled('main')(({ theme }) => ({
  margin: '0 auto', 
  display: 'flex', 
  flexDirection: 'column',
  [ theme.breakpoints.up('mainWidthBreakpoint') ]: {
    maxWidth: '1440px',
    flexDirection: 'row',
    height: '100vh'
  }
}
));

export default Main