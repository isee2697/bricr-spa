import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, Typography, Grid } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';
import { EuroIcon } from 'ui/atoms/icons';

import { useStyles } from './Costs.styles';
import { CostsProps } from './Costs.types';

export const Costs = ({ costs }: CostsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">{formatMessage({ id: 'pim_details.summary.costs.title' })}</Typography>
            <Counter count={costs.length} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        {costs.map((cost, index) => (
          <FormSubSection
            initiallyOpened={false}
            title={
              <>
                <Typography variant="h4" className={classes.index}>
                  {index + 1}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({ id: `dictionaries.cost_type.${cost.type}` })}
                  {cost.name && cost.name?.trim() !== '' && ` - (${cost.name})`}
                </Typography>
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
                  {cost.serviceCosts || 0} <EuroIcon className={classes.detailItemPriceIcon} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.costs.payments_frequency' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  {cost.paymentsFrequency
                    ? formatMessage({ id: `dictionaries.payments_frequency.${cost.paymentsFrequency}` })
                    : '-'}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.costs.vat_taxed_service_costs' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  {cost.vatTaxedServiceCosts || 0} <EuroIcon className={classes.detailItemPriceIcon} />
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
