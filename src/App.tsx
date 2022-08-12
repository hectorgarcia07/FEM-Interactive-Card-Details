import logo from './logo.svg';
import Form from './components/CreditInfoForm'
import { Box } from '@mui/system';
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from './components/Header';
import theme from './theme/theme'
import {FormConextProvider} from './context/FormContext'
import React from 'react';

interface FormValues {
  name: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FormConextProvider>
        <CssBaseline enableColorScheme />
        <Box sx={{ maxWidth: '375px', margin: '0 auto', minWidth: '298px' }} >
          <Form />
        </Box>
      </FormConextProvider>
    </ThemeProvider>
  );
}

export default App;
