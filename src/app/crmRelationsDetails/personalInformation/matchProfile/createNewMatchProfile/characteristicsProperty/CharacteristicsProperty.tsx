import React from 'react';
import { useParams } from 'react-router-dom';

import { FormSubSectionHeader } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { Box, Grid } from 'ui/atoms';
import { DatePickerField, DropdownField, GenericField, QuantityField } from 'form/fields';
import { CharacteristicsMaintenanceQualityTypes } from '../dictionaries';

export const CharacteristicsProperty = () => {
  const { formatMessage } = useLocale();
  const { matchProfileId } = useParams<{ matchProfileId?: string }>();

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.personal_information_match_profile.characteristics_property.title' })}
      isExpandable
      isInitExpanded
      isInitEditing={!matchProfileId}
    >
      {isEditing => (
        <>
          <FormSubSectionHeader
            title={formatMessage({
              id: 'crm.details.personal_information_match_profile.characteristics_property.rooms',
            })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <QuantityField
                name="characteristics.property.minAmountRooms"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.characteristics_property.minimal_amount_rooms',
                })}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={4}>
              <QuantityField
                name="characteristics.property.minAmountBedrooms"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.characteristics_property.minimal_amount_bedrooms',
                })}
                disabled={!isEditing}
              />
            </Grid>
          </Grid>
          <Box mt={3} />
          <FormSubSectionHeader
            title={formatMessage({
              id: 'crm.details.personal_information_match_profile.characteristics_property.floors',
            })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <QuantityField
                name="characteristics.property.minAmountFloors"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.characteristics_property.minimal_amount_floors',
                })}
                disabled={!isEditing}
              />
            </Grid>
          </Grid>
          <Box mt={3} />
          <FormSubSectionHeader
            title={formatMessage({
              id: 'crm.details.personal_information_match_profile.characteristics_property.residential_layer',
            })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="characteristics.property.residentialLayerFrom"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.characteristics_property.residential_layer_from',
                })}
                disabled={!isEditing}
                type="number"
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                name="characteristics.property.residentialLayerTo"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.characteristics_property.residential_layer_to',
                })}
                disabled={!isEditing}
                type="number"
              />
            </Grid>
          </Grid>
          <Box mt={3} />
          <FormSubSectionHeader
            title={formatMessage({
              id: 'crm.details.personal_information_match_profile.characteristics_property.construction_year',
            })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <DatePickerField
                name="characteristics.property.constructionYearFrom"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.characteristics_property.construction_from',
                })}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={4}>
              <DatePickerField
                name="characteristics.property.constructionYearTo"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.characteristics_property.construction_to',
                })}
                disabled={!isEditing}
              />
            </Grid>
          </Grid>
          <Box mt={3} />
          <FormSubSectionHeader
            title={formatMessage({
              id: 'crm.details.personal_information_match_profile.characteristics_property.maintenance',
            })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <DropdownField
                name="characteristics.property.maintenanceQuality"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.characteristics_property.quality',
                })}
                items={CharacteristicsMaintenanceQualityTypes.map(type => ({
                  ...type,
                  label: formatMessage({ id: `dictionaries.quality.${type.value}` }),
                }))}
                placeholder="crm.details.personal_information_match_profile.characteristics_property.quality.placeholder"
                disabled={!isEditing}
              />
            </Grid>
          </Grid>
        </>
      )}
    </FormSection>
  );
};
