import React from 'react';

import { Grid, Typography, Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { AppMessages } from 'i18n/messages';

export const PimHeader = () => {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  return (
    <Grid container xs={12} item justify="space-between">
      <Typography variant="h1">{formatMessage({ id: AppMessages['pim.title'] })}</Typography>
      <Button
        color="primary"
        variant="contained"
        onClick={() => open('pim-modal')}
        startIcon={<AddIcon color="inherit" />}
        size="small"
      >
        {formatMessage({ id: AppMessages['pim.add'] })}
      </Button>
    </Grid>
  );
};
