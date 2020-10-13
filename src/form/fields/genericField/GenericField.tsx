import React, { ChangeEvent } from 'react';
import { useField } from 'react-final-form';
import { TextField as BaseFormField } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { validatorsChain } from 'form/validators';

import { GenericFieldProps } from './GenericField.types';

export const GenericField = ({
  label,
  validate,
  name,
  validateFields,
  placeholder,
  helperText,
  onChange,
  type,
  ...props
}: GenericFieldProps) => {
  const { formatMessage } = useLocale();
  const { input, meta } = useField(name, {
    validate: validate ? validatorsChain(...validate) : undefined,
    validateFields,
  });

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== '' && meta.initial !== null && !!meta.error);

  const handleChange = (value: ChangeEvent<HTMLInputElement>) => {
    input.onChange(type === 'number' ? parseFloat(value.target.value) : value.target.value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <BaseFormField
      helperText={
        hasError
          ? formatMessage(meta.error || meta.submitError, {
              ...meta.error?.values,
              ...meta.submitError?.values,
            })
          : helperText
      }
      label={typeof label === 'string' ? (formatMessage({ id: label }) as string) : label}
      placeholder={placeholder ? (formatMessage({ id: placeholder }) as string) : undefined}
      id={name}
      margin="normal"
      variant="outlined"
      error={hasError}
      fullWidth
      type={type}
      InputLabelProps={{
        shrink: true,
      }}
      {...input}
      {...props}
      onChange={handleChange}
    />
  );
};
