import * as yup from 'yup';

//get the current year and get the last two digits
const last2 = new Date().getFullYear().toString().slice(-2);

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
      /^0[1-9]|1[0-2]$/,
      'Must be a valid month and in the following format: xx'
    ),
  year: yup
    .string()
    .required('Cannot be blank')
    .matches(
      /^\d{2}$/,
      'Must be a valid year and in the following format: xx'
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