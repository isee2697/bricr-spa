import React from 'react';
import { useField } from 'react-final-form';
import { FormHelperText } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { validatorsChain } from 'form/validators';
import { QuantityInput } from 'ui/molecules';

import { QuantityFieldProps } from './QuantityField.types';

export const QuantityField = ({ validate, name, validateFields, label, ...props }: QuantityFieldProps) => {
  const { formatMessage } = useLocale();

  const { input, meta } = useField<number>(name, {
    validate: validate ? validatorsChain(...validate) : undefined,
    validateFields,
    defaultValue: 0,
  });

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== undefined && meta.initial !== null && !!meta.error);

  return (
    <>
      <QuantityInput
        value={input.value || 0}
        onChange={input.onChange}
        label={formatMessage({ id: label })}
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
