import React, { useState } from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { SimpleSearch } from 'ui/molecules';
import { Grid, IconButton } from 'ui/atoms';
import { ListIcon } from 'ui/atoms/icons/list/ListIcon';
import { SwimlaneIcon } from 'ui/atoms/icons/swimlane/SwimlaneIcon';
import { ManageIcon } from 'ui/atoms/icons/manage/ManageIcon';
import { TasksNoTaskMessage } from '../tasksNoTaskMessage/TasksNoTaskMessage';
import { TasksStatusMessage } from '../tasksStatusMessage/TasksStatusMessage';
import { TasksSwimlane } from '../tasksSwimlane/TasksSwimlane';
import { TaskPriority, TaskStatus, TaskLabel } from '../Tasks.enum';
import { Task } from '../Tasks.types';

import { useStyles } from './TasksContent.styles';

export const TasksContent = () => {
  const classes = useStyles();
  const [searchKey, setSearchKey] = useState('');

  // Temporary code before API integration
  const date: DateTime = DateTime.local();
  const deadlineTime: DateTime = DateTime.local();
  const dateAfterFourDays: DateTime = date.plus({ days: 4 });
  const tasks: Task[] = [
    {
      id: 11,
      taskId: 'BRC-11',
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
      id: 12,
      taskId: 'BRC-12',
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
      id: 13,
      taskId: 'BRC-13',
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
      id: 14,
      taskId: 'BRC-14',
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
      id: 15,
      taskId: 'BRC-15',
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
      id: 16,
      taskId: 'BRC-16',
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
      id: 17,
      taskId: 'BRC-17',
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
      id: 18,
      taskId: 'BRC-18',
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
      id: 19,
      taskId: 'BRC-19',
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
  ];

  const tasksCount = 9;
  const completedTasksCount = 4;

  return (
    <Grid container spacing={2} className={classes.root} direction="column">
      <Grid item xs={12} container alignItems="center" justify="space-between" className={classes.flexGrowZero}>
        <Grid item xs={3}>
          {tasksCount === completedTasksCount && <TasksNoTaskMessage />}
          {tasksCount > completedTasksCount && <TasksStatusMessage tasks={tasksCount} done={completedTasksCount} />}
        </Grid>
        <Grid item>
          <Grid container>
            <SimpleSearch onChange={v => setSearchKey(v.currentTarget.value)} value={searchKey} />
            <IconButton classes={{ root: classes.sortIcon }}>
              <SwimlaneIcon color="inherit" />
            </IconButton>
            <IconButton classes={{ root: classes.sortIcon }}>
              <ListIcon color="inherit" />
            </IconButton>
            <IconButton classes={{ root: classes.sortIcon }}>
              <ManageIcon color="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={clsx(classes.flexGrowOne, classes.flexRow)}>
        <TasksSwimlane tasks={tasks} />
      </Grid>
    </Grid>
  );
};
