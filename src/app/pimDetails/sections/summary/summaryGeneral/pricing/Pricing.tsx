import React from 'react';
import { DateTime } from 'luxon';

import { Card, CardHeader, CardContent, Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { EuroIcon } from 'ui/atoms/icons';

import { useStyles } from './Pricing.styles';
import { PricingProps } from './Pricing.types';

export const Pricing = ({ pricing: { rent, sale } }: PricingProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.pricing.title' })} />
      <CardContent>
        <Grid container spacing={1}>
          {sale && (
            <>
              {sale.general && (
                <Grid item xs={12}>
                  <Typography variant="h5" className={classes.detailItemLabel}>
                    {formatMessage({ id: 'pim_details.summary.pricing.asking_price' })}
                  </Typography>
                  <Typography variant="h4" className={classes.detailItemValue}>
                    {sale.general.price} <EuroIcon className={classes.priceIcon} />
                  </Typography>
                </Grid>
              )}
              {sale.woz && (
                <>
                  <Grid item xs={6} className={classes.detailItem}>
                    <Typography variant="h5" className={classes.detailItemLabel}>
                      {formatMessage({ id: 'pim_details.summary.pricing.woz_value' })}
                    </Typography>
                    <Typography variant="h4" className={classes.detailItemValue}>
                      {sale.woz.wozPrice} <EuroIcon className={classes.priceIcon} />
                    </Typography>
                  </Grid>
                  <Grid item xs={6} className={classes.detailItem}>
                    <Typography variant="h5" className={classes.detailItemLabel}>
                      {formatMessage({ id: 'pim_details.summary.pricing.reference_date' })}
                    </Typography>
                    <Typography variant="h4" className={classes.detailItemValue}>
                      {sale.woz.referenceDateWoz && DateTime.fromISO(sale.woz.referenceDateWoz).toFormat('dd-MM-yyyy')}
                    </Typography>
                  </Grid>
                </>
              )}
            </>
          )}
          {/* <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.acceptance' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {formatMessage({ id: `pim_details.summary.pricing.acceptance.${acceptance}` })}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.per_date' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {perDate.toFormat('dd-MM-yyyy')}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.woz_value' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {wozValue} <EuroIcon className={classes.priceIcon} />
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.reference_date' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {referenceDate.toFormat('dd-MM-yyyy')}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.real_estate_tax_user' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {realEstateTaxUser} <EuroIcon className={classes.priceIcon} />
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.payments_frequency' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {formatMessage({
                id: `pim_details.summary.pricing.payments_frequency.${realEstateTaxUserPaymentsFrequency}`,
              })}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.real_estate_tax_business' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {realEstateTaxBusiness} <EuroIcon className={classes.priceIcon} />
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.pricing.payments_frequency' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {formatMessage({
                id: `pim_details.summary.pricing.payments_frequency.${realEstateTaxBusinessPaymentsFrequency}`,
              })}
            </Typography>
          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
};
