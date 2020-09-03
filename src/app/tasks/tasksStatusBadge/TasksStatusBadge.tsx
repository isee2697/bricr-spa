import React from 'react';
import clsx from 'classnames';

import { Typography, Emoji } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { TaskStatus } from '../Tasks.enum';

import { TasksStatusBadgeProps } from './TasksStatusBadge.types';
import { useStyles } from './TasksStatusBadge.styles';

export const TasksStatusBadge = ({ status }: TasksStatusBadgeProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  switch (status) {
    case TaskStatus.todo:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backGrayLight, classes.gray)}>
          <Emoji>{`⏱ ${formatMessage({ id: 'tasks.todo' })}`}</Emoji>
        </Typography>
      );

    case TaskStatus.inProgress:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backYellowLight, classes.yellow)}>
          <Emoji>{`🔥 ${formatMessage({ id: 'tasks.in_progress' })}`}</Emoji>
        </Typography>
      );

    case TaskStatus.blocked:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backRedLight, classes.red)}>
          <Emoji>{`⛔️ ${formatMessage({ id: 'tasks.blocked' })}`}</Emoji>
        </Typography>
      );

    case TaskStatus.done:
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
