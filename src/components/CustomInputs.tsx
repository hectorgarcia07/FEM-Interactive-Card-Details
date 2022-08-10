import * as React from 'react';
import FormControlUnstyled, {
  useFormControlUnstyledContext,
} from '@mui/base/FormControlUnstyled';
import { useTheme } from '@mui/material';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { FieldHookConfig, useField } from 'formik';


const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const Input = styled(InputUnstyled)(
  ({ theme }) => `
  .${inputUnstyledClasses.input} {
    width: 100%;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    border: 1px solid ;
    border-radius: 8px;
    padding: 0;

    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }

    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
    
    &[aria-invalid="true"]{
      border: 1px solid red;
      font-size: 20;
    }
  }
`,
);

interface LabelProps { 
  children?: React.ReactNode; 
  className?: string, 
  htmlFor: string,
  error: boolean
}

const Label = styled(
  ({ children, className, htmlFor, error }: LabelProps) => {
    const formControlContext = useFormControlUnstyledContext();
    
    return (
      <label className={clsx(className, error ? 'invalid' : '')} htmlFor={htmlFor}>
        {children}
      </label>
    );
  },
)`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props: {errorText: string}) => {
  return props.errorText ? <p>{props.errorText}</p> : null;
})`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

interface myTextProps {
  label: string;
  placeholder: string;
}

type MyRadioProps = myTextProps & FieldHookConfig<string>

export function MyTextInput({ label, placeholder, ...props }:MyRadioProps) {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const theme = useTheme()
  
  return (
    <FormControlUnstyled defaultValue="" error={!!errorText} {...field}>
      <Label htmlFor={props.name} error={!!errorText}>{label} </Label>
      <Input 
        placeholder={placeholder}
        name={props.name}
        id={props.name}
      />
      <HelperText errorText={errorText} />
    </FormControlUnstyled>
  );
}