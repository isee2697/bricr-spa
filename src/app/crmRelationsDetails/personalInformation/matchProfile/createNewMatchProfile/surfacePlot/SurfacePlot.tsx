import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { Grid } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { SquareMeterIcon } from 'ui/atoms/icons';
import { SubSectionProps } from '../CreateNewMatchProfile.types';

export const SurfacePlot = ({ onSave }: SubSectionProps) => {
  const { formatMessage } = useLocale();

  return (
    <AutosaveForm mutators={{ ...arrayMutators }} onSave={onSave}>
      <FormSection
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.surface_plot.title' })}
        isExpandable
        isInitExpanded
        isInitEditing
      >
        {isEditing => (
          <>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <GenericField
                  name="measurements.plotSurfaceFromMin"
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.surface_plot.minimal_surface_from',
                  })}
                  InputProps={{ endAdornment: <SquareMeterIcon /> }}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={4}>
                <GenericField
                  name="measurements.plotSurfaceToMin"
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.surface_plot.minimal_surface_to',
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
