import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, CardHeader, Grid, Typography } from 'ui/atoms';
import { SummaryCardProps } from '../Summary.types';

import { useStyles } from './Energy.styles';

export const Energy = ({ summary }: SummaryCardProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const { energy } = summary;

  if (!energy) {
    return null;
  }

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
              {energy.label ? formatMessage({ id: `dictionaries.specification.energy.${energy.label}` }) : '-'}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.energy.energy_index' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {energy.energyIndex || 0}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
