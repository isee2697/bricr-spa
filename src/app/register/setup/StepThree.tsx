import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Button, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';

export const SetupStepThree = () => {
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  return (
    <>
      <Typography variant="subtitle2">{formatMessage({ id: 'register.check_your_email' })}</Typography>
      <Box mb={2} />
      <Box mb={2} />
      <Button type={'submit'} onClick={() => push(AppRoute.login)} variant="contained" color="primary">
        {formatMessage({ id: 'setup.start' })}
      </Button>
    </>
  );
};
