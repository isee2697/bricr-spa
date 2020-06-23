import React from 'react';
import { useFieldArray } from 'react-final-form-arrays';
import { FieldValidator } from 'final-form';

import { File } from 'api/types';
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
  entity,
  entityID,
}: UploadImageGroupFieldProps) => {
  const { fields } = useFieldArray<File>(name, {
    validate: validate ? ((validatorsChain(...validate) as unknown) as FieldValidator<File>) : undefined,
    validateFields,
  });

  return (
    <Grid container spacing={1}>
      {fields.map((field, index) => (
        <UploadImageField
          disabled={disabled}
          onRemove={() => fields.remove(index)}
          key={fields.value[index].id}
          name={field}
          entity={entity}
          entityID={entityID}
        />
      ))}
      {fields && typeof fields.length === 'number' && fields.length < (max || Infinity) && (
        <UploadImageField
          entity={entity}
          entityID={entityID}
          disabled={disabled}
          key={`${name}[${fields.length}]`}
          name={`${name}[${fields.length}]`}
        />
      )}
    </Grid>
  );
};
