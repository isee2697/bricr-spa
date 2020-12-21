import React from 'react';

import { useLocale } from 'hooks';
import { Box, Card, CardContent, CardHeader, Typography, Grid } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';
import { EuroIcon } from 'ui/atoms/icons';
import { AuditChecklistCardProps } from '../AuditChecklist.types';

import { useStyles } from './Costs.styles';

export const Costs = ({ summary: { costs } }: AuditChecklistCardProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">{formatMessage({ id: 'pim_details.summary.costs.title' })}</Typography>
            <Counter count={5} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        <FormSubSection
          initiallyOpened={false}
          title={
            <>
              <Typography variant="h4" className={classes.index}>
                1
              </Typography>
              <Typography variant="h3">Service</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="h5" className={classes.detailItemLabel}>
                {formatMessage({ id: 'pim_details.summary.costs.service_costs' })}
              </Typography>
              <Typography variant="h4" className={classes.detailItemValue}>
                0 <EuroIcon className={classes.detailItemIcon} />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" className={classes.detailItemLabel}>
                {formatMessage({ id: 'pim_details.summary.costs.payments_frequency' })}
              </Typography>
              <Typography variant="h4" className={classes.detailItemValue}>
                -
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" className={classes.detailItemLabel}>
                {formatMessage({ id: 'pim_details.summary.costs.vat_taxed_service_costs' })}
              </Typography>
              <Typography variant="h4" className={classes.detailItemValue}>
                0 <EuroIcon className={classes.detailItemIcon} />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" className={classes.detailItemLabel}>
                {formatMessage({ id: 'pim_details.summary.costs.vat_percentage' })}
              </Typography>
              <Typography variant="h4" className={classes.detailItemValue}>
                0%
              </Typography>
            </Grid>
          </Grid>
        </FormSubSection>
      </CardContent>
    </Card>
  );
};
