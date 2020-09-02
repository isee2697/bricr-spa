import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { Grid } from 'ui/atoms';
import { Task } from '../Tasks.types';
import { TaskStatus } from '../Tasks.enum';

import { TasksSwimlaneColumn } from './TasksSwimlaneColumn';
import { useStyles } from './TasksSwimlane.styles';
import { TasksSwimlaneProps } from './TasksSwimlane.types';

export const TasksSwimlane = ({ tasks: tasksList = [] }: TasksSwimlaneProps) => {
  const classes = useStyles();

  const [tasks, setTasks] = useState<Task[]>(tasksList);

  const todoTasks = tasks.filter((task: Task) => task.status === TaskStatus.todo);
  const inProgressTasks = tasks.filter((task: Task) => task.status === TaskStatus.inProgress);
  const blockedTasks = tasks.filter((task: Task) => task.status === TaskStatus.blocked);
  const completedTasks = tasks.filter((task: Task) => task.status === TaskStatus.done);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    const sInd = source.droppableId;
    const dInd = destination.droppableId;

    if (sInd !== dInd) {
      const draggableTask = tasks.find(task => task.taskId === draggableId);

      if (draggableTask) {
        setTasks([
          ...tasks.filter(task => task.taskId !== draggableId),
          { ...draggableTask, status: dInd as TaskStatus },
        ]);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={3}>
          <TasksSwimlaneColumn columnType={TaskStatus.todo} tasks={todoTasks} />
        </Grid>
        <Grid item xs={3}>
          <TasksSwimlaneColumn columnType={TaskStatus.inProgress} tasks={inProgressTasks} />
        </Grid>
        <Grid item xs={3}>
          <TasksSwimlaneColumn columnType={TaskStatus.blocked} tasks={blockedTasks} />
        </Grid>
        <Grid item xs={3}>
          <TasksSwimlaneColumn columnType={TaskStatus.done} tasks={completedTasks} />
        </Grid>
      </Grid>
    </DragDropContext>
  );
};
