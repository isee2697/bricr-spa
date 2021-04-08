import { DateTime } from 'luxon';
import React, { useState } from 'react';

import { ContractStepType } from 'app/pimDetails/sections/documents/documentDetails/documentContract/DocumentContract.types';
import { Avatar, Box, IconButton, Step, StepContent, Stepper, Typography } from 'ui/atoms';
import { EditIcon } from 'ui/atoms/icons';
import { StageIcon } from 'ui/molecules/propertyStage/stageIcon/StageIcon';

import { useStyles, Connector, Labels } from './ContractConfigureItems.styles';
import { ContractConfigureItemsProps } from './ContractConfigureItems.types';

export const ContractConfigureItems = ({ data }: ContractConfigureItemsProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const classes = useStyles();

  return (
    <Stepper activeStep={currentStep} connector={<Connector />} className={classes.stepper} orientation="vertical">
      {data.steps.map(({ id, type, title, modifiedAt, users, description }, index) => (
        <Step key={title} className={classes.step} onClick={() => setCurrentStep(index)}>
          <Labels StepIconComponent={StageIcon}>
            <Box display="flex" alignItems="flex-start">
              <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Box my={0.5}>
                  <Typography variant="h5">{title}</Typography>
                </Box>
                {modifiedAt ? (
                  <Typography variant="h6" className={classes.date}>
                    {DateTime.fromJSDate(new Date(modifiedAt)).toFormat('dd-MM-yyyy')}
                  </Typography>
                ) : null}
              </Box>
              {type === ContractStepType.Seller ||
              type === ContractStepType.Buyer ||
              type === ContractStepType.Notary ? (
                <IconButton onClick={() => {}}>
                  <EditIcon color="inherit" fontSize="small" />
                </IconButton>
              ) : null}
            </Box>
          </Labels>
          {users?.length ? (
            <StepContent>
              {users.map((user: string, index: number) => (
                <Box mb={1} display="flex" alignItems="center">
                  <Avatar size="small" className={classes.avatar}>
                    <Typography variant="h6">
                      {user
                        .match(/\b(\w)/g)
                        ?.join('')
                        .slice(0, 2)}
                    </Typography>
                  </Avatar>
                  <Typography variant="h5" className={classes.boldText}>
                    {user}
                  </Typography>
                </Box>
              ))}
            </StepContent>
          ) : description ? (
            <StepContent>
              <Typography variant="h5" className={classes.boldText}>
                {description}
              </Typography>
            </StepContent>
          ) : null}
        </Step>
      ))}
    </Stepper>
  );
};
