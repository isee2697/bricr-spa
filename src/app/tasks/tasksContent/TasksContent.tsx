import React from 'react';
import clsx from 'classnames';
import { SimpleSearch } from 'ui/molecules';
import { Grid, IconButton } from 'ui/atoms';
import { ListIcon } from 'ui/atoms/icons/list/ListIcon';
import { SwimlaneIcon } from 'ui/atoms/icons/swimlane/SwimlaneIcon';
import { ManageIcon } from 'ui/atoms/icons/manage/ManageIcon';
import { DateRange, TaskStatus } from 'api/types';
import { TasksNoTaskMessage } from '../tasksNoTaskMessage/TasksNoTaskMessage';
import { TasksStatusMessage } from '../tasksStatusMessage/TasksStatusMessage';
import { TasksViewMode } from '../Tasks.enum';
import { TasksDateSection } from '../tasksDateSection/TasksDateSection';
import { TasksSwimlane } from '../tasksSwimlane/TasksSwimlane';
import { TasksList } from '../tasksList/TasksList';

import { useStyles } from './TasksContent.styles';
import { TasksContentProps } from './TasksContent.types';

export const TasksContent = ({
  tab,
  tasks,
  tasksSummaryByStatus,
  searchKey,
  viewMode,
  onChangeSearchKey,
  onChangeViewMode,
  onChangeDateRange,
  onUpdateTaskStatus,
}: TasksContentProps) => {
  const classes = useStyles();

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
            <SimpleSearch onChange={v => onChangeSearchKey(v.currentTarget.value)} value={searchKey} />
            <IconButton classes={{ root: classes.sortIcon }} onClick={() => onChangeViewMode(TasksViewMode.Swimlane)}>
              <SwimlaneIcon color={viewMode === TasksViewMode.Swimlane ? 'primary' : 'inherit'} />
            </IconButton>
            <IconButton classes={{ root: classes.sortIcon }} onClick={() => onChangeViewMode(TasksViewMode.List)}>
              <ListIcon color={viewMode === TasksViewMode.List ? 'primary' : 'inherit'} />
            </IconButton>
            <IconButton classes={{ root: classes.sortIcon }}>
              <ManageIcon color="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TasksDateSection tab={tab} handleSetDateRange={(range: DateRange) => onChangeDateRange(range)} />
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
        {viewMode === TasksViewMode.Swimlane && (
          <TasksSwimlane
            tab={tab}
            tasks={tasks}
            onUpdateTaskStatus={onUpdateTaskStatus}
            tasksSummaryByStatus={tasksSummaryByStatus}
          />
        )}
        {viewMode === TasksViewMode.List && <TasksList tasks={tasks} />}
      </Grid>
    </Grid>
  );
};
