import React from 'react';
import arrayMutators from 'final-form-arrays';

import { Grid, Box, Typography, Placeholder } from 'ui/atoms';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { Page } from 'ui/templates';
import { AutosaveForm } from 'ui/organisms';

import { CriteriaTypeForm } from './criteriaTypeForm/CriteriaTypeForm';
import { SegmentationFrom } from './segmentationForm/SegmentationForm';
import { PeopleForm } from './peopleForm/PeopleForm';

export const AllocationMain = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const onSave = async () => {
    try {
      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  return (
    <>
      <Page withoutHeader>
        <Grid xs={12} item>
          <Box display="flex" alignItems="center">
            <Typography variant="h1">{title ? title : <Placeholder variant="text" width={150} />}</Typography>
          </Box>
        </Grid>

        <AutosaveForm mutators={{ ...arrayMutators }} onSave={onSave}>
          <Grid item xs={12}>
            <CriteriaTypeForm />
          </Grid>

          <Grid item xs={12}>
            <PeopleForm />
          </Grid>

          <Grid item xs={12}>
            <SegmentationFrom />
          </Grid>
        </AutosaveForm>
      </Page>
    </>
  );
};
