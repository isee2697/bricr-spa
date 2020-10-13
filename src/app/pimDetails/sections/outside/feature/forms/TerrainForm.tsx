import React from 'react';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { useLocale } from 'hooks';
import { GenericField, CardField, UploadImageGroupField, RadioGroupField } from 'form/fields';
import { Grid, Box } from 'ui/atoms';
import { MeterIcon, SquareMeterIcon } from 'ui/atoms/icons';
import { FormSubSectionHeader } from 'ui/molecules';
import * as dictionaries from '../dictionaries';
import { FeatureFormProps } from '../Feature.types';

export const TerrainForm = ({ id, inEditMode, onDimensionChange }: FeatureFormProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Box mb={3}>
        <FormSubSectionHeader
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
                endAdornment: <MeterIcon />,
              }}
              disabled={!inEditMode}
              onChange={() => onDimensionChange('configuration.measurement.width')}
            />
            <GenericField
              name="configuration.measurement.length"
              label="pim_details.surface.length"
              type="number"
              size="medium"
              InputProps={{
                endAdornment: <MeterIcon />,
              }}
              disabled={!inEditMode}
              onChange={() => onDimensionChange('configuration.measurement.length')}
            />
          </Grid>
          <Grid item md={2} />
          <Grid item xs={12} md={6}>
            <CardField
              name="configuration.measurement.surface"
              label="pim_details.surface.surface"
              InputProps={{
                endAdornment: <SquareMeterIcon />,
              }}
              type="number"
              disabled={!inEditMode}
            />
          </Grid>
        </Grid>
      </Box>

      <Box mb={4}>
        <Box mb={3}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.outside.terrain.parking' })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
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

      <Box mb={2.25}>
        <FormSubSectionHeader
          title={formatMessage({ id: 'common.pictures' })}
          subtitle={formatMessage({ id: 'pim_details.choose_picture' })}
        />
      </Box>
      <UploadImageGroupField
        entity={EntityWithFiles.OutsideFeature}
        entityID={id}
        name="configuration.images"
        disabled={!inEditMode}
        removeEntity={EntityWithMultipleFiles.OutsideFeature}
      />
    </>
  );
};
