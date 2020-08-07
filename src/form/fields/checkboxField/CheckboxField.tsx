import React from 'react';
import { useField } from 'react-final-form';

import { Checkbox, FormControlLabel } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { validatorsChain } from 'form/validators';

import { CheckboxFieldProps } from './CheckboxField.types';

export const CheckboxField = ({
  label,
  validate,
  name,
  validateFields,
  containerClassName,
  ...props
}: CheckboxFieldProps) => {
  const { formatMessage } = useLocale();

  const { input } = useField(name, {
    type: 'checkbox',
    validate: validate ? validatorsChain(...validate) : undefined,
    validateFields,
  });

  return (
    <FormControlLabel
      control={<Checkbox color="primary" id={name} size="medium" {...input} {...props} />}
      label={formatMessage({ id: label })}
      className={containerClassName}
    />
  );
};
