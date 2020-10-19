import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, CardHeader, Grid, Typography } from 'ui/atoms';

import { useStyles } from './Energy.styles';

export const Energy = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.energy.title' })} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.energy.energy_label' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              A
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.energy.energy_index' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              2
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
