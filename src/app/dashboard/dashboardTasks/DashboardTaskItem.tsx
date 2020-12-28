import React from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';
import clsx from 'classnames';

import { Typography, UserAvatar, TableRow, TableCell } from 'ui/atoms';
import { Task } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { TasksStatusBadge } from 'app/tasks/tasksStatusBadge/TasksStatusBadge';

import { useStyles } from './DashboardTasks.styles';

export const DashboardTaskItem = ({ id, deadline, title, taskIndex, status }: Task) => {
  const classes = useStyles();
  const { push } = useHistory();
  const { formatMessage } = useLocale();

  const deadlineDate = deadline && DateTime.fromISO(deadline);
  const hoursLeft = deadlineDate && Math.round(deadlineDate.diffNow('hours').hours);

  return (
    <>
      {deadline && (
        <TableRow>
          <TableCell colSpan={5} className={clsx(classes.tableCell, classes.fontWeightBold)}>
            <Typography variant="h3" color="textSecondary">
              {DateTime.fromISO(deadline).toLocaleString(DateTime.TIME_SIMPLE)}
            </Typography>
          </TableCell>
        </TableRow>
      )}
      <TableRow onClick={() => push(AppRoute.taskDetails.replace(':id', id))}>
        <TableCell className={clsx(classes.tableCell, classes.paddingBottom, classes.fontWeightMedium)}>
          {title}
        </TableCell>
        <TableCell className={clsx(classes.tableCell, classes.paddingBottom)}>
          <UserAvatar name={'User'} className={classes.avatar} />
        </TableCell>
        <TableCell className={clsx(classes.tableCell, classes.paddingBottom)}>BRC-{taskIndex}</TableCell>
        <TableCell className={clsx(classes.tableCell, classes.paddingBottom)}>
          {(!hoursLeft || hoursLeft < 0) && '-'}
          {hoursLeft &&
            hoursLeft >= 24 &&
            formatMessage({ id: 'dashboard.tasks_today.days_left' }, { daysLeft: Math.floor(hoursLeft / 24) })}
          {hoursLeft &&
            hoursLeft >= 1 &&
            hoursLeft < 24 &&
            formatMessage({ id: 'dashboard.tasks_today.hours_left' }, { hoursLeft })}
          {hoursLeft && hoursLeft === 0 && (
            <span className={classes.orange}>{formatMessage({ id: 'dashboard.tasks_today.less_than_one_hour' })}</span>
          )}
        </TableCell>
        <TableCell className={clsx(classes.tableCell, classes.paddingBottom)}>
          <TasksStatusBadge status={status} />
        </TableCell>
      </TableRow>
    </>
  );
};
