import React, { useContext, useState } from "react";

interface FormValues {
  name: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string
}

interface ContextValues {
  values: FormValues;
  updateValues?: React.Dispatch<React.SetStateAction<FormValues>>;
}

const defaultState = {
  values: {name: '', cardNumber: '', month: '', year: '', cvc: ''},
}

const FormContext = React.createContext<ContextValues>(defaultState)

export function useFormContext(){
  return useContext(FormContext)
}

export function FormConextProvider ({ children }:React.PropsWithChildren<{example?: string}>){
  const [formValues, setFormValues] = useState<FormValues>({name: '', cardNumber: '', month: '', year: '', cvc: ''})

  function updateFormValues(values:FormValues) {
    setFormValues(values)
  }

  return (
    <FormContext.Provider value={{values: formValues, updateValues: setFormValues}}>
      {children}
    </FormContext.Provider>
  )
}