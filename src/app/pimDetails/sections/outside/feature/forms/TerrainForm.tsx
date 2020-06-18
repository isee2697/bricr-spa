import React from 'react';

import { EntityWithFiles } from 'api/types';
import { useLocale } from 'hooks';
import { GenericField, CardField, UploadImageGroupField, RadioGroupField } from 'form/fields';
import { Grid, Box } from 'ui/atoms';
import { FormSubSection } from 'ui/molecules';
import * as dictionaries from '../dictionaries';
import { FeatureFormProps } from '../Feature.types';

export const TerrainForm = ({ id, inEditMode }: FeatureFormProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Box mb={3}>
        <FormSubSection
          title={formatMessage({ id: 'pim_details.surface.surface' })}
          subtitle={formatMessage(
            { id: 'pim_details.surface.description' },
            { name: formatMessage({ id: 'dictionaries.outside_type.Terrain' }).toLowerCase() },
          )}
        />

        <Grid container>
          <Grid item xs={12} md={4}>
            <GenericField
              name="configuration.measurement.width"
              label="pim_details.surface.width"
              type="number"
              size="medium"
              InputProps={{
                endAdornment: '[m]',
              }}
              disabled={!inEditMode}
            />
            <GenericField
              name="configuration.measurement.length"
              label="pim_details.surface.length"
              type="number"
              size="medium"
              InputProps={{
                endAdornment: `[m]`,
              }}
              disabled={!inEditMode}
            />
          </Grid>
          <Grid item md={2} />
          <Grid item xs={12} md={6}>
            <CardField
              name="configuration.measurement.surface"
              label="pim_details.surface.surface"
              endAdornment="㎡"
              type="number"
              disabled={!inEditMode}
            />
          </Grid>
        </Grid>
      </Box>

      <Box mb={4}>
        <Box mb={3}>
          <FormSubSection
            title={formatMessage({ id: 'pim_details.outside.terrain.parking' })}
            subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
          />
        </Box>
        <Box mb={1}>
          <RadioGroupField
            xs={3}
            name="configuration.parking"
            options={dictionaries.terrainParkings}
            disabled={!inEditMode}
          />
        </Box>
      </Box>

      <Box mb={3}>
        <FormSubSection
          title={formatMessage({ id: 'common.pictures' })}
          subtitle={formatMessage({ id: 'pim_details.choose_picture' })}
        />
      </Box>
      <UploadImageGroupField
        entity={EntityWithFiles.OutsideFeature}
        entityID={id}
        name="configuration.images"
        disabled={!inEditMode}
      />
    </>
  );
};