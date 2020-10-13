import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Card, CardContent, CardHeader, Grid, Typography } from 'ui/atoms';

import { useStyles } from './Roof.styles';

export const Roof = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.outside.roof.title' })} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.roof.roof_type' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Class roof
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.roof.year_of_roof' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              1991
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.roof.roof_material' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Pans, Copper
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.roof.roof_insulation' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Spray foam
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.roof.gutter_type' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Half-round
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.roof.gutter_material' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Vinyl
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
