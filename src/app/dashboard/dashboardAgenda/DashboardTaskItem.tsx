import React from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

import { Box, Typography } from 'ui/atoms';
import { Task } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { useStyles } from './DashboardAgenda.styles';

export const DashboardTaskItem = ({ id, deadline, title }: Task) => {
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <Box
      alignItems="center"
      display="flex"
      flexWrap="nowrap"
      className={classes.task}
      onClick={() => push(AppRoute.taskDetails.replace(':id', id))}
    >
      <Box className={classes.date}>
        <Typography className={classes.startDate} variant="h5">
          {deadline ? DateTime.fromISO(deadline).toLocaleString(DateTime.DATE_MED) : '-'}
        </Typography>
      </Box>
      <Box className={classes.title}>{title}</Box>
    </Box>
  );
};
