import React from 'react';
import clsx from 'classnames';

import { OtherProps } from '../FloorSpaces.types';
import { Grid, Typography } from 'ui/atoms';
import { CubicMeterIcon, MeterIcon, MutationIcon, SquareMeterIcon } from 'ui/atoms/icons';
import { useStyles } from '../FloorSpaces.styles';
import { useLocale } from 'hooks';

export const Other = ({ space: { constructionYear, name, serviceHeating, shape, measurement } }: OtherProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.name' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.year_of_construction' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} /> {constructionYear}
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.shape_of_room' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} />{' '}
          {formatMessage({ id: `dictionaries.shape_of_room.${shape}` })}
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.surface' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          {measurement?.surface} <SquareMeterIcon className={classes.detailItemIcon} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.volume' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          {measurement?.volume} <CubicMeterIcon className={classes.detailItemIcon} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.length' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          {measurement?.length} <MeterIcon className={classes.detailItemIcon} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.width' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          {measurement?.width} <MeterIcon className={classes.detailItemIcon} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.height' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          {measurement?.height} <MeterIcon className={classes.detailItemIcon} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.services_heating' })}
        </Typography>
        {serviceHeating?.map((heating, index) => (
          <Typography key={index} variant="h4" className={classes.detailItemValue}>
            <MutationIcon className={classes.detailItemIcon} />{' '}
            {formatMessage({ id: `dictionaries.service_heating.${heating}` })}
          </Typography>
        ))}
      </Grid>
    </>
  );
};
