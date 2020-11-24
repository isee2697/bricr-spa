import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Card, CardContent, CardHeader, Grid, Typography } from 'ui/atoms';

import { useStyles } from './Roof.styles';
import { RoofProps } from './Roof.types';

export const Roof = ({ roof: { type, yearOfRoof, material, insulation, gutter, gutterMaterial } }: RoofProps) => {
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
              {type?.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.roof.year_of_roof' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {yearOfRoof}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.roof.roof_material' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {material?.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.roof.roof_insulation' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {insulation?.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.roof.gutter_type' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {gutter?.type}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.roof.gutter_material' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {gutterMaterial?.material}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
