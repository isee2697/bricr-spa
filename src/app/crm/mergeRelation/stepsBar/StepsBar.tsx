import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core';

import { Box, Typography, Step, Stepper, StepButton, StepConnector } from 'ui/atoms';
import { useLocale } from 'hooks';

import { useStyles } from './StepsBar.styles';
import { StepsBarProps } from './StepsBar.types';

const TimelineStepConnector = withStyles(theme => ({
  alternativeLabel: {
    top: 0,
    left: `calc(-100% + ${theme.spacing(4)}px)`,
    right: `calc(100% - ${theme.spacing(1)}px)`,
    zIndex: -1,
  },
  active: {
    '& $line': {
      borderColor: theme.palette.green.main,
    },
  },
  completed: {
    '& $line': {
      borderColor: theme.palette.green.main,
    },
  },
  line: {
    borderColor: theme.palette.white.main,
    borderTopWidth: 2,
    minHeight: theme.spacing(8.25),
  },
}))(StepConnector);

export const StepBar = ({ steps, step, onNavigateStep }: StepsBarProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box className={classes.stepperWrapper} width="100%" mt={3.5}>
      <Typography className={classes.fontWeightBold} variant="h5">
        {formatMessage({ id: 'crm.merge_relation.merge_relations' })}
      </Typography>
      <Box mt={3.5} />
      <Stepper
        variant="elevation"
        alternativeLabel
        nonLinear
        activeStep={step}
        connector={<TimelineStepConnector />}
        className={classes.stepper}
      >
        {steps.map(({ name, optional }, index) => (
          <Step key={name} className={clsx(classes.step, index < step && 'completed')}>
            <StepButton
              disabled={index > step}
              onClick={() => onNavigateStep(index)}
              optional={
                <Typography variant="h6" className={classes.stepLabelOptional}>
                  {formatMessage({ id: `crm.merge_relation.wizard_step.${optional}` })}
                </Typography>
              }
              completed={index < step}
              className={classes.stepLabel}
            >
              {formatMessage({ id: `crm.merge_relation.wizard_step.${name}` })}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
