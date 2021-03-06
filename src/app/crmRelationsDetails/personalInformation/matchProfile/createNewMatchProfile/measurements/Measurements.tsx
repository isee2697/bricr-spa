import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { Box, Grid } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { SquareMeterIcon } from 'ui/atoms/icons';
import { numberValidator } from 'form/validators/numberValidator/numberValidator';

export const Measurements = () => {
  const { formatMessage } = useLocale();
  const { matchProfileId } = useParams<{ matchProfileId?: string }>();

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.personal_information_match_profile.measurements.title' })}
      isExpandable
      isInitExpanded
      isInitEditing={!matchProfileId}
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
                validate={[numberValidator]}
                name="measurements.surfaceFromMin"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.measurements.minimal_surface_from',
                })}
                InputProps={{ endAdornment: <SquareMeterIcon /> }}
                disabled={!isEditing}
                type="number"
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                validate={[numberValidator]}
                name="measurements.surfaceToMin"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.measurements.minimal_surface_to',
                })}
                InputProps={{ endAdornment: <SquareMeterIcon /> }}
                disabled={!isEditing}
                type="number"
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
                validate={[numberValidator]}
                name="measurements.livingAreaFromMin"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.measurements.minimal_living_area_from',
                })}
                InputProps={{ endAdornment: <SquareMeterIcon /> }}
                disabled={!isEditing}
                type="number"
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                validate={[numberValidator]}
                name="measurements.livingAreaToMin"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.measurements.minimal_living_area_to',
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
