import React from 'react';

import { CreateWizardStepProps } from '../CreateWizard.types';
import { Box, Button } from 'ui/atoms';
import { useLocale } from 'hooks';

import { Tags } from './sections/tags/Tags';
import { Couples } from './sections/couples/Couples';
import { Documents } from './sections/documents/Documents';
import { General } from './sections/general/General';

export const FilteringPeopleStep = ({ onNextStep, onPreviousStep }: CreateWizardStepProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <General />
      <Documents />
      <Couples />
      <Tags />
      <Box mt={3} display="flex" justifyContent="space-between" width="100%">
        <Button variant="outlined" color="primary" onClick={onPreviousStep}>
          {formatMessage({ id: 'project_details.allocate_results.steps.go_to_step2' })}
        </Button>
        <Button variant="outlined" color="primary" onClick={onNextStep}>
          {formatMessage({ id: 'project_details.allocate_results.steps.go_to_step4' })}
        </Button>
      </Box>
    </>
  );
};
