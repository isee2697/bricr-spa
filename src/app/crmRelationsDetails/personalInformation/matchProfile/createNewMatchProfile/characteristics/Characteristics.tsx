import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Box, Grid, Typography } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { SubSectionProps } from '../CreateNewMatchProfile.types';
import { DatePickerField, DropdownField, GenericField } from 'form/fields';
import { MeterIcon } from 'ui/atoms/icons';
import { CharacteristicsMaintenanceQualityTypes, EnergyTypes } from '../dictionaries';

export const Characteristics = ({ onSave }: SubSectionProps) => {
  const { formatMessage } = useLocale();

  return (
    <AutosaveForm mutators={{ ...arrayMutators }} onSave={onSave}>
      <FormSection
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.characteristics.title' })}
        isExpandable
      >
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <GenericField
              name="commercialCharacteristics.property.minFreeHeight"
              label={formatMessage({
                id: 'crm.details.personal_information_match_profile.characteristics.minimal_free_height',
              })}
              InputProps={{ endAdornment: <MeterIcon /> }}
            />
          </Grid>
          <Grid item xs={4}>
            <GenericField
              name="commercialCharacteristics.property.minFreeSpan"
              label={formatMessage({
                id: 'crm.details.personal_information_match_profile.characteristics.minimal_free_span',
              })}
              InputProps={{ endAdornment: <MeterIcon /> }}
            />
          </Grid>
          <Grid item xs={4}>
            <GenericField
              name="commercialCharacteristics.property.minFloorLoad"
              label={formatMessage({
                id: 'crm.details.personal_information_match_profile.characteristics.minimal_floor_load',
              })}
              InputProps={{
                endAdornment: (
                  <Typography variant="h4" color="textSecondary">
                    [kg/m2]
                  </Typography>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <GenericField
              name="commercialCharacteristics.property.minAmountOfFloors"
              label={formatMessage({
                id: 'crm.details.personal_information_match_profile.characteristics.minimal_amount_of_floors',
              })}
            />
          </Grid>
          <Grid item xs={4}>
            <GenericField
              name="commercialCharacteristics.property.minParkingLots"
              label={formatMessage({
                id: 'crm.details.personal_information_match_profile.characteristics.minimal_parking_lots',
              })}
            />
          </Grid>
          <Grid item xs={4}>
            <DropdownField
              name="commercialCharacteristics.property.energyLabel"
              label={formatMessage({
                id: 'crm.details.personal_information_match_profile.characteristics.energy_label',
              })}
              items={EnergyTypes.map(key => ({
                ...key,
                label: formatMessage({ id: `dictionary.energy_label.${key.value}` }),
              }))}
              placeholder="crm.details.personal_information_match_profile.characteristics.enrgy_label.placeholder"
            />
          </Grid>
        </Grid>
        <Box mt={3} />
        <FormSubSectionHeader
          title={formatMessage({
            id: 'crm.details.personal_information_match_profile.characteristics.construction_year',
          })}
          noBorder
        />
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <DatePickerField
              name="commercialCharacteristics.property.constructionYearFrom"
              label={formatMessage({
                id: 'crm.details.personal_information_match_profile.characteristics.construction_from',
              })}
            />
          </Grid>
          <Grid item xs={4}>
            <DatePickerField
              name="commercialCharacteristics.property.constructionYearTo"
              label={formatMessage({
                id: 'crm.details.personal_information_match_profile.characteristics.construction_to',
              })}
            />
          </Grid>
        </Grid>
        <Box mt={3} />
        <FormSubSectionHeader
          title={formatMessage({
            id: 'crm.details.personal_information_match_profile.characteristics.maintenance',
          })}
          noBorder
        />
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <DropdownField
              name="commercialCharacteristics.property.maintenanceQuality"
              label={formatMessage({
                id: 'crm.details.personal_information_match_profile.characteristics.quality',
              })}
              items={CharacteristicsMaintenanceQualityTypes.map(type => ({
                ...type,
                label: formatMessage({ id: `dictionaries.quality.${type.value}` }),
              }))}
              placeholder="crm.details.personal_information_match_profile.characteristics.quality.placeholder"
            />
          </Grid>
        </Grid>
      </FormSection>
    </AutosaveForm>
  );
};
