import React from 'react';
import arrayMutators from 'final-form-arrays';
import { Grid, Typography } from '@material-ui/core';

import { useLocale } from 'hooks';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { BaseService } from 'api/types';
import { MenuIcon, WarningIcon } from 'ui/atoms/icons';

import { ServiceTypeList } from './ServiceTypeList';
import { ServicesProps } from './Services.types';
import { useStyles } from './Services.styles';

export const Services = ({ pim, onSave }: ServicesProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <AutosaveForm initialValues={pim} onSave={onSave} mutators={{ ...arrayMutators }} subscription={{}}>
        <Grid container spacing={3}>
          <Grid xs={12} item>
            <Typography className={classes.title} variant="h1">
              {formatMessage({ id: 'pim_details.services.title' })}
            </Typography>
            <div className={classes.iconsHolder}>
              <WarningIcon />
              <MenuIcon />
            </div>
            <GenericField placeholder="pim_details.services.description_placeholder" name="services.description" />
          </Grid>
          <Grid xs={12} item>
            <ServiceTypeList
              emptyTitle="pim_details.services.hot_water_empty_title"
              emptyDescription="pim_details.services.hot_water_empty_description"
              emptyEmoji="🚿"
              title="pim_details.services.hot_water"
              items={((pim.services && pim.services.hotWater) || []) as BaseService[]}
            />
          </Grid>
          <Grid xs={12} item>
            <ServiceTypeList
              emptyTitle="pim_details.services.heating_empty_title"
              emptyDescription="pim_details.services.heating_empty_description"
              emptyEmoji="🔥"
              title="pim_details.services.heating"
              items={((pim.services && pim.services.heating) || []) as BaseService[]}
            />
          </Grid>
          <Grid xs={12} item>
            <ServiceTypeList
              emptyTitle="pim_details.services.additional_empty_title"
              emptyDescription="pim_details.services.additional_empty_description"
              emptyEmoji="🤔"
              title="pim_details.services.additional"
              items={((pim.services && pim.services.additional) || []) as BaseService[]}
            />
          </Grid>
        </Grid>
      </AutosaveForm>
    </Grid>
  );
};
