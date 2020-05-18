import React from 'react';
import { useFieldArray } from 'react-final-form-arrays';
import { FieldValidator } from 'final-form';

import { Grid } from 'ui/atoms';
import { validatorsChain } from 'form/validators';
import { UploadImageField } from '../';

import { UploadImageGroupFieldProps } from './UploadImageGroupField.types';

export const UploadImageGroupField = ({
  name,
  max,
  validate,
  validateFields,
  disabled,
}: UploadImageGroupFieldProps) => {
  const { fields } = useFieldArray<string>(name, {
    validate: validate ? ((validatorsChain(...validate) as unknown) as FieldValidator<string>) : undefined,
    validateFields,
  });

  return (
    <Grid container spacing={1}>
      {fields.map((field, index) => (
        <UploadImageField
          disabled={disabled}
          onRemove={() => fields.remove(index)}
          key={fields.value[index]}
          name={field}
        />
      ))}
      {fields && typeof fields.length === 'number' && fields.length < (max || Infinity) && (
        <UploadImageField disabled={disabled} key={`${name}[${fields.length}]`} name={`${name}[${fields.length}]`} />
      )}
    </Grid>
  );
};
