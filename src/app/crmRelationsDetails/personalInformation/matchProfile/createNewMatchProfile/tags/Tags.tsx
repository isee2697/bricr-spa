import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';
import { CheckboxGroupField } from 'form/fields';
import { TagTypes } from '../dictionaries';

export const Tags = () => {
  const { formatMessage } = useLocale();
  const { matchProfileId } = useParams<{ matchProfileId?: string }>();

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.personal_information_match_profile.tags.title' })}
      isExpandable
      isInitExpanded
      isInitEditing={!matchProfileId}
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
  );
};
