import React from 'react';
import { useFormState } from 'react-final-form';

import { Box, InputLabel, Typography } from 'ui/atoms';
import { CheckboxField, CheckboxGroupField, DatePickerField, GenericField, RadioGroupField } from 'form/fields';

import { FieldChangeProps } from './FieldChange.types';

export const FieldChange = ({
  valuesFieldName,
  valuesLabel,
  fieldLabelId,
  fieldName,
  fieldPlaceholderId,
  checkOptions = [],
  radioOptions = [],
  type = 'text',
  xs,
  sm,
  md,
  lg,
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
      {type === 'text' && (
        <GenericField id={fieldName} placeholder={fieldPlaceholderId} name={fieldName} label={fieldLabelId} />
      )}
      {type === 'checkfield' && (
        <CheckboxField id={fieldName} placeholder={fieldPlaceholderId} name={fieldName} label={fieldLabelId} />
      )}
      {type === 'dateRange' && (
        <>
          <DatePickerField
            id={`${fieldName}-from`}
            placeholder={fieldPlaceholderId}
            name={`${fieldName}.from`}
            label={fieldLabelId}
          />
          <DatePickerField
            id={`${fieldName}-to`}
            placeholder={fieldPlaceholderId}
            name={`${fieldName}.to`}
            label={fieldLabelId}
          />
        </>
      )}
      {type === 'checkgroup' && <CheckboxGroupField name={fieldName} options={checkOptions} />}
      {type === 'radiogroup' && (
        <RadioGroupField name={fieldName} options={radioOptions} xs={xs} sm={sm} md={md} lg={lg} />
      )}
    </Box>
  );
};
