import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Box, Grid } from 'ui/atoms';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { CheckboxGroupField, DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { ProfileWithTypes, PropertyTypes } from '../dictionaries';

import { GeneralProps } from './General.types';

export const General = ({ onSave }: GeneralProps) => {
  const { formatMessage } = useLocale();

  return (
    <AutosaveForm mutators={{ ...arrayMutators }} onSave={onSave}>
      <FormSection
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.general.title' })}
        isExpandable
      >
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
        />
        <Box mt={4} />
        <FormSubSectionHeader
          title={formatMessage({ id: 'crm.details.personal_information_match_profile.general.profile_duration' })}
          noBorder
        />
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <DatePickerField
              name="duration.from"
              label={formatMessage({ id: 'crm.details.personal_information_match_profile.general.profile_from' })}
            />
          </Grid>
          <Grid item xs={4}>
            <DatePickerField
              name="duration.to"
              label={formatMessage({ id: 'crm.details.personal_information_match_profile.general.profile_to' })}
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
        />
        <Box mt={4} />
        <GenericField name="description" label={formatMessage({ id: 'common.extra_information' })} />
      </FormSection>
    </AutosaveForm>
  );
};
