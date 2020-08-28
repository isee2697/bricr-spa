import React, { useState } from 'react';

import { Grid, Alert } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { TasksProps } from './Tasks.types';
import { useStyles } from './Tasks.styles';
import { TasksHeader } from './tasksHeader/TasksHeader';
import { TasksBody } from './tasksBody/TasksBody';

export const Tasks = ({ isError }: TasksProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {!!isError && <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>}
      <Grid container spacing={3} className={classes.content}>
        <Grid item xs={12}>
          <TasksHeader />
        </Grid>
        <Grid item xs={12}>
          <TasksBody />
        </Grid>
      </Grid>
    </>
  );
};
