import React, { useState } from 'react';
import clsx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import { Step, Stepper, StepButton, Typography, StepConnector } from 'ui/atoms';
import { Page } from 'ui/templates';
import { useLocale } from 'hooks';

import { useStyles } from './CreateWizard.styles';
import { SettingsStep } from './settingsStep/SettingsStep';
import { FilteringPeopleStep } from './filteringPeopleStep/FilteringPeopleStep';
import { SortingStep } from './sortingStep/SortingStep';
import { ReservationsAndConditionsStep } from './reservationsAndConditionsStep/ReservationsAndConditionsStep';
import { CreateWizardProps } from './CreateWizard.types';

const steps = [
  {
    name: 'settings',
    component: SettingsStep,
  },
  {
    name: 'filteringPeople',
    component: FilteringPeopleStep,
  },
  {
    name: 'reservationsAndConditions',
    component: ReservationsAndConditionsStep,
  },
  {
    name: 'sorting',
    component: SortingStep,
  },
  {
    name: 'result',
    component: SettingsStep,
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
    minHeight: theme.spacing(8.25),
  },
}))(StepConnector);

export const CreateWizard = ({ onCloseWizard }: CreateWizardProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const handleGoToNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleGoToPreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleNavigateStep = (step: number) => {
    if (step === 4) {
      onCloseWizard();
    } else {
      setActiveStep(step);
    }
  };

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
              onClick={() => handleNavigateStep(index)}
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
              {formatMessage({ id: `pim_details.allocate_results.wizard_step.${name}` })}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      {React.createElement(steps[activeStep].component, {
        onNextStep: handleGoToNextStep,
        onPreviousStep: handleGoToPreviousStep,
      })}
    </Page>
  );
};
