import React from 'react';

import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { MenuIcon, WarningIcon } from 'ui/atoms/icons';
import { ServiceType } from 'api/types';
import { GenericField } from 'form/fields';
import { AutosaveForm } from 'ui/organisms';

import { ServiceTypeList } from './serviceTypeList/ServiceTypeList';
import { ServicesProps } from './Services.types';
import { useStyles } from './Services.styles';

export const Services = ({ pimServices, onSave }: ServicesProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Grid xs={12} item>
          <Typography className={classes.title} variant="h1">
            {formatMessage({ id: 'pim_details.services.title' })}
          </Typography>
          <div className={classes.iconsHolder}>
            <WarningIcon />
            <MenuIcon />
          </div>
        </Grid>
        <Grid xs={12} item>
          <AutosaveForm onSave={() => Promise.resolve({ error: false })}>
            <GenericField
              placeholder="pim_details.services.description_placeholder"
              name="pim_details.services.description"
            />
          </AutosaveForm>
        </Grid>
        <Grid xs={12} item>
          <ServiceTypeList
            emptyEmoji="🚿"
            title="pim_details.services.hot_water"
            items={pimServices.hotWaterSupplies || []}
            type={ServiceType.HotWaterSupplies}
            onSave={onSave}
          />
        </Grid>
        <Grid xs={12} item>
          <ServiceTypeList
            emptyEmoji="🔥"
            title="pim_details.services.heating"
            items={pimServices.heatingSources || []}
            type={ServiceType.HeatingSources}
            onSave={onSave}
          />
        </Grid>
        <Grid xs={12} item>
          <ServiceTypeList
            emptyEmoji="🤔"
            title="pim_details.services.additional"
            items={pimServices.additionalServices || []}
            type={ServiceType.AdditionalServices}
            onSave={onSave}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
