import React from 'react';
import arrayMutators from 'final-form-arrays';

import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { HelpIcon, MenuIcon } from 'ui/atoms/icons';

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
          <Grid xs={12} item className={classes.header}>
            <Typography className={classes.title} variant="h1">
              {formatMessage({ id: 'pim_details.services.title' })}
            </Typography>
            <div className={classes.iconsHolder}>
              <HelpIcon />
              <MenuIcon />
            </div>
            <GenericField placeholder="pim_details.services.description_placeholder" name="services.description" />
          </Grid>
          <Grid xs={12} item>
            <ServiceTypeList
              emptyEmoji="🚿"
              title="pim_details.services.hot_water"
              items={(pim.services && pim.services.hotWater) || []}
              type="HotWater"
            />
          </Grid>
          <Grid xs={12} item>
            <ServiceTypeList
              emptyEmoji="🔥"
              title="pim_details.services.heating"
              items={(pim.services && pim.services.heating) || []}
              type="Heating"
            />
          </Grid>
          <Grid xs={12} item>
            <ServiceTypeList
              emptyEmoji="🤔"
              title="pim_details.services.additional"
              items={(pim.services && pim.services.additional) || []}
              type="Additional"
            />
          </Grid>
        </Grid>
      </AutosaveForm>
    </Grid>
  );
};
