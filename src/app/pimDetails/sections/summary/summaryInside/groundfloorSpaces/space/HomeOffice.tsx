import React from 'react';
import clsx from 'classnames';

import { HomeOfficeProps } from '../GroundfloorSpaces.types';
import { Grid, Typography } from 'ui/atoms';
import { CubicMeterIcon, MeterIcon, MutationIcon, SquareMeterIcon } from 'ui/atoms/icons';
import { useStyles } from '../GroundfloorSpaces.styles';
import { useLocale } from 'hooks';

export const HomeOffice = ({ space: { shape, measurement, serviceHeating, constructionYear } }: HomeOfficeProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.spaces.type_of_kitchen' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} /> {shape}
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.spaces.length' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          {measurement?.length} <MeterIcon className={classes.detailItemIconSmall} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.spaces.width' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          {measurement?.width} <MeterIcon className={classes.detailItemIconSmall} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.spaces.height' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          {measurement?.height} <MeterIcon className={classes.detailItemIconSmall} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.spaces.surface' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          {measurement?.surface} <SquareMeterIcon className={classes.detailItemIconSmall} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.spaces.volume' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          {measurement?.volume} <CubicMeterIcon className={classes.detailItemIconSmall} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.spaces.services' })}
        </Typography>
        {serviceHeating?.map((service, index) => (
          <Typography variant="h4" className={classes.detailItemValue}>
            <MutationIcon key={index} className={classes.detailItemIcon} /> {service}
          </Typography>
        ))}
      </Grid>
    </>
  );
};
