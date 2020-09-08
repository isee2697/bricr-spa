import React from 'react';

import { CheckboxGroupField } from 'form/fields';
import { Box, Button, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';

import { PropertyTypes } from './dictionaries';

export const SetupStepTwo = () => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Typography variant="subtitle2">{formatMessage({ id: 'setup.client_type' })}</Typography>
      <Box mb={2} />
      <CheckboxGroupField name="propertyTypes" xs={3} options={PropertyTypes} />
      <Box mb={2} />
      <Button type={'submit'} variant="contained" color="primary">
        {formatMessage({ id: 'setup.start' })}
      </Button>
    </>
  );
};
