import { Button, Grid, useTheme } from '@mui/material';
import { Formik, Form, useFormikContext } from 'formik';
import { MyTextInput } from './CustomInputs'
import { validationSchema, initialValues } from '../Yup/formValidation'
import { useFormContext } from '../context/FormContext';
import { Provider, useEffect, useState } from 'react';
import Header from './Header';

interface FormValues {
  name: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string
}

interface FormObserverProp{
  updateValues: React.Dispatch<React.SetStateAction<Provider<FormValues>>>
}

const FormObserver = ( {updateValues}:FormObserverProp ) => {
  const updateFormContext = useFormContext()
  const form = useFormikContext()

  return <></>
}

const CreditInfoForm = () => {
  const theme = useTheme()
  const [valuesForm, updateValues] = useState<FormValues>({name: '', cardNumber: '', month: '', year: '', cvc: ''})

  return (
  <>
  <Header valuesForm={valuesForm} />
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <FormObserver updateValues={updateValues}/>
        <Grid container sx={{ 
          p: '1.4rem', 
          width: '100%',
          m: '0',
          bgcolor: theme.colors.white
        }} 
        columnSpacing={{ xs: 1 }}
        >
          <Grid item xs={12} >
            <MyTextInput
              label="Cardholder name"
              name="name"
              type='text'
              placeholder="e.g. Jane Appleseed"
            />
          </Grid>
          <Grid item xs={12} >
            <MyTextInput
              label="Card Number"
              name="cardNumber"
              type='text'
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </Grid>
          <Grid item xs={3} >
            <MyTextInput
              label="EXP. DATE"
              name="month"
              type='text'
              placeholder="MM"
            />
          </Grid>
          <Grid item xs={3}>
            <MyTextInput
              label="(MM/YY)"
              name="year"
              type='text'
              placeholder="YY"
            />
          </Grid>
          <Grid item xs={6}>
            <MyTextInput
              label="(MM/YY)"
              name="cvc"
              type='text'
              placeholder="e.g. 123"
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: '0.5rem' }}>
            <Button color="primary" variant="contained" fullWidth type="submit" 
              sx={{ mt: '1rem', p: '0.7rem' , borderRadius: '0.5rem', fontSize: '1.1rem', textTransform: 'none', bgcolor: theme.colors.VeryDarkViolet }}
            >
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
    </>
  )
}

export default CreditInfoForm