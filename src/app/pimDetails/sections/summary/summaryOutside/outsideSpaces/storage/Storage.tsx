import React from 'react';

import { useLocale } from 'hooks';
import { Box, Grid, Typography } from 'ui/atoms';
import { CubicMeterIcon, MeterIcon, MutationIcon, SquareMeterIcon } from 'ui/atoms/icons';
import { StorageProps } from '../OutsideSpaces.types';
import { useStyles } from '../OutsideSpaces.styles';

export const Storage = ({
  configuration: { types, materials, services, secondaryWindows, insulations, attached, measurement },
}: StorageProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      {types && types.length > 0 && (
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.type_of_storage' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            <MutationIcon className={classes.detailItemIcon} />{' '}
            {types.map(type => formatMessage({ id: `dictionaries.type_of_storage.${type}` })).join(', ')}
          </Typography>
        </Box>
      )}
      {materials && materials.length > 0 && (
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.materials' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            <MutationIcon className={classes.detailItemIcon} />{' '}
            {materials.map(material => formatMessage({ id: `dictionaries.material.${material}` })).join(', ')}
          </Typography>
        </Box>
      )}
      {services && services.length > 0 && (
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.services' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            <MutationIcon className={classes.detailItemIcon} />{' '}
            {services.map(service => formatMessage({ id: `dictionaries.service.${service}` })).join(', ')}
          </Typography>
        </Box>
      )}
      {insulations && insulations.length > 0 && (
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.insulations' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            <MutationIcon className={classes.detailItemIcon} />{' '}
            {insulations.map(insulation => formatMessage({ id: `dictionaries.insulation.${insulation}` })).join(', ')}
          </Typography>
        </Box>
      )}
      <Box className={classes.detailItem}>
        <Typography variant="h5" className={classes.detailItemLabel}>
          {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.secondary_windows' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} />{' '}
          {secondaryWindows ? formatMessage({ id: 'common.yes' }) : formatMessage({ id: 'common.no' })}
        </Typography>
      </Box>
      <Box className={classes.detailItem}>
        <Typography variant="h5" className={classes.detailItemLabel}>
          {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.attached' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} />{' '}
          {attached ? formatMessage({ id: 'common.yes' }) : formatMessage({ id: 'common.no' })}
        </Typography>
      </Box>
      <Grid container spacing={1} className={classes.detailItem}>
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
            {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.length' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            {measurement?.length} <MeterIcon className={classes.detailItemIconSmall} />
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.height' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            {measurement?.height} <MeterIcon className={classes.detailItemIconSmall} />
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
        <Grid item xs={6}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.volume' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            {measurement?.volume} <CubicMeterIcon className={classes.detailItemIconSmall} />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
