import React from 'react';
import { KitchenProps } from '../GroundfloorSpaces.types';
import { Grid, Typography } from '../../../../../../../ui/atoms';
import clsx from 'classnames';
import { CrmIcon, MeterIcon, MutationIcon, SquareMeterIcon } from '../../../../../../../ui/atoms/icons';
import { useStyles } from '../GroundfloorSpaces.styles';
import { useLocale } from '../../../../../../../hooks';

export const Kitchen = ({ space: {} }: KitchenProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.type_of_kitchen' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.type_of_construction' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} /> Dense kitchen
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <CrmIcon className={classes.detailItemIcon} /> Half open kitchen
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.services' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} /> Rectangle
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.kind_of_hob' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} /> Electric hob
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.built_in_appliances' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} /> Refrigerator x 1
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} /> Stove x 1
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.shape_of_room' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} /> Rectangle
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.surface' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          453 <SquareMeterIcon className={classes.detailItemIconSmall} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.volume' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          Volume <SquareMeterIcon className={classes.detailItemIconSmall} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.length' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          12 <MeterIcon className={classes.detailItemIconSmall} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.width' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          9 <MeterIcon className={classes.detailItemIconSmall} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.height' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          3 <MeterIcon className={classes.detailItemIconSmall} />
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.services_heating' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} /> Hot air heating
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} /> District heating
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} /> Central heating boiler
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.detailItem}>
        <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
          {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.type_of_insolation' })}
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} /> Floor insulation
        </Typography>
        <Typography variant="h4" className={classes.detailItemValue}>
          <MutationIcon className={classes.detailItemIcon} /> Largely double glazing
        </Typography>
      </Grid>
    </>
  );
};
