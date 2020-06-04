import React from 'react';

import { Button, Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { GenericField } from 'form/fields';
import { EditIcon } from 'ui/atoms/icons';
import { PimDetailsHeader } from '../../pimDetailsHeader/PimDetailsHeader';
import { PimDetailsSectionProps } from '../../PimDetails.types';

import { EnergyForm } from './forms/EnergyForm';
import { ApprovalsForm } from './forms/ApprovalsForm';
import { ObligationForm } from './forms/ObligationForm';

export const Specification = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onOpenSidebar={onOpenSidebar}
        action={
          <Button
            color="primary"
            startIcon={<EditIcon color="inherit" />}
            variant="contained"
            onClick={() => {}}
            size="small"
          >
            {formatMessage({ id: 'pim_details.specification.add_property_button' })}
          </Button>
        }
      />
      <Grid xs={12} item>
        <Typography variant="h1">{formatMessage({ id: 'pim_details.specification.title' })}</Typography>
        <GenericField
          placeholder="pim_details.specification.description_placeholder"
          name="specification.description"
        />
      </Grid>
      <Grid item xs={12}>
        <EnergyForm />
      </Grid>
      <Grid item xs={12}>
        <ApprovalsForm />
      </Grid>
      <Grid item xs={12}>
        <ObligationForm />
      </Grid>
    </>
  );
};
