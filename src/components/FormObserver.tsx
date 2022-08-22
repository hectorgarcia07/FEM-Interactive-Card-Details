import { FormValues } from '../types/FormValues'
import { useEffect } from 'react';
import { useFormikContext } from 'formik';

interface FormObserverProp{
  updateValues: React.Dispatch<React.SetStateAction<FormValues>>
}

const FormObserver = ( {updateValues}:FormObserverProp ) => {
  const form = useFormikContext()
  const values = form.values as FormValues
  
  if(values.cardNumber)
    values.cardNumber = (values.cardNumber.replace(/ /g,'').match(/.{1,4}/g)?.join(' ') as string)

  useEffect(() => {
    updateValues(values)
  },[values])

  return <></>
}

export default FormObserver