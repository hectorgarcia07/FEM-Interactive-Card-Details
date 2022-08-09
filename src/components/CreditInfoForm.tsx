import { Button, Grid, TextField } from '@mui/material';
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
              name="name"
              type='text'
              placeholder="e.g. Jane Appleseed"
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextInput
              label="Card Number"
              name="cardNumber"
              type='text'
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </Grid>
          <Grid item xs={3}>
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