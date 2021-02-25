import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';
import { Grid } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { SquareMeterIcon } from 'ui/atoms/icons';

export const SurfacePlot = () => {
  const { formatMessage } = useLocale();
  const { matchProfileId } = useParams<{ matchProfileId?: string }>();

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.personal_information_match_profile.surface_plot.title' })}
      isExpandable
      isInitExpanded
      isInitEditing={!matchProfileId}
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
                type="number"
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
                type="number"
              />
            </Grid>
          </Grid>
        </>
      )}
    </FormSection>
  );
};
