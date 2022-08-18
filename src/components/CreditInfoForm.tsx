import { Button, Grid, useTheme } from '@mui/material';
import { Formik, Form } from 'formik';
import { MyTextInput } from './CustomInputs'
import { validationSchema, initialValues } from '../Yup/formValidation'
import FormObserver from './FormObserver'
import { FormValues } from '../types/FormValues';

interface CreditInfoFormProps {
  updateValues: React.Dispatch<React.SetStateAction<FormValues>>
}

const CreditInfoForm = ({updateValues}:CreditInfoFormProps) => {
  const theme = useTheme()
  const style = { padding: 0 }
  const formStyle = {
    [`@media (minWidth: ${theme.breakpoints.values.mainWidthBreakpoint})`]:{
      width: 'calc(100% - 352px)',
      backgroundColor: 'red'
    }
  }
  
  return (
  <>
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
      <Form style={ formStyle }>
        <FormObserver updateValues={updateValues}/>
        <Grid container sx={{ 
          p: '1.4rem', 
          width: '100%',
          bgcolor: theme.colors.white,
          paddingTop: '5.2rem',
          minWidth: theme.containerWidth.minWidth,
          maxWidth: theme.containerWidth.maxWidth,
        }} 
        columnSpacing={{ xs: 1 }}
        style={{ marginLeft: '0', margin: '0 auto', width: '100%'}}
        >
          <Grid item xs={12} style={style} >
            <MyTextInput
              label="Cardholder name"
              name="name"
              type='text'
              placeholder="e.g. Jane Appleseed"
              maxLength={28}
            />
          </Grid>
          <Grid item xs={12} style={style} >
            <MyTextInput
              label="Card Number"
              name="cardNumber"
              type='text'
              placeholder="e.g. 1234 5678 9123 0000"
              maxLength={19}
            />
          </Grid>
          <Grid item xs={3} sx={{ alignSelf: 'flex-end'}} style={style} >
            <MyTextInput
              label="EXP. DATE"
              name="month"
              type='text'
              placeholder="MM"
              maxLength={2}
            />
          </Grid>
          <Grid item xs={3} sx={{ alignSelf: 'flex-end'}} style={style} >
            <MyTextInput
              label="(MM/YY)"
              name="year"
              type='text'
              placeholder="YY"
              maxLength={2}
            />
          </Grid>
          <Grid item xs={6} sx={{ alignSelf: 'flex-end'}} style={style} >
            <MyTextInput
              label="CVC"
              name="cvc"
              type='text'
              placeholder="e.g. 123"
              maxLength={3}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: '0.5rem' }} style={style} >
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