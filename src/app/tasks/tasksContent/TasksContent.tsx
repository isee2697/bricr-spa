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
import { TaskPriority, TaskStatus, TaskLabel, TasksViewMode } from '../Tasks.enum';
import { Task } from '../Tasks.types';
import { TasksList } from '../tasksList/TasksList';
import { TasksDateSection } from '../tasksDateSection/TasksDateSection';

import { useStyles } from './TasksContent.styles';
import { TasksContentProps } from './TasksContent.types';

export const TasksContent = ({ tab }: TasksContentProps) => {
  const classes = useStyles();
  const [searchKey, setSearchKey] = useState('');
  const [viewMode, setViewMode] = useState(TasksViewMode.LIST);

  // Temporary code before API integration
  const date: DateTime = DateTime.local();
  const deadlineTime: DateTime = DateTime.local();
  const dateAfterFourDays: DateTime = date.plus({ days: 4 });
  const tasks: Task[] = [
    {
      id: 11,
      taskId: 'BRC-11',
      title: 'Rewrite Query Caching Logic',
      label: TaskLabel.business,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.medium,
      status: TaskStatus.todo,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 12,
      taskId: 'BRC-12',
      title: 'Invalid Emails Throw an Error',
      label: TaskLabel.private,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.high,
      status: TaskStatus.todo,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 13,
      taskId: 'BRC-13',
      title: "New Emojis Don't Render",
      label: TaskLabel.private,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.medium,
      status: TaskStatus.todo,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 14,
      taskId: 'BRC-14',
      title: 'Excel Imports >20Mb Fail',
      label: TaskLabel.business,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.high,
      status: TaskStatus.inProgress,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 15,
      taskId: 'BRC-15',
      title: "New Emojis Don't Render",
      label: TaskLabel.followUp,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.medium,
      status: TaskStatus.inProgress,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 16,
      taskId: 'BRC-16',
      title: 'Rewrite Query Caching Logic',
      label: TaskLabel.private,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.medium,
      status: TaskStatus.inProgress,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 17,
      taskId: 'BRC-17',
      title: 'Rewrite Query Caching Logic',
      label: TaskLabel.followUp,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.medium,
      status: TaskStatus.inProgress,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 18,
      taskId: 'BRC-18',
      title: 'Excel Imports >20Mb Fail',
      label: TaskLabel.followUp,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.high,
      status: TaskStatus.blocked,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
    {
      id: 19,
      taskId: 'BRC-19',
      title: 'Rewrite Query Caching Logic',
      label: TaskLabel.business,
      startDate: date,
      deadlineDate: dateAfterFourDays,
      deadlineTime,
      expireDate: dateAfterFourDays,
      priority: TaskPriority.medium,
      status: TaskStatus.blocked,
      assignedTo: {
        id: 1,
        name: 'Marius Nowak',
      },
    },
  ];

  const tasksCount = tasks.length;
  const completedTasksCount = tasks.filter(task => task.status === TaskStatus.done).length;

  return (
    <Grid container className={classes.root} direction="column">
      <Grid
        item
        xs={12}
        container
        alignItems="center"
        justify="space-between"
        className={clsx(classes.flexGrowZero, classes.modeSelectorContainer)}
      >
        <Grid item xs={3}>
          {tasksCount === completedTasksCount && <TasksNoTaskMessage />}
          {tasksCount > completedTasksCount && <TasksStatusMessage tasks={tasksCount} done={completedTasksCount} />}
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
      <Grid item xs={12}>
        <TasksDateSection tab={tab} />
      </Grid>
      <Grid
        item
        xs={12}
        className={clsx(
          classes.flexGrowOne,
          classes.flexRow,
          viewMode === TasksViewMode.SWIMLANE && classes.swimlaneWrapper,
        )}
      >
        {viewMode === TasksViewMode.SWIMLANE && <TasksSwimlane tasks={tasks} />}
        {viewMode === TasksViewMode.LIST && <TasksList tasks={tasks} />}
      </Grid>
    </Grid>
  );
};
