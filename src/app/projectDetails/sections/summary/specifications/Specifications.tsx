import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, CardHeader, Grid, Typography } from 'ui/atoms';
import { EuroIcon } from 'ui/atoms/icons';

import { useStyles } from './Specifications.styles';

export const Specifications = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.specifications.title' })} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.specifications.parking' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              On site
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.specifications.capacity' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              2
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.specifications.inside' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Furnished
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.specifications.housing_options' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Partly rented
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.specifications.property_rights' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              On site
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.specifications.special_tags' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              BP Rights, Horizontal
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.specifications.name_home_owner_association' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Name
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.specifications.monthly_contribution_home_owner_association' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              <EuroIcon className={classes.detailItemIcon} /> 6700
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.specifications.good_to_know_about_home_owner_association' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Reserve fund, Active, Checklist present
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
