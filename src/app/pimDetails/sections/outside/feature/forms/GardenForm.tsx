import React from 'react';

import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { useLocale } from 'hooks';
import { GenericField, CardField, CheckboxGroupField, UploadImageGroupField, RadioGroupField } from 'form/fields';
import { Grid, Box } from 'ui/atoms';
import { SquareMeterIcon, MeterIcon } from 'ui/atoms/icons';
import { FormSubSectionHeader } from 'ui/molecules';
import * as dictionaries from '../dictionaries';
import { FeatureFormProps } from '../Feature.types';

export const GardenForm = ({ id, inEditMode, onDimensionChange }: FeatureFormProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Box mb={4}>
        <Box mb={3}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.outside.garden.type' })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
          />
        </Box>
        <Grid item md={9} lg={7}>
          <RadioGroupField xs={3} disabled={!inEditMode} name="configuration.type" options={dictionaries.gardenTypes} />
        </Grid>
        <GenericField
          name="configuration.notes"
          label="common.notes"
          placeholder="pim_details.outside.garden.notes_placeholder"
          disabled={!inEditMode}
        />
      </Box>

      <Box mb={4}>
        <Box mb={3}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.outside.garden.quality_of_garden' })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
          />
        </Box>
        <Grid item md={9} lg={7}>
          <RadioGroupField
            xs={3}
            disabled={!inEditMode}
            name="configuration.quality"
            options={dictionaries.gardenQualities}
          />
        </Grid>
      </Box>

      <Box mb={4}>
        <Box mb={3}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.outside.garden.location' })}
            subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
          />
        </Box>
        <Box pl={2}>
          <CheckboxGroupField
            disabled={!inEditMode}
            xs={2}
            lg={1}
            name="configuration.location"
            options={dictionaries.gardenLocations}
          />
        </Box>
      </Box>

      <Box mb={4}>
        <Box mb={3}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.outside.garden.shape_of_garden' })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
          />
        </Box>
        <Grid item md={9} lg={7}>
          <RadioGroupField
            xs={3}
            lg={2}
            disabled={!inEditMode}
            name="configuration.shape"
            options={dictionaries.gardenShapes}
          />
        </Grid>
      </Box>

      <Box mb={3}>
        <FormSubSectionHeader
          title={formatMessage({ id: 'pim_details.surface.surface' })}
          subtitle={formatMessage(
            { id: 'pim_details.surface.description' },
            { name: formatMessage({ id: 'dictionaries.outside_type.Garden' }).toLowerCase() },
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
          <Grid item md={2}></Grid>
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
