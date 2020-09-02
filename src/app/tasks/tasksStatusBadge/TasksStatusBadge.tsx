import React from 'react';
import clsx from 'classnames';

import { Typography, Emoji } from 'ui/atoms';
import { TaskStatus } from '../Tasks.enum';

import { TasksStatusBadgeProps } from './TasksStatusBadge.types';
import { useStyles } from './TasksStatusBadge.styles';

export const TasksStatusBadge = ({ status }: TasksStatusBadgeProps) => {
  const classes = useStyles();

  switch (status) {
    case TaskStatus.TODO:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backGrayLight, classes.gray)}>
          <Emoji>{'⏱ To do'}</Emoji>
        </Typography>
      );

    case TaskStatus.IN_PROGRESS:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backYellowLight, classes.yellow)}>
          <Emoji>{'🔥 In progress'}</Emoji>
        </Typography>
      );

    case TaskStatus.BLOCKED:
      return (
        <Typography variant="h5" className={clsx(classes.root, classes.backRedLight, classes.red)}>
          <Emoji>{'⛔️ Blocked'}</Emoji>
        </Typography>
      );

    case TaskStatus.DONE:
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
