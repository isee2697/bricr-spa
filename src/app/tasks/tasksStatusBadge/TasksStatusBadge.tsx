import React from 'react';
import clsx from 'classnames';
import { Typography, Emoji } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { TaskStatus } from 'api/types';

import { TasksStatusBadgeProps } from './TasksStatusBadge.types';
import { useStyles } from './TasksStatusBadge.styles';

export const TasksStatusBadge = ({ status }: TasksStatusBadgeProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  switch (status) {
    case TaskStatus.ToDo:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backGrayLight, classes.gray)}>
          <Emoji>{`⏱ ${formatMessage({ id: 'tasks.todo' })}`}</Emoji>
        </Typography>
      );

    case TaskStatus.InProgress:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backYellowLight, classes.yellow)}>
          <Emoji>{`🔥 ${formatMessage({ id: 'tasks.in_progress' })}`}</Emoji>
        </Typography>
      );

    case TaskStatus.Blocked:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backRedLight, classes.red)}>
          <Emoji>{`⛔️ ${formatMessage({ id: 'tasks.blocked' })}`}</Emoji>
        </Typography>
      );

    case TaskStatus.Done:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backGreenLight, classes.green)}>
          <Emoji>{`✅ ${formatMessage({ id: 'tasks.done' })}`}</Emoji>
        </Typography>
      );

    default:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backGrayLight, classes.gray)}>
          <Emoji>{`✅ ${formatMessage({ id: 'tasks.done' })}`}</Emoji>
        </Typography>
      );
  }
};
