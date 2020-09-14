import React, { useState, useEffect } from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { SimpleSearch } from 'ui/molecules';
import { Grid, IconButton } from 'ui/atoms';
import { ListIcon } from 'ui/atoms/icons/list/ListIcon';
import { SwimlaneIcon } from 'ui/atoms/icons/swimlane/SwimlaneIcon';
import { ManageIcon } from 'ui/atoms/icons/manage/ManageIcon';
import { Task, TaskStatus, DateRange } from 'api/types';
import { TasksNoTaskMessage } from '../tasksNoTaskMessage/TasksNoTaskMessage';
import { TasksStatusMessage } from '../tasksStatusMessage/TasksStatusMessage';
import { TasksViewMode } from '../Tasks.enum';
import { TasksDateSection } from '../tasksDateSection/TasksDateSection';
import { TaskViewContainer } from '../taskView/TaskViewContainer';
import { TasksTab } from '../Tasks.types';

import { useStyles } from './TasksContent.styles';
import { TasksContentProps } from './TasksContent.types';

export const TasksContent = ({ tab, selectedMembers }: TasksContentProps) => {
  const classes = useStyles();
  const [searchKey, setSearchKey] = useState('');
  const [viewMode, setViewMode] = useState(TasksViewMode.Swimlane);
  const [dateRange, setDateRange] = useState<DateRange>({
    to: DateTime.local().toISO(),
  });

  useEffect(() => {
    switch (tab) {
      case TasksTab.Today:
        setDateRange({
          to: DateTime.local().toISO(),
        });
        break;

      case TasksTab.NextWeek:
        setDateRange({
          from: DateTime.local()
            .plus({ days: 1 })
            .toISO(),
          to: DateTime.local()
            .plus({ days: 7 })
            .toISO(),
        });
        break;

      case TasksTab.Future:
        setDateRange({
          from: DateTime.local()
            .plus({ days: 8 })
            .toISO(),
        });
        break;

      case TasksTab.Overdue:
        setDateRange({
          to: DateTime.local()
            .minus({ days: 1 })
            .toISO(),
        });
        break;

      default:
        return;
    }
  }, [tab]);

  // Temporary code before API integration
  const tasks: Task[] = [];

  const tasksCount = tasks.length;
  const completedTasksCount = tasks.filter(task => task.status === TaskStatus.Done).length;

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
            <IconButton classes={{ root: classes.sortIcon }} onClick={() => setViewMode(TasksViewMode.Swimlane)}>
              <SwimlaneIcon color={viewMode === TasksViewMode.Swimlane ? 'primary' : 'inherit'} />
            </IconButton>
            <IconButton classes={{ root: classes.sortIcon }} onClick={() => setViewMode(TasksViewMode.List)}>
              <ListIcon color={viewMode === TasksViewMode.List ? 'primary' : 'inherit'} />
            </IconButton>
            <IconButton classes={{ root: classes.sortIcon }}>
              <ManageIcon color="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TasksDateSection tab={tab} handleSetDateRange={(range: DateRange) => setDateRange(range)} />
      </Grid>
      <Grid
        item
        xs={12}
        className={clsx(
          classes.flexGrowOne,
          classes.flexRow,
          viewMode === TasksViewMode.Swimlane && classes.swimlaneWrapper,
        )}
      >
        <TaskViewContainer
          viewMode={viewMode}
          search={searchKey}
          selectedMembers={selectedMembers}
          dateRange={dateRange}
        />
      </Grid>
    </Grid>
  );
};
