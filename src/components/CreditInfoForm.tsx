import { Button, Grid } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { MyTextInput } from './CustomInputs'
import { validationSchema, initialValues } from '../Yup/formValidation'

const CreditInfoForm = () => {
  return (
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MyTextInput
              label="CARHOLDER NAME"
              ariaDescribe="Enter cardholder name"
              name="name"
              type="text"
              placeholder="e.g. Jane Appleseed"
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="cardNumber">CARD NUMBER</label>
            <Field name="cardNumber" type="text" />
            <ErrorMessage name="cardNumber" />
          </Grid>
          <Grid item xs={3}>
            <label htmlFor="month">EXP. DATE</label>
            <Field name="month" type="text" />
            <ErrorMessage name="month" />
          </Grid>
          <Grid item xs={3}>
            <label htmlFor="year">(MM/YY)</label>
            <Field name="year" type="text" />
            <ErrorMessage name="year" />
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="cvc">CVC</label>
            <Field name="cvc" type="text" />
            <ErrorMessage name="cvc" />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  )
}

export default CreditInfoForm

/*
<Grid item xs={12}>
            <label htmlFor="name">CARHOLDER NAME</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="cardNumber">CARD NUMBER</label>
            <Field name="cardNumber" type="text" />
            <ErrorMessage name="cardNumber" />
          </Grid>
          <Grid item xs={3}>
            <label htmlFor="month">EXP. DATE</label>
            <Field name="month" type="text" />
            <ErrorMessage name="month" />
          </Grid>
          <Grid item xs={3}>
            <label htmlFor="year">(MM/YY)</label>
            <Field name="year" type="text" />
            <ErrorMessage name="year" />
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="cvc">(MM/YY)</label>
            <Field name="cvc" type="text" />
            <ErrorMessage name="cvc" />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Grid>
*/