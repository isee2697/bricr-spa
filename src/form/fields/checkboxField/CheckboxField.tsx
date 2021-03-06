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
  labelPlacement = 'end',
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
      label={label && typeof label === 'string' ? formatMessage({ id: label }) : label}
      className={containerClassName}
      labelPlacement={labelPlacement}
    />
  );
};
