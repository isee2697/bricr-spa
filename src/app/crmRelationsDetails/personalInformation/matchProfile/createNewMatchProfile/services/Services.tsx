import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { FormSubSectionHeader } from 'ui/molecules';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { SubSectionProps } from '../CreateNewMatchProfile.types';
import { CheckboxGroupField } from 'form/fields';
import { ServiceTypes } from '../dictionaries';

export const Services = ({ onSave }: SubSectionProps) => {
  const { formatMessage } = useLocale();

  return (
    <AutosaveForm mutators={{ ...arrayMutators }} onSave={onSave}>
      <FormSection
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.garden.title' })}
        isExpandable
      >
        <FormSubSectionHeader
          title={formatMessage({
            id: 'crm.details.personal_information_match_profile.garden.garden_situation',
          })}
          subtitle={formatMessage({ id: 'common.choose_one_option_or_more_below' })}
          noBorder
        />
        <CheckboxGroupField
          name="garden.situation"
          options={ServiceTypes.map(type => ({
            ...type,
            label: formatMessage({ id: `dictionaries.match_service.${type.value}` }),
          }))}
          xs={2}
        />
      </FormSection>
    </AutosaveForm>
  );
};
