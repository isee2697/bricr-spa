import React from 'react';

import { Box, Button, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';

export const SetupStepThree = () => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Typography variant="subtitle2">{formatMessage({ id: 'register.check_your_email' })}</Typography>
      <Box mb={2} />
      <Box mb={2} />
      <Button type={'submit'} variant="contained" color="primary">
        {formatMessage({ id: 'setup.start' })}
      </Button>
    </>
  );
};
