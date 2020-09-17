import React from 'react';

import { Alert, Box, Grid, Loader } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { TaskDetailsProps } from './TaskDetails.types';
import { useStyles } from './TaskDetails.style';
import { TaskDetailsHeader } from './taskDetailsHeader/TaskDetailsHeader';
import { TaskDetailsBoards } from './taskDetailsBoards/TaskDetailsBoards';
import { TaskDetailsFooter } from './taskDetailsFooter/TaskDetailsFooter';

export const TaskDetails = ({ error, taskData, breadcrumbs, user, members, onUpdateTask }: TaskDetailsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  if (!taskData.getTask) {
    return <Loader />;
  }

  const task = taskData.getTask;

  return (
    <>
      {breadcrumbs}
      <Box className={classes.content}>
        {!!error && (
          <Grid item xs={12}>
            <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>
          </Grid>
        )}
        <TaskDetailsHeader title={task.title || ''} />
        <TaskDetailsBoards task={task} user={user} members={members} onUpdateTask={onUpdateTask} />
        <TaskDetailsFooter />
      </Box>
    </>
  );
};
