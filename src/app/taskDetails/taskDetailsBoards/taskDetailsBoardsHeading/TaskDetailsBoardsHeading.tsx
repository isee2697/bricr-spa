import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { Paper, Grid, Typography } from 'ui/atoms';
import { PriorityHighIcon, PriorityLowIcon, PriorityMediumIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { TaskPriority } from 'api/types';

import { useStyles } from './TaskDetailsBoardsHeading.styles';
import { TaskDetailsBoardsHeadingProps } from './TaskDetailsBoardsHeading.types';

export const TaskDetailsBoardsHeading = ({ task }: TaskDetailsBoardsHeadingProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const { startDate, deadline, priority } = task;
  const startDateObject = DateTime.fromISO(startDate);
  const deadlineObject = DateTime.fromISO(deadline);
  const remainingMinutes = Math.floor(deadlineObject.diffNow('minutes').minutes);

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.title}>
            {formatMessage({ id: 'tasks.details.start_date' })}
          </Typography>
          <Typography variant="h5" className={classes.value}>
            {startDateObject.toLocaleString(DateTime.DATETIME_MED)}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.title}>
            {formatMessage({ id: 'tasks.details.deadline' })}
          </Typography>
          <Typography variant="h5" className={classes.value}>
            {deadlineObject.toLocaleString(DateTime.DATETIME_MED)}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.title}>
            {formatMessage({ id: 'tasks.details.remainingTime' })}
          </Typography>
          <Typography variant="h5" className={clsx(classes.value, classes.yellow)}>
            {remainingMinutes < 60 * 24
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
                )}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.title}>
            {formatMessage({ id: 'tasks.details.priority' })}
          </Typography>
          <Typography variant="h5" className={classes.value}>
            {priority === TaskPriority.High && (
              <>
                <PriorityHighIcon className={classes.priorityIcon} color="error" />
                {formatMessage({ id: 'tasks.priorities.high' })}
              </>
            )}
            {priority === TaskPriority.Medium && (
              <>
                <PriorityMediumIcon className={classes.priorityIcon} color="error" />
                {formatMessage({ id: 'tasks.priorities.medium' })}
              </>
            )}
            {priority === TaskPriority.Low && (
              <>
                <PriorityLowIcon className={classes.priorityIcon} color="action" />
                {formatMessage({ id: 'tasks.priorities.low' })}
              </>
            )}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
