import React from 'react';
import { DateTime } from 'luxon';
import clsx from 'classnames';
import { withStyles } from '@material-ui/core';

import { Stepper, StepConnector, Step, StepLabel, Typography } from 'ui/atoms';
import { CheckIcon, CloseIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { InvoiceStepperProps } from './InvoiceStepper.types';
import { useStyles } from './InvoiceStepper.styles';

const StatusStepConnector = withStyles(theme => ({
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

export const InvoiceStepper = ({ steps }: InvoiceStepperProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Stepper
      variant="elevation"
      alternativeLabel
      nonLinear
      connector={<StatusStepConnector />}
      className={classes.stepper}
    >
      {steps.map((step, index) => (
        <Step className={clsx(classes.step, step.status)}>
          <StepLabel
            optional={
              <Typography variant="h6" className={classes.stepLabelOptional}>
                {step.date ? DateTime.fromISO(step.date).toLocaleString(DateTime.DATE_SHORT) : '-'}
              </Typography>
            }
            className={clsx(classes.stepLabel, step.status)}
            StepIconComponent={() => {
              if (step.status === 'rejected') {
                return <CloseIcon color="error" className={clsx(classes.stepIcon, step.status)} />;
              } else if (step.status === 'completed') {
                return <CheckIcon color="action" className={clsx(classes.stepIcon, step.status)} />;
              } else {
                return (
                  <Typography variant="h5" className={clsx(classes.stepIcon, step.status)}>
                    {index}
                  </Typography>
                );
              }
            }}
          >
            {formatMessage({
              id: `dictionaries.document_request_status.${step.step}`,
            })}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
