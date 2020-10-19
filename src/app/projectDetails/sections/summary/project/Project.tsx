import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, CardHeader, Grid, Typography } from 'ui/atoms';
import { CubicMeterIcon, SquareMeterIcon } from 'ui/atoms/icons';

import { useStyles } from './Project.styles';

export const Project = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.project.title' })} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.start_project' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              20-10-2020
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.delivery_project' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              20-11-2021
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.properties' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              156
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.objecttypes' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              5
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.surface_from' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              85 <SquareMeterIcon className={classes.detailItemIconSmall} />
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.surface_till' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              124 <SquareMeterIcon className={classes.detailItemIconSmall} />
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.volume_from' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              85 <CubicMeterIcon className={classes.detailItemIconSmall} />
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.volume_till' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              124 <CubicMeterIcon className={classes.detailItemIconSmall} />
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.part_of_phase' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              De Wateringen
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.client' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Bouwinvest
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.involved_brokers' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Hendriks makelaardij
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Van Vleuten makelaars
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
