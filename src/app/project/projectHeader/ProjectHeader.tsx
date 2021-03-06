import React from 'react';

import { Grid, Typography, Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { useLocale, useModalDispatch } from 'hooks';
import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';
import { useGetProjectType } from 'app/project/useGetProjectType/useGetProjectType';

export const ProjectHeader = () => {
  const projectType = useGetProjectType();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  return (
    <Grid container xs={12} item justify="space-between">
      <Typography variant="h1">{formatMessage({ id: 'pim.title' })}</Typography>
      <Button
        color="primary"
        variant="contained"
        onClick={() => open('add-new-pim', { propertyCategory: PropertyCategory.PROJECT, projectType })}
        startIcon={<AddIcon color="inherit" />}
        size="small"
      >
        {formatMessage({ id: 'pim.nc_add' })}
      </Button>
    </Grid>
  );
};
