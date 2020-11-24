import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Card, CardContent, CardHeader, Grid, Typography } from 'ui/atoms';

import { useStyles } from './Inspection.styles';
import { InspectionProps } from './Inspection.types';

export const Inspection = ({ houseOutside, insideGeneral }: InspectionProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const foundationType = houseOutside.foundation?.type?.type;
  const foundationMaterials = houseOutside.foundation?.material?.type || [];
  const typeOfGlass = insideGeneral.windows?.types || [];

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.inspection.title' })} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.inspection.foundation_type' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {formatMessage({ id: `dictionaries.foundation_type.${foundationType}` })}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.inspection.foundation_material' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {foundationMaterials
                .map(material => formatMessage({ id: `dictionaries.foundation_material.${material}` }))
                .join(', ')}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.inspection.type_of_glass' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {typeOfGlass.map(glass => formatMessage({ id: `dictionaries.type_of_glass.${glass}` })).join(', ')}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
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
