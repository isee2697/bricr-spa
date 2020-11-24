import React, { ReactText } from 'react';
import { useField } from 'react-final-form';

import { useLocale } from 'hooks';
import { validatorsChain } from 'form/validators';
import { FormControl, InputLabel, FormHelperText } from 'ui/atoms';
import { AdvancedSearch } from 'ui/molecules/advancedSearch/AdvancedSearch';

import { AdvancedSearchFieldProps } from './AdvancedSearchField.types';

export const AdvancedSearchField = ({
  label,
  placeholder,
  name,
  validate,
  validateFields,
  disabled,
  margin,
  onChange,
  ...props
}: AdvancedSearchFieldProps) => {
  const { formatMessage } = useLocale();

  const { input, meta } = useField(name, {
    validate: validate ? validatorsChain(...validate) : undefined,
    validateFields,
  });

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== '' && meta.initial !== null && !!meta.error);

  const onChangeValue = (value: ReactText) => {
    input.onChange(value);
    onChange && onChange(value);
  };

  return (
    <FormControl margin={margin ?? 'normal'} style={{ width: '100%' }}>
      <InputLabel shrink variant="outlined" color="primary" htmlFor={name} disabled={disabled}>
        {formatMessage({ id: label })}
      </InputLabel>
      <AdvancedSearch
        value={input.value}
        onChange={onChangeValue}
        placeholder={placeholder}
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
