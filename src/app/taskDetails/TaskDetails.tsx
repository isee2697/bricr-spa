import React from 'react';

import { Box } from 'ui/atoms';

import { TaskDetailsProps } from './TaskDetails.types';
import { useStyles } from './TaskDetails.style';
import { TaskDetailsHeader } from './taskDetailsHeader/TaskDetailsHeader';
import { TaskDetailsBoards } from './taskDetailsBoards/TaskDetailsBoards';
import { TaskDetailsFooter } from './taskDetailsFooter/TaskDetailsFooter';

export const TaskDetails = ({ taskData, breadcrumbs, user, members, onUpdateTask }: TaskDetailsProps) => {
  const classes = useStyles();

  return (
    <>
      {breadcrumbs}
      <Box className={classes.content}>
        <TaskDetailsHeader title={taskData.title || ''} />
        <TaskDetailsBoards task={taskData} user={user} members={members} onUpdateTask={onUpdateTask} />
        <TaskDetailsFooter />
      </Box>
    </>
  );
};
