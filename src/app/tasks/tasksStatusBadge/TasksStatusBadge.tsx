import React from 'react';
import clsx from 'classnames';

import { Typography, Emoji } from 'ui/atoms';
import { TaskStatus } from '../Tasks.enum';

import { TasksStatusBadgeProps } from './TasksStatusBadge.types';
import { useStyles } from './TasksStatusBadge.styles';

export const TasksStatusBadge = ({ status }: TasksStatusBadgeProps) => {
  const classes = useStyles();

  switch (status) {
    case TaskStatus.todo:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backGrayLight, classes.gray)}>
          <Emoji>{'⏱ To do'}</Emoji>
        </Typography>
      );

    case TaskStatus.inProgress:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backYellowLight, classes.yellow)}>
          <Emoji>{'🔥 In progress'}</Emoji>
        </Typography>
      );

    case TaskStatus.blocked:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backRedLight, classes.red)}>
          <Emoji>{'⛔️ Blocked'}</Emoji>
        </Typography>
      );

    case TaskStatus.done:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backGreenLight, classes.green)}>
          <Emoji>{'✅ Done'}</Emoji>
        </Typography>
      );

    default:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backGrayLight, classes.gray)}>
          <Emoji>{'⏱ To do'}</Emoji>
        </Typography>
      );
  }
};
