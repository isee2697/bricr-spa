import React from 'react';

import { useLocale } from 'hooks';
import { Box, Grid, Typography } from 'ui/atoms';
import { MeterIcon, MutationIcon, SquareMeterIcon } from 'ui/atoms/icons';
import { TerrainProps } from '../OutsideSpaces.types';
import { useStyles } from '../OutsideSpaces.styles';

export const Terrain = ({ configuration: { parking, measurement } }: TerrainProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Box className={classes.detailItem}>
        <Typography variant="h5" className={classes.detailItemLabel}>
          {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.parking' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} /> {formatMessage({ id: `dictionaries.parking.${parking}` })}
        </Typography>
      </Box>
      <Grid container spacing={1} className={classes.detailItem}>
        <Grid item xs={6}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.length' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            {measurement?.length} <MeterIcon className={classes.detailItemIconSmall} />
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.width' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            {measurement?.width} <MeterIcon className={classes.detailItemIconSmall} />
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.surface' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            {measurement?.surface} <SquareMeterIcon className={classes.detailItemIconSmall} />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
