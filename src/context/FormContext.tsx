import React, { useContext, useState } from "react";
import { FormValues } from '../types/FormValues'

interface ContextValues {
  values: FormValues;
  updateValues?: React.Dispatch<React.SetStateAction<FormValues>>;
}

const defaultState = {
  values: { name: '', cardNumber: '', month: '', year: '', cvc: '', compleated: false },
}

const FormContext = React.createContext<ContextValues>(defaultState)

export function useFormContext(){
  return useContext(FormContext)
}

export function FormConextProvider ({ children }:React.PropsWithChildren<{example?: string}>){
  const [formValues, setFormValues] = useState<FormValues>(defaultState.values)

  return (
    <FormContext.Provider value={{values: formValues, updateValues: setFormValues}}>
      {children}
    </FormContext.Provider>
  )
}