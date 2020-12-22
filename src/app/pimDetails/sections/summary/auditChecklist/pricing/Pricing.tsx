import React from 'react';
import { DateTime } from 'luxon';

import { Card, CardHeader, CardContent, Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { EuroIcon } from 'ui/atoms/icons';
import { AuditChecklistCardProps } from '../AuditChecklist.types';

import { useStyles } from './Pricing.styles';

export const Pricing = ({ summary: { pricing } }: AuditChecklistCardProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.pricing.title' })} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.asking_price' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              <EuroIcon className={classes.detailItemIcon} /> 245000
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.acceptance' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {formatMessage({ id: 'pim_details.summary.pricing.in_construction' })}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.per_date' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {DateTime.local().toLocaleString(DateTime.DATE_SHORT)}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.woz_value' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              <EuroIcon className={classes.detailItemIcon} /> 245000
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.reference_date' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {DateTime.local().toLocaleString(DateTime.DATE_SHORT)}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.real_estate_tax_user' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              <EuroIcon className={classes.detailItemIcon} /> 245000
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.payments_frequency' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {formatMessage({ id: 'pim_details.summary.pricing.payments_frequency.per_year' })}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.real_estate_tax_business' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              <EuroIcon className={classes.detailItemIcon} /> 245000
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.payments_frequency' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {formatMessage({ id: 'pim_details.summary.pricing.payments_frequency.per_year' })}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
