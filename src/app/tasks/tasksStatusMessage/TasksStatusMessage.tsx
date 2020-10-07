import React from 'react';

import { Grid, Emoji, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './TasksStatusMessage.styles';
import { TasksStatusMessageProps } from './TasksStatusMessage.types';

export const TasksStatusMessage = ({ tasks, done }: TasksStatusMessageProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Grid container direction="column" className={classes.root} alignItems="flex-start">
      <Grid item>
        <Typography variant="h4">
          {formatMessage(
            {
              id: 'tasks.status.completed',
            },
            { percentage: Math.floor((done / tasks) * 100) },
          )}{' '}
          <Emoji className={classes.emoji}>{'🤓'}</Emoji>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" className={classes.status}>
          {formatMessage(
            {
              id: 'tasks.status.items_completed_today',
            },
            { completed: done, todos: tasks },
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};
