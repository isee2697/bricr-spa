import React from 'react';
import { useField } from 'react-final-form';

import { useLocale } from 'hooks';
import { validatorsChain } from 'form/validators';
import { Dropdown, FormControl, InputLabel, FormHelperText } from 'ui/atoms';

import { DropdownFieldProps } from './DropdownField.types';

export const DropdownField = ({
  label,
  placeholder,
  name,
  validate,
  validateFields,
  disabled,
  ...props
}: DropdownFieldProps) => {
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
    <FormControl margin="normal" style={{ width: '100%' }}>
      <InputLabel shrink variant="outlined" color="primary" htmlFor={name} disabled={disabled}>
        {formatMessage({ id: label })}
      </InputLabel>
      <Dropdown
        value={input.value}
        onChange={input.onChange}
        placeholder={formatMessage({ id: placeholder })}
        disabled={disabled}
        {...props}
      />
      <input hidden {...input} />
      {hasError && (
        <FormHelperText error>
          {formatMessage(meta.error || meta.submitError, { ...meta.error?.values, ...meta.submitError?.values })}
        </FormHelperText>
      )}
    </FormControl>
  );
};
