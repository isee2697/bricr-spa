import React, { useState } from 'react';
import clsx from 'classnames';

import { SimpleSearch } from 'ui/molecules';
import { Grid, IconButton } from 'ui/atoms';
import { ListIcon } from 'ui/atoms/icons/list/ListIcon';
import { SwimlaneIcon } from 'ui/atoms/icons/swimlane/SwimlaneIcon';
import { ManageIcon } from 'ui/atoms/icons/manage/ManageIcon';
// import { TasksNoTaskMessage } from '../tasksNoTaskMessage/TasksNoTaskMessage';
import { TasksStatusMessage } from '../tasksStatusMessage/TasksStatusMessage';
import { TasksSwimlane } from '../tasksSwimlane/TasksSwimlane';
import { TaskPriority, TaskStatus, TaskLabel, TasksViewMode } from '../Tasks.enum';
import { Task } from '../Tasks.types';
import { TasksList } from '../tasksList/TasksList';

import { useStyles } from './TasksContent.styles';

export const TasksContent = () => {
  const classes = useStyles();
  const [searchKey, setSearchKey] = useState('');
  const [viewMode, setViewMode] = useState(TasksViewMode.LIST);

  // Temporary code before API integration
  const date: Date = new Date();
  const deadlineTime: Date = new Date();
  const dateAfterFourDays: Date = new Date(date.setDate(date.getDate() + 4));
  const tasks: Task[] = [
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
  ];

  return (
    <Grid container spacing={2} className={classes.root} direction="column">
      <Grid item xs={12} container alignItems="center" justify="space-between" className={classes.flexGrowZero}>
        <Grid item xs={3}>
          {/* <TasksNoTaskMessage /> */}
          <TasksStatusMessage tasks={9} done={4} />
        </Grid>
        <Grid item>
          <Grid container>
            <SimpleSearch onChange={v => setSearchKey(v.currentTarget.value)} value={searchKey} />
            <IconButton classes={{ root: classes.sortIcon }} onClick={() => setViewMode(TasksViewMode.SWIMLANE)}>
              <SwimlaneIcon color={viewMode === TasksViewMode.SWIMLANE ? 'primary' : 'inherit'} />
            </IconButton>
            <IconButton classes={{ root: classes.sortIcon }} onClick={() => setViewMode(TasksViewMode.LIST)}>
              <ListIcon color={viewMode === TasksViewMode.LIST ? 'primary' : 'inherit'} />
            </IconButton>
            <IconButton classes={{ root: classes.sortIcon }}>
              <ManageIcon color="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={clsx(classes.flexGrowOne, classes.flexRow)}>
        {viewMode === TasksViewMode.SWIMLANE && <TasksSwimlane tasks={tasks} />}
        {viewMode === TasksViewMode.LIST && <TasksList tasks={tasks} />}
      </Grid>
    </Grid>
  );
};
