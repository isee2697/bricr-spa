import React from 'react';
import { useFieldArray } from 'react-final-form-arrays';
import { FieldValidator } from 'final-form';

import { File, useRemoveFilesMutation } from 'api/types';
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
  removeEntity,
}: UploadImageGroupFieldProps) => {
  const { fields } = useFieldArray<File>(name, {
    validate: validate ? ((validatorsChain(...validate) as unknown) as FieldValidator<File>) : undefined,
    validateFields,
  });

  const [removeFile] = useRemoveFilesMutation();

  const onRemoveImage = async (index: number) => {
    fields.remove(index);

    await removeFile({
      variables: {
        input: {
          fileIDs: [fields.value[index].id],
          entity: removeEntity,
          entityID: entityID,
        },
      },
    });
  };

  return (
    <Grid container spacing={1}>
      {fields.map((field, index) => (
        <UploadImageField
          disabled={disabled}
          onRemove={() => onRemoveImage(index)}
          key={fields.value[index].url ?? `${index}`}
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
