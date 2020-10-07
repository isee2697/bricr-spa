import React from 'react';
import { FormSubSectionHeader } from 'ui/molecules';
import { Grid, Box } from 'ui/atoms';
import { GenericField, RadioGroupField, CheckboxGroupField, UploadImageGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { CommonFormProps } from '../Space.types';
import * as dictionaries from '../dictionaries';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { SquareMeterIcon, CubicMeterIcon, MeterIcon } from 'ui/atoms/icons';

export const CommonForm = ({ fieldPrefix, isEditMode, id, onDimensionChange }: CommonFormProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Grid item xs={12}>
        <FormSubSectionHeader
          noBorder
          title={formatMessage({ id: 'pim_details.inside.shape' })}
          subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
        />
        <Box paddingTop={2}>
          <RadioGroupField
            disabled={!isEditMode}
            sm={3}
            md={2}
            name={`${fieldPrefix}.shape`}
            options={dictionaries.shape}
          />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <FormSubSectionHeader
          noBorder
          title={formatMessage({ id: 'pim_details.inside.measurements' })}
          subtitle={formatMessage({ id: 'pim_details.inside.measurements_info' })}
        />
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <GenericField
              name={`${fieldPrefix}.measurement.length`}
              label="pim_details.inside.length"
              type="number"
              size="medium"
              InputProps={{
                endAdornment: <MeterIcon />,
              }}
              disabled={!isEditMode}
              onChange={() => onDimensionChange(`${fieldPrefix}.measurement.length`)}
            />
          </Grid>
          <Grid item xs={4}>
            <GenericField
              name={`${fieldPrefix}.measurement.width`}
              label="pim_details.inside.width"
              type="number"
              size="medium"
              InputProps={{
                endAdornment: <MeterIcon />,
              }}
              disabled={!isEditMode}
              onChange={() => onDimensionChange(`${fieldPrefix}.measurement.width`)}
            />
          </Grid>
          <Grid item xs={4}>
            <GenericField
              name={`${fieldPrefix}.measurement.height`}
              label="pim_details.inside.height"
              type="number"
              size="medium"
              InputProps={{
                endAdornment: <MeterIcon />,
              }}
              disabled={!isEditMode}
              onChange={() => onDimensionChange(`${fieldPrefix}.measurement.height`)}
            />
          </Grid>
          <Grid item xs={4}>
            <GenericField
              name={`${fieldPrefix}.measurement.surface`}
              label="pim_details.inside.surface"
              type="number"
              size="medium"
              InputProps={{
                endAdornment: <SquareMeterIcon />,
              }}
              disabled={!isEditMode}
            />
          </Grid>
          <Grid item xs={4}>
            <GenericField
              name={`${fieldPrefix}.measurement.volume`}
              label="pim_details.inside.volume"
              size="medium"
              type="number"
              InputProps={{
                endAdornment: <CubicMeterIcon />,
              }}
              disabled={!isEditMode}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <FormSubSectionHeader
          noBorder
          title={formatMessage({ id: 'pim_details.inside.service_heating' })}
          subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
        />
        <Box paddingTop={2} paddingLeft={2}>
          <CheckboxGroupField
            disabled={!isEditMode}
            sm={3}
            md={2}
            name={`${fieldPrefix}.serviceHeating`}
            options={dictionaries.heating}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <FormSubSectionHeader
          noBorder
          title={formatMessage({ id: 'pim_details.inside.pictures' })}
          subtitle={formatMessage(
            { id: 'pim_details.inside.pictures_subtitle' },
            { strong: msg => <strong>{msg}</strong> },
          )}
        />
        <UploadImageGroupField
          entity={EntityWithFiles.Space}
          entityID={id}
          max={3}
          disabled={!isEditMode}
          name={`${fieldPrefix}.images`}
          removeEntity={EntityWithMultipleFiles.Space}
        />
      </Grid>
    </>
  );
};
