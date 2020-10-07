import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, IconButton, Typography } from 'ui/atoms';
import { UploadIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './NotificationsHeader.styles';

export const NotificationsHeader = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  return (
    <Grid container className={classes.root}>
      <Typography variant="h1" className={classes.header}>
        {formatMessage({ id: 'notifications.title' })}
      </Typography>
      <IconButton
        variant="rounded"
        size="small"
        onClick={() => {
          push('/');
        }}
        classes={{ root: classes.setting }}
      >
        <UploadIcon />
      </IconButton>
    </Grid>
  );
};
