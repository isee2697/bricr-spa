import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory, useParams } from 'react-router';

import { Box, Chip, Loader, Step, Stepper, Typography } from 'ui/atoms';
import { StageIcon } from 'ui/molecules/propertyStage/stageIcon/StageIcon';
import { CheckIcon, CloseIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';

import { QuestionaireConfigureItemsProps } from './QuestionaireConfigureItems.types';
import { useStyles, Connector, Labels } from './QuestionaireConfigureItems.styles';

export const QuestionaireConfigureItems = ({ isLoading, groups }: QuestionaireConfigureItemsProps) => {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(0);
  const { category, id } = useParams<{ category: string; id: string }>();
  const { push } = useHistory();

  const path = `${AppRoute.dms}/templates/questionnaire/${category}/${id}/configureSettings`;

  return (
    <Stepper activeStep={currentStep} connector={<Connector />} className={classes.stepper} orientation="vertical">
      {isLoading && <Loader />}
      {groups.map(({ id, groupName }, index) => (
        <Step
          completed={index < currentStep}
          key={id}
          className={`${classes.step} ${index < currentStep && classes.completed}`}
          onClick={() => {
            push(`${path}?groupId=${id}`);
            setCurrentStep(index);
          }}
        >
          <Labels
            completed={index < currentStep}
            icon={<StageIcon active={currentStep === index} completed={index < currentStep} icon={index} />}
          >
            <Box display="flex" alignItems="flex-start" justifyContent="space-between">
              <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Box my={0.5}>
                  <Typography variant="h5">{groupName}</Typography>
                </Box>
                <Typography variant="h6" className={classes.date}>
                  {DateTime.local().toFormat('dd-MM-yyyy')}
                </Typography>
              </Box>
              {index ? (
                <Box display="flex" flexDirection="column" alignItems="flex-start" ml={2}>
                  <Box display="flex" alignItems="center">
                    <Box display="flex" alignItems="center" className={classes.checkIcon}>
                      <CheckIcon color="inherit" fontSize="small" />
                    </Box>
                    <Chip className={classes.chipText} label={'-'} />
                  </Box>
                  <Box display="flex" alignItems="center" mt={0.5}>
                    <Box display="flex" alignItems="center" className={classes.closeIcon}>
                      <CloseIcon color="inherit" fontSize="small" />
                    </Box>
                    <Chip className={classes.chipText} label={'-'} />
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
