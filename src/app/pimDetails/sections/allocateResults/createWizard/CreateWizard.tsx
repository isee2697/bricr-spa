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
import { SaveCriteriaModal } from './../saveCriteriaModal/SaveCriteriaModal';

const steps = [
  {
    name: 'settings',
    component: SettingsStep,
  },
  {
    name: 'filtering',
    component: FilteringPeopleStep,
  },
  {
    name: 'conditions',
    component: ReservationsAndConditionsStep,
  },
  {
    name: 'sorting',
    component: SortingStep,
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

export const CreateWizard = ({ onGotoResult, onSaveCriteria }: CreateWizardProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [showSaveModal, setShowSaveModal] = useState(false);

  const handleGoToNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setShowSaveModal(true);
    }
  };

  const handleGoToPreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleNavigateStep = (step: number) => {
    if (step === steps.length) {
      setShowSaveModal(true);
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
        <Step className={classes.step}>
          <StepButton onClick={() => handleNavigateStep(4)} className={clsx(classes.stepLabel, classes.lastLabel)}>
            {formatMessage({ id: `pim_details.allocate_results.wizard_step.result` })}
          </StepButton>
        </Step>
      </Stepper>
      {React.createElement(steps[activeStep].component, {
        onNextStep: handleGoToNextStep,
        onPreviousStep: handleGoToPreviousStep,
      })}
      {showSaveModal && (
        <SaveCriteriaModal
          isOpen={showSaveModal}
          onClose={() => setShowSaveModal(false)}
          onGotoResult={() => {
            onGotoResult?.();
            setShowSaveModal(false);
          }}
          onSaveCriteria={() => {
            onSaveCriteria?.();
            setShowSaveModal(false);

            return new Promise(resolve => undefined);
          }}
        />
      )}
    </Page>
  );
};
