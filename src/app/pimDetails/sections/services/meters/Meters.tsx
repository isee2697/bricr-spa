import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useLocale } from 'hooks';
import { ServicesMetersProps } from '../Services.types';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';

export const Meters = ({ type, title, isSidebarVisible, onOpenSidebar, pim, onSave }: ServicesMetersProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Grid xs={12} item>
        <Typography variant="h1">{formatMessage({ id: `dictionaries.meter_type.${type}` })}</Typography>
        <AutosaveForm onSave={onSave} subscription={{}}>
          <GenericField placeholder="pim_details.services.description_placeholder" name="services.description" />
        </AutosaveForm>
      </Grid>
    </>
  );
};
