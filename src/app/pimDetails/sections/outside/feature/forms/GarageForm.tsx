import React from 'react';

import { EntityWithFiles } from 'api/types';
import { useLocale } from 'hooks';
import { GenericField, CardField, CheckboxGroupField, UploadImageGroupField, CheckboxField } from 'form/fields';
import { Grid, Box } from 'ui/atoms';
import { MeterIcon, SquareMeterIcon } from 'ui/atoms/icons';
import { FormSubSectionHeader } from 'ui/molecules';
import * as dictionaries from '../dictionaries';
import { FeatureFormProps } from '../Feature.types';

export const GarageForm = ({ id, inEditMode }: FeatureFormProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Box mb={4}>
        <Box mb={3}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.outside.garage.types' })}
            subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
          />
        </Box>
        <Box paddingLeft={2} mb={1}>
          <CheckboxGroupField
            xs={2}
            name="configuration.types"
            options={dictionaries.garageTypes}
            disabled={!inEditMode}
          />
        </Box>
        <Box mb={2}>
          <GenericField
            name="configuration.notes"
            label="common.notes"
            placeholder="pim_details.outside.garden.notes_placeholder"
            disabled={!inEditMode}
          />
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <CheckboxField
              label="pim_details.outside.is_attached"
              name="configuration.attached"
              disabled={!inEditMode}
            />
          </Grid>
          <Grid item xs={6}>
            <CheckboxField label="pim_details.outside.with_attic" name="configuration.attic" disabled={!inEditMode} />
          </Grid>
        </Grid>
      </Box>

      <Box mb={4}>
        <Box mb={3}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.outside.material' })}
            subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
          />
        </Box>
        <Box paddingLeft={2} mb={1}>
          <CheckboxGroupField
            xs={2}
            name="configuration.materials"
            options={dictionaries.garageStorageMaterials}
            disabled={!inEditMode}
          />
        </Box>
      </Box>

      <Box mb={4}>
        <Box mb={3}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.outside.insulations' })}
            subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
          />
        </Box>
        <Box pl={2}>
          <CheckboxGroupField
            disabled={!inEditMode}
            xs={2}
            name="configuration.insulations"
            options={dictionaries.garageInsulations}
          />
        </Box>
        <Box mt={3}>
          <CheckboxField
            label="pim_details.outside.secondary_window"
            name="configuration.secondaryWindows"
            disabled={!inEditMode}
          />
        </Box>
      </Box>

      <Box mb={4}>
        <Box mb={3}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.outside.services' })}
            subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
          />
        </Box>
        <Box paddingLeft={2} mb={1}>
          <CheckboxGroupField
            xs={2}
            name="configuration.services"
            options={dictionaries.garageServices}
            disabled={!inEditMode}
          />
        </Box>
      </Box>

      <Box mb={3}>
        <FormSubSectionHeader
          title={formatMessage({ id: 'pim_details.surface.surface' })}
          subtitle={formatMessage(
            { id: 'pim_details.surface.description' },
            { name: formatMessage({ id: 'dictionaries.outside_type.Garage' }).toLowerCase() },
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
            />
            <GenericField
              name="configuration.measurement.height"
              label="pim_details.surface.height"
              type="number"
              size="medium"
              InputProps={{
                endAdornment: <MeterIcon />,
              }}
              disabled={!inEditMode}
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
            />
            <GenericField
              name="configuration.measurement.volume"
              label="pim_details.surface.volume"
              type="number"
              size="medium"
              InputProps={{
                endAdornment: <MeterIcon />,
              }}
              disabled={!inEditMode}
            />
          </Grid>
          <Grid item md={2} />
          <Grid item xs={12} md={6}>
            <CardField
              name="configuration.measurement.surface"
              label="pim_details.surface.surface"
              endAdornment={<SquareMeterIcon />}
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
      />
    </>
  );
};
