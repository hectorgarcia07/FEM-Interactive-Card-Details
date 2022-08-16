import { styled } from '@mui/material/styles';

const Root = styled('main')(({ theme }) => ({
  minWidth: '298px',
  maxWidth: '375px', 
  margin: '0 auto', 
  display: 'flex', 
  flexDirection: 'column',
  [theme.breakpoints.unit('523px')]: {
    minWidth: '100%',
    flexDirection: 'row'
  },
}
));

export default Root