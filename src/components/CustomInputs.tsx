import * as React from 'react';
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import { useTheme } from '@mui/material';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { FieldHookConfig, useField } from 'formik';

const Input = styled(InputUnstyled)(
  () => {
    const theme = useTheme()
    return (`
  .${inputUnstyledClasses.input} {
    padding: 0;
    width: 100%;
    font-size: 0.875rem;
    font-family: ${theme.font.font};
    font-weight: 400;
    line-height: 1.5;
    border: 1px solid ${theme.colors.LightGrayishViolet};
    border-radius: 8px;
    padding: 0.7rem;
    padding-left: 0.9rem;
    margin-bottom: 0.5rem;

    &[aria-invalid="true"]{
      border: 1px solid red;
      font-size: 20;
    }

    &::placeholder { /* Most modern browsers support this now. */
      color: ${theme.colors.DarkGrayishViolet};
      letter-spacing: 0.05rem;
    }
    &:focus {
      outline: none !important;
      border:1px solid ${theme.gradiant.start};
    }
  }
`)},
);

interface LabelProps { 
  children?: React.ReactNode; 
  className?: string, 
  htmlFor: string,
  error: boolean
}

const Label = styled(
  ({ children, className, htmlFor, error }: LabelProps) => {
    
    return (
      <label className={clsx(className, error ? 'invalid' : '')} htmlFor={htmlFor}>
        {children}
      </label>
    );
  },
)(() => {
  const theme = useTheme()
  return (`
    font-family: ${theme.font.font};
    font-weight: bold;
    font-size: 0.7rem;
    margin-bottom: 4px;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    &.invalid {
      color: ${theme.colors.error};
    }
`)
});

const HelperText = styled((props: {errorText: string}) => {
  const theme = useTheme()

  const style = {
    margin: '0.3rem',
    color: theme.colors.error,
    fontSize: '0.8rem',
    whiteSpace: 'pre-wrap'
  } as React.CSSProperties;

  return props.errorText ? <p style={style}>{props.errorText}</p> : null;
})(() => {
  const theme = useTheme()

  return (`
    font-family: ${theme.font.font};
    color: ${theme.colors.error};
    font-size: 0.875rem;
    margin: 0;
  `);
})

interface myTextProps {
  label: string;
  placeholder: string;
}

type MyRadioProps = myTextProps & FieldHookConfig<string>

export function MyTextInput({ label, placeholder, ...props }:MyRadioProps) {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  
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