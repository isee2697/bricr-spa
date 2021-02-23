import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Box, Grid } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { CheckboxGroupField, GenericField } from 'form/fields';
import { SquareMeterIcon } from 'ui/atoms/icons';
import { GardenSituationTypes } from '../dictionaries';

export const Garden = () => {
  const { formatMessage } = useLocale();
  const { matchProfileId } = useParams<{ matchProfileId?: string }>();

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.personal_information_match_profile.garden.title' })}
      isExpandable
      isInitExpanded
      isInitEditing={!matchProfileId}
    >
      {isEditing => (
        <>
          <FormSubSectionHeader
            title={formatMessage({
              id: 'crm.details.personal_information_match_profile.garden.garden_situation',
            })}
            subtitle={formatMessage({ id: 'common.choose_one_option_or_more_below' })}
            noBorder
          />
          <CheckboxGroupField
            name="garden.situation"
            options={GardenSituationTypes.map(type => ({
              ...type,
              label: formatMessage({ id: `dictionaries.garden_situation.${type.value}` }),
            }))}
            xs={2}
            disabled={!isEditing}
          />
          <Box mt={2} />
          <FormSubSectionHeader
            title={formatMessage({
              id: 'crm.details.personal_information_match_profile.garden.outdoor_spaces',
            })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="garden.outdoorSpacesMin"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.garden.minimal_amount_of_outdoor_spaces',
                })}
                disabled={!isEditing}
                type="number"
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                name="garden.volumeMin"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.garden.minimal_volume',
                })}
                InputProps={{ endAdornment: <SquareMeterIcon /> }}
                disabled={!isEditing}
                type="number"
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                name="garden.volumeMax"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.garden.maximal_volume',
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
