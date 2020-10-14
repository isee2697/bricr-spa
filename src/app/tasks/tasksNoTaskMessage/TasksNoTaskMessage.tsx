import React from 'react';

import { Grid, Emoji } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './TasksNoTaskMessage.styles';

export const TasksNoTaskMessage = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Grid container direction="column" className={classes.root} alignItems="center">
      <Grid item className={classes.logo}>
        <Emoji>{'🎉'}</Emoji>
      </Grid>
      <Grid item className={classes.message}>
        {formatMessage({ id: 'tasks.tada' })}
      </Grid>
      <Grid item className={classes.message}>
        {formatMessage({ id: 'tasks.up_to_date' })}
      </Grid>
    </Grid>
  );
};
