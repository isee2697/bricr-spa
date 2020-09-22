import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';
import withStyles from '@material-ui/core/styles/withStyles';

import { useLocale } from 'hooks/useLocale/useLocale';
import {
  Card,
  CardHeader,
  CardContent,
  Chip,
  Typography,
  IconButton,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Scrollable,
} from 'ui/atoms';
import { AddIcon, CheckIcon, CloseIcon, NewConstructionIcon } from 'ui/atoms/icons';

import { Timeline } from './CrmRelationsDetailsDashboardBoardsTimeline.types';
import { useStyles } from './CrmRelationsDetailsDashboardBoardsTimeline.styles';

const TimelineStepConnector = withStyles(theme => ({
  line: {
    borderColor: theme.palette.green.main,
    borderLeftWidth: 2,
    minHeight: 66,
  },
}))(StepConnector);

export const CrmRelationsDetailsDashboardBoardsTimeline = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const timelineItems: Timeline[] = [
    {
      status: 'done',
      date: DateTime.local(),
      title: 'Sign a deed of purchase',
    },
    {
      status: 'done',
      date: DateTime.local(),
      title: 'Sign a deed of purchase',
    },
    {
      status: 'expired',
      date: DateTime.local(),
      title: 'Sign a deed of purchase',
    },
    {
      status: 'done',
      date: DateTime.local(),
      title: 'Sign a deed of purchase',
    },
    {
      status: 'expired',
      date: DateTime.local(),
      title: 'Sign a deed of purchase',
    },
    {
      status: 'done',
      date: DateTime.local(),
      title: 'Sign a deed of purchase',
    },
  ];

  return (
    <Card>
      <CardHeader
        title={
          <>
            {formatMessage({ id: 'crm.details.dashboard.timeline' })}
            <Chip size="small" label={136} color="primary" />
          </>
        }
        action={
          <IconButton aria-label="add" color="primary" size="small">
            <AddIcon color="inherit" />
          </IconButton>
        }
      />
      <CardContent className={classes.stepperWrapper}>
        <Scrollable className={classes.scrollable} width="auto" height={421} noBottomScroller={true}>
          <Stepper
            orientation="vertical"
            className={classes.stepper}
            connector={<TimelineStepConnector className={classes.stepConnector} />}
          >
            {timelineItems.map((timeline, index) => (
              <Step key={index}>
                <StepLabel
                  StepIconComponent={() =>
                    timeline.status === 'done' ? (
                      <CheckIcon className={classes.checkIcon} color="inherit" />
                    ) : (
                      <CloseIcon className={classes.closeIcon} color="inherit" />
                    )
                  }
                  className={classes.stepLabel}
                  classes={{ labelContainer: classes.stepLabelContainer }}
                >
                  <Box display="flex" className={classes.stepLabelContent}>
                    <Box mr={3}>
                      <Typography
                        variant="h5"
                        className={clsx(
                          classes.timelineStatus,
                          timeline.status === 'done' ? classes.green : classes.red,
                        )}
                      >
                        {timeline.status === 'done'
                          ? formatMessage({
                              id: 'crm.details.dashboard.timeline.done',
                            })
                          : formatMessage({
                              id: 'crm.details.dashboard.timeline.expired',
                            })}
                      </Typography>
                      <Typography variant="h6" className={classes.timelineDate}>
                        {timeline.date.toLocaleString(DateTime.DATETIME_SHORT).split(', ')[0]}
                      </Typography>
                      <Typography variant="h6" className={classes.timelineTime}>
                        {timeline.date.toLocaleString(DateTime.DATETIME_SHORT).split(', ')[1]}
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <NewConstructionIcon className={classes.timelineTitleIcon} />
                      <Typography variant="h5" className={classes.timelineTitle}>
                        {timeline.title}
                      </Typography>
                    </Box>
                  </Box>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Scrollable>
      </CardContent>
    </Card>
  );
};
