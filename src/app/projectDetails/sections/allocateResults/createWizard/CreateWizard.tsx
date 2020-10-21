import React, { useState } from 'react';
import clsx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import { Step, Stepper, StepButton, Typography, StepConnector } from 'ui/atoms';
import { Page } from 'ui/templates';

import { Settings } from './Settings/Settings';
import { useStyles } from './CreateWizard.styles';

const steps = [
  {
    name: 'settings',
    component: <Settings />,
  },
  {
    name: 'filteringProperties',
    component: <Settings />,
  },
  {
    name: 'filteringPeople',
    component: <Settings />,
  },
  {
    name: 'sorting',
    component: <Settings />,
  },
  {
    name: 'result',
    component: <Settings />,
  },
];

const TimelineStepConnector = withStyles(theme => ({
  alternativeLabel: {
    top: 0,
    left: `calc(-50% + ${theme.spacing(1.625)}px)`,
    right: `calc(50% + ${theme.spacing(1.625)}px)`,
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
    minHeight: 66,
  },
}))(StepConnector);

export const CreateWizard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();

  return (
    <Page withoutHeader>
      <Stepper
        variant="elevation"
        alternativeLabel
        nonLinear
        activeStep={activeStep}
        connector={<TimelineStepConnector />}
        className={classes.stepper}
      >
        {steps.map(({ name }, index) => (
          <Step key={name} className={clsx(classes.step, index < activeStep && 'completed')}>
            <StepButton
              onClick={() => setActiveStep(index)}
              optional={
                index <= activeStep && (
                  <>
                    <Typography variant="h6" className={classes.stepLabelOptional}>
                      <b>300</b> Relations
                    </Typography>
                  </>
                )
              }
              completed={index < activeStep}
              className={classes.stepLabel}
            >
              {name}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      {steps[activeStep].component}
    </Page>
  );
};
