import React from 'react';
import { DateTime } from 'luxon';

import { Box, Card, CardContent, CardHeader, Typography, Grid } from 'ui/atoms';
import { Map as EsriMap } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { EuroIcon } from 'ui/atoms/icons';
import { LeaseDurationType, LeaseholderType, LeaseInformationType, OwnershipType } from 'api/types';

import { useStyles } from './Cadastre.styles';
import { CadastreProps } from './Cadastre.types';

export const Cadastre = ({ plots }: CadastreProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const totalSurface = plots.reduce((sum, { surface }) => {
    return sum + (surface || 0);
  }, 0);
  const typesOfOwnership = plots.map(plot => plot.ownershipType || OwnershipType.Leased).join(', ');
  const leaseholders = plots.map(plot => plot.lease?.leaseholder || LeaseholderType.Different).join(', ');
  const leaseInformation = plots.map(plot => plot.lease?.information || LeaseInformationType.Fixed).join(', ');
  const leaseDuration = plots.map(plot => plot.lease?.duration || LeaseDurationType.Constantly).join(', ');
  const leaseEndDate = plots
    .map(plot => plot.lease?.endDate)
    .map(endDate =>
      endDate ? DateTime.fromISO(endDate as string).toFormat('dd-MM-yyyy') : DateTime.local().toFormat('dd-MM-yyyy'),
    )
    .join(', ');
  const leasePriceYear = plots.reduce((sum, { lease }) => {
    return sum + (lease?.yearlyPrice || 0);
  }, 0);
  const leaseShare = plots.map(plot => plot.share || 0).join('/');
  const boughtOffDate = plots
    .map(plot => plot.boughtOff?.date)
    .map(date =>
      date ? DateTime.fromISO(date as string).toFormat('dd-MM-yyyy') : DateTime.local().toFormat('dd-MM-yyyy'),
    )
    .join(', ');
  const boughtOffPerpetually = plots.map(plot => (plot.boughtOff?.perpetually ? 'common.yes' : 'common.no')).join(', ');

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.outside.cadastre.title' })} />
      <CardContent>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.cadastre.surface_cadastral_plot' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            {totalSurface} m<sup>2</sup>
          </Typography>
        </Box>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.cadastre.type_of_ownership' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            {typesOfOwnership}
          </Typography>
        </Box>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.cadastre.leaseholder' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            {leaseholders}
          </Typography>
        </Box>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.cadastre.ground_lease_information' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            {leaseInformation}
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.cadastre.ground_lease_duration' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {leaseDuration}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.cadastre.ground_lease_end_date' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {leaseEndDate}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.cadastre.ground_lease_price_year' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {leasePriceYear} <EuroIcon className={classes.detailItemPriceIcon} />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.cadastre.share' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {leaseShare}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.cadastre.bought_off_date' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {boughtOffDate}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.cadastre.bought_off_perpetually' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {boughtOffPerpetually}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box width="100%" className={classes.map}>
              <EsriMap />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
