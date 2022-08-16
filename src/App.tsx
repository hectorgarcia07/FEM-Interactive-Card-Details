import logo from './logo.svg'
import { useState } from 'react'
import Form from './components/CreditInfoForm'
import { CssBaseline, ThemeProvider } from "@mui/material"
import Header from './components/Header'
import theme from './theme/theme'
import { FormConextProvider } from './context/FormContext'
import { FormValues } from './types/FormValues'
import Main from './MUIComponents/Main'

function App() {
  const defaultValues = {name: '', cardNumber: '', month: '', year: '', cvc: ''}
  const [valuesForm, updateValues] = useState<FormValues>(defaultValues)

  return (
    <ThemeProvider theme={theme}>
      <FormConextProvider>
        <CssBaseline enableColorScheme />
        <Main>
          <Header valuesForm={valuesForm} />
          <Form updateValues={updateValues} />
        </Main>
      </FormConextProvider>
    </ThemeProvider>
  );
}

export default App;
