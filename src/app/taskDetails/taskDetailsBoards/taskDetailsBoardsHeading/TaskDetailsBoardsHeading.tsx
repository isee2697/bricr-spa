import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { Paper, Grid, Typography } from 'ui/atoms';
import { PriorityHighIcon, PriorityLowIcon, PriorityMediumIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { TaskPriority } from 'api/types';
import { useModalDispatch, useModalState } from 'hooks';
import { TaskDetailsUpdateModal } from '../taskDetailsUpdateModal/TaskDetailsUpdateModal';

import { useStyles } from './TaskDetailsBoardsHeading.styles';
import { TaskDetailsBoardsHeadingProps } from './TaskDetailsBoardsHeading.types';

export const TaskDetailsBoardsHeading = ({ task, onUpdateTask }: TaskDetailsBoardsHeadingProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('update-task-details');

  const { startDate, deadline, priority } = task;
  const remainingMinutes = deadline ? Math.floor(DateTime.fromISO(deadline).diffNow('minutes').minutes) : undefined;

  return (
    <>
      <Paper className={classes.root} onClick={() => open('update-task-details')}>
        <Grid container>
          <Grid item xs={3}>
            <Typography variant="h6" className={classes.title}>
              {formatMessage({ id: 'tasks.details.start_date' })}
            </Typography>
            <Typography variant="h5" className={classes.value}>
              {startDate && DateTime.fromISO(startDate).toLocaleString(DateTime.DATETIME_MED)}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" className={classes.title}>
              {formatMessage({ id: 'tasks.details.deadline' })}
            </Typography>
            <Typography variant="h5" className={classes.value}>
              {deadline && DateTime.fromISO(deadline).toLocaleString(DateTime.DATETIME_MED)}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" className={classes.title}>
              {formatMessage({ id: 'tasks.details.remainingTime' })}
            </Typography>
            <Typography variant="h5" className={clsx(classes.value, classes.yellow)}>
              {remainingMinutes
                ? remainingMinutes < 60 * 24
                  ? remainingMinutes < 60
                    ? formatMessage({ id: 'tasks.details.remainingMinutes' }, { minutes: remainingMinutes })
                    : formatMessage(
                        { id: 'tasks.details.remainingHours' },
                        {
                          hours: Math.floor(remainingMinutes / 60),
                          minutes: remainingMinutes % 60,
                        },
                      )
                  : formatMessage(
                      { id: 'tasks.details.remainingDays' },
                      {
                        days: Math.floor(remainingMinutes / 60 / 24),
                      },
                    )
                : '-'}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" className={classes.title}>
              {formatMessage({ id: 'tasks.details.priority' })}
            </Typography>
            <Typography variant="h5" className={classes.value}>
              {priority === TaskPriority.High && (
                <>
                  <PriorityHighIcon className={classes.priorityIcon} />
                  {formatMessage({ id: 'tasks.priorities.high' })}
                </>
              )}
              {priority === TaskPriority.Medium && (
                <>
                  <PriorityMediumIcon className={classes.priorityIcon} />
                  {formatMessage({ id: 'tasks.priorities.medium' })}
                </>
              )}
              {priority === TaskPriority.Low && (
                <>
                  <PriorityLowIcon className={classes.priorityIcon} />
                  {formatMessage({ id: 'tasks.priorities.low' })}
                </>
              )}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <TaskDetailsUpdateModal
        isOpen={isModalOpen}
        onUpdateTask={onUpdateTask}
        task={task}
        onClose={() => close('update-task-details')}
      />
    </>
  );
};
