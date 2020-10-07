import React from 'react';
import { CheckboxGroupField } from 'form/fields';
import { Typography, Box, Button } from 'ui/atoms';
import { useLocale } from 'hooks';

import { ClientTypes } from './dictionaries';

export const SetupStepOne = () => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Typography variant="subtitle2">{formatMessage({ id: 'setup.client_type' })}</Typography>
      <Box mb={2} />
      <CheckboxGroupField name="clientTypes" xs={4} options={ClientTypes} />
      <Box mb={2} />
      <Button type="submit" variant="contained" color="primary">
        {formatMessage({ id: 'common.next' })}
      </Button>
    </>
  );
};
