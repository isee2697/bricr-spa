import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { Box, Grid } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { SquareMeterIcon } from 'ui/atoms/icons';
import { SubSectionProps } from '../CreateNewMatchProfile.types';

export const SurfaceProperty = ({ onSave }: SubSectionProps) => {
  const { formatMessage } = useLocale();

  return (
    <AutosaveForm mutators={{ ...arrayMutators }} onSave={onSave}>
      <FormSection
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.surface_property.title' })}
        isExpandable
        isInitExpanded
        isInitEditing
      >
        {isEditing => (
          <>
            <FormSubSectionHeader
              title={formatMessage({
                id: 'crm.details.personal_information_match_profile.surface_property.business_space',
              })}
              noBorder
            />
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <GenericField
                  name="measurements.businessSpaceSurfaceFromMin"
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.surface_property.minimal_surface_from',
                  })}
                  InputProps={{ endAdornment: <SquareMeterIcon /> }}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={4}>
                <GenericField
                  name="measurements.businessSpaceSurfaceToMin"
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.surface_property.minimal_surface_to',
                  })}
                  InputProps={{ endAdornment: <SquareMeterIcon /> }}
                  disabled={!isEditing}
                />
              </Grid>
            </Grid>
            <Box mt={2} />
            <FormSubSectionHeader
              title={formatMessage({
                id: 'crm.details.personal_information_match_profile.surface_property.practice_room',
              })}
              noBorder
            />
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <GenericField
                  name="measurements.practiceRoomSurfaceToMax"
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.surface_property.minimal_surface_from',
                  })}
                  InputProps={{ endAdornment: <SquareMeterIcon /> }}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={4}>
                <GenericField
                  name="measurements.practiceRoomSurfaceToMin"
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.surface_property.minimal_surface_to',
                  })}
                  InputProps={{ endAdornment: <SquareMeterIcon /> }}
                  disabled={!isEditing}
                />
              </Grid>
            </Grid>
          </>
        )}
      </FormSection>
    </AutosaveForm>
  );
};
