import React from 'react';
import arrayMutators from 'final-form-arrays';

import { AutosaveForm, FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { SubSectionProps } from '../CreateNewMatchProfile.types';
import { CheckboxGroupField } from 'form/fields';
import { CommercialConditionTypes } from '../dictionaries';

export const Conditions = ({ onSave }: SubSectionProps) => {
  const { formatMessage } = useLocale();

  return (
    <AutosaveForm mutators={{ ...arrayMutators }} onSave={onSave}>
      <FormSection
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.conditions.title' })}
        isExpandable
        isInitExpanded
        isInitEditing
      >
        {isEditing => (
          <CheckboxGroupField
            name="conditions"
            options={CommercialConditionTypes.map(type => ({
              ...type,
              label: formatMessage({ id: `dictionaries.match_condition.${type.value}` }),
            }))}
            disabled={!isEditing}
          />
        )}
      </FormSection>
    </AutosaveForm>
  );
};
