import React from 'react';
import clsx from 'clsx';

import { Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { StartIcon, EndIcon } from 'ui/atoms/icons';

import { useStyles } from './GeneralTriggerTypes.styles';

export const StartPointStart = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h5" style={{ textTransform: 'uppercase' }}>
        {formatMessage({ id: 'settings.workflow.start' })}
      </Typography>
      <Box ml={1} className={classes.line} />
      <Box className={classes.dashedLine} />
      <Box className={clsx(classes.icon, 'left')}>
        <StartIcon width="30px" height="30px" color="inherit" />
      </Box>
    </Box>
  );
};

export const StartPointOutside = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h5">
        {'< '}
        {formatMessage({ id: 'settings.workflow.outside_workflow' })}
      </Typography>
      <Box ml={1} className={classes.line} />
      <Box className={classes.dashedLine} />
      <Box className={clsx(classes.icon, 'left')}>
        <StartIcon width="30px" height="30px" color="inherit" />
      </Box>
    </Box>
  );
};

export const StartPointPrevious = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" ml={1}>
      <Box className={classes.startCurvedLine} />
      <Box display="flex" alignItems="center">
        <Box className={clsx(classes.icon, 'top')}>
          <StartIcon width="30px" height="30px" color="inherit" />
        </Box>
        <Box ml={3} flex={1}>
          <Typography variant="h5">{formatMessage({ id: 'settings.workflow.previous_workflow' })}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const EndPointEnd = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Box className={clsx(classes.icon, 'right')}>
        <EndIcon width="36px" height="36px" color="inherit" />
      </Box>
      <Box className={classes.dashedLine} />
      <Box mr={1} className={classes.line} />
      <Typography variant="h5" style={{ textTransform: 'uppercase' }}>
        {formatMessage({ id: 'settings.workflow.end' })}
      </Typography>
    </Box>
  );
};

export const EndPointOutside = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Box className={clsx(classes.icon, 'right')}>
        <EndIcon width="36px" height="36px" color="inherit" />
      </Box>
      <Box className={classes.dashedLine} />
      <Box mr={1} className={classes.line} />
      <Typography variant="h5">
        {formatMessage({ id: 'settings.workflow.outside_workflow' })}
        {' >'}
      </Typography>
    </Box>
  );
};

export const EndPointNext = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mr={1}>
      <Box display="flex" alignItems="center">
        <Box mx={2} flex={1}>
          <Typography variant="h5">{formatMessage({ id: 'settings.workflow.next_workflow' })}</Typography>
        </Box>
        <Box className={clsx(classes.icon, 'bottom')}>
          <EndIcon width="36px" height="36px" color="inherit" />
        </Box>
      </Box>
      <Box className={classes.endCurvedLine} />
    </Box>
  );
};
