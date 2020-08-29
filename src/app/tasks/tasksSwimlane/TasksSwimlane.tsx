import React from 'react';
import clsx from 'classnames';

import { Grid, Box, IconButton, Emoji } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons/menu/MenuIcon';
import { Task } from '../Tasks.types';
import { TaskPriority, TaskStatus } from '../Tasks.enum';

import { TasksSwimlaneItem } from './TasksSwimlaneItem';
import { useStyles } from './TasksSwimlane.styles';

export const TasksSwimlane = () => {
  const classes = useStyles();

  // Temporary code before API integration
  const date: Date = new Date();
  const dateAfterFourDays: Date = new Date(date.setDate(date.getDate() + 4));
  const tasks: Task[] = [
    {
      id: 'BRC-11',
      title: 'Rewrite Query Caching Logic',
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
      expireDate: dateAfterFourDays,
      priority: TaskPriority.HIGH,
      status: TaskStatus.TODO,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 'BRC-14',
      title: 'Excel Imports >20Mb Fail',
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
      expireDate: dateAfterFourDays,
      priority: TaskPriority.MEDIUM,
      status: TaskStatus.BLOCKED,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
  ];

  const todoTasks = tasks.filter((task: Task) => task.status === TaskStatus.TODO);
  const inProgressTasks = tasks.filter((task: Task) => task.status === TaskStatus.IN_PROGRESS);
  const blockedTasks = tasks.filter((task: Task) => task.status === TaskStatus.BLOCKED);
  const completedTasks = tasks.filter((task: Task) => task.status === TaskStatus.DONE);

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={3}>
        <Box className={classes.tasksSwimlaneColumn}>
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
          <Box>
            {todoTasks.map((task: Task) => (
              <TasksSwimlaneItem task={task} />
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box className={classes.tasksSwimlaneColumn}>
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
          <Box>
            {inProgressTasks.map((task: Task) => (
              <TasksSwimlaneItem task={task} />
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box className={classes.tasksSwimlaneColumn}>
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
          <Box>
            {blockedTasks.map((task: Task) => (
              <TasksSwimlaneItem task={task} />
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box className={classes.tasksSwimlaneColumn}>
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
          <Box>
            {completedTasks.map((task: Task) => (
              <TasksSwimlaneItem task={task} />
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
