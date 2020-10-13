import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
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

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    const sInd = source.droppableId;
    const dInd = destination.droppableId;

    if (sInd !== dInd) {
      const draggableTask = tasksList.find(task => task.id === draggableId);

      if (draggableTask) {
        onUpdateTaskStatus(draggableId, dInd as TaskStatus);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={3}>
          <TasksSwimlaneColumn tab={tab} columnType={TaskStatus.ToDo} tasks={todoTasks} count={todoCount} />
        </Grid>
        <Grid item xs={3}>
          <TasksSwimlaneColumn
            tab={tab}
            columnType={TaskStatus.InProgress}
            tasks={inProgressTasks}
            count={inProgressCount}
          />
        </Grid>
        <Grid item xs={3}>
          <TasksSwimlaneColumn tab={tab} columnType={TaskStatus.Blocked} tasks={blockedTasks} count={blockedCount} />
        </Grid>
        <Grid item xs={3}>
          <TasksSwimlaneColumn tab={tab} columnType={TaskStatus.Done} tasks={completedTasks} count={doneCount} />
        </Grid>
      </Grid>
    </DragDropContext>
  );
};
