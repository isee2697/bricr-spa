import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { Box, Grid } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { SquareMeterIcon } from 'ui/atoms/icons';
import { SubSectionProps } from '../CreateNewMatchProfile.types';

export const Measurements = ({ onSave }: SubSectionProps) => {
  const { formatMessage } = useLocale();

  return (
    <AutosaveForm mutators={{ ...arrayMutators }} onSave={onSave}>
      <FormSection
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.measurements.title' })}
        isExpandable
        isInitExpanded
        isInitEditing
      >
        {isEditing => (
          <>
            <FormSubSectionHeader
              title={formatMessage({ id: 'crm.details.personal_information_match_profile.measurements.surface' })}
              noBorder
            />
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <GenericField
                  name="measurements.surfaceFromMin"
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.measurements.minimal_surface_from',
                  })}
                  InputProps={{ endAdornment: <SquareMeterIcon /> }}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={4}>
                <GenericField
                  name="measurements.surfaceToMin"
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.measurements.minimal_surface_to',
                  })}
                  InputProps={{ endAdornment: <SquareMeterIcon /> }}
                  disabled={!isEditing}
                />
              </Grid>
            </Grid>
            <Box mt={2} />
            <FormSubSectionHeader
              title={formatMessage({ id: 'crm.details.personal_information_match_profile.measurements.living_area' })}
              noBorder
            />
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <GenericField
                  name="measurements.livingAreaFromMin"
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.measurements.minimal_living_area_from',
                  })}
                  InputProps={{ endAdornment: <SquareMeterIcon /> }}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={4}>
                <GenericField
                  name="measurements.livingAreaToMin"
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.measurements.minimal_living_area_to',
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
