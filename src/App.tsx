import { useState } from 'react'
import Form from './components/CreditInfoForm'
import { CssBaseline, ThemeProvider } from "@mui/material"
import Header from './components/Header'
import theme from './theme/theme'
import { FormConextProvider } from './context/FormContext'
import { FormValues } from './types/FormValues'
import Main from './MUIComponents/Main'
import Compleated from './components/Compleated'

function App() {
  const defaultValues = {name: '', cardNumber: '', month: '', year: '', cvc: '', compleated: false}

  //will be used to hold current form values/state and be able to share it
  //with the header
  const [valuesForm, updateValues] = useState<FormValues>(defaultValues)

  return (
    <ThemeProvider theme={theme}>
      <FormConextProvider>
        <CssBaseline enableColorScheme />
        <Main>
          <Header valuesForm={valuesForm} />
          { valuesForm.compleated ? <Compleated /> : <Form updateValues={updateValues} /> }
        </Main>
      </FormConextProvider>
    </ThemeProvider>
  );
}

export default App;