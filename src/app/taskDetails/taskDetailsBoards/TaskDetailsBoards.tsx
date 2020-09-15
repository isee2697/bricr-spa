import React from 'react';

import { Grid } from 'ui/atoms';

import { useStyles } from './TaskDetailsBoards.style';
import { TaskDetailsBoardsProps } from './TaskDetailsBoards.types';
import { TaskDetailsBoardsHeading } from './taskDetailsBoardsHeading/TaskDetailsBoardsHeading';
import { TaskDetailsBoardsDescriptionContainer } from './taskDetailsBoardsDescription/TaskDetailsBoardsDescriptionContainer';
import { TaskDetailsBoardsLogContainer } from './taskDetailsBoardsLog/TaskDetailsBoardsLogContainer';
import { TaskDetailsBoardsActions } from './taskDetailsBoardsActions/TaskDetailsBoardsActions';

export const TaskDetailsBoards = ({ task, user, members, onUpdateTask }: TaskDetailsBoardsProps) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} md={8}>
        <TaskDetailsBoardsHeading task={task} />
        <TaskDetailsBoardsDescriptionContainer task={task} />
        <TaskDetailsBoardsLogContainer task={task} />
      </Grid>
      <Grid item xs={12} md={4}>
        <TaskDetailsBoardsActions task={task} user={user} members={members} onUpdateTask={onUpdateTask} />
      </Grid>
    </Grid>
  );
};
