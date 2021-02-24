import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Box, Grid } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { CheckboxGroupField, DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { ProfileWithTypes, PropertyTypes } from '../dictionaries';

export const General = () => {
  const { formatMessage } = useLocale();
  const { matchProfileId } = useParams<{ matchProfileId?: string }>();

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.personal_information_match_profile.general.title' })}
      isExpandable
      isInitExpanded
      isInitEditing={!matchProfileId}
    >
      {isEditing => (
        <>
          <FormSubSectionHeader
            title={formatMessage({ id: 'crm.details.personal_information_match_profile.general.type_of_property' })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <RadioGroupField
            name="propertyType"
            options={PropertyTypes.map(type => ({
              ...type,
              label: formatMessage({ id: `dictionaries.match_property_type.${type.value}` }),
            }))}
            disabled={!isEditing}
          />
          <Box mt={4} />
          <FormSubSectionHeader
            title={formatMessage({ id: 'crm.details.personal_information_match_profile.general.profile_duration' })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <DatePickerField
                name="matchDuration.from"
                label={formatMessage({ id: 'crm.details.personal_information_match_profile.general.profile_from' })}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={4}>
              <DatePickerField
                name="matchDuration.to"
                label={formatMessage({ id: 'crm.details.personal_information_match_profile.general.profile_to' })}
                disabled={!isEditing}
              />
            </Grid>
          </Grid>
          <Box mt={4} />
          <FormSubSectionHeader
            title={formatMessage({ id: 'crm.details.personal_information_match_profile.general.match_profile_with' })}
            noBorder
          />
          <CheckboxGroupField
            name="matchWith"
            options={ProfileWithTypes.map(type => ({
              ...type,
              label: formatMessage({ id: `dictionaries.match_profile_with.${type.value}` }),
            }))}
            disabled={!isEditing}
          />
          <Box mt={4} />
          <GenericField
            name="description"
            label={formatMessage({ id: 'common.extra_information' })}
            disabled={!isEditing}
          />
        </>
      )}
    </FormSection>
  );
};
