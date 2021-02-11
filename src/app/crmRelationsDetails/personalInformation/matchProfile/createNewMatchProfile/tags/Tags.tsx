import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { SubSectionProps } from '../CreateNewMatchProfile.types';
import { CheckboxGroupField } from 'form/fields';
import { TagTypes } from '../dictionaries';

export const Tags = ({ onSave }: SubSectionProps) => {
  const { formatMessage } = useLocale();

  return (
    <AutosaveForm mutators={{ ...arrayMutators }} onSave={onSave}>
      <FormSection
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.tags.title' })}
        isExpandable
      >
        {isEditing => (
          <CheckboxGroupField
            name="tags"
            options={TagTypes.map(type => ({
              ...type,
              label: formatMessage({ id: `dictionaries.match_tag.${type.value}` }),
            }))}
            xs={2}
            disabled={!isEditing}
          />
        )}
      </FormSection>
    </AutosaveForm>
  );
};
