import React from 'react';

import { OutsideFeatureType } from 'api/types';
import { useLocale } from 'hooks';
import { GenericField, CheckboxField } from 'form/fields';
import { Grid, Typography } from 'ui/atoms';
import { MenuIcon, WarningIcon } from 'ui/atoms/icons';
import { FormSection } from 'ui/organisms';

import { FeatureProps } from './Feature.types';
import { useStyles } from './Feature.styles';
import { GardenForm } from './forms/GardenForm';
import { GarageForm } from './forms/GarageForm';
import { StorageForm } from './forms/StorageForm';
import { TerrainForm } from './forms/TerrainForm';
import { ParkingLotForm } from './forms/ParkingLotForm';

export const Feature = ({ featureType, id = '' }: FeatureProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} className={classes.form}>
        <Grid container alignItems="center">
          <Typography className={classes.title} variant="h1">
            {formatMessage({ id: `dictionaries.outside_type.${featureType}` })}
          </Typography>
          {![OutsideFeatureType.Terrain, OutsideFeatureType.ParkingLot].includes(featureType) && (
            <CheckboxField name="configuration.main" label={`pim_details.outside.${featureType.toLowerCase()}.main`} />
          )}
          <Grid item className={classes.buttons}>
            <WarningIcon />
            <MenuIcon className={classes.iconSpacing} />
          </Grid>
          <Grid xs={12} item>
            <GenericField
              className={classes.description}
              placeholder={`pim_details.outside.${featureType.toLowerCase()}.description_placeholder`}
              name="description"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid xs={12} item>
        <FormSection
          title={formatMessage(
            { id: 'pim_details.outside.information' },
            { featureName: formatMessage({ id: `dictionaries.outside_type.${featureType}` }) },
          )}
        >
          {inEditMode => (
            <>
              {featureType === OutsideFeatureType.Garden && <GardenForm id={id} inEditMode={inEditMode} />}
              {featureType === OutsideFeatureType.Garage && <GarageForm id={id} inEditMode={inEditMode} />}
              {featureType === OutsideFeatureType.Storage && <StorageForm id={id} inEditMode={inEditMode} />}
              {featureType === OutsideFeatureType.Terrain && <TerrainForm id={id} inEditMode={inEditMode} />}
              {featureType === OutsideFeatureType.ParkingLot && <ParkingLotForm id={id} inEditMode={inEditMode} />}
            </>
          )}
        </FormSection>
      </Grid>
    </>
  );
};
