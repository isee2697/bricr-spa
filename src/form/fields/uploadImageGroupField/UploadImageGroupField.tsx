import React, { useEffect } from 'react';
import { useFieldArray } from 'react-final-form-arrays';
import { FieldValidator } from 'final-form';

import { Grid } from 'ui/atoms';
import { validatorsChain } from 'form/validators';
import { UploadImageField } from '../';

import { UploadImageGroupFieldProps } from './UploadImageGroupField.types';

export const UploadImageGroupField = ({ name, max, validate, validateFields }: UploadImageGroupFieldProps) => {
  const { fields } = useFieldArray<string>(name, {
    validate: validate ? ((validatorsChain(...validate) as unknown) as FieldValidator<string>) : undefined,
    validateFields,
  });

  useEffect(() => {
    const emptyValues = fields.value.filter(val => !val);
    const amount = fields.length ? fields.length : 0;
    const hasNoEmptyValue = emptyValues.length === 0;

    if ((hasNoEmptyValue && !max) || (hasNoEmptyValue && !!max && amount < max)) {
      fields.insert(amount, '');
    }

    if (emptyValues.length > 1) {
      const key = fields.value.findIndex(val => !val);
      fields.remove(key);
    }
  }, [fields, max]);

  return (
    <Grid container spacing={1}>
      {fields.map((field, index) => (
        <UploadImageField key={fields.value[index]} name={field} />
      ))}
    </Grid>
  );
};
