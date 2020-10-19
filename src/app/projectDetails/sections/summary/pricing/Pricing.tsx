import React from 'react';

import { Card, CardHeader, CardContent, Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { EuroIcon } from 'ui/atoms/icons';

import { useStyles } from './Pricing.styles';

export const Pricing = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.pricing.title' })} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.price_from' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              <EuroIcon className={classes.detailItemIcon} /> 245000000
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.price_to' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              <EuroIcon className={classes.detailItemIcon} /> 245000000
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.ground_interest' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              10%
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.building_interest' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              10%
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.interest_days' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              45
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.suspensice_conditions' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Lorem ipsum
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
