import React from 'react';

import { Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './TaskDetailsFooter.styles';

export const TaskDetailsFooter = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Typography variant="h5" className={classes.updateInfo}>
      {formatMessage({ id: 'common.last_updated' })}:{' '}
      {formatMessage({ id: 'tasks.details.lastUpdatedBy' }, { date: '25-12-2020, 16-53', user: 'Christian van Gils' })}
    </Typography>
  );
};
