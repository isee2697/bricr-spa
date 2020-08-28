import React from 'react';

import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './TasksNoTaskMessage.styles';

export const TasksNoTaskMessage = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Grid container direction="column" className={classes.root} alignItems="center">
      <Grid item className={classes.logo}>
        🎉
      </Grid>
      <Grid item className={classes.message}>
        {formatMessage({ id: 'tasks.tadas' })}
      </Grid>
      <Grid item className={classes.message}>
        {formatMessage({ id: 'tasks.upToDate' })}
      </Grid>
    </Grid>
  );
};
