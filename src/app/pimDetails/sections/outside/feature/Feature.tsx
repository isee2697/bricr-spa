import React from 'react';

import { OutsideFeatureType } from 'api/types';
import { useLocale } from 'hooks';
import { CheckboxField } from 'form/fields';
import { Grid } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { Page } from 'ui/templates';

import { FeatureProps } from './Feature.types';
import { GardenForm } from './forms/GardenForm';
import { GarageForm } from './forms/GarageForm';
import { StorageForm } from './forms/StorageForm';
import { TerrainForm } from './forms/TerrainForm';
import { ParkingLotForm } from './forms/ParkingLotForm';

export const Feature = ({ feature }: FeatureProps) => {
  const { formatMessage } = useLocale();

  return (
    <Page
      title={formatMessage({ id: `dictionaries.outside_type.${feature.type}` })}
      placeholder={`pim_details.outside.${feature.type.toLowerCase()}.description_placeholder`}
      name="description"
      afterTitle={
        ![OutsideFeatureType.Terrain, OutsideFeatureType.ParkingLot].includes(feature.type) && (
          <CheckboxField name="configuration.main" label={`pim_details.outside.${feature.type.toLowerCase()}.main`} />
        )
      }
      updatedBy={feature.lastEditedBy}
      dateUpdated={feature.dateUpdated}
    >
      <Grid xs={12} item>
        <FormSection
          title={formatMessage(
            { id: 'pim_details.outside.information' },
            { featureName: formatMessage({ id: `dictionaries.outside_type.${feature.type}` }) },
          )}
        >
          {inEditMode => (
            <>
              {feature.type === OutsideFeatureType.Garden && <GardenForm id={feature.id} inEditMode={inEditMode} />}
              {feature.type === OutsideFeatureType.Garage && <GarageForm id={feature.id} inEditMode={inEditMode} />}
              {feature.type === OutsideFeatureType.Storage && <StorageForm id={feature.id} inEditMode={inEditMode} />}
              {feature.type === OutsideFeatureType.Terrain && <TerrainForm id={feature.id} inEditMode={inEditMode} />}
              {feature.type === OutsideFeatureType.ParkingLot && (
                <ParkingLotForm id={feature.id} inEditMode={inEditMode} />
              )}
            </>
          )}
        </FormSection>
      </Grid>
    </Page>
  );
};
