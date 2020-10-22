import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, CardHeader, Grid, Typography } from 'ui/atoms';
import { CubicMeterIcon, SquareMeterIcon } from 'ui/atoms/icons';
import { SummaryCardProps } from '../Summary.types';

import { useStyles } from './Project.styles';

export const Project = ({
  summary: { startSale, startDelivery, properties, objectTypesCount, measurements, phases },
}: SummaryCardProps) => {
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
              {startSale ? startSale.toFormat('dd-MM-yyyy') : '-'}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.delivery_project' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {startDelivery ? startDelivery.toFormat('dd-MM-yyyy') : '-'}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.properties' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {properties || 0}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.objecttypes' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {objectTypesCount || 0}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.surface_from' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {measurements?.livingSpaceFrom || 0} <SquareMeterIcon className={classes.detailItemIconSmall} />
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.surface_till' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {measurements?.livingSpaceTo || 0} <SquareMeterIcon className={classes.detailItemIconSmall} />
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.volume_from' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {measurements?.volumeFrom || 0} <CubicMeterIcon className={classes.detailItemIconSmall} />
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.volume_till' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {measurements?.volumeTo || 0} <CubicMeterIcon className={classes.detailItemIconSmall} />
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.project.part_of_phase' })}
            </Typography>
            {phases &&
              phases.length > 0 &&
              phases.map((phase, index) => (
                <Typography key={index} variant="h4" className={classes.detailItemValue}>
                  {phase.name}
                </Typography>
              ))}
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
