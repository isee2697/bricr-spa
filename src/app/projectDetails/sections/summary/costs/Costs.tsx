import React from 'react';

import { useLocale } from 'hooks';
import { Box, Card, CardContent, CardHeader, Typography, Grid } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';
import { EuroIcon } from 'ui/atoms/icons';
import { SummaryCardProps } from '../Summary.types';

import { useStyles } from './Costs.styles';

export const Costs = ({ summary: { costs } }: SummaryCardProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">{formatMessage({ id: 'pim_details.summary.costs.title' })}</Typography>
            <Counter count={5} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        {costs &&
          costs.costs &&
          costs.costs.length > 0 &&
          costs.costs.map((cost, index) => (
            <FormSubSection
              initiallyOpened={false}
              title={
                <>
                  <Typography variant="h4" className={classes.index}>
                    {index + 1}
                  </Typography>
                  <Typography variant="h3">{cost.name}</Typography>
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
                    {cost.serviceCostsFrom || 0} <EuroIcon className={classes.detailItemIcon} />
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.detailItemLabel}>
                    {formatMessage({ id: 'pim_details.summary.costs.payments_frequency' })}
                  </Typography>
                  <Typography variant="h4" className={classes.detailItemValue}>
                    {cost.paymentsFrequency
                      ? formatMessage({ id: `dictionaries.prices.frequency.${cost.paymentsFrequency}` })
                      : '-'}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.detailItemLabel}>
                    {formatMessage({ id: 'pim_details.summary.costs.vat_taxed_service_costs' })}
                  </Typography>
                  <Typography variant="h4" className={classes.detailItemValue}>
                    {cost.vatTaxedServiceCostsFrom || 0} <EuroIcon className={classes.detailItemIcon} />
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.detailItemLabel}>
                    {formatMessage({ id: 'pim_details.summary.costs.vat_percentage' })}
                  </Typography>
                  <Typography variant="h4" className={classes.detailItemValue}>
                    {cost.vatPercentage || 0}%
                  </Typography>
                </Grid>
              </Grid>
            </FormSubSection>
          ))}
      </CardContent>
    </Card>
  );
};
