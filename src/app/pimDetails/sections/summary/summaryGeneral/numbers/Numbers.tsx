import React from 'react';

import { Card, CardContent, CardHeader, Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { SquareMeterIcon } from 'ui/atoms/icons';

import { useStyles } from './Numbers.styles';

export const Numbers = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.numbers.title' })} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.numbers.construction_year' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              1991
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.numbers.years_old' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              6
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.numbers.total_living_space' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              300 <SquareMeterIcon className={classes.detailItemIcon} />
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.numbers.total_other_space_inside' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              103 <SquareMeterIcon className={classes.detailItemIcon} />
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.numbers.total_space_inside' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              300 <SquareMeterIcon className={classes.detailItemIcon} />
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.numbers.volume' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              350 <SquareMeterIcon className={classes.detailItemIcon} />
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.numbers.external_storage_space' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              150 m<sup>3</sup>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.numbers.amount_of_bedrooms' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              3
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
