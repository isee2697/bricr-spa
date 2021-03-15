import { DateTime } from 'luxon';
import React, { useState } from 'react';

import { Box, Chip, Step, Stepper, Typography } from 'ui/atoms';
import { CheckIcon, CloseIcon } from 'ui/atoms/icons';
import { StageIcon } from 'ui/molecules/propertyStage/stageIcon/StageIcon';

import { Connector, Labels, useStyles } from './QuestionnaireConfigureItems.styles';
import { QuestionnaireConfigureItemsProps } from './QuestoinnaireConfigureItems.types';

export const QuestionnaireConfigureItems = ({ data }: QuestionnaireConfigureItemsProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const classes = useStyles();

  return (
    <Stepper activeStep={currentStep} connector={<Connector />} className={classes.stepper} orientation="vertical">
      {data.steps.map(({ title, modifiedAt, approved, declined, status }, index) => (
        <Step
          completed={index < currentStep}
          key={title}
          className={`${classes.step} ${index < currentStep && classes.completed}`}
          onClick={() => setCurrentStep(index)}
        >
          <Labels
            completed={index < currentStep}
            icon={<StageIcon active={currentStep === index} completed={index < currentStep} icon={index} />}
          >
            <Box display="flex" alignItems="flex-start" justifyContent="space-between">
              <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Box my={0.5}>
                  <Typography variant="h5">{title}</Typography>
                </Box>
                <Typography variant="h6" className={classes.date}>
                  {modifiedAt ? DateTime.fromJSDate(new Date(modifiedAt)).toFormat('dd-MM-yyyy') : '-'}
                </Typography>
              </Box>
              {index ? (
                <Box display="flex" flexDirection="column" alignItems="flex-start" ml={2}>
                  <Box display="flex" alignItems="center">
                    <Box display="flex" alignItems="center" className={classes.checkIcon}>
                      <CheckIcon color="inherit" fontSize="small" />
                    </Box>
                    <Chip className={classes.chipText} label={approved || '-'} />
                  </Box>
                  <Box display="flex" alignItems="center" mt={0.5}>
                    <Box display="flex" alignItems="center" className={classes.closeIcon}>
                      <CloseIcon color="inherit" fontSize="small" />
                    </Box>
                    <Chip className={classes.chipText} label={declined || '-'} />
                  </Box>
                </Box>
              ) : null}
            </Box>
          </Labels>
        </Step>
      ))}
    </Stepper>
  );
};
