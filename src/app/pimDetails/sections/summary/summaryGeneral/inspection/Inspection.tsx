import React from 'react';
import clsx from 'classnames';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Card, CardContent, CardHeader, Grid, Typography } from 'ui/atoms';

import { useStyles } from './Inspection.styles';

export const Inspection = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.inspection.title' })} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
              {formatMessage({ id: 'pim_details.summary.inspection.foundation_type' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Pile foundation
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
              {formatMessage({ id: 'pim_details.summary.inspection.foundation_type' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Timber, steel
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
              {formatMessage({ id: 'pim_details.summary.inspection.type_of_glass' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Insulated glass
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
              {formatMessage({ id: 'pim_details.summary.inspection.insulation' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              From all rooms
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
