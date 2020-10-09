import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Grid } from 'ui/atoms';
import { TaskStatus, Task } from 'api/types';

import { TasksSwimlaneColumn } from './TasksSwimlaneColumn';
import { useStyles } from './TasksSwimlane.styles';
import { TasksSwimlaneProps } from './TasksSwimlane.types';

export const TasksSwimlane = ({
  tab,
  tasks: tasksList = [],
  tasksSummaryByStatus: { todo: todoCount, inProgress: inProgressCount, blocked: blockedCount, done: doneCount },
  onUpdateTaskStatus,
}: TasksSwimlaneProps) => {
  const classes = useStyles();

  const todoTasks = tasksList.filter((task: Task) => task.status === TaskStatus.ToDo);
  const inProgressTasks = tasksList.filter((task: Task) => task.status === TaskStatus.InProgress);
  const blockedTasks = tasksList.filter((task: Task) => task.status === TaskStatus.Blocked);
  const completedTasks = tasksList.filter((task: Task) => task.status === TaskStatus.Done);

  return (
    <DndProvider backend={HTML5Backend}>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={3}>
          <TasksSwimlaneColumn
            tab={tab}
            columnType={TaskStatus.ToDo}
            tasks={todoTasks}
            count={todoCount}
            onUpdateTaskStatus={onUpdateTaskStatus}
          />
        </Grid>
        <Grid item xs={3}>
          <TasksSwimlaneColumn
            tab={tab}
            columnType={TaskStatus.InProgress}
            tasks={inProgressTasks}
            count={inProgressCount}
            onUpdateTaskStatus={onUpdateTaskStatus}
          />
        </Grid>
        <Grid item xs={3}>
          <TasksSwimlaneColumn
            tab={tab}
            columnType={TaskStatus.Blocked}
            tasks={blockedTasks}
            count={blockedCount}
            onUpdateTaskStatus={onUpdateTaskStatus}
          />
        </Grid>
        <Grid item xs={3}>
          <TasksSwimlaneColumn
            tab={tab}
            columnType={TaskStatus.Done}
            tasks={completedTasks}
            count={doneCount}
            onUpdateTaskStatus={onUpdateTaskStatus}
          />
        </Grid>
      </Grid>
    </DndProvider>
  );
};
