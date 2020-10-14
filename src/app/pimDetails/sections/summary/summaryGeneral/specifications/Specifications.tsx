import React from 'react';
import clsx from 'classnames';

import { Card, CardHeader, CardContent, Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { CrmIcon, EuroIcon, MutationIcon } from 'ui/atoms/icons';

import { useStyles } from './Specifications.styles';

export const Specifications = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.specifications.title' })} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
              {formatMessage({ id: 'pim_details.summary.specifications.monument' })}
            </Typography>
            <Typography variant="h4" className={classes.specificationDetailItemValue}>
              <MutationIcon className={classes.specificationIcon} /> National monument
            </Typography>
            <Typography variant="h4" className={classes.specificationDetailItemValue}>
              <CrmIcon className={classes.specificationIcon} /> Protected village view
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.specificationDetailItem}>
            <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
              {formatMessage({ id: 'pim_details.summary.specifications.parking' })}
            </Typography>
            <Typography variant="h4" className={classes.specificationDetailItemValue}>
              On site
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.specificationDetailItem}>
            <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
              {formatMessage({ id: 'pim_details.summary.specifications.capacity' })}
            </Typography>
            <Typography variant="h4" className={classes.specificationDetailItemValue}>
              2
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.specificationDetailItem}>
            <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
              {formatMessage({ id: 'pim_details.summary.specifications.inside' })}
            </Typography>
            <Typography variant="h4" className={classes.specificationDetailItemValue}>
              Furnished
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.specificationDetailItem}>
            <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
              {formatMessage({ id: 'pim_details.summary.specifications.housing_options' })}
            </Typography>
            <Typography variant="h4" className={classes.specificationDetailItemValue}>
              Partly rented
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.specificationDetailItem}>
            <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
              {formatMessage({ id: 'pim_details.summary.specifications.property_rights' })}
            </Typography>
            <Typography variant="h4" className={classes.specificationDetailItemValue}>
              BP Rights, Horizontal
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.specificationDetailItem}>
            <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
              {formatMessage({ id: 'pim_details.summary.specifications.special_tags' })}
            </Typography>
            <Typography variant="h4" className={classes.specificationDetailItemValue}>
              Demolition property, Do it Your self
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.specificationDetailItem}>
            <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
              {formatMessage({ id: 'pim_details.summary.specifications.name_home_owner_association' })}
            </Typography>
            <Typography variant="h4" className={classes.specificationDetailItemValue}>
              Name
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.specificationDetailItem}>
            <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
              {formatMessage({ id: 'pim_details.summary.specifications.monthly_contribution_home_owner_association' })}
            </Typography>
            <Typography variant="h4" className={classes.specificationDetailItemValue}>
              <EuroIcon color="inherit" className={classes.specificationIcon} /> 67,00
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.specificationDetailItem}>
            <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
              {formatMessage({ id: 'pim_details.summary.specifications.good_to_know_about_home_owner_association' })}
            </Typography>
            <Typography variant="h4" className={classes.specificationDetailItemValue}>
              Reserve fund, Active, Checklist present
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
