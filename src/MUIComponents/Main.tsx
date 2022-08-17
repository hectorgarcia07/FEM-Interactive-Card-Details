import { styled } from '@mui/material/styles'

const Main = styled('main')(({ theme }) => ({
  margin: '0 auto', 
  display: 'flex', 
  flexDirection: 'column',
  [ theme.breakpoints.up('mainWidthBreakpoint') ]: {
    width: '100%',
    flexDirection: 'row',
    height: '100vh'
  }
}
));

export default Main