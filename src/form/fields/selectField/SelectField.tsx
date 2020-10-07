import React from 'react';
import { useField } from 'react-final-form';
import { Select, FormHelperText } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { validatorsChain } from 'form/validators';

import { SelectFieldProps } from './SelectField.types';

export const SelectField = ({ label, validate, name, validateFields, placeholder, ...props }: SelectFieldProps) => {
  const { formatMessage } = useLocale();

  const { input, meta } = useField(name, {
    validate: validate ? validatorsChain(...validate) : undefined,
    validateFields,
  });

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== '' && meta.initial !== null && !!meta.error);

  return (
    <>
      <Select
        label={typeof label === 'string' ? (formatMessage({ id: label }) as string) : label}
        placeholder={placeholder ? (formatMessage({ id: placeholder }) as string) : undefined}
        id={name}
        error={hasError}
        fullWidth
        {...input}
        {...props}
      />
      {hasError && (
        <FormHelperText error>
          {formatMessage(meta.error || meta.submitError, { ...meta.error?.values, ...meta.submitError?.values })}
        </FormHelperText>
      )}
    </>
  );
};
