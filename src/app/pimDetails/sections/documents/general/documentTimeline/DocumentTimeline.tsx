import React from 'react';
import clsx from 'classnames';
import { withStyles } from '@material-ui/core';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stepper,
  StepConnector,
  Step,
  StepLabel,
  Typography,
  Chip,
  PersonChip,
} from 'ui/atoms';
import { ArrowUpIcon, CheckIcon, ManageIcon, MenuIcon } from 'ui/atoms/icons';
import { QuestionStepStatus } from '../../documentDetails/documentQuestionnaire/DocumentQuestionnaire.types';

import { useStyles } from './DocumentTimeline.styles';
import { DocumentTimelineProps } from './DocumentTimeline.types';

const TimelineStepConnector = withStyles(theme => ({
  alternativeLabel: {
    left: `calc(-100% + ${theme.spacing(3)}px)`,
    right: '100%',
  },
  active: {
    '& $line': {
      background: theme.palette.green.main,
    },
  },
  completed: {
    '& $line': {
      background: theme.palette.green.main,
    },
  },
  line: {
    background: theme.palette.gray.light,
    borderTopWidth: 0,
    minHeight: 2,
    height: 2,
  },
}))(StepConnector);

export const DocumentTimeline = ({ type, data }: DocumentTimelineProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: `pim_details.documents.document_folders.timeline` }, { type })}
        action={
          <Box display="flex">
            <IconButton size="small" variant="roundedContained">
              <ManageIcon />
            </IconButton>
            <Box ml={2} />
            <IconButton size="small" variant="roundedContained">
              <ArrowUpIcon />
            </IconButton>
          </Box>
        }
      />
      <CardContent>
        {data.map(item => (
          <Box
            pt={2}
            pb={1}
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            className={classes.steopItem}
          >
            <Box>
              {item.users.map((user, index) => (
                <PersonChip name={`${user.firstName} ${user.lastName}`} image={user.image?.url || ''} />
              ))}
            </Box>
            <Box width="60%" display="flex" alignItems="flex-start" className={classes.stepperWrapper}>
              <Stepper
                variant="elevation"
                alternativeLabel
                nonLinear
                connector={<TimelineStepConnector />}
                className={clsx(classes.stepper, !item.isActive && 'inactive')}
              >
                {item.steps.map((timeline, index) => (
                  <Step className={clsx(classes.step, timeline.status)}>
                    <StepLabel
                      optional={
                        <Typography variant="h6" className={classes.stepLabelOptional}>
                          {timeline.modifiedAt
                            ? DateTime.fromISO(timeline.modifiedAt).toLocaleString(DateTime.DATE_SHORT)
                            : '-'}
                        </Typography>
                      }
                      className={clsx(classes.stepLabel, timeline.status)}
                      StepIconComponent={() => {
                        if (timeline.status === QuestionStepStatus.Completed) {
                          return <CheckIcon color="action" className={clsx(classes.stepIcon, timeline.status)} />;
                        } else {
                          return (
                            <Typography variant="h5" className={clsx(classes.stepIcon, timeline.status)}>
                              {index + 1}
                            </Typography>
                          );
                        }
                      }}
                    >
                      {timeline.title}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Box display="flex" alignItems="center">
                <Chip
                  size="small"
                  variant="outlined"
                  label={formatMessage({ id: `common.status.${item.isActive ? 'active' : 'inactive'}` })}
                  className={classes.chip}
                />
                <IconButton size="small" variant="rounded">
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};
