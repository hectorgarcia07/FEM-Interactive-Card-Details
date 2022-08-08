import { FormControl, InputLabel, FormHelperText, OutlinedInput } from '@mui/material';
import FormControlUnstyled, {
  useFormControlUnstyledContext,
} from '@mui/base/FormControlUnstyled';
import { useField } from 'formik';

interface myTextProps {
  label: string;
  ariaDescribe: string;
  name: string;
  type: string;
  placeholder: string;
}

export const MyTextInput = ({ label, ariaDescribe, ...props }:myTextProps) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  console.log("STUFF ", field, meta)
  return (
    <FormControl variant='outlined'>
      <label htmlFor={props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
        ) 
        : null
      }
    </FormControl>
  );
};

/*
<>
  <label htmlFor={props.id || props.name}>{label}</label>
  <input className="text-input" {...field} {...props} />
    {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null}
    </>


    <InputLabel htmlFor={props.name}>{label}</InputLabel>
      <OutlinedInput 
        id={props.name} 
        aria-describedby={ariaDescribe} 
        {...field} 
        {...props}
        type="search" 
      />
      <FormHelperText>{meta.error}</FormHelperText>
*/