import React from 'react';
import clsx from 'classnames';

import { Card, CardHeader, CardContent, Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { EuroIcon, MutationIcon } from 'ui/atoms/icons';

import { useStyles } from './Specifications.styles';
import { SpecificationsProps } from './Specifications.types';

export const Specifications = ({
  specification: { monument, parking, inside, housingOptions, propertyRights, specialTags, homeOwnerAssociation },
}: SpecificationsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.specifications.title' })} />
      <CardContent>
        <Grid container spacing={1}>
          {monument && monument.type && monument.type.length > 0 && (
            <Grid item xs={12}>
              <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                {formatMessage({ id: 'pim_details.summary.specifications.monument' })}
              </Typography>
              {monument.type.map((type, index) => (
                <Typography key={index} variant="h4" className={classes.specificationDetailItemValue}>
                  <MutationIcon className={classes.specificationIcon} />{' '}
                  {formatMessage({ id: `dictionaries.pim_monument.${type}` })}
                </Typography>
              ))}
            </Grid>
          )}
          {parking && (
            <>
              {parking.description && (
                <Grid item xs={6} className={classes.specificationDetailItem}>
                  <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                    {formatMessage({ id: 'pim_details.summary.specifications.parking' })}
                  </Typography>
                  <Typography variant="h4" className={classes.specificationDetailItemValue}>
                    {parking.description}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={6} className={classes.specificationDetailItem}>
                <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                  {formatMessage({ id: 'pim_details.summary.specifications.capacity' })}
                </Typography>
                <Typography variant="h4" className={classes.specificationDetailItemValue}>
                  {parking.parkingCapacity || 0}
                </Typography>
              </Grid>
            </>
          )}
          {inside && inside.type && inside.type.length > 0 && (
            <Grid item xs={6} className={classes.specificationDetailItem}>
              <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                {formatMessage({ id: 'pim_details.summary.specifications.inside' })}
              </Typography>
              <Typography variant="h4" className={classes.specificationDetailItemValue}>
                {inside.type
                  .filter(type => !!type)
                  .map(type => formatMessage({ id: `dictionaries.pim_inside.${type}` }))
                  .join(', ')}
              </Typography>
            </Grid>
          )}
          {housingOptions && housingOptions.type && housingOptions.type.length > 0 && (
            <Grid item xs={6} className={classes.specificationDetailItem}>
              <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                {formatMessage({ id: 'pim_details.summary.specifications.housing_options' })}
              </Typography>
              <Typography variant="h4" className={classes.specificationDetailItemValue}>
                {housingOptions.type
                  .filter(type => !!type)
                  .map(type => formatMessage({ id: `dictionaries.pim_housing_option.${type}` }))
                  .join(', ')}
              </Typography>
            </Grid>
          )}
          {propertyRights && propertyRights.type && propertyRights.type.length > 0 && (
            <Grid item xs={12} className={classes.specificationDetailItem}>
              <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                {formatMessage({ id: 'pim_details.summary.specifications.property_rights' })}
              </Typography>
              <Typography variant="h4" className={classes.specificationDetailItemValue}>
                {propertyRights.type
                  .filter(type => !!type)
                  .map(type => formatMessage({ id: `dictionaries.pim_property_right.${type}` }))
                  .join(', ')}
              </Typography>
            </Grid>
          )}
          {specialTags && specialTags.type && specialTags.type.length > 0 && (
            <Grid item xs={12} className={classes.specificationDetailItem}>
              <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                {formatMessage({ id: 'pim_details.summary.specifications.special_tags' })}
              </Typography>
              <Typography variant="h4" className={classes.specificationDetailItemValue}>
                {specialTags.type
                  .filter(type => !!type)
                  .map(type => formatMessage({ id: `dictionaries.pim_special_tag.${type}` }))
                  .join(', ')}
              </Typography>
            </Grid>
          )}
          {homeOwnerAssociation && homeOwnerAssociation.name && (
            <Grid item xs={12} className={classes.specificationDetailItem}>
              <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                {formatMessage({ id: 'pim_details.summary.specifications.name_home_owner_association' })}
              </Typography>
              <Typography variant="h4" className={classes.specificationDetailItemValue}>
                {homeOwnerAssociation.name}
              </Typography>
            </Grid>
          )}
          {homeOwnerAssociation && homeOwnerAssociation.monthlyContribution && (
            <Grid item xs={12} className={classes.specificationDetailItem}>
              <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                {formatMessage({
                  id: 'pim_details.summary.specifications.monthly_contribution_home_owner_association',
                })}
              </Typography>
              <Typography variant="h4" className={classes.specificationDetailItemValue}>
                <EuroIcon color="inherit" className={classes.specificationIcon} />{' '}
                {homeOwnerAssociation.monthlyContribution}
              </Typography>
            </Grid>
          )}
          {homeOwnerAssociation && homeOwnerAssociation.goodToKnow && homeOwnerAssociation.goodToKnow.length > 0 && (
            <Grid item xs={12} className={classes.specificationDetailItem}>
              <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                {formatMessage({ id: 'pim_details.summary.specifications.good_to_know_about_home_owner_association' })}
              </Typography>
              <Typography variant="h4" className={classes.specificationDetailItemValue}>
                {homeOwnerAssociation.goodToKnow
                  .filter(goodToKnow => !!goodToKnow)
                  .map(goodToKnow => formatMessage({ id: `dictionaries.pim_good_to_know.${goodToKnow}` }))
                  .join(', ')}
              </Typography>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};
