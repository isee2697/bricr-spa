import React from 'react';

import { GardenProps } from '../OutsideSpaces.types';
import { useStyles } from '../OutsideSpaces.styles';
import { Box, Grid, Typography } from 'ui/atoms';
import { MeterIcon, MutationIcon, SquareMeterIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

export const Garden = ({ configuration: { type, quality, shape, measurement, location } }: GardenProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Box className={classes.detailItem}>
        <Typography variant="h5" className={classes.detailItemLabel}>
          {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.type_of_garden' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} />{' '}
          {formatMessage({ id: `dictionaries.type_of_garden.${type}` })}
        </Typography>
      </Box>
      <Box className={classes.detailItem}>
        <Typography variant="h5" className={classes.detailItemLabel}>
          {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.quality_of_garden' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} />{' '}
          {formatMessage({ id: `dictionaries.quality_of_garden.${quality}` })}
        </Typography>
      </Box>
      <Box className={classes.detailItem}>
        <Typography variant="h5" className={classes.detailItemLabel}>
          {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.location' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} />{' '}
          {formatMessage({ id: `dictionaries.location.${location}` })}
        </Typography>
      </Box>
      <Box className={classes.detailItem}>
        <Typography variant="h5" className={classes.detailItemLabel}>
          {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.shape_of_garden' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} />{' '}
          {formatMessage({ id: `dictionaries.shape_of_garden.${shape}` })}
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
