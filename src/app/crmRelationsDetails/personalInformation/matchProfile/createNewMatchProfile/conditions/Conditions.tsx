import React from 'react';
import { useParams } from 'react-router-dom';

import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { CheckboxGroupField } from 'form/fields';
import { CommercialConditionTypes } from '../dictionaries';

export const Conditions = () => {
  const { formatMessage } = useLocale();
  const { matchProfileId } = useParams<{ matchProfileId?: string }>();

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.personal_information_match_profile.conditions.title' })}
      isExpandable
      isInitExpanded
      isInitEditing={!matchProfileId}
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
  );
};
