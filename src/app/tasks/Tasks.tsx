import React from 'react';

import { Grid, Alert } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { TasksProps } from './Tasks.types';
import { useStyles } from './Tasks.styles';
import { TasksHeader } from './tasksHeader/TasksHeader';
import { TasksMemberList } from './tasksMemberList/TasksMemberList';
import { TasksBody } from './tasksBody/TasksBody';

export const Tasks = ({ isError, selectedUsers }: TasksProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      {!!isError && <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>}
      <Grid container spacing={3} className={classes.content}>
        <Grid item xs={12}>
          <TasksHeader />
        </Grid>
        <Grid item xs={12}>
          <TasksMemberList />
        </Grid>
        <Grid item xs={12}>
          <TasksBody />
        </Grid>
      </Grid>
    </>
  );
};
