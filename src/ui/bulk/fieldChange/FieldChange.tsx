import React from 'react';
import { useFormState } from 'react-final-form';

import { Box, InputLabel, Typography } from 'ui/atoms';
import { GenericField } from 'form/fields';

import { FieldChangeProps } from './FieldChange.types';

export const FieldChange = ({
  valuesFieldName,
  valuesLabel,
  fieldLabelId,
  fieldName,
  fieldPlaceholderId,
}: FieldChangeProps) => {
  const formState = useFormState();
  const values = formState.values[valuesFieldName];

  return (
    <Box>
      <InputLabel shrink variant="outlined" color="primary">
        {valuesLabel}
      </InputLabel>
      <Typography variant="h4" color="textSecondary">
        {values?.join(', ')}
      </Typography>
      <GenericField id={fieldName} placeholder={fieldPlaceholderId} name={fieldName} label={fieldLabelId} />
    </Box>
  );
};
