import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter a name'),
  cardNumber: yup
    .string()
    .required("Card number cannot be blank")
    .matches(
      /^\d{4}[ ]?\d{4}[ ]?\d{4}[ ]?\d{4}$/, 
      `Numbers only and in this format:\nxxxx xxxx xxxx xxxx`
    ),
  month: yup
    .string()
    .required('Cannot be blank')
    .matches(
      /^\d{2}$/,
      'Must be numbers in the following format: xx'
    ),
  year: yup
    .string()
    .required('Cannot be blank')
    .matches(
      /^\d{2}$/,
      'Must be numbers in the following format: xx'
    ),
  cvc: yup
    .string()
    .required('Cannot be blank')
    .matches(
      /^\d{3}$/,
      'Must be numbers in the following format: xxx'
    ),
})

export const initialValues = {
  name: '',
  cardNumber: '',
  month: '',
  year: '',
  cvc: ''
}