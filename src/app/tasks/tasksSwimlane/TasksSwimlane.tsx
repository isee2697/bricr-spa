import React, { useState } from 'react';
import clsx from 'classnames';
import {
  DragDropContext,
  Droppable,
  DroppableStateSnapshot,
  Draggable,
  DropResult,
  DroppableProvided,
  DraggableStateSnapshot,
  DraggableProvided,
} from 'react-beautiful-dnd';

import { Grid, Box, IconButton, Emoji } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons/menu/MenuIcon';
import { Task } from '../Tasks.types';
import { TaskPriority, TaskStatus, TaskLabel } from '../Tasks.enum';

import { TasksSwimlaneItem } from './TasksSwimlaneItem';
import { useStyles } from './TasksSwimlane.styles';

export const TasksSwimlane = () => {
  const classes = useStyles();

  // Temporary code before API integration
  const date: Date = new Date();
  const deadlineTime: Date = new Date();
  const dateAfterFourDays: Date = new Date(date.setDate(date.getDate() + 4));
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 'BRC-11',
      title: 'Rewrite Query Caching Logic',
      label: TaskLabel.BUSINESS,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.MEDIUM,
      status: TaskStatus.TODO,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 'BRC-12',
      title: 'Invalid Emails Throw an Error',
      label: TaskLabel.PRIVATE,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.HIGH,
      status: TaskStatus.TODO,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 'BRC-13',
      title: "New Emojis Don't Render",
      label: TaskLabel.PRIVATE,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.MEDIUM,
      status: TaskStatus.TODO,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 'BRC-14',
      title: 'Excel Imports >20Mb Fail',
      label: TaskLabel.BUSINESS,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.HIGH,
      status: TaskStatus.IN_PROGRESS,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 'BRC-15',
      title: "New Emojis Don't Render",
      label: TaskLabel.FOLLOW_UP,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.MEDIUM,
      status: TaskStatus.IN_PROGRESS,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 'BRC-16',
      title: 'Rewrite Query Caching Logic',
      label: TaskLabel.PRIVATE,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.MEDIUM,
      status: TaskStatus.IN_PROGRESS,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 'BRC-17',
      title: 'Rewrite Query Caching Logic',
      label: TaskLabel.FOLLOW_UP,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.MEDIUM,
      status: TaskStatus.IN_PROGRESS,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 'BRC-18',
      title: 'Excel Imports >20Mb Fail',
      label: TaskLabel.FOLLOW_UP,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.HIGH,
      status: TaskStatus.BLOCKED,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 'BRC-19',
      title: 'Rewrite Query Caching Logic',
      label: TaskLabel.BUSINESS,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.MEDIUM,
      status: TaskStatus.BLOCKED,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
  ]);

  const todoTasks = tasks.filter((task: Task) => task.status === TaskStatus.TODO);
  const inProgressTasks = tasks.filter((task: Task) => task.status === TaskStatus.IN_PROGRESS);
  const blockedTasks = tasks.filter((task: Task) => task.status === TaskStatus.BLOCKED);
  const completedTasks = tasks.filter((task: Task) => task.status === TaskStatus.DONE);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    const sInd = source.droppableId;
    const dInd = destination.droppableId;

    if (sInd !== dInd) {
      const draggableTask = tasks.find(task => task.id === draggableId);

      if (draggableTask) {
        setTasks([...tasks.filter(task => task.id !== draggableId), { ...draggableTask, status: dInd as TaskStatus }]);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={3}>
          <Droppable droppableId={TaskStatus.TODO}>
            {(droppableProvided: DroppableProvided, droppableSnapshot: DroppableStateSnapshot) => (
              <div
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
                className={classes.tasksSwimlaneColumn}
              >
                <Box className={clsx(classes.flexGrowOne)}>
                  <Grid container justify="space-between">
                    <Grid item className={clsx(classes.columnName, classes.backGrayLight, classes.gray)}>
                      <Emoji>{'⏱ To do'}</Emoji>
                    </Grid>
                    <Grid item className={clsx(classes.flexGrowOne, classes.textAlignRight)}>
                      <IconButton className={classes.noPadding}>
                        <MenuIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
                <Box className={classes.tasksSwimlaneItemsContainer}>
                  {todoTasks.map((task: Task, index: number) => (
                    <Draggable key={index} draggableId={task.id} index={index}>
                      {(draggableProvided: DraggableProvided, draggableSnapshot: DraggableStateSnapshot) => (
                        <div
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                        >
                          <TasksSwimlaneItem key={index} task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </Box>
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
        <Grid item xs={3}>
          <Droppable droppableId={TaskStatus.IN_PROGRESS}>
            {(droppableProvided: DroppableProvided, droppableSnapshot: DroppableStateSnapshot) => (
              <div
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
                className={classes.tasksSwimlaneColumn}
              >
                <Box className={clsx(classes.flexGrowOne)}>
                  <Grid container justify="space-between">
                    <Grid item className={clsx(classes.columnName, classes.backYellowLight, classes.yellow)}>
                      <Emoji>{'🔥 In progress'}</Emoji>
                    </Grid>
                    <Grid item className={clsx(classes.flexGrowOne, classes.textAlignRight)}>
                      <IconButton className={classes.noPadding}>
                        <MenuIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
                <Box className={classes.tasksSwimlaneItemsContainer}>
                  {inProgressTasks.map((task: Task, index: number) => (
                    <Draggable key={index} draggableId={task.id} index={index}>
                      {(draggableProvided: DraggableProvided, draggableSnapshot: DraggableStateSnapshot) => (
                        <div
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                        >
                          <TasksSwimlaneItem key={index} task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </Box>
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
        <Grid item xs={3}>
          <Droppable droppableId={TaskStatus.BLOCKED}>
            {(droppableProvided: DroppableProvided, droppableSnapshot: DroppableStateSnapshot) => (
              <div
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
                className={classes.tasksSwimlaneColumn}
              >
                <Box className={clsx(classes.flexGrowOne)}>
                  <Grid container justify="space-between">
                    <Grid item className={clsx(classes.columnName, classes.backRedLight, classes.red)}>
                      <Emoji>{'⛔️ Blocked'}</Emoji>
                    </Grid>
                    <Grid item className={clsx(classes.flexGrowOne, classes.textAlignRight)}>
                      <IconButton className={classes.noPadding}>
                        <MenuIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
                <Box className={classes.tasksSwimlaneItemsContainer}>
                  {blockedTasks.map((task: Task, index: number) => (
                    <Draggable key={index} draggableId={task.id} index={index}>
                      {(draggableProvided: DraggableProvided, draggableSnapshot: DraggableStateSnapshot) => (
                        <div
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                        >
                          <TasksSwimlaneItem key={index} task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </Box>
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
        <Grid item xs={3}>
          <Droppable droppableId={TaskStatus.DONE}>
            {(droppableProvided: DroppableProvided, droppableSnapshot: DroppableStateSnapshot) => (
              <div
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
                className={classes.tasksSwimlaneColumn}
              >
                <Box className={clsx(classes.flexGrowOne)}>
                  <Grid container justify="space-between">
                    <Grid item className={clsx(classes.columnName, classes.backGreenLight, classes.green)}>
                      <Emoji>{'✅ Done'}</Emoji>
                    </Grid>
                    <Grid item className={clsx(classes.flexGrowOne, classes.textAlignRight)}>
                      <IconButton className={classes.noPadding}>
                        <MenuIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
                <Box className={classes.tasksSwimlaneItemsContainer}>
                  {completedTasks.map((task: Task, index: number) => (
                    <Draggable key={index} draggableId={task.id} index={index}>
                      {(draggableProvided: DraggableProvided, draggableSnapshot: DraggableStateSnapshot) => (
                        <div
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                        >
                          <TasksSwimlaneItem key={index} task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </Box>
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
      </Grid>
    </DragDropContext>
  );
};
